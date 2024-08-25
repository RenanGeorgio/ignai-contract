import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Doc, ActiveState, Preference } from "@types";

const initialState: Preference = {
  apiKey: 'xxx',
  prompt: { name: 'default', id: 'default', type: 'public' },
  chunks: '2',
  token_limit: 2000,
  selectedDocs: {
    name: 'default',
    language: 'default',
    location: 'default',
    version: 'default',
    description: 'default',
    fullName: 'default',
    date: 'default',
    docLink: 'default',
    model: 'openai_text-embedding-ada-002',
  } as Doc,
  sourceDocs: null,
  conversations: null,
  modalState: 'INACTIVE',
};

export const prefSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    setApiKey: (state: any, action: any) => {
      state.apiKey = action.payload;
    },
    setSelectedDocs: (state: any, action: any) => {
      state.selectedDocs = action.payload;
    },
    setSourceDocs: (state: any, action: any) => {
      state.sourceDocs = action.payload;
    },
    setConversations: (state: any, action: any) => {
      state.conversations = action.payload;
    },
    setPrompt: (state: any, action: any) => {
      state.prompt = action.payload;
    },
    setChunks: (state: any, action: any) => {
      state.chunks = action.payload;
    },
    setTokenLimit: (state: any, action: any) => {
      state.token_limit = action.payload;
    },
    setModalStateDeleteConv: (state: any, action: PayloadAction<ActiveState>) => {
      state.modalState = action.payload;
    },
  },
});

export const selectApiKey = (state: RootState) => state.preference.apiKey;
export const selectApiKeyStatus = (state: RootState) => !!state.preference.apiKey;
export const selectSelectedDocsStatus = (state: RootState) => !!state.preference.selectedDocs;
export const selectSourceDocs = (state: RootState) => state.preference.sourceDocs;
export const selectModalStateDeleteConv = (state: RootState) => state.preference.modalState;
export const selectSelectedDocs = (state: RootState) => state.preference.selectedDocs;
export const selectConversations = (state: RootState) => state.preference.conversations;
export const selectConversationId = (state: RootState) => state.conversation.conversationId;
export const selectPrompt = (state: RootState) => state.preference.prompt;
export const selectChunks = (state: RootState) => state.preference.chunks;
export const selectTokenLimit = (state: RootState) => state.preference.token_limit;

const { reducer, actions } = prefSlice;

export { actions as prefSliceActions };
export { reducer as prefSliceReducer };