'use client' //Client Side
import { management1 } from "@/assets/hero";
import Image from 'next/image';

const OurHistory = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 py-6 md:py-12">
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <div className="text-xl">24 July</div>
        <div className="md:text-3xl text-xl  font-bold mb-4">Our History</div>
        <div className="text-xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-32">
        <Image src={management1} alt="Our History" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default OurHistory;
