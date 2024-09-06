import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu, navMenu, NavSubMenu } from "@/config/site";
import { User } from "@supabase/supabase-js";
import LogOut from "@/components/log-out";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const NavigationMenuMobile = ({
  user,
  isAdmin,
}: {
  user: User | null;
  isAdmin: boolean;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ScrollArea className="h-[99%]">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-semibold md:text-base"
            >
              <Icons.logo className="h-8" />
              <span className="text-xs font-poppins leading-none">
                SOEDIRMAN <br />
                ROBOTIC <br />
                TEAM
              </span>
            </Link>

            {navMenu.map((menu, index) =>
              (menu as NavSubMenu).contents ? (
                <div className="flex flex-col" key={index}>
                  <span>{(menu as NavSubMenu).title}</span>
                  <ul>
                    {(menu as NavSubMenu).contents.map((subMenu, index) => (
                      <li key={index}>
                        <Link
                          href={subMenu.href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {subMenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={(menu as NavMenu).href} key={index}></Link>
              )
            )}

            <Separator />

            <div className="flex flex-col gap-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Link
                      href="https://dashboard.soedirmanrobotic.com"
                      className="flex flex-1"
                    >
                      <Button variant="default" className="flex-1">
                        Dashboard
                      </Button>
                    </Link>
                  )}
                  <LogOut />
                </>
              ) : (
                <Link href="/login">
                  <Button variant="default" className="flex-1">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationMenuMobile;
