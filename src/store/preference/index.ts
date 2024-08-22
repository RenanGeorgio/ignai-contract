import { PayloadAction, createListenerMiddleware, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setLocalApiKey, setLocalRecentDocs } from "@controllers";
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

export const {
  setApiKey,
  setSelectedDocs,
  setSourceDocs,
  setConversations,
  setPrompt,
  setChunks,
  setTokenLimit,
  setModalStateDeleteConv,
} = prefSlice.actions;
export default prefSlice.reducer;

export const prefListenerMiddleware = createListenerMiddleware();
prefListenerMiddleware.startListening({
  matcher: isAnyOf(setApiKey),
  effect: (action: any, listenerApi: any) => {
    setLocalApiKey((listenerApi.getState() as RootState).preference.apiKey);
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setSelectedDocs),
  effect: (action: any, listenerApi: any) => {
    setLocalRecentDocs(
      (listenerApi.getState() as RootState).preference.selectedDocs ?? null,
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setPrompt),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTPrompt',
      JSON.stringify((listenerApi.getState() as RootState).preference.prompt),
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setChunks),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTChunks',
      JSON.stringify((listenerApi.getState() as RootState).preference.chunks),
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setTokenLimit),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTTokenLimit',
      JSON.stringify(
        (listenerApi.getState() as RootState).preference.token_limit,
      ),
    );
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