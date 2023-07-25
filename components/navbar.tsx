import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import Link from "next/link";

const font = Poppins({ weight: "600", subsets: ["latin"] });

export const Navbar = async () => {
  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1 className={cn("text-xl md:text-3xl font-bold text-primary", font.className)}>
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
