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

  const skill1 = [
    { icon: html, name: "html" },
    { icon: css, name: "css" },
    { icon: javascript, name: "javascript" },
    { icon: sass, name: "sass" },
    { icon: tailwindcss, name: "tailwindcss" },
    { icon: reactjs, name: "reactjs" },
  ];
  const skill2 = [
    { icon: vite, name: "vite" },
    { icon: nextjs, name: "nextjs" },
    { icon: github, name: "github" },
    { icon: redux, name: "redux" },
    { icon: framer, name: "framer motion" },
  ];
  // const skill2 = [vite, nextjs, github, redux, framer];

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { y: 10, clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)" },
    animate: {
      // opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 0.5,
      },
    },
  };
  const ani = {
    initial: { y: 0, clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)" },
    animate: {
      // opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        delay: 0.8,
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 0.5,
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
          engineering. I love building stuffs for the web, it's almost like an
          addiction. I play music when I don't code, as I also double as a
          guitarist. I've worked with a couple of technologies over the years
          some of which include but aren't limited to:
        </p>
        <br />
        <br />
        <motion.div
          variants={banner}
          initial="initial"
          whileInView="animate"
          className="flex flex-wrap space-x-4"
        >
          {skill1.map((item, i) => (
            <motion.div
              variants={letterAni}
              key={i}
              className="px-4 py-1 space-x-2 flex items-center text-gray-200 rounded-full bg-leMon/50"
            >
              <img className="w-4 h-4" src={item.icon} />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <motion.div
          variants={banner}
          initial="initial"
          whileInView="animate"
          className="flex flex-wrap space-x-4"
        >
          {skill2.map((item, i) => (
            <motion.div
              variants={ani}
              key={i}
              className="px-4 py-1 space-x-2 flex items-center text-gray-200 rounded-full bg-leMon/50"
            >
              <img className="w-4 h-4" src={item.icon} />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
