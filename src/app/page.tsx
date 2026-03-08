"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { ExperienceCard } from "@/components/experience-card";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { experiences, skillGroups, socials } from "@/lib/data";
import { SectionNav } from "@/components/section-nav";

export default function Home() {
  return (
    <>
      <SectionNav />

      {/* Hero */}
      <div
        id="hero"
        className="flex min-h-[calc(100vh-10rem)] flex-col justify-center py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-base font-medium tracking-wide text-muted-foreground">
            Hey, I&apos;m
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Gaurav Kapoor
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
            Senior Full-Stack developer and Engineering Lead with 20+ years of
            experience building distributed, cloud-based solutions at EA Sports,
            Microsoft, and more. I write code, lead teams, ship products, and
            build engineering practices from the ground up.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#experience" className={buttonVariants()}>
              View Experience
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8"
        >
          <Stat label="Years of Experience" value="20+" />
          <Stat label="Companies" value="5" />
        </motion.div>
      </div>

      {/* About */}
      <div id="about" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Gaurav Kapoor — a Senior Full-Stack Developer and
              Engineering Lead with over 20 years of hands-on development and
              technical leadership experience. I&apos;ve built and shipped
              high-impact, distributed, cloud-based solutions at companies like{" "}
              <strong className="text-foreground">Electronic Arts</strong>,{" "}
              <strong className="text-foreground">Microsoft</strong>,{" "}
              <strong className="text-foreground">
                TechMahindra (earlier Satyam Computers)
              </strong>
              , and <strong className="text-foreground">BuildDirect</strong>.
            </p>
            <p>
              I specialize in leading and motivating cross-geography,
              multi-disciplinary engineering teams. My work spans establishing
              engineering and quality practices from the ground up — technical
              architecture, Agile process implementation, hiring, and setting
              technical direction for both V1 and ongoing projects.
            </p>
            <p>
              I&apos;m a Certified ScrumMaster with a track record of building
              strong relationships with senior stakeholders and leadership
              teams. These days, I&apos;m focused on microservices, Cloud AI,
              CI/CD at scale, and leveraging AI-assisted development to
              accelerate team velocity.
            </p>
          </div>
        </Section>
      </div>

      {/* Experience */}
      <div id="experience" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
          <p className="mt-4 text-muted-foreground">
            Two decades of building software, leading teams, and solving hard
            problems.
          </p>
        </Section>

        <Section className="pt-0">
          <div className="ml-1">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </Section>
      </div>

      {/* Tech Stack */}
      <div id="skills" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skillGroups.flatMap((group) =>
              group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md px-3 py-1.5 text-base font-medium"
                  style={{
                    backgroundColor: `${group.color}14`,
                    color: group.color,
                    border: `1px solid ${group.color}30`,
                  }}
                >
                  {skill}
                </span>
              )),
            )}
          </div>
        </Section>
      </div>

      {/* Education */}
      <div id="education" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <div className="mt-6 space-y-6">
            <EducationEntry
              school="City University of Seattle"
              degree="Master of Business Administration"
              year="2019"
            />
            <Separator />
            <EducationEntry
              school="Xavier's Labor Relationship Institute, Jamshedpur"
              degree="Post Graduate Certification in Business Management"
              year="2005"
            />
            <Separator />
            <EducationEntry
              school="Government College of Engineering, Aurangabad"
              degree="Bachelor of Engineering"
              year="1999"
            />
          </div>
        </Section>
      </div>

      {/* Awards */}
      <div id="awards" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">
            Awards &amp; Recognition
          </h2>
          <ul className="mt-6 space-y-3">
            <li className="text-lg text-muted-foreground">
              Certified ScrumMaster
            </li>
            <li className="text-lg text-muted-foreground">
              Gold Star Award — Microsoft
            </li>
            <li className="text-lg text-muted-foreground">
              Lighthouse Team Award — Microsoft
            </li>
            <li className="text-lg text-muted-foreground">
              Star Performer Award — Tech Mahindra
            </li>
          </ul>
        </Section>
      </div>

      {/* Contact */}
      <div id="contact" className="py-10">
        <Section>
          <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
            I&apos;m always open to interesting conversations — whether
            it&apos;s about a project, a role, or just talking shop about
            engineering.
          </p>
        </Section>

        <Section className="pt-0">
          <div className="space-y-4">
            <ContactLink
              label="Email"
              href={socials.email}
              display="gaurav.intouch@gmail.com"
              icon={<MailIcon size={24} />}
            />
            <ContactLink
              label="LinkedIn"
              href={socials.linkedin}
              display="linkedin.com/in/gaurravk"
              icon={<LinkedInIcon size={24} />}
              external
            />
            <ContactLink
              label="GitHub"
              href={socials.github}
              display="github.com/eaglefury"
              icon={<GitHubIcon size={24} />}
              external
            />
          </div>
        </Section>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-base text-muted-foreground">{label}</p>
    </div>
  );
}

function EducationEntry({
  school,
  degree,
  year,
}: {
  school: string;
  degree: string;
  year: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{school}</h3>
      <p className="text-lg text-muted-foreground">
        {degree} &middot; {year}
      </p>
    </div>
  );
}

function ContactLink({
  label,
  href,
  display,
  icon,
  external,
}: {
  label: string;
  href: string;
  display: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-lg border border-border/60 p-5 transition-colors hover:bg-accent/50"
    >
      <span className="shrink-0">{icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-lg text-foreground">{display}</span>
      </div>
    </Link>
  );
}
