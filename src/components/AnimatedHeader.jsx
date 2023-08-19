import { motion } from "framer-motion";
import React from "react";
import useScrollEffect from "../../hooks/useScrollEffect";

const AnimatedHeader = ({ headerTitle, itemNum }) => {
  const show = useScrollEffect();
  const title = headerTitle;

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
        duration: 0.2,
      },
    },
  };
  return (
    <div
      className={`my-[4rem] py-4 z-[2000] flex sticky bg-transparent 
      backdrop-blur-md px-6 md:px-20 top-0 items-center w-full`}
    >
      <div
        className={`text-md ${
          show
            ? "translate-y-3 text-white translate-x-3 md:translate-x-7 text-sm"
            : ""
        } text-rouge duration-1000`}
      >
        {itemNum}
      </div>
      <motion.div
        // variants={banner}
        initial="initial"
        whileInView="animate"
        className={`duration-1000 font-oxanium ${
          show
            ? "translate-y-3 translate-x-2 md:translate-x-6 text-sm"
            : "text-md"
        } font-bold px-2 pt-1 min-w-max`}
      >
        {headerTitle}
      </motion.div>
      {/* <div className="h-[0.1rem] bg-leMon w-full"></div> */}
    </div>
  );
};

export default AnimatedHeader;
