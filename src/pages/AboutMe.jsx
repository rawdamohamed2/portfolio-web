import React from "react";
import { Element } from "react-scroll";
import ImageCard from "@/components/widgets/ImageCard.jsx";
import profileData from "@/data/profile.json";

const AboutMe = () => {
  return (
    <Element
      name="about"
      className="pt-9 pb-5 bg-SecondbgColor flex items-center"
    >
      <section className="container h-full  mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 items-center">
          <div
            className="lg:col-span-2 md:col-span-2 col-span-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="AboutMeContant w-full">
              <div className="headerContant text-center">
                <h1 className="md:text-[3.3rem] text-4xl font-bold py-3 relative after:content-[''] after:block lg:after:w-[30%] md:after:w-[50%] sm:after:w-[30%] after:w-[50%] after:mx-auto after:h-[0.2px] after:bg-hoverBtn after:rounded md:after:mt-6 after:mt-4">
                  About <span className="text-effectColor">Me</span>
                </h1>
              </div>
              <div className="content md:px-3 px-0 md:py-3 py-7 ">
                <p className="text-xl lg:text-start text-center ">
                  I'm a Frontend Developer and Computer Science graduate from
                  Alexandria University with hands-on experience building
                  modern, responsive, and scalable web applications. I
                  specialize in React.js, Next.js, TypeScript, and Tailwind CSS,
                  with practical experience gained through internships,
                  professional work, and real-world projects.
                </p>
                <p className=" text-xl lg:text-start text-center py-3 ">
                  I enjoy transforming ideas and Figma designs into clean,
                  high-performance user interfaces while writing maintainable,
                  reusable code and following modern development best practices.
                  I have experience integrating REST APIs, optimizing
                  application performance, and building solutions that
                  prioritize both functionality and user experience.
                </p>
                <p className=" text-xl lg:text-start text-center py-3 ">
                  Throughout my journey, I've developed E-Commerce, E-Learning,
                  AI-powered platforms, and Dashboard applications, using modern
                  technologies such as Redux, Zustand, React Hook Form,
                  Supabase, MongoDB, and JWT.
                </p>
                <p className=" text-xl lg:text-start text-center py-3 relative after:content-[''] after:block after:w-full after:m-auto after:h-[0.2px] after:bg-gray-500 after:rounded after:mt-5">
                  I'm passionate about continuous learning, solving real-world
                  problems, and collaborating with teams to build impactful
                  digital products. My goal is to grow as a Frontend Engineer
                  while delivering high-quality applications that create
                  meaningful value.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-7">
                  <ul className="col-span-1 lg:text-start text-center">
                    <li className="fontdisplay md:text-lg text-md py-2">
                      Name:{" "}
                      <span className="text-secondfontColor">
                        Rawda Mohamed Mahmoud Sengab
                      </span>
                    </li>
                    <li className="fontdisplay py-2 md:text-lg text-md">
                      Email:{" "}
                      <span className="text-secondfontColor">
                        rawdamohamedsengab@gmail.com
                      </span>
                    </li>
                  </ul>

                  <ul className="col-span-1 lg:text-start text-center">
                    <li className="fontdisplay py-2 md:text-lg text-md">
                      Job Title:{" "}
                      <span className="text-secondfontColor">
                        Frontend Developer
                      </span>
                    </li>
                    <li className="fontdisplay py-2 md:text-lg text-md">
                      Location:{" "}
                      <span className="text-secondfontColor">
                        {" "}
                        Alexandria, Egypt
                      </span>
                    </li>
                  </ul>

                  <div className=" flex flex-row justify-center gap-4 py-3 px-2 lg:text-start text-center lg:mt-0 md:mt-2 mt-0 ">
                    <a
                      href="https://www.linkedin.com/in/rawda-mohamed-367a77370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="LinkBtn"
                    >
                      {" "}
                      My Linkedin
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1rpknOGf54qGh00DDHq0jsPPnftMhxnPa/view?usp=drive_link"
                      className="LinkBtn"
                    >
                      Resume
                    </a>
                    <a
                      href="https://github.com/rawdamohamed2"
                      className="LinkBtn"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ImageCard profileImage={profileData[0].profileImage} />
        </div>
      </section>
    </Element>
  );
};
export default AboutMe;
