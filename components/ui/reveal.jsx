"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-into-view reveal using IntersectionObserver + CSS transition.
 * Robust across normal and reduced-motion users: under reduced motion the
 * element is shown immediately (and the global CSS kills the transition).
 * No framer-motion dependency, so it can't desync with the motion preference.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  className = "",
  once = true,
  amount = 0.2,
  ...props
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, amount]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : `translateY(${y}px) scale(0.98)`,
        filter: shown ? "blur(0px)" : "blur(6px)",
        transition: `opacity 0.8s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.8s cubic-bezier(0.23,1,0.32,1) ${delay}s, filter 0.8s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
        willChange: shown ? "auto" : "opacity, transform, filter",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
