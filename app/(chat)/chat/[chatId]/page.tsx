import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

import { ChatClient } from "./components/client";

interface ChatIdPageProps {
  params: {
    chatId: string;
  }
}

const ChatIdPage = async ({
  params
}: ChatIdPageProps) => {
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId
    }
  });

  if (!companion) {
    redirect("/");
  }

  return (
    <ChatClient companion={companion} />
  );
}
 
export default ChatIdPage;
