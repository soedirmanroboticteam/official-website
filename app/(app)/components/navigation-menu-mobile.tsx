import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu, navMenu, NavSubMenu } from "@/config/site";

const NavigationMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationMenuMobile;
