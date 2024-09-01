import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";

interface NavMenuItem {
  title: string;
  description?: string;
  href: string;
  spotlight?: boolean;
}

interface NavMenu {
  title: string;
  items: NavMenuItem[];
}

const navMenu: {
  title: string;
  contents?: {
    title: string;
    description?: string;
    href: string;
    spotlight?: boolean;
  }[];
  href?: string;
}[] = [
  {
    title: "About Us",
    contents: [
      {
        title: "Soedirman Robotic Team",
        description: "Get to know more about us.",
        href: "/about",
        spotlight: true,
      },
      {
        title: "Management Teams",
        description: "Get to know people behind our organization.",
        href: "/management",
      },
      {
        title: "KRI Teams",
        description: "Get to know people behind our Robotic Teams.",
        href: "/kri",
      },
      {
        title: "KRTI Teams",
        description: "Get to know people behind our UAV Teams.",
        href: "/krti",
      },
    ],
  },
  {
    title: "Media",
    contents: [
      {
        title: "Konten Edukasi",
        description: "Check out our stories on Medium.",
        href: "https://medium.com/@soedirmanrobotic",
      },
      {
        title: "E-Magazine",
        description:
          "Get up to date about latest technology via our E-Magazine.",
        href: "/e-magazine",
      },
      {
        title: "YouTube",
        description:
          "Get to know more about our organization achievements and history!",
        href: "https://www.youtube.com/@soedirmanroboticteam",
      },
      {
        title: "Cast-Tic",
        description:
          "Don't have time to learn new things? Listen to our podcast and learn something new while still being able to do what you do.",
        href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
      },
      {
        title: "TikTok",
        description:
          "Learning doesn't have to be boring! Have fun while learning new things with our TikTok videos.",
        href: "https://www.tiktok.com/@srtunsoed",
      },
    ],
  },
  {
    title: "Events",
    contents: [
      {
        title: "Pengabdian Masyarakat",
        description: "Teaching is the best way of learning!",
        href: "/pengabdian-masyarakat",
      },
      {
        title: "Internship",
        description:
          "Follow our Instagram and get notified about our Internship program!",
        href: "/internship",
      },
      {
        title: "Open Recruitment",
        description:
          "Are you ready to be the next fighters? Don't miss out our opening for new recruits! ",
        href: "https://join.soedirmanrobotic.com",
      },
    ],
  },
];

export function NavigationMenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu.map((menu, index) =>
          menu.contents ? (
            <NavigationMenuItem className="first:flex-1" key={index}>
              <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {menu.contents.map((content) =>
                    content.spotlight ? (
                      <li className="row-span-3" key={content.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={content.href}
                          >
                            <Icons.logo className="h-24" />
                            <div className="mb-2 mt-4 text-lg font-bold leading-6">
                              {content.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {content.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ) : (
                      <ListItem
                        key={content.title}
                        title={content.title}
                        href={content.href}
                      >
                        {content.description}
                      </ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : menu.href ? (
            <NavigationMenuItem key={index}>
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menu.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : null
        )}
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
