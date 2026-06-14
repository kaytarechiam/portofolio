"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmartImage from "@/components/ui/smart-image";
import { profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const Scene = dynamic(() => import("@/components/hero/scene"), {
  ssr: false,
  loading: () => null,
});

const EASE = [0.16, 1, 0.3, 1];
const nameWords = profile.name.toUpperCase().split(" ");

function RotatingRole({ reduce }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom text-signal">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={reduce ? false : { y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    const delay = reduce ? 250 : 1500;
    const t = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(t);
  }, [reduce]);

  // Scroll-driven exit: hero dissolves into the next section.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(contentRef.current, {
        yPercent: -10,
        opacity: 0,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: st,
      });
      gsap.to(threeRef.current, {
        yPercent: 18,
        opacity: 0,
        ease: "none",
        scrollTrigger: st,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* 3D layer */}
      <div
        ref={threeRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-30 sm:opacity-50 lg:left-1/3 lg:opacity-90"
      >
        {loaded && <Scene />}
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-transparent to-background lg:from-background/30" />

      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[200] grid place-items-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex flex-col items-center gap-5">
              <span className="font-pixel text-2xl tracking-wider text-foreground">
                KAYTA<span className="text-primary">.EXE</span>
              </span>
              <div className="h-px w-48 overflow-hidden bg-border">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduce ? 0.2 : 1.4, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
              <span className="eyebrow">booting portfolio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div
        ref={contentRef}
        className="container-x relative z-10 flex min-h-[100svh] flex-col justify-start pt-28 pb-24 lg:justify-center lg:pt-24 lg:pb-16"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              className="eyebrow"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              {"Portfolio // Bandung, ID"}
            </motion.p>

            <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight text-foreground">
              {nameWords.map((word, wi) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={loaded ? { y: "0%" } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 + wi * 0.1 }}
                  >
                    {wi === nameWords.length - 1 ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-7 text-xl font-medium text-foreground sm:text-2xl"
              initial={reduce ? false : { opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            >
              <span className="text-muted-foreground">I&apos;m a </span>
              <RotatingRole reduce={reduce} />
            </motion.div>

            <motion.p
              className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
            >
              {profile.bioShort}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 1 }}
            >
              <Button size="lg" onClick={() => scrollToId("projects")} className="group">
                View Projects
                <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToId("contact")}>
                Get in touch
              </Button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-xl border border-border-strong bg-card shadow-2xl">
              <SmartImage
                src="/images/foto-formal.jpg"
                alt="Kayta Rechia Mazaya"
                fallbackLabel="foto formal"
                priority
                sizes="(max-width: 1024px) 80vw, 340px"
              />
              <div className="absolute bottom-3 left-3 rounded-full border border-border-strong bg-background/80 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
                <span className="text-pop">●</span> available for collaboration
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToId("about")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        initial={reduce ? false : { opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="eyebrow">scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
