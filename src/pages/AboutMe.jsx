import React, { useLayoutEffect, useRef } from "react";
import { aboutAnimation } from "@/animations/aboutAnimations";
import TerminalCard from "@/components/aboutMe/TerminalCard.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rawda-mohamed-367a77370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedinIn,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1rpknOGf54qGh00DDHq0jsPPnftMhxnPa/view?usp=drive_link",
    icon: FiDownload,
  },
  {
    label: "GitHub",
    href: "https://github.com/rawdamohamed2",
    icon: FaGithub,
  },
];

const AboutMe = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanupAnimation = aboutAnimation(sectionRef.current);

    return () => {
      cleanupAnimation?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-section relative flex min-h-dvh h-full items-center overflow-hidden bg-transparent px-5 pt-20 pb-10"
    >
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-hoverBtn/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="about-content container relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3 md:col-span-2 col-span-1">
          <h1 className="about-title relative text-center text-4xl font-bold leading-tight md:text-[3.3rem]">
            About <span className="text-effectColor">Me</span>
          </h1>

          <div className="content mt-6 space-y-4">
            <p className="about-text text-lg leading-relaxed text-secondfontColor/90">
              I'm a Frontend Developer and Computer Science graduate from
              Alexandria University, passionate about building modern,
              responsive, and scalable web applications. I specialize in
              React.js, Next.js, TypeScript, and Tailwind CSS, with hands-on
              experience gained through internships, professional work, and
              real-world projects.
            </p>

            <p className="about-text text-lg leading-relaxed text-secondfontColor/90">
              I enjoy turning ideas and Figma designs into clean,
              high-performance user interfaces, integrating REST APIs, and
              writing maintainable, reusable code. I'm a fast learner who values
              continuous improvement, teamwork, and creating digital products
              that deliver meaningful user experiences.
            </p>
          </div>

          <div className="about-info mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hoverBtn/15 pt-6">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-secondfontColor/50">
                Name
              </p>
              <p className="fontdisplay text-base">Rawda Mohamed Sengab</p>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-secondfontColor/50">
                Role
              </p>
              <p className="fontdisplay text-base">Frontend Developer</p>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-secondfontColor/50">
                Location
              </p>
              <p className="fontdisplay text-base">Alexandria, Egypt</p>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-secondfontColor/50">
                Email
              </p>
              <p className="fontdisplay break-all text-base">
                rawdamohamedsengab@gmail.com
              </p>
            </div>
          </div>

          <div className="about-links mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="LinkBtn flex items-center gap-2"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="terminal-card lg:col-span-2">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
