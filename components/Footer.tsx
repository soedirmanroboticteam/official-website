import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  OfficialLogo,
  SpotifyLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@/assets";

const footerLinks: {
  title: string;
  contents: { title: string; href: string }[];
}[] = [
  {
    title: "About Us",
    contents: [
      {
        title: "Our Structure",
        href: "/about",
      },
      {
        title: "Management Teams",
        href: "/about/management",
      },
      {
        title: "KRI Teams",
        href: "/about/kri",
      },
      {
        title: "KRTI Teams",
        href: "/about/krti",
      },
    ],
  },
  {
    title: "Our Content",
    contents: [
      {
        title: "Konten Edukasi",
        href: "/konten-edukasi",
      },
      {
        title: "E-Magazine",
        href: "/emagz",
      },
      {
        title: "Youtube",
        href: "https://www.youtube.com/@soedirmanroboticteam",
      },
      {
        title: "TikTok",
        href: "https://www.tiktok.com/@srtunsoed",
      },
    ],
  },
  {
    title: "Our Events",
    contents: [
      {
        title: "Pengabdian Masyarakat",
        href: "/konten-edukasi",
      },
      {
        title: "Internship",
        href: "/emagz",
      },
      {
        title: "Open Recruitment",
        href: "https://www.youtube.com/@soedirmanroboticteam",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground w-full px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col py-8 gap-4">
        <div className="flex justify-between gap-x-32 gap-y-4 flex-wrap">
          <div className="max-w-md flex flex-col gap-6 items-center">
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
          <div className="flex flex-1 justify-between flex-wrap gap-y-4">
            {footerLinks.map((section, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <h3 className="text-lg font-bold">{section.title}</h3>
                <ul className="flex flex-col gap-2">
                  {section.contents.map((content, id) => (
                    <li key={id}>
                      <Link href={content.href}>{content.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex justify-center md:justify-between flex-wrap-reverse gap-y-4 items-center">
          <p>© 2024 Soedirman Robotic Team</p>
          <div className="flex gap-6 items-center">
            <Link href="https://www.instagram.com/srtunsoed/">
              <InstagramLogo height="25" />
            </Link>
            <Link href={"https://www.youtube.com/@soedirmanroboticteam"}>
              <YoutubeLogo height="20" />
            </Link>
            <Link href={"https://www.tiktok.com/@srtunsoed"}>
              <TiktokLogo height="24" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/soedirman-robotic-team/"}
            >
              <LinkedinLogo height="25" />
            </Link>
            <Link href="https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5">
              <SpotifyLogo height="25" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
