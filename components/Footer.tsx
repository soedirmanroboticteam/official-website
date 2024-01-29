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
    <footer className="bg-footer text-footer-foreground w-full px-4 pt-8">
      <div className="max-w-screen-xl mx-auto flex flex-col py-8 gap-4">
        <div className="flex justify-between gap-x-32 gap-y-4 flex-wrap">
          <div className="max-w-md flex flex-col gap-6 items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <OfficialLogo height="64" />
              <h1 className="text-xl font-semibold leading-none">
                Soedirman <br />
                Robotic <br />
                Team
              </h1>
            </Link>
            <p className=" text-center md:text-justify">
              Ristek is a student-founded non-profit organization from
              Universitas Ristek is a student-founded non-profit organization
              from Universitas Ristek is a student-founded non-profit
              organization from Universitas
            </p>
            <Link
              href={"mailto:soedirmanrobotic@gmail.com"}
              className="font-bold"
            >
              soedirmanrobotic@gmail.com
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <ul className="flex flex-1 justify-between flex-wrap gap-y-4">
              {navMenu.map((menu, index) =>
                menu.contents ? (
                  <li className="flex flex-col gap-3" key={index}>
                    <h3 className="text-lg font-bold">{menu.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {menu.contents.map((content, id) => (
                        <li key={id}>
                          <Link href={content.href}>{content.title}</Link>
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
