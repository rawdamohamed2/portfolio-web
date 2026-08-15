import React, { useLayoutEffect, useRef, useState } from "react";
import experience from "@/data/education.json";
import {
  experienceAnimation,
  experienceItemAnimation,
} from "@/animations/experienceAnimations";
import { Button } from "@/components/ui/button.jsx";

const toComponentName = (str = "") =>
  str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("") || "Experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [...experience];
  const active = items[activeIndex];
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanupAnimation = experienceAnimation(sectionRef.current);

    return () => {
      cleanupAnimation?.();
    };
  }, []);
  return (
    <div
      ref={sectionRef}
      className="relative min-h-dvh pt-20 experience-section overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-hoverBtn/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <section className="min-h-dvh pt-20 container overflow-hidden">
        <div className="headercontant pb-4">
          <h1
            className="experience-title py-3 md:text-[3.3rem] text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[27%] md:after:w-[40%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4"
          >
            <span className="text-effectColor">My</span> Experience
          </h1>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl border border-fontColor bg-borderColor backdrop-blur-sm overflow-hidden mt-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-black/20 border-b border-fontColor">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ms-3 text-xs text-secondfontColor/60 font-mono">
              ⚛ Components
            </span>
          </div>

          <div className="experience-card flex flex-col md:flex-row">
            <div className="md:w-[42%] border-b md:border-b-0 md:border-e border-fontColor px-4 py-5 font-mono text-sm">
              <p className="text-secondfontColor/50">
                &lt;<span className="text-CodeColor">Career</span>&gt;
              </p>

              <div className="ms-3 ps-3 border-s border-fontColor my-1">
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);

                        requestAnimationFrame(() => {
                          experienceItemAnimation(sectionRef.current);
                        });
                      }}
                      className={`relative w-full text-start py-1.5 ps-3 rounded-md transition-colors duration-300 ${
                        isActive
                          ? "bg-hoverBtn/10 text-effectColor"
                          : "text-CodeColor hover:text-effectColor"
                      }`}
                    >
                      <span className="absolute -start-3 top-1/2 -translate-y-1/2 w-3 h-px bg-hoverBtn/20" />
                      &lt;{toComponentName(item.position)} /&gt;
                    </Button>
                  );
                })}
              </div>

              <p className="text-secondfontColor/50">
                &lt;/<span className="text-CodeColor">Career</span>&gt;
              </p>
            </div>

            <div className="md:w-[58%] px-5 py-5">
              <p className="text-xs uppercase tracking-widest text-secondfontColor mb-3 font-mono">
                props
              </p>

              <div
                key={activeIndex}
                className="font-mono text-sm leading-8 p-4 rounded-lg bg-bgColor hover:shadow-[0px_0px_15px_#00FFF7] transition-all duration-500"
              >
                <p className={`experience-item`}>
                  <span className="text-secondfontColor">position</span>
                  <span className="text-secondfontColor">: </span>
                  <span className="text-SecondryFontColor">
                    "{active.position}"
                  </span>
                </p>
                <p className={`experience-item`}>
                  <span className="text-secondfontColor">company</span>
                  <span className="text-secondfontColor">: </span>
                  <span className="text-SecondryFontColor">
                    "{active.company}"
                  </span>
                </p>
                <p className={`experience-item`}>
                  <span className="text-secondfontColor">duration</span>
                  <span className="text-secondfontColor">: </span>
                  <span className="text-SecondryFontColor">
                    "{active.startDate} — {active.endDate || "present"}"
                  </span>
                </p>
                {active.gpa && (
                  <p className={`experience-item`}>
                    <span className="text-secondfontColor">gpa</span>
                    <span className="text-secondfontColor">: </span>
                    <span className="text-sky-300">{active.gpa}</span>
                  </p>
                )}
                <p className="experience-item pt-2 mt-2 border-t border-hoverBtn/10 text-secondfontColor font-sans leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
