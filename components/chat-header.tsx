"use client";

import { ChevronLeft, MessagesSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";

export const ChatHeader = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center gap-x-2 border-b border-primary/10 pb-4">
      <Button onClick={() => router.back()} size="icon" variant="ghost">
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <BotAvatar src="/elon.png" />
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Elon Musk</p>
          <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
            <MessagesSquare className="w-3 h-3" />
            5.2M
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Created by @antonio</p>
      </div>
    </div>
  );
};
