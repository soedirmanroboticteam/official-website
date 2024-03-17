import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { OfficialLogo } from "@/assets";
import Image from "next/image";
import { navMenu } from "@/lib/navMenu";
import { footSocials } from "@/lib/footSocials";
import { footSponsors } from "@/lib/footSponsors";

const Footer = () => {
  return (
    <footer className="bg-background text-background-foreground w-full px-4 pt-8">
      <div className="max-w-screen-xl mx-auto flex flex-col py-8 gap-4">
        <div className="flex justify-between gap-x-32 gap-y-8 flex-wrap">
          <div className="max-w-md flex flex-col gap-6 items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <OfficialLogo height={64} />
              <h1 className="text-xl font-semibold leading-none uppercase">
                Soedirman <br />
                Robotic <br />
                Team
              </h1>
            </Link>
            <p className=" text-center md:text-justify">
              We are group of students with ambitions to be the winner of Kontes
              Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI).
              We will always strike through for “The Future We Make, For The
              Better Life”.
            </p>
            <Link
              href={"mailto:soedirmanrobotic@gmail.com"}
              className="font-bold"
            >
              soedirmanrobotic@gmail.com
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <ul className="inline-flex flex-1 justify-between items-start">
              {navMenu.map((menu, index) =>
                menu.contents ? (
                  <li
                    className="grow shrink basis-0 self-stretch px-2 flex-col justify-start items-start gap-2 inline-flex"
                    key={index}
                  >
                    <h3 className="text-lg font-bold">{menu.title}</h3>
                    <Separator />
                    <ul className="flex flex-col gap-2">
                      {menu.contents.map((content, id) => (
                        <li key={id} className="overflow-hidden">
                          <Link
                            href={content.href}
                            className="group relative overflow-hidden"
                          >
                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-100%]">
                              {content.title}
                            </p>
                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[100%] group-hover:translate-y-[0%] absolute">
                              {content.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : null
              )}
            </ul>
            <Separator />
            <h3 className="font-bold">Big Thanks to:</h3>
            <ul className="flex flex-1 justify-center md:justify-end md:items-end flex-wrap gap-4">
              {footSponsors.map((sponsor, index) => (
                <li key={index}>
                  <Link href={sponsor.href}>
                    <Image
                      src={sponsor.src}
                      alt={sponsor.title}
                      height={sponsor.height ? sponsor.height : 64}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex justify-center md:justify-between flex-wrap-reverse gap-y-4 items-center">
          <p>© 2024 Soedirman Robotic Team</p>
          <ul className="flex gap-6 items-center">
            {footSocials.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.logo}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
