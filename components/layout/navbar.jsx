"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight || 1;
      setScrolled(window.scrollY > 30);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-3 sm:pt-4">
      {/* scroll progress line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-primary/80"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="w-full max-w-3xl">
        <nav
          className={`flex items-center justify-between gap-2 rounded-full border px-2 py-2 pl-4 transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled
              ? "border-border-strong bg-background/70 shadow-xl shadow-black/30 backdrop-blur-xl"
              : "border-border/60 bg-background/30 backdrop-blur-md"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="font-pixel text-base tracking-wider text-foreground transition-colors hover:text-primary"
          >
            KAYTA<span className="text-primary">.EXE</span>
          </button>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="rounded-full px-3 py-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-1.5 font-mono text-[13px] font-medium text-primary-foreground transition-transform duration-150 ease-out hover:brightness-105 active:scale-[0.97] md:inline-block"
          >
            GitHub
          </a>

          <button
            className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* mobile floating menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mt-2 overflow-hidden rounded-2xl border border-border-strong bg-background/90 backdrop-blur-xl md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <ul className="flex flex-col gap-0.5 p-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => go(link.id)}
                      className="w-full rounded-xl px-3 py-2.5 text-left font-mono text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl px-3 py-2.5 font-mono text-base text-primary"
                  >
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
