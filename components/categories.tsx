import { Button } from "@/components/ui/button"

const items = [
  "Featured",
  "Discover",
  "Helpers",
  "Famous People",
  "Games",
  "Game Characters",
  "Movies & TV",
  "Discussion",
]

export const Categories = () => {
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      {items.map((item) => (
        <div className="flex items-center text-center cursor-pointer text-xs md:text-sm px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition" key={item}>
          {item}
        </div>
      ))}
    </div>
  )
}