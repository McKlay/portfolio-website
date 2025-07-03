import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/PROJECT_DATA";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 sm:py-32 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
