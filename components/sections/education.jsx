"use client";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-x">
        <SectionHeading index="03" kicker="education" title="Where I'm studying." />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal
              key={e.school}
              delay={i * 0.08}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
            >
              <div className="flex items-start justify-between gap-4">
                <GraduationCap className="size-6 text-signal" />
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{e.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
              <p className="mt-3 text-pretty text-secondary-foreground">{e.degree}</p>
              <p className="mt-2 inline-block rounded-full border border-pop/30 bg-pop/10 px-3 py-1 font-mono text-xs text-pop">
                {e.gpa}
              </p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
