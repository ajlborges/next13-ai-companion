import { SendHorizonal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const ChatForm = () => {
  return (
    <div className="border-t border-primary/10 py-4 flex items-center gap-x-2">
      <Input
        placeholder="Type a message"
        className="rounded-lg bg-primary/10"
      />
      <Button variant="ghost">
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </div>
  )
}