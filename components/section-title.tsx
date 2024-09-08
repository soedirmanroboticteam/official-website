import React from "react";

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col md:grid md:grid-flow-col grid-cols-9 w-full py-5 justify-center items-start gap-6 md:gap-5">
      <div className="col-span-4 md:px-2 justify-start items-start flex">
        <h3 className="text-foreground text-5xl font-normal leading-10">
          {title}
        </h3>
      </div>
      <div className="col-span-5 w-full md:px-2 justify-start items-start flex">
        <p className="w-full text-justify text-foreground text-opacity-90 text-xl font-normal leading-7">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
