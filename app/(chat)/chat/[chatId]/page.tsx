import { ChatForm } from "@/components/chat-form";
import { ChatHeader } from "@/components/chat-header";
import { ChatMessages } from "@/components/chat-messages";

const ChatIdPage = () => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader />
      <ChatMessages />
      <ChatForm />
    </div>
   );
}
 
export default ChatIdPage;
