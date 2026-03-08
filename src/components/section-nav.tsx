"use client";

import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Tech Stack" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = sections.map((s) => s.id);

export function SectionNav() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <nav
      className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
      aria-label="Page sections"
    >
      <div className="relative">
        <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-border" />

        <ul className="flex flex-col">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id || (!activeId && id === "hero");

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="group flex items-center gap-4 py-4"
                >
                  <span
                    className={cn(
                      "relative z-10 block shrink-0 rounded-full transition-all duration-300",
                      isActive
                        ? "h-4 w-4 bg-blue-600 shadow-[0_0_0_5px_rgba(37,99,235,0.18)]"
                        : "h-3.5 w-3.5 bg-muted-foreground/30 group-hover:bg-muted-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      "whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300",
                      isActive
                        ? "text-blue-600"
                        : "text-muted-foreground/50 group-hover:text-foreground"
                    )}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
