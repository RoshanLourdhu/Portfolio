import type { AchievementEntry } from '../types/portfolio';

export const achievementsData: AchievementEntry[] = [
  {
    id: 'ncss-ai-26',
    title: 'Best Paper Presentation',
    organization: "NCSS AI'26 National Conference",
    year: '2026',
    category: 'Conference',
    description:
      'Awarded Best Paper Presentation for research presenting practical AI/ML methodology and technical implementation before an academic panel.',
    linkText: 'Conference Proceedings',
    // url: '', // Optional verification link can be placed here
  },
  {
    id: 'reva-hackathon',
    title: 'Best Use of Open Source',
    organization: 'National Level Hackathon, REVA University',
    year: '2025 – 2026',
    category: 'Hackathon',
    description:
      'Recognized for exceptional integration and effective utilization of open-source libraries, tools, and architectures to build a working software solution under hackathon constraints.',
    linkText: 'Event Information',
    // url: '', // Optional verification link can be placed here
  },
  {
    id: 'ieee-publication',
    title: 'IEEE Conference Publication (Co-authored)',
    organization: 'IEEE International Conference',
    year: '2025 – 2026',
    category: 'Publication',
    description:
      'Co-authored research paper accepted and presented at an IEEE technical conference, exploring machine learning models and data-driven analysis.',
    linkText: 'IEEE Xplore Entry',
    // url: '', // Real DOI link can be added here without fabricating
  },
];
