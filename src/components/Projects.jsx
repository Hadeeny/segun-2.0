import { motion } from "framer-motion";
import { myProjects } from "../data/projectsData";
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link as a } from "react-router-dom";
const Projects = () => {
  const title = "Featured Projects";

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { y: 10, clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)" },
    animate: {
      // opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 0.2,
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
      <div className="my-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-rouge">02.</div>
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
        <div className="h-[0.2rem] bg-leMon w-full"></div>
      </div>
      {/* project */}
      {myProjects.map((project, i) => {
        return (
          <div
            key={i}
            className="w-full bg-gradient-to-t flex flex-col justify-between md:flex-row odd:from-rouge odd:to-green-400 even:from-orange-400 even:to-cyan-500 mb-8 mx-auto rounded-3xl xl:w-[60rem] border-gray-300 border md:h-[35rem]"
          >
            {/* first flex item */}
            <div className="w-full space-y-8 p-8 flex-col md:w-1/2">
              <h3 className="text-xl md:text-3xl font-bold">{project.title}</h3>
              <p className="font-normal text-lg ">{project.info}</p>
              <motion.div
                // variants={banner}
                // initial="initial"
                // whileInView="animate"
                className="flex gap-x-4 flex-wrap w-full"
              >
                {project.skill.map((item, i) => (
                  <motion.div
                    // variants={letterAni}
                    key={i}
                    className="py-1 flex items-center text-gray-200"
                  >
                    <img className="w-4 h-4" src={item.icon} />
                    <p className="block ml-2">{item.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* second flex itme */}
            <div className="w-full flex px-8 items-end md:w-1/2">
              <motion.div
                transition={{ duration: 1 }}
                initial={{
                  y: "100%",
                  clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
                }}
                whileInView={{
                  y: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}
                className=""
              >
                <img src={project.image} />
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
