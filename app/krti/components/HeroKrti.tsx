const HeroKrti = () => {
  return (
    <section className="flex-col justify-start items-center gap-8 py-6 md:py-12 flex ">
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 w-full">
        <div className="relative flex flex-col justify-center items-center">
          <div className="w-full py-1 flex justify-center items-center">
            <div className="text-white text-center text-5xl md:text-8xl font-bold font-poppins uppercase leading-10">
              KRTI Teams
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-center mt-4">
            <div className="text-foreground text-xs md:text-xl font-normal font-poppins md:leading-7">
              Do Innovation, Be Responsible, and Create <br />
              Connection <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKrti;
