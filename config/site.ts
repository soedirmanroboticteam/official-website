import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Soedirman Robotic Team",
  url: "https://soedirmanrobotic.com",
  ogImage: "https://soedirmanrobotic.com/images/og.png",
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
