import { useEffect } from "react";
import gsap from "gsap";

export default function useMouseParallax(elements = []) {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      elements.forEach(({ ref, strength = 10 }) => {
        if (!ref.current) return;

        gsap.to(ref.current, {
          x: mouseX * strength,
          y: mouseY * strength,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [elements]);
}
