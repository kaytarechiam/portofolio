"use client";

import { useEffect, useRef } from "react";

/**
 * One persistent backdrop behind the whole page: two warm glows that drift on
 * scroll, a faint grid, and film grain. This is what makes the sections read as
 * a single continuous surface instead of stacked blocks. No-op movement under
 * reduced motion (glows stay put).
 */
export default function SiteBackground() {
  const glowA = useRef(null);
  const glowB = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.body.scrollHeight - window.innerHeight || 1;
        const p = Math.min(1, Math.max(0, window.scrollY / max));
        if (glowA.current)
          glowA.current.style.transform = `translate3d(${-8 + p * 26}%, ${p * 70}vh, 0)`;
        if (glowB.current)
          glowB.current.style.transform = `translate3d(${8 - p * 24}%, ${30 - p * 55}vh, 0)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        ref={glowA}
        className="absolute left-1/2 top-[-10vh] h-[65vh] w-[65vh] -translate-x-1/2 rounded-full opacity-70 blur-[110px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 34%, transparent), transparent 70%)",
        }}
      />
      <div
        ref={glowB}
        className="absolute right-[-10vh] top-1/3 h-[55vh] w-[55vh] rounded-full opacity-60 blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--signal) 26%, transparent), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 grain opacity-[0.06]" />
      {/* vignette to keep edges grounded */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 60%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
