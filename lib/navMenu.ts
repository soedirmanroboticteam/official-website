export const navMenu: {
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
        description: "Get to know more about us.",
        href: "https://medium.com/@soedirmanrobotic",
      },
      {
        title: "E-Magazine",
        description: "Get to know people behind our organization.",
        href: "/e-magazine",
      },
      {
        title: "YouTube",
        description: "Get to know people behind our UAV Teams.",
        href: "https://www.youtube.com/@soedirmanroboticteam",
      },
      {
        title: "Cast-Tic",
        description: "Get to know people behind our Robotic Teams.",
        href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
      },
      {
        title: "TikTok",
        description: "Get to know people behind our UAV Teams.",
        href: "https://www.tiktok.com/@srtunsoed",
      },
    ],
  },
  {
    title: "Events",
    contents: [
      {
        title: "Pengabdian Masyarakat",
        description: "Get to know more about us.",
        href: "/pengabdian-masyarakat",
      },
      {
        title: "Internship",
        description: "Get to know people behind our organization.",
        href: "/internship",
      },
      {
        title: "Open Recruitment",
        description: "Get to know people behind our Robotic Teams.",
        href: "https://join.soedirmanrobotic.com",
      },
    ],
  },
];
