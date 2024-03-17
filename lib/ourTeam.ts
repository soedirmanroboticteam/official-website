import {
  BlakasuthaLogo,
  satriaLogo,
  yudishtiraLogo,
  biantaraLogo,
  StaticToJsx,
} from "@/assets";

export const ourTeams: {
  title: string;
  desc: string;
  logo: React.JSX.Element;
}[] = [
  {
    title: "Blakasutha",
    desc: "Salah satu tim lomba Kontes Robot Indonesia (KRI) divisi Kontes Robot ABU Indonesia (KRAI).",
    logo: BlakasuthaLogo({ height: 40 }),
  },
  {
    title: "Satria",
    desc: "Salah satu tim lomba Kontes Robot Indonesia (KRI) divisi Kontes Robot ABU Indonesia (KRAI).",
    logo: StaticToJsx({ src: satriaLogo, alt: "Satria Logo", height: 40 }),
  },
  {
    title: "Yudishtira",
    desc: "Salah satu tim lomba Kontes Robot Indonesia (KRI) divisi Kontes Robot ABU Indonesia (KRAI).",
    logo: StaticToJsx({
      src: yudishtiraLogo,
      alt: "Yudishtira Logo",
      height: 40,
    }),
  },
  {
    title: "Biantara Racing Plane",
    desc: "Salah satu tim lomba Kontes Robot Indonesia (KRI) divisi Kontes Robot ABU Indonesia (KRAI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
  },
  {
    title: "Biantara Fixed Wing",
    desc: "Salah satu tim lomba Kontes Robot Indonesia (KRI) divisi Kontes Robot ABU Indonesia (KRAI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
  },
];
