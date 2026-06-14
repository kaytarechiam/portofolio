"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Scroll-driven parallax (scrubbed). `speed` ~ how far it drifts: positive
 * moves with scroll, higher = more travel. No-op under reduced motion.
 */
export default function Parallax({ children, speed = 0.3, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const travel = speed * 60;
    const tween = gsap.fromTo(
      el,
      { yPercent: -travel },
      {
        yPercent: travel,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
