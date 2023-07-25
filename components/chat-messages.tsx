"use client";

import { useEffect, useState } from "react";
import { Companion } from "@prisma/client";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  companion: Companion
}

export const ChatMessages = ({
  messages = [],
  isLoading,
  companion,
}: ChatMessagesProps) => {
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={companion.src}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={companion.src}
          content={message.content}
          role={message.role}
        />
      ))}
      {isLoading && (
        <ChatMessage
          src={companion.src}
          role="system"
          isLoading
        />
      )}
    </div>
  );
};
