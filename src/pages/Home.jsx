import React, { useEffect, useState, useRef } from "react";
import RobotScene from "@/components/3d/RobotScene.jsx";
import { Link } from "react-router-dom";
import { animateHero } from "@/animations/heroAnimations.js";
import useMouseParallax from "@/hooks/useMouseParallax.js";

const Home = () => {
  const fullText = "Developer";
  const speed = 100;
  const deleteSpeed = 50;
  const delay = 1000;

  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const techStackRef = useRef(null);
  const buttonsRef = useRef(null);
  const robotRef = useRef(null);
  const backgroundRef = useRef(null);
  const ringsRef = useRef(null);
  useMouseParallax([
    {
      ref: backgroundRef,
      strength: 15,
    },
    {
      ref: ringsRef,
      strength: 8,
    },
    {
      ref: robotRef,
      strength: 18,
    },
  ]);
  useEffect(() => {
    const animation = animateHero({
      title: titleRef.current,
      subtitle: subtitleRef.current,
      description: descriptionRef.current,
      techStack: techStackRef.current,
      buttons: buttonsRef.current,
      robot: robotRef.current,
    });

    return () => {
      animation.kill();
    };
  }, []);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && index < fullText.length) {
      typingTimeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      typingTimeout = setTimeout(() => {
        setIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);
      }, delay);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting]);

  const currentText = fullText.substring(0, index);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-MainbgColor/20 flex items-center">
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-effectColor/10 blur-[120px]"
      />

      <div className="pointer-events-none absolute -bottom-60 -right-40 h-[650px] w-[650px] rounded-full bg-cricleColor/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto flex w-full items-center px-5 py-20 sm:px-8 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-4">
          <section className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              ref={titleRef}
              className="max-w-3xl text-[2.8rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.7rem] md:text-[4.5rem] lg:text-[4.7rem]"
            >
              Hello, I'm
              <span className="logoFont mt-2 block bg-gradient-to-r from-fontColor via-effectColor to-cricleColor bg-clip-text text-transparent">
                Rawda Mohamed
              </span>
            </h1>

            <div
              ref={subtitleRef}
              className="mt-5 flex min-h-[52px] items-center"
            >
              <h2 className="text-2xl font-medium text-secondfontColor sm:text-3xl md:text-4xl">
                Frontend <span className="text-effectColor">{currentText}</span>
                <span className="ml-1 animate-pulse text-effectColor">|</span>
              </h2>
            </div>

            <p
              ref={descriptionRef}
              className="mt-4 max-w-xl text-base leading-7 text-secondfontColor sm:text-lg sm:leading-8"
            >
              I create modern, scalable and interactive web experiences with
              clean code, thoughtful UI and smooth animations.
            </p>

            <div
              ref={techStackRef}
              className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-effectColor/10 bg-bgColor/40 px-3.5 py-1.5 text-sm text-secondfontColor backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-effectColor/40 hover:text-effectColor"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <div
              ref={buttonsRef}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="/cv/Rawda_Mohamed_Frontend_Developer_CV.pdf"
                download="Rawda_Mohamed_Frontend_Developer_CV.pdf"
                className="group relative overflow-hidden rounded-xl bg-hoverBtn px-7 py-3.5 text-base font-medium text-bgColor shadow-[0_0_30px_var(--hover-btn)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_var(--hover-btn)]"
              >
                <span className="relative z-10">Download CV</span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              <Link
                to="projects"
                smooth
                duration={700}
                className="cursor-pointer rounded-xl border border-effectColor/40 bg-bgColor/20 px-7 py-3.5 text-base font-medium text-buttonFont backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-effectColor hover:bg-effectColor/10 hover:text-effectColor"
              >
                Explore My Work
              </Link>
            </div>
          </section>

          <section className="relative flex h-[480px] w-full items-center justify-center sm:h-[560px] lg:h-[680px]">
            <div
              ref={ringsRef}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-effectColor/20 blur-[90px] sm:h-[380px] sm:w-[380px]"
            />

            <div
              ref={ringsRef}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-effectColor/98 sm:h-[470px] sm:w-[470px]"
            />

            <div
              ref={ringsRef}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-effectColor/20 sm:h-[360px] sm:w-[360px]"
            />

            <div ref={robotRef} className="relative z-10 h-full w-full">
              <RobotScene />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
