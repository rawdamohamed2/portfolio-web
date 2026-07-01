import { Element } from "react-scroll";
import skills from "@/data/skills.json";
import tools from "@/data/tools.json";
import backendSkills from "@/data/backendSkills.json";
import CategoryCard from "../components/widgets/CategoryCard.jsx";

export default function Skills() {
  const skillCategories = [
    { title: "Front-End Development", data: skills },
    { title: "Back-End Development", data: backendSkills },
    { title: "Tools & Technologies", data: tools },
  ];

  return (
    <Element name="skills" className="py-5 bg-MainbgColor overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div
          className="haederProjects pb-7 text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1 className="py-4 md:text-[3.3rem] text-4xl font-bold relative after:content-[''] after:block lg:after:w-[20%] md:after:w-[30%] sm:after:w-[25%] after:w-[38%] after:mx-auto after:h-[0.1px] after:bg-hoverBtn after:mt-5">
            <span className="text-effectColor">Sk</span>ills
          </h1>
        </div>

        {/* Categories Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-y-10 py-4 md:px-0 px-4 mb-6"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          {skillCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              items={category.data}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}
