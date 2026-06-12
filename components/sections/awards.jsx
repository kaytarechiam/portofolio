"use client";

import { Trophy, Medal, Award as AwardIcon } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { awards } from "@/lib/data";

const MEDAL = {
  gold: { Icon: Trophy, cls: "text-pop", ring: "border-pop/40 bg-pop/10" },
  silver: { Icon: Medal, cls: "text-foreground", ring: "border-border-strong bg-card" },
  rank: { Icon: AwardIcon, cls: "text-signal", ring: "border-signal/40 bg-signal/10" },
};

export default function Awards() {
  return (
    <section id="awards" className="section-pad relative">
      <div className="container-x">
        <SectionHeading index="06" kicker="awards" title="Recognition along the way." />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {awards.map((a, i) => {
            const m = MEDAL[a.medal] || MEDAL.silver;
            const { Icon } = m;
            return (
              <Reveal
                key={a.title}
                delay={i * 0.06}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
              >
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-full border ${m.ring}`}
                >
                  <Icon className={`size-6 ${m.cls}`} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{a.date}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
