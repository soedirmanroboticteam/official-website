import { other04 } from "@/assets/otherpages";
import Image from "next/image";

const OurHistory = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 py-6 md:py-12">
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="text-xl">2024 - Now</div>
        <div className="md:text-3xl text-2xl  font-bold mb-4">
          Progress Ke <br />
          Depan <br />
        </div>
        <div className="md:text-xl text-lg text-justify">
          Soedirman Robotic Team bergerak dalam pengembangan ilmu robotika dan
          keorganisasian di Universitas Jenderal Soedirman. Kegiatan kedepan
          yang akan dilaksanakan oleh UKM ini berupa kegiatan magang yang dapat
          diikuti dengan mengisi form pada{" "}
          <a
            href="https://www.soedirmanrobotic.com/internship"
            className="text-yellow-600 underline"
          >
            {" "}
            link
          </a>{" "}
          ini
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="md:h-[400px] relative">
          <Image
            src={other04}
            alt="Our History"
            className="object-cover border-black rounded-lg bg-black h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
