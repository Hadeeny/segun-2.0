import { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <>
      <div
        className="w-10/12 fixed top-10 bg-[#202838]/20 border border-leMon 
      rounded-xl px-4 backdrop-blur-md left-0 right-0 mx-auto flex z-[1400] justify-between items-center md:py-4 py-2"
      >
        <div className="text-secondary  font-bold text-2xl">Deniyi</div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex flex-col cursor-pointer z-[1400] items-center gap-y-2"
        >
          <div className="w-6 h-[2px] bg-secondary" />
          <div className="w-9 h-[2px] bg-secondary" />
          <div className="w-6 h-[2px] bg-secondary" />
        </div>
      </div>
      {/* Menui slider */}
      <div className="relative w-full h-full">
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
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className={`fixed top-[25%] flex ${
              !showMenu && "hidden"
            } flex-col md:flex-row left-0 right-0 w-10/12 mx-auto z-[1300]`}
          >
            <div className="w-1/2">
              <div className="mb-10 text-sm font-semibold uppercase">
                Online
              </div>
            </div>
            <div className="w-1/2">
              <div className="mb-10 text-sm font-semibold uppercase">
                Navigation
              </div>
              <ul className="space-y-4">
                <li>
                  <a className="text-[2rem] uppercase">Home</a>
                </li>
                <li>
                  <a className="text-[2rem] uppercase">Project</a>
                </li>
                <li>
                  <a className="text-[2rem] uppercase">Contact</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
