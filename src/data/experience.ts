import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "SoFi",
    location: "Salt Lake City, UT",
    period: "Dec 2023 – Jul 2025",
    description:
      "Led frontend development for financial products and design system initiatives.",
    achievements: [
      "Co-led rollout of SoFi's unified design system, building reusable React components adopted by 6+ product teams",
      "Redesigned the Student Loan Refinancing funnel with said design system and partnered with backend teams to transition API layer from REST to GraphQL",
      "Designed and implemented A/B experiments improving conversion by ~3% resulting in a $12M monthly revenue lift",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Optimizely"],
  },
  {
    type: "work",
    title: "Lead Software Instructor",
    company: "Code Platoon",
    location: "Chicago, IL (remote)",
    period: "Oct 2022 – Oct 2023",
    description:
      "Taught modern full-stack development at a not-for-profit helping military veterans transition to software careers.",
    achievements: [
      "Rewrote our assessments and built an automated GitHub Actions pipeline for instant feedback and CI/CD grading, reducing assessment turnaround from days to seconds",
      "Delivered comprehensive curriculum covering React, Python/Django, databases, and deployment",
    ],
    technologies: ["React", "JavaScript", "GitHub Actions", "Python", "Django"],
  },
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "DUOS",
    location: "New York, NY (remote)",
    period: "Nov 2021 – Oct 2022",
    description: "Owned all frontend surfaces for senior-care platform.",
    achievements: [
      "Owned all frontend surfaces (marketing, internal ops, and consumer mobile) for DUOS's senior-care platform",
      "Built robust automated testing (unit, integration, e2e) integrated with CI/CD to ensure rapid, stable releases",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "MUI",
      "Jest",
      "Cypress",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer III",
    company: "ServiceMaster",
    location: "Memphis, TN (remote)",
    period: "May 2019 – Oct 2021",
    description:
      "Delivered full redesign of flagship brand sites and checkout flow.",
    achievements: [
      "Delivered full redesign of flagship brand sites and checkout flow, modernizing UX for millions of annual users",
      "Introduced automated test coverage (Jest, Cypress) that ensure feature parity and minimize regressions",
    ],
    technologies: ["Ember.js", "React", "Jest", "Cypress"],
  },
  {
    type: "work",
    title: "Software Instructor",
    company: "Fullstack Academy",
    location: "New York, NY",
    period: "Jul 2016 – Apr 2019",
    description:
      "Early engineer/instructor at one of the first major coding bootcamps.",
    achievements: [
      "Delivered lectures on full-stack development and led curriculum migration from Angular 1.x to React",
      "Mentored hundreds of engineers now at top tech companies",
    ],
    technologies: ["Angular 1.x", "React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    type: "work",
    title: "Software Development Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "Aug 2014 – Jul 2016",
    description: "Developed internal UI tools for AI model training.",
    achievements: [
      "Developed internal UI tools enabling support engineers to train early AI models (Cortana) on Windows and Office troubleshooting flows",
    ],
    technologies: ["Angular 1.x", "C#", "ASP.NET"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "Johns Hopkins University",
    location: "Baltimore, MD",
    period: "2010 - 2014",
    description: "GPA 3.7 / 4.0 · Upsilon Pi Epsilon",
    achievements: [],
    technologies: ["C", "C++", "Java", "Ocaml", "Haskell", "Unity"],
  },
];
