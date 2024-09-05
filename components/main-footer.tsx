import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { navMenu, NavSubMenu, siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { createClientBrowserServer } from "@/utils/supabase/server";
import { Sponsors } from "@/app/types/global.types";

const Footer = async () => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("sponsors")
    .select("*")
    .order("id", { ascending: true })
    .returns<Sponsors[]>();

  return (
    <footer className="bg-background text-background-foreground w-full px-4 pt-8">
      <div className="max-w-screen-xl mx-auto flex flex-col py-8 gap-4">
        <div className="flex justify-between gap-x-32 gap-y-8 flex-wrap">
          <div className="max-w-md flex flex-col gap-6 items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-16" />
              <h1 className="text-xl font-semibold leading-none uppercase">
                Soedirman <br />
                Robotic <br />
                Team
              </h1>
            </Link>
            <p className=" text-center md:text-justify">
              {siteConfig.description}
            </p>
            <Link href={`mailto:${siteConfig.email}`} className="font-bold">
              {siteConfig.email}
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <ul className="flex flex-1 flex-wrap justify-between items-start gap-y-4">
              {navMenu.map((menu, index) =>
                (menu as NavSubMenu).contents !== undefined ? (
                  <li
                    className="grow shrink basis-1/2 md:basis-0 self-stretch px-2 flex-col justify-start items-start gap-2 inline-flex"
                    key={index}
                  >
                    <h3 className="text-lg font-bold">{menu.title}</h3>
                    <Separator />
                    <ul className="flex flex-col gap-2">
                      {(menu as NavSubMenu).contents.map((subMenu, id) => (
                        <li key={id} className="overflow-hidden">
                          <Link
                            href={subMenu.href}
                            className="group relative overflow-hidden"
                          >
                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-100%]">
                              {subMenu.title}
                            </p>
                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[100%] group-hover:translate-y-[0%] absolute">
                              {subMenu.title}
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
            {error || !data ? null : (
              <>
                <h3 className="font-bold">Big Thanks to:</h3>
                <ul className="flex flex-1 justify-center md:justify-end md:items-end flex-wrap gap-4">
                  {data.map((sponsor, index) => (
                    <li key={index}>
                      <Image
                        src={sponsor.image_url}
                        alt={sponsor.title}
                        width={720}
                        height={720}
                        className="h-16 w-auto"
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <Separator />
        <div className="flex justify-center md:justify-between flex-wrap-reverse gap-y-4 items-center">
          <p>© 2024 Soedirman Robotic Team</p>
          <ul className="flex gap-6 items-center">
            {siteConfig.socials.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <item.icon className="h-6" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
