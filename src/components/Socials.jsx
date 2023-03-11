import { motion } from "framer-motion";
// import { RiGithubLine } from "react-icons/ri";
// import { MdOutlineOpenInNew } from "react-icons/md";
import { SiGmail } from "react-icons/si";
// import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";

const Socials = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 4.4,
        staggerChildren: 0.1,
      },
    },
  };

  // const letterAni = {
  //   initial: { opacity: 0 },
  //   animate: {
  //     opacity: 1,
  //     scale: [1, 1.4, 1, 1.4, 1],
  //     transition: {
  //       ease: "easeIn",
  //       // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
  //       duration: 0.7,
  //     },
  //   },
  // };

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
    <motion.div
      // variants={banner}

      className="hidden fixed z-[900] bottom-0 left-2 bg-transparent w-[2rem] md:flex flex-col items-center"
    >
      <motion.ul className="space-y-4">
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.4, duration: 0.5 }}
        >
          <a href="https://github.com/hadeeny" target="_blank">
            <FaGithub size={25} color={"#bae67e"} />
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.5 }}
        >
          <a target="_blank" href="https://twitter.com/segun_deniyi">
            <ImTwitter size={25} color={"#bae67e"} />
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.8, duration: 0.5 }}
        >
          <a href="#contact">
            <SiGmail size={25} color={"#bae67e"} />
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.6, duration: 0.5 }}
        >
          <a href="https://linkedin.com/in/segundeniyi" target="_blank">
            <GrLinkedinOption size={25} color={"#bae67e"} />
          </a>
        </motion.li>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "10rem" }}
        transition={{ delay: 5.8, duration: 1 }}
        className="w-1 h-[10rem] mt-5 bg-leMon"
      />
    </motion.div>
  );
};

export default Socials;
