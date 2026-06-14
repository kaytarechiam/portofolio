"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { experience } from "@/lib/data";

export default function Experience() {
  const listRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (fill) fill.style.transform = "scaleY(1)";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 78%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="04"
          kicker="experience"
          title="Organizations I've built and led."
        />

        <div ref={listRef} className="relative mt-14 pl-8 sm:pl-10">
          {/* track + growing fill */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[11px]" />
          <div
            ref={fillRef}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary to-signal sm:left-[11px]"
            style={{ transform: "scaleY(0)" }}
          />

          <ul className="space-y-10">
            {experience.map((e, i) => (
              <li key={e.org} className="relative">
                {/* dot */}
                <span
                  className={`absolute -left-8 top-1.5 grid size-4 place-items-center rounded-full border sm:-left-10 ${
                    e.current
                      ? "border-primary bg-primary"
                      : "border-border-strong bg-card"
                  }`}
                >
                  {e.current && (
                    <span className="size-1.5 rounded-full bg-primary-foreground" />
                  )}
                </span>

                <Reveal delay={Math.min(i * 0.04, 0.2)} y={20}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-strong sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs text-muted-foreground">
                        {e.period}
                      </span>
                      {e.current && (
                        <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                          current
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted-foreground">
                        {e.place}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground">
                      {e.org}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-signal">{e.role}</p>
                    <ul className="mt-3 space-y-1.5">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
