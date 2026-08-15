import React, { useLayoutEffect, useRef } from "react";
import skills from "@/data/skills.json";
import tools from "@/data/tools.json";
import backendSkills from "@/data/backendSkills.json";
import CategoryCard from "@/components/skills/CategoryCard.jsx";
import { skillsAnimation } from "@/animations/skillsAnimations";

export default function Skills() {
  const sectionRef = useRef(null);

  const skillCategories = [
    { title: "Front-End Development", data: skills },
    { title: "Back-End Development", data: backendSkills },
    { title: "Tools & Technologies", data: tools },
  ];

  useLayoutEffect(() => {
    return skillsAnimation(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-dvh pt-20 sm:p-10 p-0 overflow-hidden relative"
    >
      <div className="absolute top-top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-hoverBtn/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className={`container mt-10 overflow-hidden`}>
        <div className="skills-header pb-10 text-center">
          <h1 className="skills-title py-2 md:text-[3.3rem] text-4xl font-bold relative after:content-[''] after:block lg:after:w-[20%] md:after:w-[30%] sm:after:w-[25%] after:w-[38%] after:mx-auto after:h-[0.1px] after:bg-hoverBtn after:mt-5">
            <span className="text-effectColor">Sk</span>ills
          </h1>

          <p className="skills-subtitle text-secondfontColor md:text-lg text-base mt-3">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              items={category.data}
              groupDelay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
