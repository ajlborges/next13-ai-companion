import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = auth();
    const { src, name, description, instructions, seed, categoryId } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!src || !name || !description || !instructions || !seed || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    };

    const companion = await prismadb.companion.create({
      data: {
        categoryId,
        userId,
        src,
        name,
        description,
        instructions,
        seed,
      }
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.log("[CREATE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
