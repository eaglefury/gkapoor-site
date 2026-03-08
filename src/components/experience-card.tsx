import type { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 h-[9px] w-[9px] rounded-full border-2 border-foreground bg-background" />

      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold">{experience.company}</h3>
          <span className="text-base text-muted-foreground">
            {experience.period}
          </span>
        </div>
        <p className="text-base font-medium text-muted-foreground">
          {experience.role}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <ul className="space-y-1 pt-1">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-base text-muted-foreground before:mr-2 before:content-['—']"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
