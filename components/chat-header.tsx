"use client";

import { ChevronLeft, MessagesSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { Companion, Message } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
  };
  messagesCount: number;
};

export const ChatHeader = ({
  companion,
  messagesCount = 0,
}: ChatHeaderProps) => {
  const router = useRouter();
  
  return (
    <div className="flex w-full items-center gap-x-2 border-b border-primary/10 pb-4">
      <Button onClick={() => router.back()} size="icon" variant="ghost">
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <BotAvatar src={companion.src} />
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <p className="font-bold">{companion.name}</p>
          <div className="flex items-center text-xs text-muted-foreground">
            <MessagesSquare className="w-3 h-3 mr-1" />
            {messagesCount}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Created by {companion.userName}
        </p>
      </div>
    </div>
  );
};
