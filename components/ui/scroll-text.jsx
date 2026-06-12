"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Word-by-word reveal driven by scroll position (GSAP scrub). As the element
 * moves through the viewport, words brighten and un-blur one after another, so
 * the text feels "typed in" as you scroll. Reduced motion -> fully visible.
 */
export default function ScrollText({
  text,
  as: Tag = "p",
  className = "",
  start = "top 88%",
  end = "top 42%",
}) {
  const ref = useRef(null);
  const words = String(text).split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-w]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, filter: "blur(0px)", y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0.12, filter: "blur(6px)", y: "0.18em" });
      gsap.to(targets, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "none",
        duration: 1,
        stagger: 0.7,
        scrollTrigger: { trigger: el, start, end, scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [start, end]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span data-w className="inline-block will-change-[opacity,transform,filter]">
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
