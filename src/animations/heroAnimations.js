import gsap from "gsap";

export const animateHero = ({
  title,
  subtitle,
  description,
  techStack,
  buttons,
  robot,
}) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(title, {
    y: 70,
    opacity: 0,
    duration: 1,
  })
    .from(
      subtitle,
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.5",
    )
    .from(
      description,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4",
    )
    .from(
      techStack,
      {
        y: 25,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3",
    )
    .from(
      buttons,
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3",
    );

  if (robot) {
    gsap.to(robot, {
      y: -12,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  return tl;
};
