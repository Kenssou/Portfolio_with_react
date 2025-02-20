import ProjectCard from "./projectCard";

export default function Project() {
  return (
    <div
      className="lg:mt-[300px] mt-[100px] lg:max-w-[1204px] m-auto flex flex-col"
      id="project"
    >
      <h1 className="m-auto lg:text-[25px] xl:text-[25px] text-[20px] font-bold bg-gradient-to-bl from-purple-500 to-indigo-800 bg-clip-text text-transparent leading-normal">
        Projects
      </h1>
      <h2 className="lg:text-[20px] xl:text-[30px] text-[15px] dark:text-[white] font-medium m-auto">
        Things I’ve built so far
      </h2>

      <div>
        <ProjectCard />
      </div>
    </div>
  );
}
