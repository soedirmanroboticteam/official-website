import { image1, image2, image3, image4, image5, image6 } from "@/assets/hero";
import Image from "next/image";
import React from "react";

const HeroGallery = () => {
  return (
    <div className="w-svw md:w-full h-[424px] flex flex-row gap-2 md:gap-5 rounded-3xl overflow-hidden">
      <div className="basis-64 md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image1}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="basis-64 md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image2}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="basis-64 md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image3}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="basis-64 md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image4}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="hidden md:block md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image5}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="hidden md:block md:basis-1/6 md:hover:basis-2/6 rounded-xl bg-black transition-all duration-300 ease-in-out">
        <Image
          src={image6}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroGallery;
