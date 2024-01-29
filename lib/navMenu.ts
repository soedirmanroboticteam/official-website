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
        href: "/",
        spotlight: true,
      },
      {
        title: "Management Teams",
        description: "Get to know people behind our organization.",
        href: "/",
      },
      {
        title: "KRI Teams",
        description: "Get to know people behind our Robotic Teams.",
        href: "/",
      },
      {
        title: "KRTI Teams",
        description: "Get to know people behind our UAV Teams.",
        href: "/",
      },
    ],
  },
  {
    title: "Our Content",
    contents: [
      {
        title: "Konten Edukasi",
        description: "Get to know more about us.",
        href: "/",
      },
      {
        title: "E-Magazine",
        description: "Get to know people behind our organization.",
        href: "/",
      },
      {
        title: "Cast-Tic",
        description: "Get to know people behind our Robotic Teams.",
        href: "/",
      },
      {
        title: "YouTube",
        description: "Get to know people behind our UAV Teams.",
        href: "/",
      },
      {
        title: "TikTok",
        description: "Get to know people behind our UAV Teams.",
        href: "/",
      },
    ],
  },
  {
    title: "Our Events",
    contents: [
      {
        title: "Pengabdian Masyarakat",
        description: "Get to know more about us.",
        href: "/",
      },
      {
        title: "Internship",
        description: "Get to know people behind our organization.",
        href: "/",
      },
      {
        title: "Open Recruitment",
        description: "Get to know people behind our Robotic Teams.",
        href: "/",
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/",
  },
];
