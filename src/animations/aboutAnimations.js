import gsap from "gsap";

export const aboutAnimation = (section) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    const title = section.querySelector(".about-title");
    const texts = section.querySelectorAll(".about-text");
    const info = section.querySelector(".about-info");
    const links = section.querySelectorAll(".about-links a");
    const terminal = section.querySelector(".terminal-card");

    const tl = gsap.timeline({
      delay: 0.15,
    });

    tl.from(title, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        texts,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.35",
      )
      .from(
        info,
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        links,
        {
          y: 20,
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.5)",
        },
        "-=0.25",
      )
      .from(
        terminal,
        {
          x: 70,
          opacity: 0,
          rotateY: 8,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6",
      );
  }, section);

  return () => ctx.revert();
};
