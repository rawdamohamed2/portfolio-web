import gsap from "gsap";

export const skillsAnimation = (section) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    const title = ".skills-title";
    const subtitle = ".skills-subtitle";
    const categories = ".skill-category";
    const skillItems = ".skill-item";

    gsap.set(title, {
      opacity: 0,
      y: 35,
    });

    gsap.set(subtitle, {
      opacity: 0,
      y: 20,
    });

    gsap.set(categories, {
      opacity: 0,
      y: 45,
      scale: 0.96,
    });

    gsap.set(skillItems, {
      opacity: 0,
      y: 15,
      scale: 0.9,
    });

    const tl = gsap.timeline();

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    })

      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.35",
      )

      .to(
        categories,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.2",
      )

      .to(
        skillItems,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "back.out(1.4)",
        },
        "-=0.3",
      );
  }, section);

  return () => ctx.revert();
};
