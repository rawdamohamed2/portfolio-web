import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import SkillCard from "./SkillCard.jsx";

const CategoryCard = ({ title, items }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 1000,
        scale: 1.02,
      });
    }
    // Cleanup عشان الـ Memory leak
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className="flex flex-col md:gap-5 gap-3 items-center justify-center h-fit border-0 w-full transform duration-500 transition-all bg-MainbgColor shadow-[0px_0px_6px_#00FFF7] rounded-2xl md:px-[60px] px-6 py-5"
    >
      <h1 className="text-3xl pb-3 pt-2 text-center text-secondfontColor">
        {title}
      </h1>
      <div className="flex flex-wrap items-center justify-center h-fit gap-3">
        {items.map((item, index) => (
          <SkillCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
