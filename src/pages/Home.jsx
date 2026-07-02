import React, { useEffect, useState } from "react";
import { Link, Element } from "react-scroll";

const Home = () => {
  const fullText = "Developer";
  const speed = 100;
  const deleteSpeed = 50;
  const delay = 1000;

  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && index <= fullText.length) {
      typingTimeout = setTimeout(() => setIndex(index + 1), speed);
    } else if (isDeleting && index >= 0) {
      typingTimeout = setTimeout(() => setIndex(index - 1), deleteSpeed);
    } else {
      typingTimeout = setTimeout(() => setIsDeleting(!isDeleting), delay);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting]);

  const currentText = fullText.substring(0, index);

  return (
    <Element
      name="home"
      className="relative xs:mt-0 mt-20 overflow-hidden min-h-dvh bg-MainbgColor w-full flex items-center justify-center"
    >
      <div className="hidden md:block overflow-hidden md:h-[600px] h-[320px] md:w-[600px] w-[320px] bg-cricleColor absolute end-[-90px] bottom-[-90px] rounded-[50%] opacity-25 rotate-35 z-0 pointer-events-none"></div>
      <div className="overflow-hidden md:h-[550px] h-[300px] md:w-[550px] w-[300px] bg-cricleColor absolute start-[-95px] top-[-60px] rounded-[50%] opacity-25 rotate-35 z-0 pointer-events-none"></div>

      <div
        className="container relative flex items-center justify-center text-center mx-auto z-10"
        data-aos="fade-down"
        data-aos-delay="600"
      >
        <div className="content">
          <h1 className="md:text-[4rem] text-[2.6rem] font-medium leading-tight">
            <span className="logoFont block span">Hello, I'm</span>
            Rawda Mohamed
          </h1>
          <h2 className="md:text-[2.5rem] text-[2.1rem] font-medium mt-2">
            Frontend <span className="text-effectColor">{currentText}</span>
            <span className="font-light animate-pulse">|</span>
          </h2>
          {/*<h2 className="md:text-[2.5rem] text-[2.1rem] font-medium mt-2">*/}
          {/*    React.js • Next.js • TypeScript</h2>*/}
          <h3 className="md:text-[1.2rem] w-3/4 mx-auto text-[1rem] mt-2 text-secondfontColor">
            Building modern, scalable, and user-friendly web applications with
            clean code and great user experiences
          </h3>
          <div className="buttons mt-8 flex sm:flex-row flex-col gap-4 justify-center items-center">
            <a
              href="/cv/Rawda_Mohamed_Frontend_Developer_CV.pdf"
              download="Rawda_Mohamed_Frontend_Developer_CV.pdf"
              className="inline-block text-[1.23rem] bg-hoverBtn text-bgColor md:px-7 px-4 py-[11px] rounded-lg shadow-[1px_1px_20px_var(--hover-btn)] hover:text-hoverBtn hover:shadow-[3px_3px_35px_var(--hover-btn)] hover:bg-bgColor transition-all duration-300"
            >
              Download CV
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer border border-effectColor hover:border-transparent inline-block text-[1.23rem] text-buttonFont md:px-7 px-4 py-[11px] rounded-lg shadow-[1px_1px_20px_var(--hover-btn)] hover:text-fontColor hover:shadow-[3px_3px_35px_var(--hover-btn)] hover:bg-buttonHover transition-all duration-300"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
