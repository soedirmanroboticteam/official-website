import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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

const NavigationMenuMobile = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {navMenu.map((menu, index) =>
        menu.contents ? (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="font-bold">
              {menu.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2">
                {menu.contents.map((content, id) => (
                  <li key={id}>
                    <Link href={content.href}>{content.title}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ) : menu.href ? (
          <Link
            href={menu.href}
            className="flex flex-1 items-center justify-between py-4 text-sm font-bold transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
            key={index}
          >
            {menu.title}
          </Link>
        ) : null
      )}
    </Accordion>
  );
};

export default NavigationMenuMobile;
