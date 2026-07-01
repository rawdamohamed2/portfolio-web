import React from "react";
import { Element } from "react-scroll";
import experience from "@/data/education.json";
const Experience = () => {
  if (!experience) {
    return (
      <div className=" w-full min-h-dvh text-6xl font-bold text-center">
        There is no experience.
      </div>
    );
  }
  return (
    <Element name="education" className=" py-12 px-6 overflow-hidden">
      <div className="container">
        <div
          className="headercontant pb-4"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1
            className="py-2 md:text-[3.3rem] text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[27%] md:after:w-[40%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4"
          >
            <span className="text-effectColor">My</span> Experience
          </h1>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-effectColor rounded-full"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative  flex items-center justify-between w-full mb-8  ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="hidden md:block w-[45%]"></div>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-hoverBtn rounded-full border-4 border-white z-10 shadow-sm"></div>
                <div className=" p-4 w-full md:w-[45%] bg-cricleColor hover:bg-transparent hover:shadow-[0px_0px_15px_#00FFF7] transform hover:scale-[1.06] rounded-xl transition-all duration-500">
                  <h5 className="text-xl">{item.position}</h5>
                  <p className="font-light md:mt-4 mt-1 md:mb-1 mb-0 text-[1.03rem]">
                    {item.description}
                  </p>
                  <p className="font-light mb:md-1 mb-0 text-[1.03rem]">
                    {item.company} <span className="text-effectColor">|</span> [{" "}
                    {item.startDate} - {item.endDate} ]
                  </p>
                  {item.gpa ? (
                    <p className="font-light mb:md-1 mb-0 text-[1.03rem]">
                      GPA: <span className=""> 3.73 </span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
