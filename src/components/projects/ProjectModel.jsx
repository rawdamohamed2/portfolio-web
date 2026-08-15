import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import React from "react";

const ProjectModel = ({ project }) => {
  if (!project) return null;

  return (
    <Dialog>
      <div className="w-full">
        <DialogTrigger className="bg-hoverBtn w-full hover:bg-cricleColor hover:text-effectColor hover:shadow-[0px_0px_12px_#00FFF7] block text-fontColor py-2 rounded-lg duration-300 transition-all">
          View Details
        </DialogTrigger>
      </div>

      <DialogContent
        className="bg-MColor border border-hoverBtn/20 backdrop-blur-sm
                   w-[95vw] sm:max-w-2xl md:max-w-3xl
                   min-h-[88vh] overflow-y-auto
                   p-0 rounded-2xl"
      >
        <div className="relative w-full h-[220px] md:h-[300px]">
          <img
            src={project.image}
            className="w-full h-full object-cover rounded-t-2xl"
            alt={project.title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-MColor via-MColor/20 to-transparent rounded-t-2xl" />
        </div>

        <div className="px-6 md:px-8 pb-8 -mt-10 relative">
          <DialogHeader className="text-start">
            <DialogTitle className="text-effectColor text-2xl md:text-3xl font-bold">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-secondfontColor pt-3 text-base leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {project.tech && (
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border border-hoverBtn/40 text-hoverBtn font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-7 pt-6 border-t border-hoverBtn/10">
            {project.linkDemo && (
              <a
                href={project.linkDemo}
                target="_blank"
                rel="noreferrer"
                className="LinkBtn flex-1 text-center min-w-[140px]"
              >
                Live Demo
              </a>
            )}
            {project.GitHub && (
              <a
                href={project.GitHub}
                target="_blank"
                rel="noreferrer"
                className="LinkBtn flex-1 text-center min-w-[140px]"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModel;
