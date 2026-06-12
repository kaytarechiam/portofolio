"use client";

import { useEffect, useRef } from "react";

/**
 * Two-part cursor: a coral dot that tracks instantly and a signal-cyan ring
 * that lags behind. Over interactive targets the ring grows and shifts to the
 * pop color. Disabled on touch / coarse pointers and under reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;
    let visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(var(--cur-scale, 1))`;
      raf = requestAnimationFrame(loop);
    };

    const isInteractive = (el) =>
      el && el.closest("a, button, [role='button'], input, textarea, [data-cursor]");

    const onOver = (e) => {
      if (isInteractive(e.target)) ring.dataset.active = "true";
    };
    const onOut = (e) => {
      if (isInteractive(e.target)) delete ring.dataset.active;
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      visible = false;
    };
    const onDown = () => (dot.dataset.down = "true");
    const onUp = () => delete dot.dataset.down;

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary opacity-0 transition-[width,height,opacity] duration-200 ease-out data-[down=true]:h-1.5 data-[down=true]:w-1.5"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-signal/70 opacity-0 transition-[opacity,border-color,background-color] duration-200 ease-out [--cur-scale:1] data-[active=true]:border-pop data-[active=true]:bg-pop/10 data-[active=true]:[--cur-scale:1.55]"
      />
    </>
  );
}
