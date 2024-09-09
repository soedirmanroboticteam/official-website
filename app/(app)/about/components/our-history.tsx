import Image from "next/image";

const OurHistory = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 py-6 md:py-12">
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="text-xl">2009 - 2021</div>
        <div className="md:text-3xl text-2xl font-bold mb-4">
          Awal Mula <br />
          Terbentuk <br />
        </div>
        <div className="md:text-xl text-lg text-justify">
          Mahasiswa Unsoed (terutama teknik elektro) melakukan riset robotika
          pada komunitas mahasiswa dan mengikuti lomba kontes robot cerdas
          Indonesia. Perkumpulan ini diresmikan pada tahun 2021 yang menjadi
          Soedirman Robotic Team menjadi UKM pusat
        </div>
      </div>
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
    </section>
  );
};

export default OurHistory;
