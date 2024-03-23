import {
  BlakasuthaLogo,
  satriaLogo,
  yudishtiraLogo,
  biantaraLogo,
  StaticToJsx,
} from "@/assets";
import { StaticImageData } from "next/image";
import {
  krai01,
  krai02,
  krai03,
  krai04,
  krai05,
  krai06,
  krai07,
  krai08,
  krai09,
  krai10,
  krai11,
  krai12,
  krai13,
  krai14,
  krai15,
  krai16,
  krai17,
  krai18,
  krai19,
  krai20,
  krai21,
  krai22,
  krai23,
} from "@/assets/technical/krai";
import {
  krsri01,
  krsri02,
  krsri03,
  krsri04,
  krsri05,
  krsri06,
  krsri07,
  krsri08,
  krsri09,
  krsri10,
  krsri11,
  krsri12,
} from "@/assets/technical/krsri";
import {
  krtmi01,
  krtmi02,
  krtmi03,
  krtmi04,
  krtmi05,
  krtmi06,
  krtmi07,
  krtmi08,
  krtmi09,
  krtmi10,
  krtmi11,
  krtmi12,
  krtmi13,
  krtmi14,
  krtmi15,
  krtmi16,
} from "@/assets/technical/krtmi";
import {
  rp01,
  rp02,
  rp03,
  rp04,
  rp05,
  rp06,
  rp07,
  rp08,
  rp09,
  rp10,
  rp11,
} from "@/assets/technical/rp";
import {
  fw01,
  fw02,
  fw03,
  fw04,
  fw05,
  fw06,
  fw07,
  fw08,
  fw09,
  fw10,
  fw11,
  fw12,
} from "@/assets/technical/fw";

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
    members: [
      {
        alt: "Head of KRAI",
        img: krai01,
      },
      {
        alt: "Manager of KRAI",
        img: krai02,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai03,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai04,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai05,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai06,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai07,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai08,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai09,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai10,
      },
      {
        alt: "Mechanic of KRAI",
        img: krai11,
      },
      {
        alt: "Electronic of KRAI",
        img: krai12,
      },
      {
        alt: "Electronic of KRAI",
        img: krai13,
      },
      {
        alt: "Electronic of KRAI",
        img: krai14,
      },
      {
        alt: "Electronic of KRAI",
        img: krai15,
      },
      {
        alt: "Electronic of KRAI",
        img: krai16,
      },
      {
        alt: "Electronic of KRAI",
        img: krai17,
      },
      {
        alt: "Programmer of KRAI",
        img: krai18,
      },
      {
        alt: "Programmer of KRAI",
        img: krai19,
      },
      {
        alt: "Programmer of KRAI",
        img: krai20,
      },
      {
        alt: "Programmer of KRAI",
        img: krai21,
      },
      {
        alt: "Programmer of KRAI",
        img: krai22,
      },
      {
        alt: "Programmer of KRAI",
        img: krai23,
      },
    ],
  },
  {
    title: "Satria",
    desc: "Our representative for the Kontes Robot SAR Indonesia (KRSRI) division of Kontes Robot Indonesia (KRI).",
    logo: StaticToJsx({ src: satriaLogo, alt: "Satria Logo", height: 40 }),
    direction: "backward",
    members: [
      {
        alt: "Head of KRSRI",
        img: krsri01,
      },
      {
        alt: "Manager of KRSRI",
        img: krsri02,
      },
      {
        alt: "Mechanic of KRSRI",
        img: krsri03,
      },
      {
        alt: "Mechanic of KRSRI",
        img: krsri04,
      },
      {
        alt: "Mechanic of KRSRI",
        img: krsri05,
      },
      {
        alt: "Mechanic of KRSRI",
        img: krsri06,
      },
      {
        alt: "Electronic of KRSRI",
        img: krsri07,
      },
      {
        alt: "Electronic of KRSRI",
        img: krsri08,
      },
      {
        alt: "Electronic of KRSRI",
        img: krsri09,
      },
      {
        alt: "Programmer of KRSRI",
        img: krsri10,
      },
      {
        alt: "Programmer of KRSRI",
        img: krsri11,
      },
      {
        alt: "Programmer of KRSRI",
        img: krsri12,
      },
    ],
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
    members: [
      {
        alt: "Head of KRTMI",
        img: krtmi01,
      },
      {
        alt: "Manager of KRTMI",
        img: krtmi02,
      },
      {
        alt: "Mechanic of KRTMI",
        img: krtmi03,
      },
      {
        alt: "Mechanic of KRTMI",
        img: krtmi04,
      },
      {
        alt: "Mechanic of KRTMI",
        img: krtmi05,
      },
      {
        alt: "Mechanic of KRTMI",
        img: krtmi06,
      },
      {
        alt: "Mechanic of KRTMI",
        img: krtmi07,
      },
      {
        alt: "Electronic of KRTMI",
        img: krtmi08,
      },
      {
        alt: "Electronic of KRTMI",
        img: krtmi09,
      },
      {
        alt: "Electronic of KRTMI",
        img: krtmi10,
      },
      {
        alt: "Electronic of KRTMI",
        img: krtmi11,
      },
      {
        alt: "Programmer of KRTMI",
        img: krtmi12,
      },
      {
        alt: "Programmer of KRTMI",
        img: krtmi13,
      },
      {
        alt: "Programmer of KRTMI",
        img: krtmi14,
      },
      {
        alt: "Programmer of KRTMI",
        img: krtmi15,
      },
      {
        alt: "Programmer of KRTMI",
        img: krtmi16,
      },
    ],
  },
  {
    title: "Biantara Racing Plane",
    desc: "Our representative for the Racing Plane (RP) division of Kontes Robot Terbang Indonesia (KRTI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
    direction: "backward",
    members: [
      {
        alt: "Head of KRTI RP",
        img: rp01,
      },
      {
        alt: "Manager of KRTI RP",
        img: rp02,
      },
      {
        alt: "Mechanic of KRTI RP",
        img: rp03,
      },
      {
        alt: "Mechanic of KRTI RP",
        img: rp04,
      },
      {
        alt: "Mechanic of KRTI RP",
        img: rp05,
      },
      {
        alt: "Mechanic of KRTI RP",
        img: rp06,
      },
      {
        alt: "Mechanic of KRTI RP",
        img: rp07,
      },
      {
        alt: "Electronic of KRTI RP",
        img: rp08,
      },
      {
        alt: "Electronic of KRTI RP",
        img: rp09,
      },
      {
        alt: "Electronic of KRTI RP",
        img: rp10,
      },
      {
        alt: "System of KRTI RP",
        img: rp11,
      },
    ],
  },
  {
    title: "Biantara Fixed Wing",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
    direction: "forward",
    members: [
      {
        alt: "Head of KRTI FW",
        img: fw01,
      },
      {
        alt: "Manager of KRTI FW",
        img: fw02,
      },
      {
        alt: "Mechanic of KRTI FW",
        img: fw03,
      },
      {
        alt: "Mechanic of KRTI FW",
        img: fw04,
      },
      {
        alt: "Mechanic of KRTI FW",
        img: fw05,
      },
      {
        alt: "Mechanic of KRTI FW",
        img: fw06,
      },
      {
        alt: "Mechanic of KRTI FW",
        img: fw07,
      },
      {
        alt: "Electronic of KRTI FW",
        img: fw08,
      },
      {
        alt: "Electronic of KRTI FW",
        img: fw09,
      },
      {
        alt: "Electronic of KRTI FW",
        img: fw10,
      },
      {
        alt: "System of KRTI FW",
        img: fw11,
      },
      {
        alt: "System of KRTI FW",
        img: fw12,
      },
    ],
  },
];
