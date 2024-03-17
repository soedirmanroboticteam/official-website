import { sora } from "@/app/styles/fonts";
import React from "react";

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="grid grid-flow-col grid-cols-5 w-full py-5 justify-center items-start gap-5">
      <div className="col-span-2 px-2 justify-start items-start flex">
        <div className="self-stretch pr-12 pb-12 flex-col justify-start items-start inline-flex">
          <div
            className={`${sora.className} w-96 text-foreground text-5xl font-normal leading-10`}
          >
            {title}
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full px-2 justify-start items-start flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div
            className={`${sora.className} w-full text-justify text-foreground text-opacity-90 text-xl font-normal leading-7`}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
