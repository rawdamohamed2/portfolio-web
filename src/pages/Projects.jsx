import React, { useLayoutEffect, useRef, useState, useMemo } from "react";
import { projectFilterAnimation } from "@/animations/projectsAnimations";

import ProjectCard from "@/components/projects/ProjectCard.jsx";
import projects from "@/data/projects.json";
import { Button } from "@/components/ui/button.jsx";

const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "vanilla", label: "Vanilla JS" },
  { key: "next", label: "Next.js" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);
  const isFirstRender = useRef(true);

  const filteredProjects = useMemo(() => {
    return (projects || []).filter((project) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "react") return !project.Vanilla && !project.Next;
      if (activeFilter === "vanilla") return project.Vanilla;
      if (activeFilter === "next") return project.Next;
      return true;
    });
  }, [activeFilter]);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    projectFilterAnimation(sectionRef.current);
  }, [activeFilter]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    projectFilterAnimation(sectionRef.current);
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh pt-20 pb-10 bg-SecondbgColor/50 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-hoverBtn/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="container mx-auto overflow-hidden">
        <div className="haederProjects pb-10 w-full">
          <h1 className="projects-title py-2 text-4xl font-bold text-center relative after:content-[''] after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px] after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2">
            <span className="text-effectColor">Pro</span>jects
          </h1>

          <p className="text-center text-secondfontColor font-semibold md:text-xl text-lg pt-2">
            Here are some of my projects.
          </p>

          <div className="flex justify-center flex-wrap gap-2 mt-6">
            {filters.map((f) => (
              <Button
                key={f.key}
                onClick={() => {
                  if (activeFilter === f.key) return;

                  setActiveFilter(f.key);
                }}
                className={`project-filter px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === f.key
                    ? "bg-hoverBtn/15 border-hoverBtn text-effectColor"
                    : "border-hoverBtn/20 text-secondfontColor/70 hover:border-hoverBtn/50 hover:text-effectColor"
                }`}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-y-10 md:gap-x-5 gap-x-9 overflow-hidden md:px-10 px-0 py-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((projectItem) => (
              <ProjectCard key={projectItem.id} project={projectItem} />
            ))
          ) : (
            <p className="text-center text-white col-span-full">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
