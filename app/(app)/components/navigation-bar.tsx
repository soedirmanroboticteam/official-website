import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import LogOut from "@/components/log-out";
import { NavigationMenuDesktop } from "./navigation-menu-desktop";
import NavigationMenuMobile from "./navigation-menu-mobile";

function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <div className="container flex-1 flex justify-between items-center px-2">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 text-lg font-semibold md:text-base"
        >
          <Icons.logo className="h-8" />
          <span className="text-xs font-poppins leading-none">
            SOEDIRMAN <br />
            ROBOTIC <br />
            TEAM
          </span>
        </Link>
        <NavigationMenuDesktop />
        <NavigationMenuMobile />
        <div className="hidden md:flex items-center gap-4 md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
