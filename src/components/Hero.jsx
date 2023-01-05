import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="w-10/12 text-white h-screen flex flex-col 
    justify-center items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <motion.h2
        transition={{ delay: 6, duration: 1 }}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-primary text-xl"
      >
        Hi, my name is
      </motion.h2>
      <motion.div
        // transition={{delay:14, duration:1}}
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        className="space-y-4 md:space-y-6"
      >
        <motion.h1
          transition={{ delay: 7, duration: 0.7 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white animation-ping text-[2.1rem] leading-[2.2rem] md:text-[5rem] font-semibold"
        >
          Oluwasegun
        </motion.h1>

        <motion.h2
          transition={{ delay: 4.8, duration: 1 }}
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="text-gray-200 text-[2.1rem] leading-[2.4rem] md:text-[5rem] 
        max-w-sm md:max-w-4xl md:leading-[5rem] font-semibold"
        >
          Unrivalled{" "}
          <span
            className="bg-clip-text text-transparent font-extrabold 
          bg-gradient-to-r from-primary to-primary"
          >
            creativity
          </span>{" "}
          is just the <span className="">begining</span>
        </motion.h2>
      </motion.div>

      <motion.p
        transition={{ delay: 7, duration: 0.8 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-max text-gray-200 mt-6 md:max-w-xl text-lg md:text-xl"
      >
        I’m a software engineer specialized in building fast, responsive &
        exceptional digital experiences
      </motion.p>
      <motion.div
        transition={{ delay: 7.4, duration: 0.8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="leading-[7rem] relative group-disabled: md:group"
      >
        <div
          className="h-0 group:group-hover:p-8 group-hover:h-[3.7rem] 
        group-hover:w-full duration-300 absolute w-0 top-6 bg-primary"
        />
        <a
          href="#projects"
          className="px-[2rem] md:px-[6rem] relative z-10 duration-300 hover:text-white py-2 md:py-4 border-2 text-xl tracking-[0.4rem] border-primary text-primary"
        >
          Projects
        </a>
      </motion.div>
      {/* <a href="#contact">Contact</a> */}
    </section>
  );
};

export default Hero;
