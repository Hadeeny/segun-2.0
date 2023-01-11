import html from "../image/html-svgrepo-com.svg";
import css from "../image/css.svg";
import javascript from "../image/javascript.svg";
import sass from "../image/sass.svg";
import framer from "../image/framer.svg";
import redux from "../image/redux.svg";
import tailwindcss from "../image/tailwindcss.svg";
import reactjs from "../image/reactjs.svg";
import vite from "../image/vite.svg";
import github from "../image/github.svg";
import nextjs from "../image/nextjs.svg";
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
        <p className="text-xl md:max-w-2xl">
          I'm a front-end developer from West Africa with a degree in civil
          engineering. What I have for software development is more of an
          addiction than a passion, passion is what I have for music, as I also
          double as a guitarist. I've worked with a couple of technologies over
          the years some of which include but aren't limited to:
        </p>
        <br />
        <br />
        <div className="flex flex-wrap space-x-4">
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={html} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={css} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={javascript} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={sass} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={tailwindcss} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={reactjs} />
          </div>
        </div>
        <br />
        <div className="flex flex-wrap space-x-4">
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={github} />
          </div>

          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={framer} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={redux} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={nextjs} />
          </div>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={vite} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
