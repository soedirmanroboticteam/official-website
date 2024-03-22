import { kri_2021, kri_2023, krti_2023, unsoedVector } from "@/assets";
import { StaticImageData } from "next/image";
import React from "react";

export const ourAchievements: {
  img: StaticImageData;
  title: string;
  pos: string;
  division: string;
}[] = [
  {
    img: krti_2023,
    title: "KRTI 2023",
    pos: "Juara 3 Nasional",
    division: "Divisi Racing Plane",
  },
  {
    img: kri_2023,
    title: "KRI 2023",
    pos: "8 Besar Nasional",
    division: "Divisi KRSRI",
  },
  {
    img: kri_2023,
    title: "KRI 2023",
    pos: "16 Besar Nasional",
    division: "Divisi KRTMI",
  },
  {
    img: kri_2021,
    title: "KRI 2021",
    pos: "Peringkat 5 Nasional",
    division: "Divisi KRSRI",
  },
  {
    img: kri_2021,
    title: "KRI 2021",
    pos: "16 Besar Nasional",
    division: "Divisi KRAI",
  },
  {
    img: kri_2021,
    title: "KRI 2021",
    pos: "Peringkat 5 Nasional",
    division: "Divisi KRSRI",
  },
  {
    img: kri_2021,
    title: "KRI 2021",
    pos: "16 Besar Nasional",
    division: "Divisi KRAI",
  },
];
