import Reveal from "@/components/ui/reveal";
import ScrollText from "@/components/ui/scroll-text";

export default function SectionHeading({ index, title, kicker, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal as="p" className="eyebrow flex items-center gap-2">
        <span className="text-primary">{index}</span>
        <span className="h-px w-8 bg-border-strong" />
        {kicker}
      </Reveal>
      <ScrollText
        as="h2"
        text={title}
        className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-tight text-foreground"
      />
    </div>
  );
}
