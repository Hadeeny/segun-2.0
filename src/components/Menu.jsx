import { SiGmail } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollEffect from "../../hooks/useScrollEffect";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const show = useScrollEffect();

  return (
    <>
      <motion.div
        transition={{ duration: 1, delay: 5.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-11/12  fixed top-4 md:top-1    
        rounded-xl px-2 
        ${!show && "block"}
         left-0 right-0 mx-auto flex z-[1400] justify-between items-center md:py-4 py-1`}
      >
        <div
          className={`text-secondary ${
            show
              ? "md:translate-x-12 translate-x-4 -translate-y-4 opacity-100"
              : "opacity-0"
          } ${
            showMenu && "text-gray-200"
          } font-bold font-dancing text-xl duration-1000`}
        >
          {"<Deniyi/>"}
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className={`flex bg-leMon ${
            show
              ? "translate-x-0 -translate-y-2 opacity-100"
              : "opacity-0 -translate-x-14"
          } w-10 h-10 rounded-full flex-col cursor-pointer z-[1400] 
          items-center duration-1000 justify-center gap-y-1.5`}
        >
          <div
            className={`w-5 h-[2px] duration-500 ${
              showMenu && "rotate-45 translate-y-[8px] duration-500"
            } bg-secondary`}
          />
          <div
            className={`w-7 h-[2px] duration-500 bg-secondary ${
              showMenu && "translate-x-96 duration-500"
            }`}
          />
          <div
            className={`w-5 h-[2px] duration-500 ${
              showMenu && "-rotate-45 translate-y-[-8px] duration-500"
            } bg-secondary`}
          />
        </div>
      </motion.div>
      {/* Decoy */}
      <motion.div
        transition={{ delay: 6, duration: 0.4 }}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        className="fixed w-full h-[8rem] bg-primary z-[99]"
      ></motion.div>
      {/* Menui slider */}
      <motion.div className="relative w-full h-full">
        <div
          className={`bg-leMon fixed top-0 left-0 h-full z-[1200] w-full ${
            showMenu
              ? "clip-active ease-in-out duration-[1.5s]"
              : "clip-inactive ease-in-out duration-1000"
          }`}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className={`fixed top-[25%]  flex ${
            !showMenu && "hidden"
          } flex-col md:flex-row  gap-y-12 left-0 right-0 w-10/12 mx-auto z-[1300]`}
        >
          <div className=" w-full space-y-6 md:w-1/2">
            <div className=" text-sm text-gray-200 tracking-[0.3rem] font-semibold uppercase">
              Online
            </div>
            <ul className="space-x-4 items-center flex">
              <li>
                <a href="https://github.com/hadeeny" target="_blank">
                  <FaGithub size={30} color={"#000000"} />
                </a>
              </li>

              <li>
                <a href="https://linkedin.com/in/segundeniyi" target="_blank">
                  <GrLinkedinOption size={30} color={"rgb(6 182 212)"} />
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#contact">
                  <SiGmail size={30} color={"rgb(248 113 113)"} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/segun_deniyi">
                  <ImTwitter size={30} color={"rgb(96 165 250)"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <div className="  text-sm text-gray-200 tracking-[0.3rem] font-bold uppercase">
              Navigation
            </div>
            <ul className="space-y-4">
              <li onClick={() => setShowMenu(false)}>
                <a
                  href="#home"
                  className="text-[2rem] hover:tracking-[0.3rem] duration-500 text-gray-200 uppercase"
                >
                  Home
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a
                  href="#about"
                  className="text-[2rem] hover:tracking-[0.3rem] duration-500 text-gray-200 uppercase"
                >
                  About
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a
                  href="#projects"
                  className="text-[2rem] hover:tracking-[0.3rem] duration-500 text-gray-200 uppercase"
                >
                  Project
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a
                  href="#contact"
                  className="text-[2rem] hover:tracking-[0.3rem] duration-500 text-gray-200 uppercase"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Menu;
