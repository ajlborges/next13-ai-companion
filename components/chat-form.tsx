import { SendHorizonal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const ChatForm = () => {
  return (
    <div className="border-t border-neutral-700 py-4 flex items-center gap-x-2">
      <Input
        placeholder="Type a message"
        className="rounded-lg bg-neutral-900/75"
      />
      <Button variant="secondary">
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </div>
  )
}