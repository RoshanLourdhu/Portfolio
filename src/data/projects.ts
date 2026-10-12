import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'dermavision-ai',
    title: 'DermaVision AI',
    category: 'Computer Vision',
    displayCategory: 'AI/ML & Computer Vision',
    description:
      'An AI-based skin lesion analysis research platform exploring deep learning architectures, image segmentation, classification pipelines, and model interpretability with visual saliency maps.',
    technologies: ['Python', 'PyTorch', 'Computer Vision', 'CNNs', 'Grad-CAM'],
    githubUrl: 'https://github.com/RoshanLourdhu/Skin-lesion-Diagnosis',
    featured: true,
    technicalHighlights: [
      'Implemented convolutional neural network architectures for multiclass dermatological feature extraction.',
      'Integrated Grad-CAM visualization to highlight model activation maps and interpret diagnostic focus.',
      'Handled image augmentation and preprocessing pipelines to mitigate class imbalance.',
    ],
  },
  {
    id: 'fairmatch-ai',
    title: 'FairMatch AI',
    category: 'AI/ML',
    displayCategory: 'AI/ML & Backend',
    description:
      'An intelligent resume and skill-matching engine built with FastAPI, exploring text preprocessing, semantic embeddings, evidence extraction, and structured similarity scoring.',
    technologies: ['Python', 'FastAPI', 'Semantic Matching', 'Text Processing', 'Embeddings'],
    githubUrl: 'https://github.com/RoshanLourdhu/FairMatch-AI',
    featured: true,
    technicalHighlights: [
      'Constructed modular FastAPI endpoints for parsing, tokenization, and semantic vector comparison.',
      'Developed evidence-mapping logic connecting candidate qualifications directly to job criteria.',
      'Structured clean JSON response schemas with automated endpoint validation tests.',
    ],
  },
  {
    id: 'offline-voice-keyboard',
    title: 'Offline AI Voice Keyboard',
    category: 'Automation',
    displayCategory: 'Automation & Python GUI',
    description:
      'A local, privacy-focused speech-to-text input system running entirely offline, utilizing Vosk acoustic models, LanguageTool grammar correction, and a responsive PyQt5 desktop interface.',
    technologies: ['Python', 'Vosk', 'PyQt5', 'LanguageTool', 'Speech Recognition'],
    githubUrl: 'https://github.com/RoshanLourdhu/Offline-Voice-Recoganization',
    featured: true,
    technicalHighlights: [
      'Integrated Vosk offline speech recognition engine for low-latency local audio transcription without external API dependencies.',
      'Added automated post-transcription grammar polishing and spell correction via LanguageTool.',
      'Engineered a non-intrusive PyQt5 overlay that simulates native keyboard keystroke emission.',
    ],
  },
  {
    id: 'fraud-card-detector',
    title: 'Credit Card Fraud Detection',
    category: 'Data Science',
    displayCategory: 'Data Science & Predictive Modeling',
    description:
      'A machine learning pipeline analyzing anonymized credit card transaction data, handling extreme target class imbalance, exploratory data analysis, and anomaly classification.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/s3bhi/fraud_card_detector',
    isCollaborative: true,
    note: 'Collaborative machine learning project exploring anomaly detection.',
    featured: false,
    technicalHighlights: [
      'Conducted exploratory data analysis and feature correlation checks on high-dimensional transaction data.',
      'Addressed extreme class skew using balanced sampling and precision-recall metric evaluations.',
      'Compared multiple classification algorithms to optimize fraud detection while minimizing false alarms.',
    ],
  },
  {
    id: 'student-performance-predictor',
    title: 'Student Performance Predictor',
    category: 'Backend Development',
    displayCategory: 'Machine Learning & Web App',
    description:
      'A predictive modeling web application that estimates student academic outcomes based on demographic and historical educational features, containerized with Docker.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Docker', 'HTML/CSS'],
    featured: false,
    technicalHighlights: [
      'Trained and serialized predictive regression models with Scikit-learn pipelines.',
      'Created a lightweight Flask web interface for parameter submission and real-time prediction output.',
      'Containerized the application using Docker for reproducible local execution.',
    ],
  },
  {
    id: 'mailsentry-insight',
    title: 'MailSentry Insight',
    category: 'Backend Development',
    displayCategory: 'Backend & Data Analytics',
    description:
      'A modular analytics dashboard application featuring structured data retrieval, SQLite persistence, and REST endpoints for query analysis and monitoring.',
    technologies: ['Python', 'FastAPI', 'SQLite', 'SQL', 'HTML/CSS', 'JavaScript'],
    isInternal: true,
    note: 'Internal project developed during technical internship; repository code kept private.',
    featured: false,
    technicalHighlights: [
      'Constructed REST endpoints using FastAPI for querying and aggregating historical log metrics.',
      'Designed normalized SQLite database schema with optimized indexing for rapid retrieval.',
      'Created an interactive frontend dashboard for visual review of incoming records and activity trends.',
    ],
  },
];
