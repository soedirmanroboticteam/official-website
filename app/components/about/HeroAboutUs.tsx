/* eslint-disable @next/next/no-img-element */
'use client' //Client Side
import { Management } from "@/assets/otherpages/about";
import Image from 'next/image';

const HeroAboutUs = () => {
  return (
    <section className="flex-col justify-start items-center gap-8 py-6 md:py-12 flex">
      <div className="relative flex flex-col md:flex-row bg-black justify-center items-center gap-8 md:gap-32 w-full">
        <div className="relative flex flex-col justify-center items-center">
          <div className="w-full py-1 flex justify-center items-center">
            <div className="text-white text-center text-5xl md:text-8xl font-bold font-poppins uppercase leading-10">
              Soedirman <br />
              Robotic Team <br />
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-center mt-4">
            <div className="text-foreground text-xs md:text-xl font-normal font-poppins md:leading-7">
              Do Innovation, Be Responsible, and Create <br />
              Connection <br />
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-8 md:max-w-7xl max-w-6xl md:px-10 px-4">
            <Image
                src={Management}
                alt="Team Image"
                className="border-20px border-black rounded-lg bg-black "
            />
          </div>
          <div className="w-full flex justify-center items-center text-center mt-10 md:mt-24">
            <div className="text-foreground text-2xl md:text-4xl font-bold font-poppins md:leading-7">
              OUR STORY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
