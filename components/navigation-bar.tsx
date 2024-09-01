"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavigationMenuDesktop } from "./navigation-menu-desktop";
import NavigationMenuMobile from "./navigation-menu-mobile";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

export default function NavigationBar() {
  const [state, setState] = useState(false);

  return (
    <nav className="sticky z-50 top-0 bg-background w-full border-b md:border-0">
      <div className="w-full flex-col md:flex-row px-6 md:px-16 py-2 border-b border-border justify-between items-center flex">
        <div className="w-full md:w-fit flex items-center justify-between py-2 md:py-3 md:block">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <Icons.logo className="h-10" />
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
          className={`w-full pb-3 mt-8 flex-col md:flex md:flex-row md:flex-1 md:justify-between md:gap-2 md:pb-0 md:mt-0 gap-y-4 ${
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
            <Button
              variant={"outline"}
              size={"sm"}
              className="border-foreground px-8"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}