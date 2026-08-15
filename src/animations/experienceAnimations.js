import gsap from "gsap";

export const experienceAnimation = (section) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    gsap.from(".experience-title", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.from(".experience-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });
  }, section);

  return () => ctx.revert();
};

export const experienceItemAnimation = (section) => {
  if (!section) return;

  const items = section.querySelectorAll(".experience-item");

  gsap.fromTo(
    items,
    {
      opacity: 0,
      x: 40,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
    },
  );
};
