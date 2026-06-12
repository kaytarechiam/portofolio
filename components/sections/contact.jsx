"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import { GithubMark } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/ui/reveal";
import ScrollText from "@/components/ui/scroll-text";
import SectionHeading from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy, try manually");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app...");
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="07"
          kicker="contact"
          title="Let's make something worth shipping."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* left: direct links */}
          <div className="lg:col-span-5">
            <ScrollText
              as="p"
              text="Open to design, IoT, and product collaborations, plus the occasional creative experiment. The fastest way to reach me is email."
              className="max-w-[42ch] text-pretty text-lg text-secondary-foreground"
            />

            <div className="mt-8 space-y-3">
              <Reveal
                as="button"
                onClick={copyEmail}
                data-cursor
                className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-border-strong"
              >
                <span className="flex items-center gap-3">
                  <Mail className="size-5 text-primary" />
                  <span className="font-mono text-sm text-foreground sm:text-base">
                    {profile.email}
                  </span>
                </span>
                {copied ? (
                  <Check className="size-4 text-pop" />
                ) : (
                  <Copy className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                )}
              </Reveal>

              <Reveal delay={0.05}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-border-strong"
                >
                  <span className="flex items-center gap-3">
                    <GithubMark className="size-5 text-signal" />
                    <span className="font-mono text-sm text-foreground sm:text-base">
                      {profile.githubHandle}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              </Reveal>
            </div>
          </div>

          {/* right: form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your idea..."
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                Send message
                <ArrowUpRight />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
