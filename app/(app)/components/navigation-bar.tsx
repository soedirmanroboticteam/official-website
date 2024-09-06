import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import LogOut from "@/components/log-out";
import { NavigationMenuDesktop } from "./navigation-menu-desktop";
import NavigationMenuMobile from "./navigation-menu-mobile";
import { createClientBrowserServer } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function NavigationBar() {
  const supabase = createClientBrowserServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdmin = user
    ? ((
        await supabase
          .from("users")
          .select("role_id")
          .eq("id", user.id)
          .limit(1)
          .single()
      ).data?.role_id ?? 1) >= 2
    : false;

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
        <NavigationMenuMobile user={user} isAdmin={isAdmin} />
        <div className="hidden md:flex items-center gap-4 md:gap-2 lg:gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Avatar>
                    <AvatarImage src={user.user_metadata["avatar_url"]} />
                    <AvatarFallback>
                      {user.user_metadata["full_name"][0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isAdmin && (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem className="flex-1">
                      <Link
                        href="https://dashboard.soedirmanrobotic.com/"
                        className="flex-1 flex"
                      >
                        <Button variant="default" className="flex-1">
                          Dashboard
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem className="flex-1">
                  <LogOut />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="default">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
