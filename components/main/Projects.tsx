import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectVideo from "../sub/ProjectVideo";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* <ProjectVideo
          src="/blackhole.webm"
          title="fit-Guys Gym Management"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         */}
        <ProjectCard
          src="/GYM.png"
          title="Gym Management"
          description="An intuitive gym management system designed to streamline member registrations, track workout schedules, and manage subscriptions. This responsive website ensures a smooth user experience for gym staff and members alike."
        />
        <ProjectCard
          src="/Code-library.png"
          title="Coding Library"
          description="A modern web platform for developers to explore, share, and learn code snippets across multiple languages. The site includes a search function, categorized topics, and user-friendly design focused on improving developer productivity."
        />
        <ProjectCard
          src="/justsolution.png"
          title="JustSolution Website"
          description="A professional business website template for IT and consulting companies. Designed to showcase services, team profiles, and contact information, this layout offers a sleek and modern digital presence."
        />
        
      </div>
    </div>
  );
};

export default Projects;
