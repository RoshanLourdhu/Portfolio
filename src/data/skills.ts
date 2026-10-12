import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming & Core',
    description: 'Foundational languages for scripting, data wrangling, and backend systems.',
    skills: [
      { name: 'Python', note: 'Primary' },
      { name: 'SQL', note: 'Querying & Schema' },
    ],
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Data manipulation, statistical analysis, and predictive modeling workflows.',
    skills: [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Scikit-learn' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Data Preprocessing' },
      { name: 'Feature Engineering' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Deep neural networks, computer vision classification, and model explainability.',
    skills: [
      { name: 'PyTorch' },
      { name: 'CNNs' },
      { name: 'Computer Vision' },
      { name: 'Model Evaluation' },
      { name: 'Grad-CAM' },
      { name: 'NLP / Semantic Matching' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Developing high-throughput REST APIs and application services.',
    skills: [
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'Async Python' },
      { name: 'API Routing & Validation' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    description: 'Relational data modeling, querying, and persistent local storage.',
    skills: [
      { name: 'SQLite' },
      { name: 'SQL Query Optimization' },
      { name: 'Relational Schema Design' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Building modern responsive interfaces and developer dashboards.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & Semantic Web' },
      { name: 'CSS3' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    description: 'Version control, containerization, and unix development environments.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Linux / Bash' },
      { name: 'Vite' },
    ],
  },
];
