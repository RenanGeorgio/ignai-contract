import { conversationService, userService } from "@services";
import { ConversationType, Doc } from "@types";

//Fetches all JSON objects from the source. We only use the objects with the "model" property in SelectDocsModal.tsx. Hopefully can clean up the source file later.
export async function getDocs(): Promise<Doc[] | null> {
  try {
    const response = await userService.getDocs();
    const data = await response.json();

    const docs: Doc[] = [];

    data.forEach((doc: object) => {
      docs.push(doc as Doc);
    });

    return docs;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getConversations(): Promise<
  ConversationType[] | null
> {
  try {
    const response = await conversationService.getConversations();
    const data = await response.json();

    const conversations: ConversationType[] = [];

    data.forEach((conversation: object) => {
      conversations.push(conversation as ConversationType);
    });

    return conversations;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function getLocalApiKey(): string | null {
  const key = localStorage.getItem('DocsGPTApiKey');
  return key;
}

export function getLocalRecentDocs(): string | null {
  const doc = localStorage.getItem('DocsGPTRecentDocs');
  return doc;
}

export function getLocalPrompt(): string | null {
  const prompt = localStorage.getItem('DocsGPTPrompt');
  return prompt;
}

export function setLocalApiKey(key: string): void {
  localStorage.setItem('DocsGPTApiKey', key);
}

export function setLocalPrompt(prompt: string): void {
  localStorage.setItem('DocsGPTPrompt', prompt);
}

export function setLocalRecentDocs(doc: Doc | null): void {
  localStorage.setItem('DocsGPTRecentDocs', JSON.stringify(doc));
  let namePath = doc?.name;
  if (doc?.language === namePath) {
    namePath = '.project';
  }

  let docPath = 'default';
  if (doc?.location === 'local') {
    docPath = 'local' + '/' + doc.name + '/';
  } else if (doc?.location === 'remote') {
    docPath =
      doc.language + '/' + namePath + '/' + doc.version + '/' + doc.model + '/';
  }
  userService
    .checkDocs({
      docs: docPath,
    })
    .then((response) => response.json());
}