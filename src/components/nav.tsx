"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { socials } from "@/lib/data";

const SECTION_IDS = ["about", "experience", "skills", "education", "awards", "contact"];

const links = [
  { href: "#about", label: "About", anchor: true },
  { href: "#experience", label: "Experience", anchor: true },
  { href: "#contact", label: "Contact", anchor: true },
  { href: "/blog", label: "Blog", anchor: false },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  const isHome = pathname === "/";

  function isActive(link: (typeof links)[number]) {
    if (link.anchor) {
      if (!isHome) return false;
      if (link.href === "#about") {
        return ["about", "skills", "education", "awards"].includes(activeSection);
      }
      return `#${activeSection}` === link.href;
    }
    return pathname.startsWith(link.href);
  }

  function resolveHref(link: (typeof links)[number]) {
    if (link.anchor && !isHome) return `/${link.href}`;
    return link.href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          GK
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-8">
            {links.map((link) => {
              const active = isActive(link);
              const href = resolveHref(link);

              return (
                <li key={link.label}>
                  {link.anchor ? (
                    <a
                      href={href}
                      className={cn(
                        "text-lg font-medium transition-all hover:underline underline-offset-4",
                        active
                          ? "font-semibold text-blue-700"
                          : "text-blue-600 hover:text-blue-700"
                      )}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={cn(
                        "text-lg font-medium transition-all hover:underline underline-offset-4",
                        active
                          ? "font-semibold text-blue-700"
                          : "text-blue-600 hover:text-blue-700"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 border-l border-border/40 pl-6">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={socials.email}
              className="transition-opacity hover:opacity-70"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#2563eb" }}
            className="inline-flex h-9 items-center gap-1.5 rounded-md px-4 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-blue-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <ul className="border-t border-border/40 px-6 pb-4 md:hidden">
          {links.map((link) => {
            const active = isActive(link);
            const href = resolveHref(link);

            return (
              <li key={link.label}>
                {link.anchor ? (
                  <a
                    href={href}
                    className={cn(
                      "block py-2.5 text-lg font-medium transition-all",
                      active
                        ? "font-semibold text-blue-700"
                        : "text-blue-600 hover:text-blue-700"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={cn(
                      "block py-2.5 text-lg font-medium transition-all",
                      active
                        ? "font-semibold text-blue-700"
                        : "text-blue-600 hover:text-blue-700"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
          <li className="flex items-center gap-4 py-2.5">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={22} />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={22} />
            </a>
            <a href={socials.email} aria-label="Email">
              <MailIcon size={22} />
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 text-lg font-medium text-blue-600 hover:text-blue-700 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
