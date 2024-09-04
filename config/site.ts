import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Soedirman Robotic Team",
  url: "https://soedirmanrobotic.com",
  ogImage: "https://soedirmanrobotic.com/opengraph-image.png",
  description: `We're a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI). We will always strike through for “The Future We Make, For The Better Life”.`,
  email: "soedirmanrobotic@gmail.com",
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/srtunsoed",
      icon: Icons.instagram,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@srtunsoed",
      icon: Icons.tiktok,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@soedirmanroboticteam",
      icon: Icons.youtube,
    },
    {
      name: "Medium",
      url: "https://medium.com/@soedirmanrobotic",
      icon: Icons.medium,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/soedirman-robotic-team",
      icon: Icons.linkedin,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
      icon: Icons.spotify,
    },
    {
      name: "GitHub",
      url: "https://github.com/soedirmanroboticteam",
      icon: Icons.gitHub,
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export type NavMenu = {
  title: string;
  href: string;
};

export type NavSubMenu = {
  title: string;
  contents: {
    title: string;
    description: string;
    href: string;
    spotlight: boolean;
  }[];
};

export const navMenu: (NavMenu | NavSubMenu)[] = [
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
        spotlight: false,
      },
      {
        title: "KRI Teams",
        description: "Get to know people behind our Robotic Teams.",
        href: "/kri",
        spotlight: false,
      },
      {
        title: "KRTI Teams",
        description: "Get to know people behind our UAV Teams.",
        href: "/krti",
        spotlight: false,
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
        spotlight: false,
      },
      {
        title: "E-Magazine",
        description:
          "Get up to date about latest technology via our E-Magazine.",
        href: "/e-magazine",
        spotlight: false,
      },
      {
        title: "YouTube",
        description:
          "Get to know more about our organization achievements and history!",
        href: "https://www.youtube.com/@soedirmanroboticteam",
        spotlight: false,
      },
      {
        title: "Cast-Tic",
        description:
          "Don't have time to learn new things? Listen to our podcast and learn something new while still being able to do what you do.",
        href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
        spotlight: false,
      },
      {
        title: "TikTok",
        description:
          "Learning doesn't have to be boring! Have fun while learning new things with our TikTok videos.",
        href: "https://www.tiktok.com/@srtunsoed",
        spotlight: false,
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
        spotlight: false,
      },
      {
        title: "Internship",
        description:
          "Follow our Instagram and get notified about our Internship program!",
        href: "/internship",
        spotlight: false,
      },
      {
        title: "Open Recruitment",
        description:
          "Are you ready to be the next fighters? Don't miss out our opening for new recruits! ",
        href: "https://join.soedirmanrobotic.com",
        spotlight: false,
      },
    ],
  },
];
