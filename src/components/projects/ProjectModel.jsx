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
      <DialogTrigger className="bg-hoverBtn w-full hover:bg-cricleColor hover:text-effectColor hover:shadow-[0px_0px_12px_#00FFF7] block text-fontColor py-2 px-4 rounded-lg duration-300 transition-all">
        View Details
      </DialogTrigger>

      <DialogContent
        className="
          bg-MColor
          border border-hoverBtn/20
          backdrop-blur-sm
          w-[calc(100%-1.5rem)]
          sm:w-[90vw]
          sm:max-w-2xl
          lg:max-w-3xl
          max-h-[90dvh]
          overflow-y-auto
          p-0
          rounded-xl sm:rounded-2xl
          gap-0
        "
      >
        <div className="relative w-full h-44 sm:h-56 md:h-72 shrink-0">
          <img
            src={project.image}
            className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl"
            alt={project.title}
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-MColor via-MColor/20 to-transparent rounded-t-xl sm:rounded-t-2xl" />
        </div>

        <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-8 -mt-6 sm:-mt-10 relative">
          <DialogHeader className="text-start space-y-3">
            <DialogTitle className="text-effectColor text-xl sm:text-2xl md:text-3xl font-bold break-words">
              {project.title}
            </DialogTitle>

            <DialogDescription className="text-secondfontColor text-sm sm:text-base leading-6 sm:leading-relaxed whitespace-pre-line break-words">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-hoverBtn/40 text-hoverBtn font-mono max-w-full break-words"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {(project.linkDemo || project.GitHub) && (
            <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-7 pt-5 sm:pt-6 border-t border-hoverBtn/10">
              {project.linkDemo && (
                <a
                  href={project.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="LinkBtn flex-1 text-center w-full min-w-0"
                >
                  Live Demo
                </a>
              )}

              {project.GitHub && (
                <a
                  href={project.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="LinkBtn flex-1 text-center w-full min-w-0"
                >
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModel;
