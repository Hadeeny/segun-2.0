import { useState, useEffect } from "react";
import Screens from "./Screens";
import { motion, AnimatePresence } from "framer-motion";
const Entrance = () => {
  const title = "Loading...";
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
  useEffect(() => {
    setTimeout(() => {
      setShowEntranceAnimation(false);
    }, 10000);
    setTimeout(() => {
      setShowLoading(false);
    }, 5000);
  }, []);
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  return (
    <motion.section>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, delay: 1, ease: "easeIn" }}
        className={`w-screen h-screen ${
          !showEntranceAnimation && "hidden"
        } fixed z-[400] top-0 left-0 bg-gray-800`}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, delay: 1.3, ease: "easeIn" }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[300] top-0 left-0 right-0 bg-leMon`}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, delay: 3, ease: "easeIn" }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[200] top-0 right-0 left-0 bg-gray-800`}
      />
      <motion.div
        variants={banner}
        initial="initial"
        whileInView="animate"
        className={`fixed ${!showLoading && "hidden"} tracking-[0.3rem] 
            top-0 h-screen w-screen z-[500] bg-transparent flex justify-center items-center left-0 right-0`}
      >
        {title.split("").map((letters, i) => (
          <motion.span
            variants={letterAni}
            key={i}
            className="text-secondary tracking-[0.5rem] text-center 
        min-w-max "
          >
            {letters}
          </motion.span>
        ))}
      </motion.div>
      {/* <Screens /> */}
    </motion.section>
  );
};

export default Entrance;
