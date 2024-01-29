import { unsoedVector } from "@/assets";
import { StaticImageData } from "next/image";

export const footSponsors: {
  title: string;
  href: string;
  src: StaticImageData;
  height?: number;
}[] = [
  {
    title: "Universitas Jenderal Soedirman",
    href: "https://unsoed.ac.id",
    src: unsoedVector,
  },
];
