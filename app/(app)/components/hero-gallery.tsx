import { HeroImages } from "@/app/types/global.types";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const HeroGallery = ({ heroImages }: { heroImages: HeroImages[] }) => {
  return (
    <Fade triggerOnce={true}>
      <div className="w-svw md:w-full h-[424px] flex flex-row gap-2 md:gap-5 rounded-3xl overflow-hidden">
        {heroImages.map((item, index) =>
          index < 4 ? (
            <div
              className={`basis-1/4 md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out`}
              key={index}
            >
              <Image
                src={item.image_url}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-auto h-full object-cover rounded-xl brightness-75"
              />
            </div>
          ) : (
            <div
              className={`hidden md:block md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out`}
              key={index}
            >
              <Image
                src={item.image_url}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-auto h-full object-cover rounded-xl brightness-75"
              />
            </div>
          )
        )}
      </div>
    </Fade>
  );
};

export default HeroGallery;
