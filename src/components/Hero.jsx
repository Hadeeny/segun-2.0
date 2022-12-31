const Hero = () => {
  return (
    <section
      className="w-10/12 text-white h-screen flex flex-col 
    justify-center items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <h2 className="text-primary text-2xl">Hi, my name is</h2>
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-white text-[2.1rem] leading-[2.2rem] md:text-[5rem] font-semibold">
          Oluwasegun Adeniyi
        </h1>

        <h2
          className="text-gray-200 text-[2.1rem] leading-[2.4rem] md:text-[5rem] 
        max-w-sm md:max-w-4xl md:leading-[5rem] font-semibold"
        >
          Unrivalled{" "}
          <span className="bg-clip-text text-transparent font-extrabold 
          bg-gradient-to-r from-primary to-violet-200">
            creativity
          </span>{" "}
          is just the begining
        </h2>
      </div>

      <p className="max-w-max text-gray-200 mt-6 md:max-w-xl text-xl">
        I’m a software engineer specialized in building fast, responsive & exceptional digital experiences
      </p>
      <div className="leading-[7rem]">
        <a
          href="projects"
          className="px-[4rem] md:px-[8rem] py-4 border-2 text-xl tracking-[0.4rem] border-primary text-primary"
        >
          Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
