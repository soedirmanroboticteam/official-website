"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { OfficialLogo } from "@/assets";
import NavigationMenuMobile from "./NavigationMenuMobile";
import { Button } from "./ui/button";

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav className="sticky top-0 bg-background w-full border-b md:border-0">
      <div className="w-full px-16 py-2 border-b border-border justify-between items-center inline-flex">
        <div className="flex items-center justify-between py-2 md:py-3 md:block">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <OfficialLogo height={36} />
            <h1 className="text-xs font-semibold leading-none uppercase">
              Soedirman <br />
              Robotic <br />
              Team
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
        <div
          className={`pb-3 mt-8 flex-col md:flex md:flex-row md:flex-1 md:justify-between md:gap-2 md:pb-0 md:mt-0 gap-y-4 ${
            state ? "flex" : "hidden"
          }`}
        >
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <NavigationMenuDesktop />
          </div>
          <div className="flex md:hidden flex-1 flex-col">
            <NavigationMenuMobile />
          </div>

          <Link href={"mailto:soedirmanrobotic@gmail.com"}>
            <Button variant={"outline"} className="border-foreground px-8">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
