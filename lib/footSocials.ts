import {
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  SpotifyLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@/assets";

export const footSocials: {
  title: string;
  href: string;
  logo: React.JSX.Element;
}[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/srtunsoed/",
    logo: InstagramLogo({ height: "25" }),
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@srtunsoed",
    logo: TiktokLogo({ height: "25" }),
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@soedirmanroboticteam",
    logo: YoutubeLogo({ height: "20" }),
  },
  {
    title: "Medium",
    href: "https://www.youtube.com/@soedirmanroboticteam",
    logo: MediumLogo({ height: "25" }),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/soedirman-robotic-team/",
    logo: LinkedinLogo({ height: "25" }),
  },
  {
    title: "Spotify",
    href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
    logo: SpotifyLogo({ height: "25" }),
  },
];
