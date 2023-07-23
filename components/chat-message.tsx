"use client";

import { BeatLoader } from "react-spinners";

import { BotAvatar } from "@/components/bot-avatar"
import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";

export interface ChatMessageProps {
  variant: "user" | "system",
  content?: string;
  isLoading?: boolean;
  src?: string;
}

export const ChatMessage = ({
  variant,
  content,
  isLoading,
  src
}: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex items-start gap-x-3 py-4 w-full",
      variant === "user" && "justify-end"
    )}>
    {variant === "system" && src && <BotAvatar src={src} />}
    <div className={cn(
      "rounded-md px-4 py-2 max-w-sm text-sm",
      variant === "user" ? "bg-neutral-200/10" : "bg-neutral-900/75",
    )}>
      {isLoading ? <BeatLoader color="white" size={10} /> : content}
    </div>
    {variant === "user" && <UserAvatar />}
  </div>
  )
}