import Image from "next/image";

const OurAchievement = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-6 md:py-12">
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="md:h-[400px] relative">
          <Image
            src="/images/login.png"
            alt="Our History"
            width={1080}
            height={1080}
            className="object-cover border-black rounded-lg bg-black h-full w-full"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="text-xl">2021 - 2024</div>
        <div className="md:text-3xl text-2xl  font-bold mb-4">
          Pencapaian <br />
          SRT <br />
        </div>
        <div className="md:text-xl text-lg text-justify">
          Soedirman Robotic Team telah meraih berbagai prestasi seperti juara
          tiga nasional divisi racing plane pada tahun 2023, peringkat 5
          nasional divisi KRSRI tahun 2021, dan masih banyak lagi. Saat ini, Tim
          Blakasutha KRAI dan Tim Satria KRSRI telah melaksanakan Kontes Robot
          Indonesia 2024 pada tanggal 1 - 6 Juli 2024 di Solo
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
