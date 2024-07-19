'use client' //Client Side
import { StaticImageData } from "next/image";
import { krsri01,
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
    krsri12 } from "@/assets/otherpages/krsri";

export const krsriTeam: {
  img: StaticImageData;
  name: string;
  division: string;
}[] = [
  {
    img: krsri01,
    name: "Arsyada Rizqi Nur Hidayat",
    division: "Head of KRSRI"
  },
  {
    img: krsri02,
    name: "Nikita Anugrah",
    division: "Manager of KRSRI"
  },
  {
    img: krsri03,
    name: "Rafi Satria Dwi Awanda",
    division: "Mechanic of KRSI"
  },
  {
    img: krsri04,
    name: "Enggar Seto Ginalih",
    division: "Mechanic of KRSRI"
  },
  {
    img: krsri05,
    name: "Rahmat Fadil Pratama",
    division: "Mechanic of KRSRI"
  },
  {
    img: krsri06,
    name: "Nadaa Mufiidah Sari",
    division: "Mechanic of KRSRI"
  },
  {
    img: krsri07,
    name: "Galuh Agung Wicaksono",
    division: "Electronic of KRAI"
  },
  {
    img: krsri08,
    name: "Hermawan",
    division: "Electronic of KRAI"
  },
  {
    img: krsri09,
    name: "Rafid Zaki Nurrohman",
    division: "Electronic of KRAI"
  },
  {
    img: krsri10,
    name: "Tegar Dwi Agung Saputra",
    division: "Programmer of KRAI"
  },
  {
    img: krsri11,
    name: "Bagja Hanifan Hilmana",
    division: "Programmer of KRAI"
  },
  {
    img: krsri12,
    name: "Harun Yahya",
    division: "Programmer of KRAI"
  },
];


