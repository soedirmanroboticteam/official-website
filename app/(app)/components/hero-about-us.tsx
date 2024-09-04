const HeroAboutUs = ({ title }: { title: string }) => {
  return (
    <section className="flex-col justify-start items-center gap-8 py-6 md:py-12 flex">
      <div className="w-full py-1 flex justify-center items-center">
        <div className="text-white text-center text-5xl md:text-8xl font-bold font-poppins uppercase leading-10">
          {title}
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-center mt-4">
        <div className="text-foreground text-xs md:text-xl font-normal font-poppins md:leading-7">
          The future we make, For the better life!
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
