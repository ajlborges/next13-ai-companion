"use client";

import { BeatLoader } from "react-spinners";
import { Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/bot-avatar"
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  
  const onCopy = () => {
    if (!content) {
      return;
    }

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard.",
      duration: 3000,
    })
  }

  return (
    <div className={cn(
      "group flex items-start gap-x-3 py-4 w-full",
      variant === "user" && "justify-end"
    )}>
      {variant === "system" && src && <BotAvatar src={src} />}
      <div className={cn(
        "rounded-md px-4 py-2 max-w-sm text-sm",
        variant === "system" ? "bg-primary/25" : "bg-primary/10",
      )}>
        {isLoading ? <BeatLoader color="white" size={10} /> : content}
      </div>
      {variant === "user" && <UserAvatar />}
      {variant === "system" && (
        <Button onClick={onCopy} className="opacity-0 group-hover:opacity-100 transition" size="icon" variant="ghost">
          <Copy className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
