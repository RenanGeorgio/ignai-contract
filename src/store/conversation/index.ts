import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";
import { setConversations } from "../preference";
import { handleFetchAnswer, handleFetchAnswerSteaming, handleSearch, getConversations } from "@controllers";
import { Answer, ConversationState, ChatGPTMessage, Query, Status } from "@types";

const initialState: ConversationState = {
  queries: [],
  status: 'idle',
  conversationId: null,
};

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

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addQuery(state: any, action: PayloadAction<ChatGPTMessage>) {
      state.queries.push(action.payload);
    },
    setConversation(state: any, action: PayloadAction<ChatGPTMessage[]>) {
      state.queries = action.payload;
    },
    updateStreamingQuery(
      state: any,
      action: PayloadAction<{ index: number; query: Partial<Query> }>,
    ) {
      const { index, query } = action.payload;
      
      if (query.response != undefined) {
        state.queries[index].content.response = (state.queries[index].content.response || '') + query.response;
      } else {
        state.queries[index].content = {
          ...state.queries[index].content,
          ...query,
        };
      }
    },
    updateConversationId(
      state: any,
      action: PayloadAction<{ query: Partial<Query> }>,
    ) {
      state.conversationId = action.payload.query.conversationId ?? null;
    },
    updateStreamingSource(
      state: any,
      action: PayloadAction<{ index: number; query: Partial<Query> }>,
    ) {
      const { index, query } = action.payload;

      if (!state.queries[index].content.sources) {
        state.queries[index].content.sources = query?.sources;
      } else {
        state.queries[index].content.sources!.push(query.sources![0]);
      }
    },
    updateQuery(
      state: any,
      action: PayloadAction<{ index: number; query: Partial<Query> }>,
    ) {
      const { index, query } = action.payload;

      state.queries[index].content = {
        ...state.queries[index].content,
        ...query,
      };
    },
    setStatus(state: any, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    raiseError(
      state: any,
      action: PayloadAction<{ index: number; message: string }>,
    ) {
      const { index, message } = action.payload;
      state.queries[index].content.error = message;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnswer.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(fetchAnswer.rejected, (state: any, action: any) => {
        if (action.meta.aborted) {
          state.status = 'idle';
          return state;
        }
        state.status = 'failed';
        state.queries[state.queries.length - 1].content.error = 'Something went wrong. Please check your internet connection.';
      });
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectQueries = (state: RootState) => state.conversation.queries;

export const selectStatus = (state: RootState) => state.conversation.status;

export const {
  addQuery,
  updateQuery,
  updateStreamingQuery,
  updateConversationId,
  updateStreamingSource,
  setConversation,
} = conversationSlice.actions;

export default conversationSlice.reducer;