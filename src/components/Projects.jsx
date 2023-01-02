import { myProjects } from "../data/projectsData";
import musica from "../assets/musica.jpg";
const Projects = () => {
  const switchProject = (index) => {
    return index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  };
  const switchRow = (index) => {
    return index % 2 === 0 ? "" : "md:mr-[-5rem]";
  };
  return (
    <section
      id="projects"
      className="w-10/12 text-secondary h-screen flex flex-col 
        items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-primary">02.</div>
        <div className="text-[1.5rem] font-bold px-2 min-w-max">
          <h2>Some stuffs I made</h2>
        </div>
        <div className="h-[0.2rem] bg-secondary w-full"></div>
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
            {console.log(project)}
            <div className="w-full group md:w-1/2 relative">
              <div className=" w-full h-[18rem] md:h-[22rem]">
                <img src={musica} className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute top-0 group-hover:w-0 duration-500 h-full 
                opacity-90 bg-yellow-800 w-full"
              ></div>
              <div className="h-full w-[3px] absolute top-0 right-0 group-hover:left-0 bg-primary" />
            </div>
            <div
              className={`md:w-1/2 absolute md:static w-10/12 px-4 md:px-0 lg:ml-[-5rem] 
              ml-0 z-[10] flex flex-col justify-center gap-y-4 items-start ${switchRow(
                i
              )} ${i % 2 === 0 ? "md:items-end" : "md:items-start"} h-[20rem]`}
            >
              <div>
                <div className="text-primary">Featured project</div>
                <div className="text-xl font-semibold md:text-[1.5rem]">
                  Proshop store
                </div>
              </div>
              <div
                className={`w-full p-0 md:p-6 bg-transparent text-gray-200 md:border-2 md:bg-black/40 md:backdrop-blur-xl md:border-primary ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                } rounded-md`}
              >
                dflkj alkjfa ;lsdfj a;lkfd alkjdsafl;k aslk askjdf dkj da;lkj
                asdflj asdflkjsadfakj dflkj alkjfa
              </div>
              <ul className="flex justify-start md:justify-end text-sm space-x-2">
                <li>React</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Redux</li>
                <li>MongoDB</li>
              </ul>
              <div className="">gitIcon</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
