import gsap from "gsap";

export const contactAnimation = (section) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    const title = ".contact-title";
    const subtitle = ".contact-subtitle";
    const card = ".contact-card";
    const fields = ".contact-field";
    const button = ".contact-button";

    gsap.set(title, {
      opacity: 0,
      y: 30,
    });

    gsap.set(subtitle, {
      opacity: 0,
      y: 20,
    });

    gsap.set(card, {
      opacity: 0,
      y: 50,
      scale: 0.97,
    });

    gsap.set(fields, {
      opacity: 0,
      y: 20,
    });

    gsap.set(button, {
      opacity: 0,
      y: 20,
      scale: 0.95,
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
        card,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      )
      .to(
        fields,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.5)",
        },
        "-=0.2",
      );
  }, section);

  return () => ctx.revert();
};
