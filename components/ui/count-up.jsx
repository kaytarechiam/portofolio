"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from 0 to `value` when it scrolls into view. Handles
 * decimals (e.g. "3.60") and a non-numeric suffix is left intact. Reduced
 * motion -> shows the final value immediately. SSR renders the real value
 * (good for SEO / no-JS).
 */
export default function CountUp({ value, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = parseFloat(value);
    if (Number.isNaN(target)) return;
    const decimals = (String(value).split(".")[1] || "").length;
    const zero = decimals > 0 ? (0).toFixed(decimals) : "0";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    setDisplay(zero);
    let raf;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            io.disconnect();
            const t0 = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / (duration * 1000));
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay((target * eased).toFixed(decimals));
              if (p < 1) raf = requestAnimationFrame(tick);
              else setDisplay(value);
            };
            raf = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
