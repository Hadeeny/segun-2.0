const About = () => {
  return (
    <section
      className="w-10/12 text-white h-screen flex flex-col 
         items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-primary">01.</div>
        <div className="text-[1.5rem] font-bold px-2 min-w-max">
          <h2>About Me</h2>
        </div>
        <div className="h-[0.2rem] w-full bg-primary"></div>
      </div>
      <div className="py-8">
        <p className="max-w-xl text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eum
          itaque nihil blanditiis similique tempora, a ab dolor et fugit.
          Ducimus, dolore. Maxime ipsum possimus veritatis voluptas ut optio
          aut?
        </p>
        <br />
        <p className="max-w-xl text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eum
          itaque nihil blanditiis similique tempora, a ab dolor et fugit.
          Ducimus, dolore. Maxime ipsum possimus veritatis voluptas ut optio
          aut?
        </p>
      </div>
    </section>
  );
};

export default About;
