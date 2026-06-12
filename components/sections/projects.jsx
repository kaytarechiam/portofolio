"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sprout, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import SmartImage from "@/components/ui/smart-image";
import { projects } from "@/lib/data";

// Bento spans (lg, 6-col grid). Current projects get larger cells.
const SPAN = {
  dash: "lg:col-span-4",
  questify: "lg:col-span-2",
  psytrack: "lg:col-span-3",
  "order-served": "lg:col-span-3",
  moviedb: "lg:col-span-2",
  ampibi: "lg:col-span-2",
  solar: "lg:col-span-2",
  agriculture: "lg:col-span-6",
};

function ProjectCard({ p, onOpen, index }) {
  const featured = p.current;
  const mediaRef = useRef(null);

  // In-card image parallax: media drifts slightly as the card scrolls past.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Reveal
      className={`${SPAN[p.id] || "lg:col-span-2"} h-full`}
      y={28}
      delay={Math.min(index * 0.06, 0.3)}
    >
      <button
        onClick={() => onOpen(p)}
        data-cursor
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
      >
        {/* media */}
        <div
          className={`relative w-full overflow-hidden ${
            featured ? "h-52 sm:h-56" : "h-44 sm:h-48"
          } ${p.id === "agriculture" ? "sm:!h-40 lg:!h-44" : ""}`}
        >
          <div ref={mediaRef} className="absolute inset-x-0 -inset-y-[12%] will-change-transform">
            {p.image ? (
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                <SmartImage
                  src={p.image}
                  alt={p.title}
                  fallbackLabel={p.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-sunken bg-grid transition-transform duration-500 ease-out group-hover:scale-105">
                <Sprout className="size-12 text-pop/80" />
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {featured && (
            <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-primary backdrop-blur">
              current
            </span>
          )}
          {p.award && (
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-pop/40 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-pop backdrop-blur">
              <Trophy className="size-3" /> award
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
            <span>{p.role}</span>
            <span>{p.period}</span>
          </div>
          <h3
            className={`mt-2 font-display font-semibold leading-tight text-foreground ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {p.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{p.subtitle}</p>

          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </div>
        </div>
      </button>
    </Reveal>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpen = (p) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="05"
          kicker="projects"
          title="Things I've designed, built, and shipped."
        />

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] w-full max-w-[calc(100%-2rem)] overflow-y-auto border-border bg-popover p-0 sm:max-w-2xl">
          {active && (
            <>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
                {active.image ? (
                  <SmartImage
                    src={active.image}
                    alt={active.title}
                    fallbackLabel={active.title}
                    sizes="640px"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-sunken bg-grid">
                    <Sprout className="size-14 text-pop/80" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-popover to-transparent" />
              </div>

              <div className="p-6">
                <DialogHeader>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span>{active.role}</span>
                    <span className="text-border-strong">/</span>
                    <span>{active.period}</span>
                    {active.current && (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                        current
                      </span>
                    )}
                  </div>
                  <DialogTitle className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {active.subtitle}
                  </DialogDescription>
                </DialogHeader>

                {active.award && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-pop/40 bg-pop/10 px-3 py-1 font-mono text-xs text-pop">
                    <Trophy className="size-3.5" /> {active.award}
                  </p>
                )}

                <p className="mt-4 text-pretty leading-relaxed text-secondary-foreground">
                  {active.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {active.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
