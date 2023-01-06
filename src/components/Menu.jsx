import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <>
      <motion.div
        transition={{ delay: 9.6, type: "spring", duration: 1 }}
        initial={{ opacity: 0, y: -200 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-10/12 fixed top-10  ${
          showMenu
            ? "bg-transparent"
            : "bg-[#202838]/20 border border-leMon backdrop-blur-md"
        }  
        rounded-xl px-4  left-0 right-0 mx-auto flex z-[1400] justify-between items-center md:py-4 py-2`}
      >
        <div
          className={`text-secondary ${
            showMenu && "text-black"
          } font-bold text-2xl`}
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
      <motion.div
        // initial={{ x: 200 }}
        // whileInView={{ x: 0 }}
        // transition={{ when: "beforeChildren" }}
        className="relative w-full h-full"
      >
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
        {/* <AnimatePresence> */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={`fixed top-[25%] flex ${
            !showMenu && "hidden"
          } flex-col md:flex-row left-0 delay-[2000ms] right-0 w-10/12 mx-auto z-[1300]`}
        >
          <div className="w-1/2">
            <div className="mb-10 text-sm font-semibold uppercase">Online</div>
            <ul className="space-x-2 flex">
              <li>
                <RiGithubLine size={30} color={"#000000"} />
              </li>
              <li>
                <MdOutlineOpenInNew size={30} color={"#000000"} />
              </li>
              <li>
                <RiGithubLine size={30} color={"#000000"} />
              </li>
              <li>
                <MdOutlineOpenInNew size={30} color={"#000000"} />
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="mb-10 text-sm font-semibold uppercase">
              Navigation
            </div>
            <ul className="space-y-4">
              <li onClick={() => setShowMenu(false)}>
                <a href="#home" className="text-[2rem] uppercase">
                  Home
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#projects" className="text-[2rem] uppercase">
                  Project
                </a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#contact" className="text-[2rem] uppercase">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* </AnimatePresence> */}
      </motion.div>
    </>
  );
};

export default Menu;
