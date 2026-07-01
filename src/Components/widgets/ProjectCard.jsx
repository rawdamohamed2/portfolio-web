import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

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
      className="project-item min-h-[500px] rounded-2xl md:p-0 px-3"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div className="card min-h-[500px] bg-cricleColor border-0 rounded-2xl overflow-hidden h-full duration-300 transition-all hover:shadow-[0px_0px_5px_#00FFF7] transform hover:scale-[1.02] hover:translate-y-[-20px]">
        <img
          src={project.image}
          className="card-img-top w-full h-[240px]"
          alt={project.title}
          loading="lazy"
        />
        <div className="card-body bg-cricleColor overflow-hidden md:px-3 p-0 py-3">
          <h4 className="card-title text-xl font-semibold text-center pt-6 pb-1 ">
            {project.title}
          </h4>
          <p className="card-text text-center text-secondfontColor py-3 text-md px-1">
            {project.description}
          </p>

          <div className="py-5 text-center grid md:grid-cols-12 grid-cols-1 md:gap-3 gap-y-4 md:p-0 p-4">
            <div className="md:col-span-7 col-span-1">
              <a
                href={project.linkDemo}
                target="_blank"
                rel="noreferrer"
                className="btn bg-hoverBtn block text-fontColor py-2 rounded-lg w-full duration-300 transition-all hover:bg-cricleColor hover:text-effectColor hover:shadow-[0px_0px_12px_#00FFF7]"
              >
                Live Demo
              </a>
            </div>
            <div className="md:col-span-5 col-span-1">
              <a
                href={project.GitHub}
                target="_blank"
                rel="noreferrer"
                className="btn bg-hoverBtn block py-2 rounded-lg w-full duration-300 transition-all hover:bg-cricleColor hover:text-effectColor hover:shadow-[0px_0px_12px_#00FFF7]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
