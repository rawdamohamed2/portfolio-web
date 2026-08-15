import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import SkillCard from "./SkillCard.jsx";

const CategoryCard = ({ title, items }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 6,
      speed: 800,
      glare: true,
      "max-glare": 0.12,
      scale: 1.01,
    });

    return () => {
      tiltRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="skill-category relative rounded-2xl p-[1px] bg-gradient-to-br from-hoverBtn/40 via-hoverBtn/5 to-transparent"
    >
      <div className="relative h-full rounded-2xl bg-cricleColor/70 backdrop-blur-md p-7 overflow-hidden">
        <div className="absolute -top-10 -end-10 w-32 h-32 bg-hoverBtn/15 blur-3xl rounded-full pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-hoverBtn shadow-[0_0_8px_#00FFF7]" />

          <h3 className="text-lg font-semibold text-secondfontColor tracking-wide">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-3 relative">
          {items.map((item, index) => (
            <SkillCard key={item.title || index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
