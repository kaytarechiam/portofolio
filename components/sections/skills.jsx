"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { skillGroups, techBadges, languages } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rows = gsap.utils.toArray("[data-skill]", ref.current);

    if (reduce) {
      rows.forEach((row) => {
        const level = +row.dataset.level;
        const fill = row.querySelector("[data-fill]");
        const num = row.querySelector("[data-num]");
        if (fill) fill.style.transform = `scaleX(${level / 100})`;
        if (num) num.textContent = `${level}%`;
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "bottom 45%",
          scrub: true,
          onUpdate() {
            rows.forEach((row) => {
              const fill = row.querySelector("[data-fill]");
              const num = row.querySelector("[data-num]");
              if (fill && num) {
                const level = +row.dataset.level;
                const cur = Number(gsap.getProperty(fill, "scaleX"));
                num.textContent = `${Math.round(cur * 100)}%`;
              }
            });
          },
        },
      });
      rows.forEach((row, i) => {
        const level = +row.dataset.level;
        const fill = row.querySelector("[data-fill]");
        tl.fromTo(fill, { scaleX: 0 }, { scaleX: level / 100, ease: "none", duration: 1 }, i * 0.4);
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x" ref={ref}>
        <SectionHeading
          index="02"
          kicker="skills"
          title="What I work with, and how deep it runs."
        />

        <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} data-skill data-level={g.level}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground">{g.title}</h3>
                <span data-num className="font-mono text-sm text-pop">
                  0%
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  data-fill
                  className="h-full w-full origin-left rounded-full"
                  style={{
                    transform: "scaleX(0)",
                    background:
                      "linear-gradient(90deg, var(--primary), var(--pop))",
                  }}
                />
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech grid */}
        <Reveal className="mt-16">
          <p className="eyebrow">stack</p>
          <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-6">
            {techBadges.map((t) => (
              <div
                key={t}
                className="grid place-items-center bg-card px-3 py-5 text-center font-mono text-sm text-secondary-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-3">
          {languages.map((l) => (
            <span
              key={l.name}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
            >
              {l.name}{" "}
              <span className="font-mono text-xs text-muted-foreground">/ {l.level}</span>
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
