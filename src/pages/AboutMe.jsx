import React from "react";
import TerminalCard from "@/Components/aboutMe/TerminalCard.jsx";
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
  return (
    <section className="min-h-dvh pt-20 pb-10 bg-transparent flex items-center container h-full mx-auto">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 items-center w-full">
        <div
          className="lg:col-span-3 md:col-span-2 col-span-1"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className="md:text-[3.3rem] text-center text-4xl font-bold leading-tight">
            About <span className="text-effectColor">Me</span>
          </h1>

          <div className="content mt-6 space-y-4">
            <p className="text-lg leading-relaxed text-secondfontColor/90">
              I'm a Frontend Developer and Computer Science graduate from
              Alexandria University, passionate about building modern,
              responsive, and scalable web applications. I specialize in
              React.js, Next.js, TypeScript, and Tailwind CSS, with hands-on
              experience gained through internships, professional work, and
              real-world projects.
            </p>
            <p className="text-lg leading-relaxed text-secondfontColor/90">
              I enjoy turning ideas and Figma designs into clean,
              high-performance user interfaces, integrating REST APIs, and
              writing maintainable, reusable code. I'm a fast learner who values
              continuous improvement, teamwork, and creating digital products
              that deliver meaningful user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8 pt-6 border-t border-hoverBtn/15">
            <div>
              <p className="text-xs uppercase tracking-widest text-secondfontColor/50 mb-1">
                Name
              </p>
              <p className="fontdisplay text-base">Rawda Mohamed Sengab</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondfontColor/50 mb-1">
                Role
              </p>
              <p className="fontdisplay text-base">Frontend Developer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondfontColor/50 mb-1">
                Location
              </p>
              <p className="fontdisplay text-base">Alexandria, Egypt</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondfontColor/50 mb-1">
                Email
              </p>
              <p className="fontdisplay text-base break-all">
                rawdamohamedsengab@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
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

        <TerminalCard />
      </div>
    </section>
  );
};
export default AboutMe;
