import { motion } from "framer-motion";
const About = () => {
  const aboutText = "About Me";

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { opacity: 0, x: 600 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 1,
      },
    },
  };
  return (
    <section
      id="about"
      className="w-10/12 text-secondary snap-center snap-y snap-mandatory h-screen flex flex-col 
         items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-primary">01.</div>
        <motion.div
          variants={banner}
          initial="initial"
          whileInView="animate"
          className="text-[1.5rem]  font-oxanium font-bold px-2 min-w-max"
        >
          {aboutText.split("").map((letter, i) => (
            <motion.span variants={letterAni} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="h-[0.1rem] bg-[#bae67e] w-full"></div>
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
