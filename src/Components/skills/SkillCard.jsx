import React from "react";

export default function SkillCard({ item }) {
  if (!item) return null;

  const isFontAwesome =
    item.icon?.startsWith("fa") || item.icon?.includes("fa-brands");

  return (
    <div className="card bg-cricleColor flex items-center gap-0 justify-center border border-fontColor/30 rounded-2xl px-4 py-2 hover:shadow-[0px_0px_5px_#00FFF7] transition-all duration-300">
      <h1 className="card-title text-effectColor text-4xl">
        {isFontAwesome ? (
          <i className={`${item.icon} card-img-top`}></i>
        ) : (
          <img
            src={item.icon}
            alt={item.title}
            className="inline-block w-[35px]"
          />
        )}
      </h1>
      <h3 className="card-text text-secondfontColor text-xl duration-500 transition-all ps-1">
        {item.title}
      </h3>
    </div>
  );
}
