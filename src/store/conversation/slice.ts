import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ConversationState } from "@types";
import { conversationReducer } from "./reducers";

const {
  addQuery,
  setConversation,
  updateStreamingQuery,
  updateConversationId,
  updateStreamingSource,
  updateQuery,
  setStatus,
  raiseError
} = conversationReducer;

const initialState: ConversationState = {
  queries: [],
  status: 'idle',
  conversationId: null,
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addQuery,
    setConversation,
    updateStreamingQuery,
    updateConversationId,
    updateStreamingSource,
    updateQuery,
    setStatus,
    raiseError,
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

export const selectQueries = (state: RootState) => state.conversation.queries;

export const selectStatus = (state: RootState) => state.conversation.status;

const { reducer, actions } = conversationSlice;

/*export const {
  addQuery,
  updateQuery,
  updateStreamingQuery,
  updateConversationId,
  updateStreamingSource,
  setConversation,
} = conversationSlice.actions;*/

export { actions as conversationActions };
export { reducer as conversationReducer };