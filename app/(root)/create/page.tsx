import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";

import { CreateClient } from "./components/client";

const CreatePage = async () => {
  const validSubscription = await checkSubscription();

  if (!validSubscription) {
    return redirect("/");
  }

  const categories = await prismadb.category.findMany();

  return ( 
    <CreateClient categories={categories} />
  );
}
 
export default CreatePage;
