import { motion } from "framer-motion";
import { myProjects } from "../data/projectsData";
import { RiGithubFill } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link as a } from "react-router-dom";
import AnimatedHeader from "./AnimatedHeader";
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
      className="text-secondary flex flex-col 
        items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <AnimatedHeader headerTitle="Featured Project" itemNum="02" />
      {/* project */}
      <div className="px-4 md:px-14 w-full">
        {myProjects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-full bg-gradient-to-t flex flex-col justify-between 
            md:flex-row odd:from-rouge odd:to-green-400 
            even:from-orange-400 even:to-cyan-500 
            mb-8 mx-auto rounded-3xl -z-10 xl:w-[60rem] border-gray-300 border md:h-[35rem]"
            >
              {/* first flex item */}
              <div className="w-full space-y-4 md:space-y-8 p-4 md:p-8 flex-col md:w-1/2">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="font-normal ">{project.info}</p>
                <motion.div
                  // variants={banner}
                  // initial="initial"
                  // whileInView="animate"
                  className="flex gap-x-4 flex-wrap w-full"
                >
                  {project.skill.map((item, j) => (
                    <motion.div
                      // variants={letterAni}
                      key={j}
                      className="py-1 flex items-center text-gray-200"
                    >
                      <img className="w-4 h-4 md:w-6 md:h-6" src={item.icon} />
                      <p className="block text-primary text-xs md:text-md ml-2">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="flex justify-end md:justify-start font-bold space-x-4">
                  <a
                    target="_blank"
                    aria-label="open page"
                    href={`${project.link}`}
                    className="flex group items-center space-x-1"
                  >
                    <RiGithubFill size={30} color={"#13111d"} />
                    <p className="text-gray-200 group-hover:tracking-[0.3rem] duration-500">
                      Github
                    </p>
                  </a>
                  <a
                    target="_blank"
                    aria-label="view code"
                    href={`${project.link}`}
                    className="flex group items-center space-x-1"
                  >
                    <MdOutlineOpenInNew size={30} color={"#13111d"} />
                    <p className="text-gray-200 group-hover:tracking-[0.3rem] duration-500">
                      Open
                    </p>
                  </a>
                </div>
              </div>
              {/* second flex itme */}
              <div className="w-full flex md:px-8 px-4 items-end md:w-1/2">
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
                  <img className="rounded-t-3xl" src={project.image} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
