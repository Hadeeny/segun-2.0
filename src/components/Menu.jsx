import { useState } from "react";

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
            showMenu ? "h-full" : "h-0"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500 delay-[400ms] fixed top-0 left-[25%] right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full" : "h-0"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500 delay-[800ms] fixed top-0 left-[50%] right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full" : "h-0"
          }`}
        ></div>
        <div
          className={`bg-leMon duration-500 delay-[1200ms] fixed top-0 right-0 z-[1200] w-1/4 ${
            showMenu ? "h-full" : "h-0"
          }`}
        ></div>
        {/* <div className="bg-leMon fixed top-0 left-[50%] right-0 z-[1200] w-1/4 h-full"></div> */}
        {/* <div className="bg-leMon fixed top-0 z-[1200] right-0 w-1/4 h-full"></div> */}
        <div className="fixed hidden top-0 left-0 right-0 w-10/12 mx-auto bg-rouge z-[1300]">
          Content
        </div>
      </div>
    </>
  );
};

export default Menu;
