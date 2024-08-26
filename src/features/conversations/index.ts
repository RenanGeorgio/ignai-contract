import { getConversations, handleFetchAnswer, handleFetchAnswerSteaming, handleSearch } from "@controllers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { conversationSlice } from "@store/conversation/slice";
import { updateConversationId, updateQuery, updateStreamingQuery, updateStreamingSource } from "@store/conversation/actions";
import { setConversations } from "@store/preference/actions";
import type { RootState } from "@store/store";
import { Answer } from "@types";

const API_STREAMING = import.meta.env.VITE_API_STREAMING === 'true';

export const fetchAnswer = createAsyncThunk<Answer, { question: string }>(
  'fetchAnswer',
  async ({ question }, { dispatch, getState, signal }) => {
    const state = getState() as RootState;

    if (state.preference) {
      if (API_STREAMING) {
        await handleFetchAnswerSteaming(
          question,
          signal,
          state.preference.selectedDocs!,
          state.conversation.queries,
          state.conversation.conversationId,
          state.preference.prompt.id,
          state.preference.chunks,
          state.preference.token_limit,
          (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'end') { // verifique se o evento 'end' foi recebido
              dispatch(conversationSlice.actions.setStatus('idle')); // definir o status como 'idle'
              getConversations()
                .then((fetchedConversations: any) => {
                  dispatch(setConversations(fetchedConversations));
                })
                .catch((error) => {
                  console.error('Failed to fetch conversations: ', error);
                });

              handleSearch( // procure pelas fontes após o streaming
                question,
                state.preference.selectedDocs!,
                state.conversation.conversationId,
                state.conversation.queries,
                state.preference.chunks,
                state.preference.token_limit,
              ).then((sources) => { // enviar fontes de streaming
                dispatch(
                  updateStreamingSource({
                    index: state.conversation.queries.length - 1,
                    query: { sources: sources ?? [] },
                  }),
                );
              });
            } else if (data.type === 'id') {
              dispatch(
                updateConversationId({
                  query: { conversationId: data.id },
                }),
              );
            } else if (data.type === 'error') { // definir status como 'failed'
              dispatch(conversationSlice.actions.setStatus('failed'));
              dispatch(
                conversationSlice.actions.raiseError({
                  index: state.conversation.queries.length - 1,
                  message: data.error,
                }),
              );
            } else {
              const result = data.answer;
              dispatch(
                updateStreamingQuery({
                  index: state.conversation.queries.length - 1,
                  query: { response: result },
                }),
              );
            }
          },
        );
      } else {
        const answer = await handleFetchAnswer(
          question,
          signal,
          state.preference.selectedDocs!,
          state.conversation.queries,
          state.conversation.conversationId,
          state.preference.prompt.id,
          state.preference.chunks,
          state.preference.token_limit,
        );

        if (answer) {
          let sourcesPrepped = [];
          sourcesPrepped = answer.sources.map((source: { title: string }) => {
            if (source && source.title) {
              const titleParts = source.title.split('/');
              return {
                ...source,
                title: titleParts[titleParts.length - 1],
              };
            }
            return source;
          });

          dispatch(
            updateQuery({
              index: state.conversation.queries.length - 1,
              query: { response: answer.answer, sources: sourcesPrepped },
            }),
          );
          dispatch(
            updateConversationId({
              query: { conversationId: answer.conversationId },
            }),
          );
          dispatch(conversationSlice.actions.setStatus('idle'));
          getConversations()
            .then((fetchedConversations: any) => {
              dispatch(setConversations(fetchedConversations));
            })
            .catch((error) => {
              console.error('Failed to fetch conversations: ', error);
            });
        }
      }
    }

    return {
      conversationId: null,
      title: null,
      answer: '',
      query: question,
      result: '',
      sources: [],
    };
  },
); 