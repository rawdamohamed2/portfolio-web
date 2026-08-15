import gsap from "gsap";

export const projectsAnimation = (section) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    const title = ".projects-title";
    const filters = ".project-filter";
    const cards = ".project-card";

    const tl = gsap.timeline();

    // Initial state
    gsap.set([title, filters, cards], {
      opacity: 0,
    });

    gsap.set(title, {
      y: 30,
    });

    gsap.set(filters, {
      y: 20,
    });

    gsap.set(cards, {
      y: 40,
      scale: 0.95,
    });

    // Title
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    })

      // Filters
      .to(
        filters,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.35",
      )

      // Cards
      .to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.2",
      );
  }, section);

  return () => ctx.revert();
};

export const projectFilterAnimation = (section) => {
  if (!section) return;

  const cards = section.querySelectorAll(".project-card");

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 35,
      scale: 0.94,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      clearProps: "filter",
    },
  );
};
