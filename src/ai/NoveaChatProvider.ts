// Future NOVEA Chat Provider Interface
// Architecture contract for secured server-side LLM connectivity

export interface ChatMessage {
  id: string;
  sender: 'user' | 'novea' | 'system';
  content: string;
  timestamp: number;
}

export interface NoveaChatOptions {
  modelProvider?: 'sovereign-local' | 'cloud-endpoint';
  temperature?: number;
  maxTokens?: number;
}

export interface INoveaChatProvider {
  sendMessage(message: string, context?: Record<string, any>): Promise<ChatMessage>;
  streamMessage?(message: string, onChunk: (chunk: string) => void): Promise<void>;
  getHistory(): ChatMessage[];
  clearHistory(): void;
}

/**
 * Client stub for future secure server-side AI integration.
 * In production, this forwards queries to an authenticated backend proxy
 * without exposing API keys or secrets on the frontend.
 */
export class NoveaChatProvider implements INoveaChatProvider {
  private history: ChatMessage[] = [];

  async sendMessage(message: string): Promise<ChatMessage> {
    const response: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'novea',
      content: `Hello! I am NOVEA. Full autonomous conversational capabilities are currently in private staging. Please contact Martin directly at contact@csvsittech.in.`,
      timestamp: Date.now(),
    };
    this.history.push({ id: `user-${Date.now()}`, sender: 'user', content: message, timestamp: Date.now() });
    this.history.push(response);
    return response;
  }

  getHistory(): ChatMessage[] {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}
