import type { ExperienceEntry } from '../types/portfolio';

export const experienceData: ExperienceEntry[] = [
  {
    id: 'airkrit',
    company: 'Airkrit',
    role: 'Data Analyst Intern',
    dates: 'June 2026 – Present', // Editable in this file
    isCurrent: true,
    location: 'Remote / On-site',
    description:
      'Engaging in exploratory data analysis, metric tracking, and analytical reporting across operational data streams.',
    keyContributions: [
      'Performing exploratory data analysis to evaluate operational patterns and data completeness.',
      'Designing structured data queries and aggregation summaries to support ongoing business reporting.',
      'Assisting in the preparation of visual dashboards and insight summaries for team review.',
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Data Analytics', 'Excel / Sheets'],
  },
  {
    id: 'white-and-box',
    company: 'White & Box Tech Products & Services',
    role: 'Data Science Intern',
    dates: 'December 2025 – March 2026',
    isCurrent: false,
    location: 'Bangalore, India',
    description:
      'Contributed to data processing workflows, analytical pipelines, and internal tools supporting data-centric product initiatives.',
    keyContributions: [
      'Built and refined data preprocessing scripts for cleaning, formatting, and validating ingested records.',
      'Assisted in implementing REST endpoints with FastAPI to expose query results to internal dashboards.',
      'Collaborated on database integration with SQLite for rapid structured persistence and retrieval.',
      'Participated in code reviews, technical documentation, and pipeline debugging sessions.',
    ],
    technologies: ['Python', 'FastAPI', 'SQLite', 'Pandas', 'Data Preprocessing', 'Git'],
  },
];
