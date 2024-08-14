import type { ChatGPTMessage } from "./ChatLine";

export const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

// mensagem de inicialização
export const initialMessages: ChatGPTMessage[] = [
  {
    role: 'assistant',
    content: 'Otimização de Supply Chain',
  },
]