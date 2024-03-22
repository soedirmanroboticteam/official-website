import {
  BlakasuthaLogo,
  satriaLogo,
  yudishtiraLogo,
  biantaraLogo,
  StaticToJsx,
} from "@/assets";
import { StaticImageData } from "next/image";

export const teamSection: {
  title: string;
  desc: string;
} = {
  title: "Our Team",
  desc: "We're a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI). We will always strike through for “The Future We Make, For The Better Life”.",
};

export const ourTeams: {
  title: string;
  desc: string;
  logo: React.JSX.Element;
  direction: "forward" | "backward";
  members: {
    alt: string;
    img: StaticImageData;
  }[];
}[] = [
  {
    title: "Blakasutha",
    desc: "Our representative for the Kontes Robot ABU Indonesia (KRAI) division of Kontes Robot Indonesia (KRI).",
    logo: BlakasuthaLogo({ height: 40 }),
    direction: "forward",
    members: [],
  },
  {
    title: "Satria",
    desc: "Our representative for the Kontes Robot SAR Indonesia (KRSRI) division of Kontes Robot Indonesia (KRI).",
    logo: StaticToJsx({ src: satriaLogo, alt: "Satria Logo", height: 40 }),
    direction: "backward",
    members: [],
  },
  {
    title: "Yudishtira",
    desc: "Our representative for the Kontes Robot Tematik Indonesia (KRTMI) division of Kontes Robot Indonesia (KRI).",
    logo: StaticToJsx({
      src: yudishtiraLogo,
      alt: "Yudishtira Logo",
      height: 40,
    }),
    direction: "forward",
    members: [],
  },
  {
    title: "Biantara Racing Plane",
    desc: "Our representative for the Racing Plane (RP) division of Kontes Robot Terbang Indonesia (KRTI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
    direction: "backward",
    members: [],
  },
  {
    title: "Biantara Fixed Wing",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
    direction: "forward",
    members: [],
  },
];
