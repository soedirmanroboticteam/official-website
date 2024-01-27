"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ToggleDark";
import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { OficiallLogo } from "@/assets";

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-background w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:gap-12 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <OficiallLogo height="36" />
            <h1 className="text-xs font-semibold leading-none">
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
          className={`pb-3 mt-8 md:flex md:flex-1 md:justify-between md:gap-2 md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <NavigationMenuDesktop />
          </div>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
