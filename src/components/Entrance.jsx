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
    // exit: {opacity:0, x:-300}
  };
  useEffect(() => {
    setTimeout(() => {
      setShowEntranceAnimation(false);
    }, 10000);
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
    setTimeout(() => {
      setIsGreeting(false);
    }, 4550);
  }, []);
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
  const [isGreeting, setIsGreeting] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  return (
    <motion.section className="text-white">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 4.5,
          duration: 1.1,
          // ease: [0.74, 0.06, 0.4, 0.92],
        }}
        className={`w-screen h-screen ${
          !showEntranceAnimation && "hidden"
        } fixed z-[200] top-0 bottom-0 left-0 bg-cyan-700`}
      >
        <div className="outer">
          <div className="middle">
            <motion.div
              className={`text-center ${
                !isGreeting && "hidden"
              } text-[1.2rem] md:text-[3rem] font-bold innter`}
            >
              KONNICHIWA!
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* decoy */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 4.8,
          duration: 0.9,
          ease: [0.74, 0.06, 0.4, 0.92],
        }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[100] top-0 bottom-0 left-0 right-0 bg-red-500`}
      >
        Second
      </motion.div>
      {/* decoy ends */}
      <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{
          delay: 3.5,
          // duration: 0.9,
          ease: [0.74, 0.06, 0.4, 0.92],
        }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[200] top-0 bottom-0 left-0 right-0 bg-red-500`}
      >
        <div className="outer">
          <div className="middle">
            <div className="text-center text-white text-[1.2rem] md:text-[3rem] font-bold innter">
              CIAO!
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{ delay: 2.5, ease: [0.74, 0.06, 0.4, 0.92] }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[300] top-0 bottom-0 right-0 left-0 bg-slate-500`}
      >
        <div className="outer">
          <div className="middle">
            <div className="text-center text-[1.2rem] md:text-[3rem] font-bold innter">
              BONJOUR!
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{
          // duration: 1.4,
          delay: 1.5,
          ease: [0.74, 0.06, 0.4, 0.92],
        }}
        className={`w-screen ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed z-[400] table top-0 bottom-0 right-0 left-0 bg-orange-400`}
      >
        <div className="outer">
          <div className="middle">
            <div className="text-center text-[1.2rem] md:text-[3rem] font-bold innter">
              HOLLA!
            </div>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        variants={banner}
        initial="initial"
        whileInView="animate"
        className={`fixed ${!showLoading && "hidden"} tracking-[0.3rem] 
            top-0 bottom-0 h-screen w-screen z-[500] bg-transparent flex justify-center items-center left-0 right-0`}
      >
        {title.split("").map((letters, i) => (
          <motion.span
            variants={letterAni}
            exit={{ x: 570, transition: { duration: 0.5 } }}
            
            key={i}
            className="text-secondary tracking-[0.5rem] text-center 
        min-w-max "
          >
            {letters}
          </motion.span>
        ))}
      </motion.div> */}
    </motion.section>
  );
};

export default Entrance;
