import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Box, Input, VStack, HStack, Text } from "@chakra-ui/react";
import { ChatGPTMessage, ChatLine, LoadingChatLine } from "@components/chat/ChatLine";
import { initialMessages, InputMessage } from "../chat";

const emojis = {
  share: '🔗',
  edit: '✏️',
  download: '⬇️',
  reload: '🔄',
  trash: '🗑️',
};

interface Message {
  content: string;
  sender: 'user' | 'other';
}

const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatGPTMessage[] | any>(initialMessages);
  const [input, setInput] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [cookie, setCookie] = useCookies([COOKIE_NAME])

  const sendMessage = async (message: string) => { // envia mensagem para API /api/chat endpoint
    setLoading(true);
    const newMessages: any = [
      ...messages,
      { role: 'user', content: message } as ChatGPTMessage,
    ]
    setMessages(newMessages)
  
    const last10messages = newMessages.slice(-10); // memoria para 10 mensagens
    console.log("PARTE 5");
    console.log(last10messages);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: last10messages,
        user: cookie[COOKIE_NAME],
      }),
    })
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

    let lastMessage = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)

      lastMessage = lastMessage + chunkValue

      setMessages([
        ...newMessages,
        { role: 'assistant', content: lastMessage } as ChatGPTMessage,
      ])

      setLoading(false)
    }
  }

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      const randomId = Math.random().toString(36).substring(7)
      setCookie(COOKIE_NAME, randomId)
    }
  }, [cookie, setCookie]);

  return (
    <Box display="flex" flexDirection="column" height="100%">
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
        <div style={{overflowY:'scroll',height:'240px'}}>
          {messages?.map(({ content, role }: any, index: any) => (
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
                <ChatLine key={index} role={role} content={content} />
              </Box>
            </HStack>
          ))}
          {loading && <LoadingChatLine />}
        </div>
      </VStack>
      <Box as="footer" p={4} borderTop="1px solid" borderLeft="1px solid" borderColor="gray.300">
        <HStack>
          <div style={{ marginTop:'5px', paddingBottom:'25px' }} >
            <InputMessage
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
            />
          </div>
        </HStack>
      </Box>
    </Box>
  );
}

export default ChatComponent;