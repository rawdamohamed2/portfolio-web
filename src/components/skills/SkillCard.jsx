import React from "react";

export default function SkillCard({ item }) {
  if (!item) return null;

  const isFontAwesome =
    item.icon?.startsWith("fa") || item.icon?.includes("fa-brands");

  return (
    <div className="skill-item group flex items-center gap-2 bg-MColor/60 border border-fontColor/10 rounded-full pe-4 ps-2 py-1.5 hover:border-hoverBtn/60 hover:bg-hoverBtn/5 hover:shadow-[0_0_12px_-2px_#00FFF7] transition-all duration-300">
      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-hoverBtn/10 group-hover:bg-hoverBtn/20 transition-colors duration-300">
        {isFontAwesome ? (
          <i className={`${item.icon} text-effectColor text-sm`} />
        ) : (
          <img src={item.icon} alt={item.title} className="w-[16px] h-[16px]" />
        )}
      </span>

      <span className="text-secondfontColor text-sm group-hover:text-fontColor transition-colors duration-300 whitespace-nowrap">
        {item.title}
      </span>
    </div>
  );
}
