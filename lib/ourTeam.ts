import {
  BlakasuthaLogo,
  satriaLogo,
  yudishtiraLogo,
  biantaraLogo,
  StaticToJsx,
} from "@/assets";

export const teamSection: {
  title: string;
  desc: string;
} = {
  title: "Our Team",
  desc: "Soedirman Robotic Team adalah salah satu unit kegiatan mahasiswa yang berkecimpung dalam pengembangan dunia robotic serta sebagai sarana pengembangan kreativitas mahasiswa dalam berkarya.",
};

export const ourTeams: {
  title: string;
  desc: string;
  logo: React.JSX.Element;
}[] = [
  {
    title: "Blakasutha",
    desc: "Melakukan riset dan  pengembangan  robot ABU Robocon yang akan diikutkan ke ajang kontes robot Abu Indonesia. oleh tim KRAI.",
    logo: BlakasuthaLogo({ height: 40 }),
  },
  {
    title: "Satria",
    desc: "Bergerak dalam bidang riset dan pengembangan robot otonom berkaki khususnya dalam ajang Kontes Robot Indonesia divisi kontes robot SAR. Memiliki tugas yang mencakup  tentang konsep robot yang akan dibuat, seperti bentuk fisik,dimensi robot, komponen yang digunakan ,dan algoritma  pergerakan robot.",
    logo: StaticToJsx({ src: satriaLogo, alt: "Satria Logo", height: 40 }),
  },
  {
    title: "Yudishtira",
    desc: "Melakukan riset dan pengembangan robot tematik yang akan diikutkan ke ajang kontes  robot tematik  indonesia  oleh tim KRTMI dan ikut  berkecimpung dalam memastikan robot yang akan diikutkan dalam ajang tersebut.",
    logo: StaticToJsx({ src: yudishtiraLogo, alt: "Yudishtira Logo", height: 40 }),
  },
  {
    title: "Biantara Racing Plane",
    desc: "Berfokus merancang dan mengembangkan  robot terbang tanpa awak dalam bidang aeromodelling agar dapat bergerak dengan lincah , cepat dan akurat pada lintasan.yang diinginkan.",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
  },
  {
    title: "Biantara Fixed Wing",
    desc: "Melakukan riset berkala di bidang robot terbang dalam mempersiapkan robot yang akan diikut konteskan serta mengembangkan robot tersebut untuk dipastikan kembali..",
    logo: StaticToJsx({ src: biantaraLogo, alt: "Biantara Logo", height: 40 }),
  },
];
