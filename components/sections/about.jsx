"use client";

import Reveal from "@/components/ui/reveal";
import ScrollText from "@/components/ui/scroll-text";
import CountUp from "@/components/ui/count-up";
import SectionHeading from "@/components/ui/section-heading";
import Parallax from "@/components/ui/parallax";
import SmartImage from "@/components/ui/smart-image";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="01"
          kicker="about"
          title="Code, hardware, and a strong sense of design."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollText
              as="p"
              text={profile.bio}
              className="max-w-[60ch] text-pretty text-lg leading-relaxed text-secondary-foreground"
            />

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="bg-card p-5"
                >
                  <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">{s.label}</div>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground">{s.note}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Parallax speed={0.18}>
              <div className="relative ml-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-xl border border-border-strong bg-card">
                <SmartImage
                  src="/images/foto-casual-1.jpg"
                  alt="Kayta Rechia Mazaya"
                  fallbackLabel="foto casual"
                  sizes="(max-width: 1024px) 80vw, 360px"
                />
              </div>
            </Parallax>
            <Reveal
              delay={0.1}
              className="ml-auto mt-4 max-w-[360px] rounded-xl border border-border bg-card p-4"
            >
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-pop">now</span>
                {" // STEI-K @ ITB, expected Oct 2028. Bandung based, open to design + IoT collaborations."}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
