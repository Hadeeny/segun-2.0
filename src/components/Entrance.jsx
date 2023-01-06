import { useState, useEffect } from "react";
import Screens from "./Screens";
import { motion, AnimatePresence } from "framer-motion";
const Entrance = () => {
  useEffect(() => {
    setTimeout(() => {
      setShowEntranceAnimation(false);
    }, 10000);
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
  const [showLoading, setShowLoading] = useState(true)
  return (
    <motion.section>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeIn" }}
        className={`w-full h-screen ${
          !showEntranceAnimation && "hidden"
        } fixed top-0 left-0 bg-leMon`}
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeIn" }}
        className={`w-full ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed top-0 left-0 bg-gray-500`}
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 3, ease: "easeIn" }}
        className={`w-full ${
          !showEntranceAnimation && "hidden"
        } h-screen fixed top-0 left-0 bg-["#bae67e"]`}
      />
      <motion.div 
            className={`fixed ${!showLoading && 'hidden'} text-white flex text-2xl tracking-[0.3rem] top-[50%] justify-center left-0 right-0 mx-auto`}>
        
        <div>Loading...</div>
      </motion.div>
      <Screens />
    </motion.section>
  );
};

export default Entrance;
