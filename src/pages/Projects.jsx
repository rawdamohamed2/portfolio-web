import React, { useState, useMemo } from "react";
import ProjectCard from "@/Components/projects/ProjectCard.jsx";
import projects from "@/data/projects.json";

const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "vanilla", label: "Vanilla JS" },
  { key: "next", label: "Next.js" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return (projects || []).filter((project) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "react") return !project.Vanilla && !project.Next;
      if (activeFilter === "vanilla") return project.Vanilla;
      if (activeFilter === "next") return project.Next;
      return true;
    });
  }, [activeFilter]);

  return (
    <div className="min-h-dvh pt-20 pb-10 bg-SecondbgColor/50 overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div
          className="haederProjects pb-10 w-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="py-2 text-4xl font-bold text-center relative after:content-[''] after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px] after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2">
            <span className="text-effectColor">Pro</span>jects
          </h1>

          <p className="text-center text-secondfontColor font-semibold md:text-xl text-lg pt-2">
            Here are some of my projects.
          </p>

          <div className="flex justify-center flex-wrap gap-2 mt-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === f.key
                    ? "bg-hoverBtn/15 border-hoverBtn text-effectColor"
                    : "border-hoverBtn/20 text-secondfontColor/70 hover:border-hoverBtn/50 hover:text-effectColor"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 md:gap-x-5 gap-x-9 overflow-hidden md:px-10 px-0 py-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((projectItem, index) => (
              <ProjectCard key={index} project={projectItem} />
            ))
          ) : (
            <p className="text-center text-white col-span-full">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
