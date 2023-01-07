import { motion } from "framer-motion";
import { myProjects } from "../data/projectsData";
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link as a } from "react-router-dom";
const Projects = () => {
  const title = "Some stuffs I made";

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { opacity: 0, x: 600 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 1,
      },
    },
  };

  const switchProject = (index) => {
    return index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  };
  const switchRow = (index) => {
    return index % 2 === 0 ? "" : "md:mr-[-5rem]";
  };
  return (
    <section
      id="projects"
      className="w-10/12 text-secondary flex flex-col 
        items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-primary">02.</div>
        <motion.div
          variants={banner}
          initial="initial"
          whileInView="animate"
          className="text-[1.5rem] font-oxanium font-bold px-2 min-w-max"
        >
          {title.split("").map((letter, i) => (
            <motion.span variants={letterAni} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="h-[0.2rem] bg-[#bae67e] w-full"></div>
      </div>
      {/* project */}
      {myProjects.map((project, i) => {
        return (
          <div
            key={i}
            className={`flex my-8 flex-col w-full items-center justify-center ${switchProject(
              i
            )}`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 == 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full group md:w-1/2 relative"
            >
              <div className=" w-full h-[18rem] md:h-[22rem]">
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-0 group-hover:w-0 duration-500 h-full 
                md:opacity-50 opacity-50 bg-black  md:bg-yellow-900 w-full"
              ></div>
              <div className="h-full w-[3px] absolute top-0 right-0 group-hover:left-0 bg-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: i % 2 == 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`md:w-1/2 absolute md:static w-10/12 px-4 py-2 md:px-0 lg:ml-[-5rem] 
              ml-0 z-[10] flex flex-col justify-end bg-black/40 md:bg-transparent gap-y-4 items-start ${switchRow(
                i
              )} ${
                i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start"
              } h-[18rem]`}
            >
              <div>
                <div className="text-primary">Featured project</div>
                <div className="text-xl font-semibold md:text-[1.5rem]">
                  {project.title}
                </div>
              </div>
              <div
                className={`w-full md:block hidden p-0 md:p-6 bg-transparent text-gray-200 md:border-2 md:bg-[#2F3B54]/20 md:backdrop-blur-xl md:border-primary ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                } rounded-md`}
              >
                dflkj alkjfa ;lsdfj a;lkfd alkjdsafl;k aslk askjdf dkj da;lkj
                asdflj asdflkjsadfakj dflkj alkjfa
              </div>
              <ul className="flex justify-start md:justify-end text-sm space-x-2">
                <li className="p-0 md:px-2 md:py-1 text-leMon text-[10px] rounded-xl md:bg-transparent md:text-white md:border md:border-primary ">
                  React
                </li>
                <li className="p-0 md:px-2 md:py-1 text-leMon text-[10px] rounded-xl md:bg-transparent md:text-white md:border md:border-primary">
                  Nodejs
                </li>
                <li className="p-0 md:px-2 md:py-1 text-leMon text-[10px] rounded-xl md:bg-transparent md:text-white md:border md:border-primary">
                  Express
                </li>
                <li className="p-0 md:px-2 md:py-1 text-leMon text-[10px] rounded-xl md:bg-transparent md:text-white md:border md:border-primary">
                  Redux
                </li>
                <li className="p-0 md:px-2 md:py-1 text-leMon text-[10px] rounded-xl md:bg-transparent md:text-white md:border md:border-primary">
                  MongoDB
                </li>
              </ul>
              <div className="flex space-x-2">
                <a aria-label="open page" href={`${project.link}`}>
                  <RiGithubLine size={30} color={"#ef6b73"} />
                </a>
                <a aria-label="view code" href={`${project.link}`}>
                  <MdOutlineOpenInNew size={30} color={"#bae67e"} />
                </a>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
