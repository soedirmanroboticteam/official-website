'use client' //Client Side
import { Achievement } from "@/assets/otherpages/about";
import Image from 'next/image';

const OurAchievement = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-6 md:py-12">
        <div className="w-full md:w-1/2 px-10 md:px-32">
            <Image
                src={Achievement}
                alt="Our History"
                className="w-full h-auto border-20px border-white rounded-lg bg-black" />
        </div>
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="text-xl">2021 - 2024</div>
        <div className="md:text-3xl text-2xl  font-bold mb-4">
          Pencapaian <br />
          SRT <br />
        </div>
        <div className="md:text-xl text-lg text-justify">
            Soedirman Robotic Team telah meraih berbagai prestasi seperti juara tiga nasional divisi racing plane pada tahun 2023, peringkat 5 nasional divisi KRSRI tahun 2021, dan masih banyak lagi. Saat ini,  Tim Blakasutha KRAI dan Tim Satria KRSRI telah melaksanakan Kontes Robot Indonesia 2024 pada tanggal 1 - 6 Juli 2024 di
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
