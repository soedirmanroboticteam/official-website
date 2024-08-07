import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navMenu } from "@/lib/navMenu";
import Link from "next/link";

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
