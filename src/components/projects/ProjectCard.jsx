import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectModel from "@/components/projects/ProjectModel.jsx";

export default function ProjectCard({ project }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 1900,
        glare: true,
        "max-glare": 0.0,
      });
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className="project-card min-h-[250px] rounded-2xl md:p-0 px-3"
    >
      <div
        ref={tiltRef}
        className="card group project-item relative min-h-[250px] bg-cricleColor border-0 rounded-2xl overflow-hidden duration-300 transition-all hover:shadow-[0px_0px_8px_#00FFF7] transform hover:scale-[1.02] hover:translate-y-[-20px]"
      >
        <div className="min-h-[250px]">
          <img
            src={project.image}
            className="card-img-top w-full h-[250px] object-cover"
            alt={project.title}
            loading="lazy"
          />
        </div>
        <div className="card-body opacity-0 duration-300 transition-all group-hover:opacity-100 absolute top-0 right-0 left-0 bottom-0 bg-primary/70 backdrop-blur-sm overflow-hidden md:px-3 p-0 py-1">
          <h4 className="card-title text-xl font-semibold text-center pt-4 pb-1">
            {project.title}
          </h4>
          <p className="card-text text-center text-secondfontColor py-2 text-base px-3 leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="py-0 text-center grid grid-cols-1 md:gap-3 gap-y-4 sm:p-2 p-4">
            <ProjectModel project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
