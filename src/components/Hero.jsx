import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import lottie from "../image/coder.json";
const Hero = () => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  const name = "Oluwasegun";
  const banner = {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { opacity: 0, x: 500 },
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
    <motion.section
      id="home"
      className="w-10/12 text-white h-screen snap-center flex justify-center md:flex-row flex-col
      mx-auto"
    >
      <div className="w-full  flex flex-col justify-center items-start gap-y-2 md:gap-y-6 md:w-1/2">
        <motion.h2
          transition={{ delay: 2.1, duration: 1 }}
          // initial={{ y: 80, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          initial={{
            y: 50,
            clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
          }}
          animate={{
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className="text-gray-400 font-oxanium text-xl mb-4 md:mb-1 md:text-3xl"
        >
          Hi, my name is
        </motion.h2>
        <motion.div
          variants={banner}
          initial="initial"
          animate="animate"
          className="flex"
        >
          <motion.div
            transition={{ delay: 2.2, type: "spring", damping: 8, duration: 1 }}
            initial={{
              y: 200,
              clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
            }}
            animate={{
              y: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            className="text-white -mt-5 text-[2rem] tracking-[0.3rem] md:text-[5rem] font-oxanium font-semibold"
          >
            Oluwasegun
          </motion.div>
        </motion.div>
        <motion.p
          transition={{ delay: 2.5, duration: 1 }}
          initial={{
            y: 200,
            clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
          }}
          animate={{
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className="max-w-max font-oxanium text-gray-200 md:max-w-xl text-lg md:text-xl"
        >
          I’m a{" "}
          <span className="text-cyan-500 font-medium">software engineer</span>{" "}
          specialized in building fast, responsive & exceptional digital
          experiences
        </motion.p>

        <motion.a
          transition={{ delay: 3.6, duration: 1, ease: "anticipate" }}
          // initial={{ y: 80, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          initial={{
            y: 50,
            clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
          }}
          animate={{
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          href="#projects"
          className="leading-[7rem] z-10 rounded md:text-xl text-lg mt-[2rem]
        tracking-[0.4rem] duration-500 bg-gradient-to-l
        md:rounded-lg from-rouge to-cyan-500 text-white
        hover:tracking-[0.6rem] w-[12rem] shadow-md flex justify-center
        h-[2.8rem] items-center relative md:w-[18rem] md:h-[4rem]"
        >
          Projects
        </motion.a>
      </div>
      <motion.div
        transition={{ delay: 4.7, duration: 0.6, type: "spring", damping: 8 }}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full hidden md:flex justify-center items-center md:w-1/2"
      >
        {View}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
