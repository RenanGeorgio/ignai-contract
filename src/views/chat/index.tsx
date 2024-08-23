import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";

import { handleSendFeedback } from "@controllers";
import { AppDispatch } from "@store/store";
import { addQuery, fetchAnswer, selectQueries, selectStatus, updateQuery } from "@store/conversation";
import { useDarkTheme } from "@hooks";
import { LoadingChatLine } from "@components/chat/ChatLine";
import { COOKIE_NAME, emojis, initialMessages } from "@components/chat/Constants";
import { InputMessage } from "@components/chat/Input";
import { streamPath } from "@config";
import ConversationBubble from "@components/conversation/ConversationBubble";
import { RetryIcon } from "@components/Icons";
import ArrowDown from "@assets/images/arrow-down.svg";
import { ChatGPTAgent, ChatGPTMessage, FEEDBACK, Query } from "@types";

const ChatView: React.FC = () => {
  const queries: ChatGPTMessage[] = useSelector(selectQueries);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch<AppDispatch>();

  const endMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fetchStream = useRef<any>(null);

  const [cookie, setCookie] = useCookies([COOKIE_NAME]);
  const [isDarkTheme] = useDarkTheme();
  
  const [hasScrolledToLast, setHasScrolledToLast] = useState(true);
  const [eventInterrupt, setEventInterrupt] = useState(false);
  const [lastQueryReturnedErr, setLastQueryReturnedErr] = useState(false);
  const [messages, setMessages] = useState<ChatGPTMessage[] | any>(initialMessages); // TODO 
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserInterruption = () => {
    if (!eventInterrupt && status === 'loading') {
      setEventInterrupt(true);
    }
  };

  useEffect(() => {
    !eventInterrupt && scrollIntoView();
  }, [queries.length, queries[queries.length - 1]]);

  useEffect(() => {
    const element = document.getElementById('inputbox') as HTMLTextAreaElement;
    if (element) {
      element.focus();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (status !== 'idle') {
        fetchStream.current && fetchStream.current.abort(); // abortar stream anterior
      }
    };
  }, [status]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setHasScrolledToLast(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [1, 0.8],
    });
    
    if (endMessageRef.current) {
      observer.observe(endMessageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [endMessageRef.current]);

  useEffect(() => {
    if (queries.length) {
      queries[queries.length - 1].content.error && setLastQueryReturnedErr(true);

      // considerar uma consulta que inicialmente retornou um erro pode incluir posteriormente uma propriedade de resposta na nova tentativa
      queries[queries.length - 1].content.response && setLastQueryReturnedErr(false);
    }
  }, [queries[queries.length - 1]]);

  const scrollIntoView = () => {
    endMessageRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleQuestion = ({ question, isRetry = false }: {
    question: string;
    isRetry?: boolean;
  }) => {
    question = question.trim();

    if (question === '') {
      return;
    }

    setLoading(true);
    setEventInterrupt(false);

    !isRetry && dispatch(
      addQuery(
        { 
          content: { prompt: question },
          role: 'user'
        }
      )); // Dispatch apenas novas queries

    fetchStream.current = dispatch(fetchAnswer({ question }));
    setLoading(false);
  };

  const handleFeedback = (query: Query, feedback: FEEDBACK, index: number) => {
    const prevFeedback = query.feedback;
    dispatch(updateQuery({ index, query: { feedback } }));
    handleSendFeedback(query.prompt, query.response!, feedback).catch(() =>
      dispatch(updateQuery({ index, query: { feedback: prevFeedback } })),
    );
  };

  const handleQuestionSubmission = () => {
    if (inputRef.current?.value && status !== 'loading') {
      if (lastQueryReturnedErr) { // atualizar a última consulta com falha com novo prompt
        dispatch(
          updateQuery({
            index: queries.length - 1,
            query: {
              prompt: inputRef.current.value,
            },
          }),
        );
        handleQuestion({
          question: queries[queries.length - 1].content.prompt,
          isRetry: true,
        });
      } else {
        handleQuestion({ question: inputRef.current.value });
      }

      inputRef.current.value = '';
      handleInput();
    }
  }

  const sendMessage = async (message: Query) => { // envia mensagem para API /api/chat endpoint
    setLoading(true);
    const newMessages: any = [
      ...queries,
      { role: 'user', content: message } as ChatGPTMessage,
    ]

    setMessages(newMessages);
  
    const last10messages = newMessages.slice(-10); // memoria para 10 mensagens
    console.log("PARTE 5");
    console.log(last10messages);

    const response = await fetch(`${streamPath}/api/chat`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: last10messages,
        user: cookie[COOKIE_NAME],
      }),
    });
    
    console.log(response);
    console.log('Edge function returned.');

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage: any;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: 'assistant', content: lastMessage } as ChatGPTMessage,
      ]);

      setLoading(false);
    }
  }

  const prepResponseView = (query: Query, role: ChatGPTAgent, index: number) => {
    let responseView: any;

    if (query?.response) {
      responseView = (
        <ConversationBubble
          ref={endMessageRef}
          className={`${index === queries.length - 1 ? 'mb-32' : 'mb-7'}`}
          key={`${index}ANSWER`}
          currentIndex={index}
          message={query.response}
          type={'ANSWER'}
          role={role}
          sources={query.sources}
          feedback={query.feedback}
          handleFeedback={(feedback: FEEDBACK) =>
            handleFeedback(query, feedback, index)
          }
        ></ConversationBubble>
      );
    } else if (query.error) {
      const retryBtn = (
        <button
          className="flex items-center justify-center gap-3 self-center rounded-full border border-silver py-3 px-5  text-lg text-gray-500 transition-colors delay-100 hover:border-gray-500 disabled:cursor-not-allowed dark:text-bright-gray"
          disabled={status === 'loading'}
          onClick={() => {
            handleQuestion({
              question: queries[queries.length - 1].content.prompt,
              isRetry: true,
            });
          }}
        >
          <RetryIcon
            fill={isDarkTheme ? 'rgb(236 236 241)' : 'rgb(107 114 120)'}
            stroke={isDarkTheme ? 'rgb(236 236 241)' : 'rgb(107 114 120)'}
          />
          Retry
        </button>
      );
      responseView = (
        <ConversationBubble
          ref={endMessageRef}
          className={`${index === queries.length - 1 ? 'mb-32' : 'mb-7'} `}
          key={`${index}ERROR`}
          currentIndex={index}
          message={query.error}
          type="ERROR"
          role={role}
          retryBtn={retryBtn}
        ></ConversationBubble>
      );
    }

    return responseView;
  }

  const handleInput = () => {
    if (inputRef.current) {
      if (window.innerWidth < 350) {
        inputRef.current.style.height = 'auto';
      } else {
        inputRef.current.style.height = '64px';
      }

      inputRef.current.style.height = `${Math.min(
        inputRef.current.scrollHeight,
        96,
      )}px`;
    }
  }

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      const randomId = Math.random().toString(36).substring(7);
      setCookie(COOKIE_NAME, randomId);
    }
  }, [cookie, setCookie]);

  useEffect(() => {
    handleInput();
    window.addEventListener('resize', handleInput);
    return () => {
      window.removeEventListener('resize', handleInput);
    };
  }, []);

  return (
    <div className="flex h-[90vh] flex-col gap-7 pb-2 sm:h-[85vh]">
      <Box 
        as="header" 
        p={4} 
        borderBottom="1px solid gray" 
        borderLeft="1px solid gray"
        borderColor="gray.300"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg" fontWeight="bold">Chat</Text>
        <HStack spacing={4}>
          <Box fontSize="md" mr={-2}>{emojis.share}</Box>
          <Box fontSize="md" mr={-2}>{emojis.edit}</Box>
          <Box fontSize="md" mr={-2}>{emojis.download}</Box>
          <Box fontSize="md" mr={-2}>{emojis.reload}</Box>
          <Box fontSize="md">{emojis.trash}</Box>
        </HStack>
      </Box>
      <VStack 
        flex="1" 
        overflowY="auto" 
        spacing={4} 
        p={4} 
        bg="gray.50" 
        borderLeft="1px solid gray"
        borderColor="gray.300"
        >
          <div
            onWheel={handleUserInterruption}
            onTouchMove={handleUserInterruption}
            className="flex h-[90%] w-full flex-1 justify-center overflow-y-auto p-4 md:h-[83vh]"
          >
            {queries.length > 0 && !hasScrolledToLast && (
              <button
                onClick={scrollIntoView}
                aria-label="scroll to bottom"
                className="fixed bottom-40 right-14 z-10 flex h-7 w-7  items-center justify-center rounded-full border-[0.5px] border-gray-alpha bg-gray-100 bg-opacity-50 dark:bg-purple-taupe md:h-9 md:w-9 md:bg-opacity-100 "
              >
                <img
                  src={ArrowDown}
                  alt="arrow down"
                  className="h-4 w-4 opacity-50 md:h-5 md:w-5"
                />
              </button>
            )}

            <div style={{overflowY:'scroll',height:'240px'}}>
              {queries.length > 0 && (
                <div className="mt-16 w-full md:w-8/12">
                  {queries?.map(({ content, role }: ChatGPTMessage, index: any) => {
                    return (
                      <Fragment key={index}>
                        <HStack
                          key={index}
                          w="full"
                          justifyContent={role === 'user' ? 'flex-end' : 'flex-start'}
                        >
                          <Box
                            bg={role === 'user' ? 'blue.100' : 'gray.200'}
                            p={3}
                            borderRadius="md"
                            maxWidth="70%"
                          >
                            <ConversationBubble
                              className={'mb-1 last:mb-28 md:mb-7'}
                              key={`${index}QUESTION`}
                              currentIndex={index}
                              message={content?.prompt}
                              type="QUESTION"
                              role={'user'}
                              sources={content?.sources}
                            ></ConversationBubble>
                            {prepResponseView(content, role, index)}
                          </Box>
                        </HStack>
                      </Fragment>
                    );
                  })}
                </div>
              )}
              {loading && <LoadingChatLine />}
            </div>
          </div>
      </VStack>
      <Box as="footer" p={4} borderTop="1px solid" borderLeft="1px solid" borderColor="gray.300">
        <HStack>
          <div className="bottom-safe fixed flex w-11/12 flex-col items-end self-center rounded-2xl bg-opacity-0 pb-1 sm:w-1/2">
            <InputMessage
              inputRef={inputRef}
              handleInput={handleInput}
              handleQuestionSubmission={handleQuestionSubmission}
              isLoading={status}
              darkTheme={isDarkTheme}
            />
          </div>
        </HStack>
      </Box>
    </div>
  );
}

export default ChatView;