import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/home" className="flex items-center gap-1">
        <Image
          src="/images/final-logo.png"
          width={32}
          height={32}
          alt="TeamWave"
          className="max-sm:size-10"
        />
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">
          EmplateWave
        </p>
      </Link>

      <div className="flex flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
