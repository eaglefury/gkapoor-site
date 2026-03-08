export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Electronic Arts (EA Sports)",
    role: "Engineering Lead",
    period: "April 2019 — Present",
    description:
      "Leading engineering teams delivering next-generation tools like EA App and EA Connect, serving millions of gamers worldwide across FIFA, Madden, Battlefield, and NHL.",
    highlights: [
      "Led teams of 4–8 engineers building microservices with Node, TypeScript, React, and GraphQL",
      "Implemented Cloud AI Services and ML models for data analytics",
      "Achieved fully automated CI/CD pipeline, shipping multiple times daily with automated quality gates",
      "Established and scaled two quality engineering teams from the ground up",
      "Led adoption of AI-assisted development tools, improving team velocity by 15%",
    ],
  },
  {
    company: "iQMetrix Software",
    role: "Lead Quality and Automation Engineering",
    period: "Jan 2018 — Jan 2019",
    description:
      "Transformed the Quality Engineering function from manual to fully automated, embedding QA deeply within the SDLC.",
    highlights: [
      "Led transformation of QA team from manual testing to full automation",
      "Defined and executed quality engineering strategy with customer feedback loops",
      "Led the Quality Engineering Circle to drive Shift-Left Quality across the org",
    ],
  },
  {
    company: "BuildDirect",
    role: "Engineering Lead — Quality and Automation",
    period: "Sept 2016 — Jan 2018",
    description:
      "Grew and delivered new customer experiences including Gateway, Estimation Service, Tax Service, and Buyer Experience.",
    highlights: [
      "Established the Quality Practice for the engineering team from scratch",
      "Facilitated the move to CI/CD with build and delivery pipelines",
      "Led quality planning, hiring, architecture, and delivery in alignment with the CTO",
    ],
  },
  {
    company: "Microsoft Corporation",
    role: "Senior Software Engineer",
    period: "Oct 2006 — Jan 2016",
    description:
      "Nearly a decade delivering highly scalable systems used by millions — Azure DevOps, MSDN, TechNet, MS Connect — across multiple Microsoft teams.",
    highlights: [
      "Technical Lead and Quality Project Manager for MSDN with cross-geography vendor teams",
      "Delivered multiple lifecycle cycles for high-volume systems (Azure DevOps, MSDN, TechNet)",
      "Served as Scrum Master and contributed to design discussions and planning",
      "Piloted fault injection service for Azure DevOps resiliency testing",
    ],
  },
  {
    company: "Satyam Computer Systems",
    role: "Senior Systems Analyst",
    period: "Aug 2000 — Oct 2006",
    description:
      "Delivered enterprise software solutions and grew from developer to senior analyst over six years.",
    highlights: [
      "Built and delivered systems for enterprise clients",
      "Progressed from developer to senior analyst role",
    ],
  },
];

export interface SkillGroup {
  category: string;
  color: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    color: "#2563eb",
    items: ["TypeScript", "JavaScript", "React", "Node.js", "GraphQL", "C#", ".NET Core", "Python", "Java"],
  },
  {
    category: "Databases",
    color: "#7c3aed",
    items: ["PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    category: "Cloud & DevOps",
    color: "#0891b2",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins", "Azure DevOps", "Git", "CI/CD"],
  },
  {
    category: "Testing & QA",
    color: "#059669",
    items: ["Selenium", "Appium", "Jest", "Mocha", "Sauce Labs"],
  },
  {
    category: "Monitoring & Observability",
    color: "#d97706",
    items: ["Datadog", "New Relic", "Sentry", "PowerBI"],
  },
  {
    category: "Leadership",
    color: "#dc2626",
    items: ["System Design", "Agile/Scrum", "Certified ScrumMaster", "Team Building"],
  },
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/gaurravk/",
  github: "https://github.com/eaglefury",
  email: "mailto:gaurav.intouch@gmail.com",
};
