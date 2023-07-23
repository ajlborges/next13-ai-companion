import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

const messages: ChatMessageProps[] = [
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
  {
    variant: "system",
    src: "/elon.png",
    content: "Hello, my name is Elon Musk. I am the founder and CEO of Tesla, SpaceX and many more companies."
  },
  {
    variant: "user",
    content: "Hello Elon, how are you?"
  },
]

export const ChatMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={message.src}
          content={message.content}
          variant={message.variant}
        />
      ))}
    </div>
  );
};
