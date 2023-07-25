import prismadb from "@/lib/prismadb"
import { Categories } from "@/components/categories"
import { Companions } from "@/components/companions"

interface RootPageProps {
  searchParams: {
    categoryId: string
  }
}

const RootPage = async ({
  searchParams
}: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full p-4 space-y-2">
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  )
}

export default RootPage
