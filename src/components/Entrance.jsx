import { useState, useEffect } from "react";
import Screens from "./Screens";
import lottie from "../image/coder.json";
import { useLottie } from "lottie-react";
import segun from "../image/segun.jpg";
import { motion, AnimatePresence, spring } from "framer-motion";
const Entrance = () => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  const title = "EXCELLENCE!";
  const banner = {
    animate: {
      transition: {
        delayChildren: 2.3,
        staggerChildren: 0.1,
      },
    },
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
    }, 4750);
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
          delay: 1.4,
          duration: 1.1,
        }}
        className={`w-screen h-screen ${
          !showEntranceAnimation && "hidden"
        } fixed z-[200] top-0 bottom-0 left-0 bg-[#13111d]`}
      >
        <div className="outer">
          <div className="flex middle">
            <motion.div
              variants={banner}
              initial="initial"
              whileInView="animate"
              className={`fixed
            top-0 bottom-0 h-screen w-screen z-[500] bg-transparent flex justify-center items-center left-0 right-0`}
            >
              <div className="w-11/12 md:w-1/2">{View}</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* decoy */}
    </motion.section>
  );
};

export default Entrance;
