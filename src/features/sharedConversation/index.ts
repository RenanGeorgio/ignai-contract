import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetchSharedAnswer, handleFetchSharedAnswerStreaming } from "@controllers";
import { saveToLocalStorage, sharedConversationSlice, updateQuery, updateStreamingQuery } from "@store/shared/slice";
import { RootState } from "@store/store";
import { Answer } from "@types";

const API_STREAMING = import.meta.env.VITE_API_STREAMING === 'true';

export const fetchSharedAnswer = createAsyncThunk<Answer, { question: string }>(
  'shared/fetchAnswer',
  async ({ question }, { dispatch, getState, signal }) => {
    const state = getState() as RootState;

    if (state.preference && state.sharedConversation.apiKey) {
      if (API_STREAMING) {
        await handleFetchSharedAnswerStreaming(
          question,
          signal,
          state.sharedConversation.apiKey,
          state.sharedConversation.queries,
          (event) => {
            const data = JSON.parse(event.data);
        
            if (data.type === 'end') {
              dispatch(sharedConversationSlice.actions.setStatus('idle'));
              dispatch(saveToLocalStorage());
            } else if (data.type === 'error') {
              dispatch(sharedConversationSlice.actions.setStatus('failed'));
              dispatch(
                sharedConversationSlice.actions.raiseError({
                  index: state.conversation.queries.length - 1,
                  message: data.error,
                }),
              );
            } else {
              const result = data.answer;
              dispatch(
                updateStreamingQuery({
                  index: state.sharedConversation.queries.length - 1,
                  query: { response: result },
                }),
              );
            }
          },
        );
      } else {
        const answer = await handleFetchSharedAnswer(
          question,
          signal,
          state.sharedConversation.apiKey,
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
              index: state.sharedConversation.queries.length - 1,
              query: { response: answer.answer, sources: sourcesPrepped },
            }),
          );
          dispatch(sharedConversationSlice.actions.setStatus('idle'));
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