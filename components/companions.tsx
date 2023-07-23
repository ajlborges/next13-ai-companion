import { MessagesSquare } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

const items = [
  {
    name: "Elon Musk",
    description: "CEO of Tesla & SpaceX",
    image: "/elon5.png",
  },
  {
    name: "Steve Jobs",
    description: "Founder of Apple",
    image: "/steve4.png",
  },
  {
    name: "Joe Biden",
    description: "President of the USA",
    image: "/joe3.png",
  },
  {
    name: "Mark Zuckerberg",
    description: "Founder & CEO of Meta",
    image: "/mark.png",
  },
  {
    name: "Albert Einstein",
    description: "Famous Mathematician",
    image: "/albert.png",
  },
  {
    name: "Jeff Bezos",
    description: "Founder & CEO of Amazon",
    image: "/jeff.png",
  },
  {
    name: "Oprah Winfrey",
    description: "Famous American Talk Show Host",
    image: "/oprah.png",
  },
  {
    name: "Stephen Hawking",
    description: "Famous Theoretical Physicist",
    image: "/stephen.png",
  },
  {
    name: "Lady Gaga",
    description: "Famous Singer-Songwriter",
    image: "/lady.png",
  },
  {
    name: "Eminem",
    description: "Famous Singer-Songwriter",
    image: "/eminem.png",
  },
]

export const Companions = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
      {items.map((item) => (
        <Card key={item.name} className="bg-neutral-700 rounded-xl cursor-pointer hover:opacity-75 transition">
          <Link href="/chat/123">
            <CardHeader className="flex items-center justify-center text-center text-neutral-300">
              <div className="relative w-32 h-32">
                <Image
                  src={item.image}
                  fill
                  className="rounded-xl object-cover"
                  alt="Character"
                />
              </div>
              <p className="font-bold">
                {item.name}
              </p>
              <p className="text-xs">
                {item.description}
              </p>
            </CardHeader>
            <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
              <p className="italic">
                @antonio
              </p>
              <div className="flex items-center gap-x-1">
                <MessagesSquare className="w-3 h-3" />
                5.2M
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}