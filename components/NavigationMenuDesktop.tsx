"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { OfficialLogo } from "@/assets";
import { navMenu } from "@/lib/navMenu";

export function NavigationMenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu.map((menu, index) => {
          if (menu.contents) {
            return (
              <NavigationMenuItem className="first:flex-1" key={index}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {menu.contents.map((content) => {
                      if (content.spotlight) {
                        return (
                          <li className="row-span-3" key={content.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href={content.href}
                              >
                                <OfficialLogo height="96" />
                                <div className="mb-2 mt-4 text-lg font-bold leading-6">
                                  {content.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {content.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      }
                      return (
                        <ListItem
                          key={content.title}
                          title={content.title}
                          href={content.href}
                        >
                          {content.description}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else if (menu.href) {
            return (
              <NavigationMenuItem key={index}>
                <Link href={menu.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menu.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
