import { motion } from "framer-motion";

const Hero = () => {
  const name = "Oluwasegun";
  const banner = {
    animate: {
      transition: {
        delayChildren: 4.4,
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
      className="w-10/12 text-white h-screen snap-center flex flex-col 
    justify-center items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <motion.h2
        transition={{ delay: 5, duration: 1 }}
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
        className="text-leMon font-oxanium text-xl mb-1 md:text-3xl"
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
            transition={{ delay: 5.1, duration: 1 }}
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
        transition={{ delay: 5.1, duration: 1 }}
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
        I’m a software engineer specialized in building fast, responsive &
        exceptional digital experiences
      </motion.p>
      <motion.div
        transition={{ delay: 5.2, duration: 1 }}
        initial={{
          y: 200,
          clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
        }}
        animate={{
          y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        className="leading-[7rem] relative group-disabled: md:group"
      >
        <div
          className="h-0 group:group-hover:p-8 group-hover:h-[3.7rem] 
        group-hover:w-full duration-300 absolute w-0 top-6 bg-leMon"
        />
        <a
          href="#projects"
          className="px-[2rem] md:px-[6rem] relative z-10 duration-300 
          hover:text-white py-2 md:py-4 border-2 text-xl tracking-[0.4rem] border-leMon text-leMon"
        >
          Projects
        </a>
      </motion.div>
      {/* <a href="#contact">Contact</a> */}
    </motion.section>
  );
};

export default Hero;
