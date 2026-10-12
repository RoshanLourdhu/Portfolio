import type { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Roshan L.',
  initials: 'RL',
  roleHeadline: 'Building intelligent systems with Python, data, and AI.',
  supportingTitle: 'Python Developer | Data Science & Analytics | AI/ML',
  supportingDescription:
    'I build data-driven applications and intelligent software solutions, combining Python development, machine learning, analytics, and practical engineering.',
  availability: {
    status: true,
    text: 'Available for Developer & Analytics Roles',
    subtext: 'Open to Internship & Full-time Opportunities',
  },
  contact: {
    email: 'roshanbtech2023@gmail.com',
    github: 'https://github.com/RoshanLourdhu',
    linkedin: '', // Can be supplied by the user; link will hide gracefully if empty
    location: 'India',
  },
  resume: {
    filePath: '/resume.pdf',
    fileName: 'Roshan_L_Resume.pdf',
    lastUpdated: 'March 2026',
    available: true,
  },
  about: {
    lead:
      'I am an engineering student specializing in Data Analytics, with focused practical experience across Python development, applied machine learning, computer vision, and backend APIs.',
    paragraphs: [
      'My work bridges analytical exploration with reliable software implementation. Whether developing computer vision pipelines for image classification or structuring REST APIs with FastAPI, I focus on understanding underlying system mechanics and writing maintainable code.',
      'Through internships, academic initiatives, and self-directed projects, I enjoy turning messy datasets into structured insights and transforming ML models into functional, end-to-end applications.',
    ],
    coreAttributes: [
      {
        title: 'Analytical Thinking',
        description:
          'Structured problem decomposition, data validation, and evidence-driven hypothesis formulation.',
        metric: '01',
      },
      {
        title: 'Practical Implementation',
        description:
          'Translating machine learning concepts and database architectures into clean, functional code.',
        metric: '02',
      },
      {
        title: 'Debugging & Reliability',
        description:
          'Systematic error tracing, unit testing, and edge-case validation across data pipelines and APIs.',
        metric: '03',
      },
      {
        title: 'Continuous Learning',
        description:
          'Staying grounded in core CS fundamentals while adopting emerging tools in deep learning and modern backend.',
        metric: '04',
      },
    ],
  },
  education: [
    {
      institution: 'University / Institute Name', // Editable
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science / Data Analytics',
      period: '2023 – 2027',
      location: 'India',
      notes: [
        'Specialization coursework in Data Analytics, Database Management Systems, and Machine Learning.',
        'Active participant in technical symposiums, paper presentations, and hackathons.',
      ],
    },
  ],
};
