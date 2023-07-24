import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  src: string;
  isLoading: boolean;
}

export const ChatMessages = ({
  messages = [],
  src,
  isLoading
}: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={src}
          content={message.content}
          role={message.role}
        />
      ))}
      {isLoading && (
        <ChatMessage
          role="system"
          isLoading
        />
      )}
    </div>
  );
};
