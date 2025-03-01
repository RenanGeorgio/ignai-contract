export type ChatGPTAgent = 'user' | 'system' | 'assistant'
export type MESSAGE_TYPE = 'QUESTION' | 'ANSWER' | 'ERROR';
export type Status = 'idle' | 'loading' | 'failed';
export type FEEDBACK = 'LIKE' | 'DISLIKE';

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: Query
}

export interface Message {
  text: string;
  type: MESSAGE_TYPE;
}

export interface ConversationState {
  queries: ChatGPTMessage[];
  status: Status;
  conversationId: string | null;
}

export interface Answer {
  answer: string;
  query: string;
  result: string;
  sources: { title: string; text: string; source: string }[];
  conversationId: string | null;
  title: string | null;
}

export interface Query {
  prompt: string;
  response?: string;
  feedback?: FEEDBACK;
  error?: string;
  sources?: { title: string; text: string; source: string }[];
  conversationId?: string | null;
  title?: string | null;
}

export interface SharedConversationsType {
  queries: ChatGPTMessage[];
  apiKey?: string;
  identifier: string;
  status: Status;
  date?: string;
  title?: string;
}

export interface Preference {
  apiKey: string;
  prompt: { name: string; id: string; type: string };
  chunks: string;
  token_limit: number;
  selectedDocs: Doc | null;
  sourceDocs: Doc[] | null;
  conversations: ConversationType[] | null;
  modalState: ActiveState;
}

export type ConversationType = {
  name: string; 
  id: string;
}

export type ActiveState = 'ACTIVE' | 'INACTIVE';

export type User = {
  avatar: string;
};

export type Doc = {
  location: string;
  name: string;
  language: string;
  version: string;
  description: string;
  fullName: string;
  date: string;
  docLink: string;
  model: string;
  tokens?: string;
};

export type PromptProps = {
  prompts: { name: string; id: string; type: string }[];
  selectedPrompt: { name: string; id: string; type: string };
  onSelectPrompt: (name: string, id: string, type: string) => void;
  setPrompts: (prompts: { name: string; id: string; type: string }[]) => void;
};

export type DocumentsProps = {
  documents: Doc[] | null;
  handleDeleteDocument: (index: number, document: Doc) => void;
};

export type CreateAPIKeyModalProps = {
  close: () => void;
  createAPIKey: (payload: {
    name: string;
    source: string;
    prompt_id: string;
    chunks: string;
  }) => void;
};

export type SaveAPIKeyModalProps = {
  apiKey: string;
  close: () => void;
};