import Link from "next/link";
import { socials } from "@/lib/data";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 text-base text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Gaurav Kapoor</p>
        <div className="flex items-center gap-5">
          <Link
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </Link>
          <Link
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </Link>
          <Link
            href={socials.email}
            className="transition-opacity hover:opacity-70"
            aria-label="Email"
          >
            <MailIcon size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
