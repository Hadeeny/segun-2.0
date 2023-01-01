import github from "../assets/github-svgrepo-com.svg";

const Projects = () => {
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
      <div className="flex my-8 flex-col w-full items-center justify-center md:flex-row">
        <div
          className="md:w-1/2 p-[6rem] md:p-[10rem]
          bg-no-repeat bg-primary  
        w-full bg-cover bg-center bg-[url(./assets/crappo.JPG)]"
        ></div>
        <div className="md:w-1/2 w-full lg:ml-[-5rem] ml-0 z-[10] flex flex-col justify-center gap-y-2 md:gap-y-4 items-end h-[20rem]">
          <div className="text-primary">Featured project</div>
          <div className="text-xl font-semibold md:text-[2rem]">
            Proshop app
          </div>
          <div className="w-full p-6  bg-[#112240] text-right rounded-lg">
            dflkj alkjfa ;lsdfj a;lkfd alkjdsafl;k aslk askjdf dkj da;lkj asdflj
            asdflkjsadfakj
          </div>
          <ul className="flex space-x-6">
            <li>React</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>Redux</li>
            <li>MongoDB</li>
          </ul>
          <div className="">gitIcon</div>
        </div>
      </div>
      <div className="flex my-8 flex-col w-full items-center justify-center md:flex-row-reverse">
        <div
          className="md:w-1/2 p-[6rem] md:p-[10rem] bg-no-repeat bg-primary opacity-90 
        w-full bg-cover bg-center bg-[url(./assets/proshop1.JPG)]"
        ></div>
        <div className="md:w-1/2 w-full md:mr-[-5rem] mr-0 z-[10] flex flex-col justify-center gap-y-4 h-[20rem]">
          <div className="text-primary">Featured project</div>
          <div className="text-xl font-semibold md:text-[2rem]">
            Proshop app
          </div>
          <div className="w-full p-6  bg-[#112240] rounded-lg">
            dflkj alkjfa ;lsdfj a;lkfd al[#112240]fl;k aslk askjdf dkj da;lkj
            asdflj asdflkjsadfakj
          </div>
          <ul className="flex space-x-6">
            <li>React</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>Redux</li>
            <li>MongoDB</li>
          </ul>
          <div className="">gitIcon</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
