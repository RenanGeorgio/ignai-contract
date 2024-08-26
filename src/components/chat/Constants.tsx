import { ChatGPTMessage } from "@types";

export const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

// mensagem de inicialização
export const initialMessages: ChatGPTMessage[] = [
  {
    role: 'assistant',
    // @ts-ignore
    content: null,
  },
]

export const emojis = {
  share: '🔗',
  edit: '✏️',
  download: '⬇️',
  reload: '🔄',
  trash: '🗑️',
};