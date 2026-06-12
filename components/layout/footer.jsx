import { GithubMark } from "@/components/ui/icons";
import { profile } from "@/lib/data";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-sunken">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div>
          <p className="font-pixel text-lg tracking-wider text-foreground">
            KAYTA<span className="text-primary">.EXE</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {profile.location}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            <GithubMark className="size-4" />
            {profile.githubHandle}
          </a>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {YEAR} Kayta Rechia Mazaya. Built with Next.js, GSAP and R3F.
          </p>
        </div>
      </div>
    </footer>
  );
}
