import { Element } from "react-scroll";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";

export default function Education() {
  const [experience, setExperiences] = useState([]);

  async function getExperience() {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rawdamohamed2/my-Portfolio-data/main/education.json"
      );

      setExperiences(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getExperience();
  }, []);

  if (!experience || experience.length === 0) {
    return <Loader />;
  }

  return (
    <Element
      name="education"
      className="bg-MColor py-12 px-4 sm:px-6 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div
          className="headercontant pb-4"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1
            className="py-2 text-3xl md:text-4xl font-bold text-center relative
            after:content-['']
            after:block
            after:w-3/4
            md:after:w-[30%]
            lg:after:w-[27%]
            after:h-[2px]
            after:bg-hoverBtn
            after:mx-auto
            after:mt-4
            tracking-widest
            mb-2"
          >
            <span className="text-effectColor">My </span>
            Experience
          </h1>

          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-effectColor"></div>
            <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
            <div className="h-0.5 w-12 bg-effectColor"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto py-5">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-effectColor rounded-full"></div>

          <div className="space-y-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }`}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {/* Empty Side for Desktop */}
                <div className="hidden md:block md:w-[45%]"></div>

                {/* Circle */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-hoverBtn rounded-full border-4 border-white z-10 shadow-md"></div>

                {/* Card */}
                <div
                  className="
                  ml-10
                  sm:ml-14
                  md:ml-0
                  w-[calc(100%-3rem)]
                  md:w-[45%]
                  p-5
                  rounded-xl
                  bg-cricleColor
                  transition-all
                  duration-500
                  hover:bg-transparent
                  hover:shadow-[0_0_15px_#00FFF7]
                  hover:scale-105"
                >
                  <h5 className="text-lg md:text-xl font-semibold">
                    {item.position}
                  </h5>

                  <p className="mt-3 text-sm md:text-base leading-7">
                    {item.description}
                  </p>

                  <p className="mt-3 text-sm md:text-base">
                    {item.company}
                    <span className="text-effectColor"> | </span>
                    [{item.startDate} - {item.endDate}]
                  </p>

                  {item.gpa && (
                    <p className="mt-2 text-sm md:text-base">
                      GPA: <span>3.73</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
