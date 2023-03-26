import { SiGmail } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Menu = () => {
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        transition={{ delay: 5.5, type: "spring", duration: 1 }}
        initial={{ opacity: 0, y: 200 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-10/12 fixed top-10    
        rounded-xl px-4 
        ${!show && "hidden"}
         left-0 right-0 mx-auto flex z-[1400] justify-between items-center md:py-4 py-2`}
      >
        <div
          className={`text-secondary ${
            showMenu && "text-black"
          } font-bold font-dancing text-xl`}
        >
          {"<Deniyi/>"}
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className={`flex bg-[#202838] w-12 h-12 rounded-full flex-col cursor-pointer z-[1400] 
          items-center justify-center gap-y-2`}
        >
          <div
            className={`w-6 h-[2px] duration-500 ${
              showMenu && "rotate-45 translate-y-[10px] duration-500"
            } bg-secondary`}
          />
          <div
            className={`w-9 h-[2px] duration-500 bg-secondary ${
              showMenu && "translate-x-96 duration-500"
            }`}
          />
          <div
            className={`w-6 h-[2px] duration-500 ${
              showMenu && "-rotate-45 translate-y-[-10px] duration-500"
            } bg-secondary`}
          />
        </div>
      </motion.div>
      {/* Menui slider */}
      <motion.div className="relative w-full h-full">
        <div
          className={`bg-leMon fixed top-0 left-0 z-[1200] w-1/4 duration-500 ${
            showMenu ? "h-full" : "h-0 delay-[1200ms]"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500 fixed top-0 left-[25%] right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full delay-[400ms]" : "h-0 delay-[800ms]"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500  fixed top-0 left-[50%] right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full delay-[800ms]" : "h-0 delay-[400ms]"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500  fixed top-0 right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full delay-[1200ms]" : "h-0 delay-[100ms]"
          }`}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          // exit={{ y: -100 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className={`fixed top-[25%]  flex ${
            !showMenu && "hidden"
          } flex-col md:flex-row gap-y-12 left-0 right-0 w-10/12 mx-auto z-[1300]`}
        >
          <div className=" w-full space-y-6 md:w-1/2">
            <div className=" text-sm tracking-[0.3rem] font-semibold uppercase">
              Online
            </div>
            <ul className="space-x-4 flex">
              <li>
                <a href="https://github.com/hadeeny" target="_blank">
                  <FaGithub size={30} color={"#000000"} />
                </a>
              </li>

              <li>
                <a href="https://linkedin.com/in/segundeniyi" target="_blank">
                  <GrLinkedinOption size={30} color={"#000000"} />
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#contact">
                  <SiGmail size={30} color={"#000000"} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/segun_deniyi">
                  <ImTwitter size={30} color={"#000000"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <div className="  text-sm tracking-[0.3rem] font-semibold uppercase">
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
