import prismadb from "@/lib/prismadb";
import { CreateClient } from "./components/client";

const CreatePage = async () => {
  const categories = await prismadb.category.findMany();

  return ( 
    <CreateClient categories={categories} />
  );
}
 
export default CreatePage;
