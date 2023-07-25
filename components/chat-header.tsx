"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";
import { Companion } from "@prisma/client";

interface ChatHeaderProps {
  companion: Companion;
};

export const ChatHeader = ({
  companion
}: ChatHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center gap-x-2 border-b border-primary/10 pb-4">
      <Button onClick={() => router.back()} size="icon" variant="ghost">
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <BotAvatar src={companion.src} />
      <div className="flex flex-col gap-y-1">
        <p className="font-bold">{companion.name}</p>
        <p className="text-xs text-muted-foreground">{companion.description}</p>
      </div>
    </div>
  );
};
