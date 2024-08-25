import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Query, Status, SharedConversationsType, ChatGPTMessage } from "@types";
import { fetchSharedAnswer } from "features/sharedConversation";

const initialState: SharedConversationsType = {
  queries: [],
  identifier: '',
  status: 'idle',
};

export const sharedConversationSlice = createSlice({
  name: 'sharedConversation',
  initialState,
  reducers: {
    setStatus(state: any, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setIdentifier(state: any, action: PayloadAction<string>) {
      state.identifier = action.payload;
    },
    setFetchedData(
      state: any,
      action: PayloadAction<{
        queries: ChatGPTMessage[];
        title: string;
        date: string;
        identifier: string;
      }>,
    ) {
      const { queries, title, identifier, date } = action.payload;

      const previousQueriesStr = localStorage.getItem(identifier);
      const localySavedQueries: ChatGPTMessage[] = previousQueriesStr ? JSON.parse(previousQueriesStr) : [];

      state.queries = [...queries, ...localySavedQueries];
      state.title = title;
      state.date = date;
      state.identifier = identifier;
    },
    setClientApiKey(state: any, action: PayloadAction<string>) {
      state.apiKey = action.payload;
    },
    addQuery(state: any, action: PayloadAction<ChatGPTMessage>) {
      state.queries.push(action.payload);
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
    raiseError(
      state: any,
      action: PayloadAction<{ index: number; message: string }>,
    ) {
      const { index, message } = action.payload;
      state.queries[index].content.error = message;
    },
    saveToLocalStorage(state: any) {
      const previousQueriesStr = localStorage.getItem(state.identifier);
      previousQueriesStr
        ? localStorage.setItem(
            state.identifier,
            JSON.stringify([
              ...JSON.parse(previousQueriesStr),
              state.queries[state.queries.length - 1],
            ]),
          )
        : localStorage.setItem(
            state.identifier,
            JSON.stringify([state.queries[state.queries.length - 1]]),
          );
    },
  },
  extraReducers(builder: any) {
    builder
      .addCase(fetchSharedAnswer.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(fetchSharedAnswer.rejected, (state: any, action: any) => {
        if (action.meta.aborted) {
          state.status = 'idle';
          return state;
        }

        state.status = 'failed';
        state.queries[state.queries.length - 1].error = 'Something went wrong. Please check your internet connection.';
      });
  },
});

export const selectStatus = (state: RootState) => state.conversation.status;
export const selectClientAPIKey = (state: RootState) => state.sharedConversation.apiKey;
export const selectQueries = (state: RootState) => state.sharedConversation.queries;
export const selectTitle = (state: RootState) => state.sharedConversation.title;
export const selectDate = (state: RootState) => state.sharedConversation.date;

const { reducer, actions } = sharedConversationSlice;

export { actions as sharedConversationActions };
export { reducer as sharedConversationReducer };