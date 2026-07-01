import React, { useState, useMemo } from "react";
import { Element } from "react-scroll";
import ProjectCard from "@/components/widgets/ProjectCard.jsx";
import projects from "@/data/projects.json";
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
  }, [projects, activeFilter]);

  const getTabClass = (filterName) => `
    md:mx-2 mx-0 text-md px-3 py-2 rounded-lg md:mt-0 mt-3 md:me-2 me-0 featurelink text-effectColor cursor-pointer transition-all
    ${
      activeFilter === filterName
        ? "border-2 border-effectColor p-2 rounded-2xl bg-bgColor/20 text-fontColor"
        : "bg-bgColor/60 hover:text-fontColor border-none"
    }
  `;

  return (
    <Element name="projects">
      <div className="min-h-dvh py-16 bg-SecondbgColor overflow-hidden">
        <div className="container mx-auto overflow-hidden">
          {/* Header Section */}
          <div
            className="haederProjects pb-10 w-full"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h1 className="py-2 text-4xl font-bold text-center relative after:content-[''] after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px] after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2">
              <span className="text-effectColor">Pro</span>jects
            </h1>

            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-0.5 w-12 bg-effectColor"></div>
              <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
              <div className="h-0.5 w-12 bg-effectColor"></div>
            </div>

            <p className="text-center text-secondfontColor font-semibold md:text-xl text-lg pt-4">
              Here are some of my projects.
            </p>

            {/* Tabs Filter */}
            <div className="flex justify-center mt-9 flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className={getTabClass("all")}
              >
                ALL
              </button>
              <button
                onClick={() => setActiveFilter("react")}
                className={getTabClass("react")}
              >
                REACT
              </button>
              <button
                onClick={() => setActiveFilter("vanilla")}
                className={getTabClass("vanilla")}
              >
                VANILLA JS
              </button>
              <button
                onClick={() => setActiveFilter("next")}
                className={getTabClass("next")}
              >
                NEXT
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 md:gap-x-5 gap-x-9 overflow-hidden py-10 md:px-2 px-0">
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
    </Element>
  );
};

export default Projects;
