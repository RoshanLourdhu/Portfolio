import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types/portfolio';
import { GithubIcon } from './icons/SocialIcons';
import {
  ExternalLink,
  Lock,
  Layers,
  Terminal,
  Cpu,
  Brain,
  ShieldCheck,
  Activity,
  X,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Dynamic categories based on available projects
  const availableCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    projectsData.forEach((p) => categoriesSet.add(p.category));
    return ['All', ...Array.from(categoriesSet)] as ProjectCategory[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Bespoke technical schematics for project cards
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'dermavision-ai':
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">PyTorch :: CNN + Grad-CAM</span>
              </span>
              <span className="text-[#B7F36B] bg-[#B7F36B]/10 px-2 py-0.5 rounded font-medium">
                Saliency Map
              </span>
            </div>

            {/* Visual Schematic: CNN activation grid & heatmap */}
            <div className="grid grid-cols-6 gap-2 py-3 my-auto opacity-85">
              {Array.from({ length: 18 }).map((_, i) => {
                const isHot = [4, 5, 9, 10, 11, 15, 16].includes(i);
                return (
                  <div
                    key={i}
                    className={`h-5 rounded-md transition-all duration-300 ${
                      isHot
                        ? 'bg-[#B7F36B] shadow-[0_0_10px_rgba(183,243,107,0.45)]'
                        : 'bg-[#18211C] border border-[#232F27]'
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>Input: dermoscopy RGB (224x224)</span>
              <span>Output: Class Activation Map</span>
            </div>
          </div>
        );

      case 'fairmatch-ai':
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">FastAPI :: Semantic Matcher</span>
              </span>
              <span className="text-[#B7F36B] bg-[#B7F36B]/10 px-2 py-0.5 rounded font-medium">
                Embedding Engine
              </span>
            </div>

            {/* Visual Schematic: Vector match graph */}
            <div className="flex items-center justify-around py-3 my-auto font-mono text-xs sm:text-[13px]">
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-center shadow-sm">
                <span className="text-[#A1AAA3] block text-xs">Resume Vector</span>
                <span className="text-[#F3F5F2] font-bold">[0.84, 0.91]</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#B7F36B] text-xs font-semibold">cosine_sim</span>
                <span className="w-16 h-px bg-[#B7F36B] my-1.5" />
                <span className="text-xs text-[#A1AAA3]">Evidence Map</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-center shadow-sm">
                <span className="text-[#A1AAA3] block text-xs">Job Vector</span>
                <span className="text-[#F3F5F2] font-bold">[0.87, 0.89]</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>REST: /api/v1/match</span>
              <span>Response: 200 OK</span>
            </div>
          </div>
        );

      case 'offline-voice-keyboard':
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">Vosk + PyQt5 :: Local Audio</span>
              </span>
              <span className="text-[#B7F36B] bg-[#B7F36B]/10 px-2 py-0.5 rounded font-medium">
                Offline Pipeline
              </span>
            </div>

            {/* Visual Schematic: Waveform */}
            <div className="flex items-center justify-center gap-1.5 py-3 my-auto">
              {[22, 40, 16, 54, 72, 34, 82, 48, 96, 62, 34, 68, 45, 26, 14, 56, 38, 20].map(
                (h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h * 0.42}px` }}
                    className="w-2 rounded-full bg-[#B7F36B]/85 hover:bg-[#B7F36B] transition-all"
                  />
                )
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>Acoustic Engine: vosk-model-small</span>
              <span>Grammar: LanguageTool</span>
            </div>
          </div>
        );

      case 'fraud-card-detector':
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">Scikit-learn :: Anomaly Pipeline</span>
              </span>
              <span className="text-[#B7F36B] bg-[#B7F36B]/10 px-2 py-0.5 rounded font-medium">
                Imbalance EDA
              </span>
            </div>

            {/* Visual Schematic: Transaction decision frontier */}
            <div className="relative h-16 my-auto bg-[#131915] rounded-xl border border-[#1F2722] p-2.5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#717B73]">Normal Tx (99.8%)</div>
                <div className="w-32 h-2 rounded-full bg-[#2A3B30]" />
              </div>
              <div className="text-center font-mono text-xs sm:text-[13px] text-[#B7F36B] px-3 py-1 rounded-lg bg-[#0B0D0C] border border-[#253129] font-medium">
                PR-AUC Optimization
              </div>
              <div className="space-y-1 text-right">
                <div className="text-xs font-mono text-[#717B73]">Fraud Flags</div>
                <div className="w-12 h-2 rounded-full bg-[#B7F36B]" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>Class Skew: Imbalanced Dataset</span>
              <span>Metric: Precision-Recall Curve</span>
            </div>
          </div>
        );

      case 'student-performance-predictor':
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">Flask + Docker :: Prediction App</span>
              </span>
              <span className="text-[#B7F36B] bg-[#B7F36B]/10 px-2 py-0.5 rounded font-medium">
                Containerized
              </span>
            </div>

            {/* Visual Schematic: Pipeline flowchart */}
            <div className="flex items-center justify-between gap-3 py-3 my-auto font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-[#A1AAA3]">
                Features &amp; Scores
              </div>
              <span className="text-[#B7F36B] font-bold text-sm">&rarr;</span>
              <div className="p-2.5 rounded-xl bg-[#1F2722] border border-[#B7F36B]/35 text-[#B7F36B] font-semibold">
                ML Pipeline
              </div>
              <span className="text-[#B7F36B] font-bold text-sm">&rarr;</span>
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-[#F3F5F2]">
                Predicted Score
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>Deployment: Docker Image</span>
              <span>Model: Scikit-learn Pipeline</span>
            </div>
          </div>
        );

      case 'mailsentry-insight':
      default:
        return (
          <div className="h-48 sm:h-52 w-full bg-[#0E1210] p-5 flex flex-col justify-between relative overflow-hidden border-b border-[#1F2722]">
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#717B73]">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B7F36B]" />
                <span className="font-semibold text-[#A1AAA3]">FastAPI + SQLite :: Dashboard</span>
              </span>
              <span className="text-[#A1AAA3] bg-[#1F2722] px-2 py-0.5 rounded font-medium">
                Internship Project
              </span>
            </div>

            {/* Visual Schematic: Relational database telemetry */}
            <div className="grid grid-cols-3 gap-3 my-auto font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-center">
                <span className="text-[#717B73] block">SQLite</span>
                <span className="text-[#F3F5F2] font-bold">Indexed DB</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-center">
                <span className="text-[#717B73] block">FastAPI</span>
                <span className="text-[#B7F36B] font-bold">REST Endpoints</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-center">
                <span className="text-[#717B73] block">Frontend</span>
                <span className="text-[#F3F5F2] font-bold">Visual Dashboard</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#717B73]">
              <span>Proprietary Internal Architecture</span>
              <span>Private Repository</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
              <span>03 // Portfolio</span>
              <span className="w-8 h-px bg-[#253129]" />
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
              Selected work.
            </h2>
            <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
              A selection of projects exploring data analytics, intelligent systems, software
              engineering, and practical problem-solving.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#111513] border border-[#1F2722]">
            {availableCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all ${
                  selectedCategory === category
                    ? 'bg-[#1F2722] text-[#B7F36B] font-semibold shadow-sm'
                    : 'text-[#A1AAA3] hover:text-[#F3F5F2]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Responsive Grid: 3 columns on wide desktop, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left shadow-xl"
            >
              <div>
                {/* Custom Project Schematic Banner */}
                {renderProjectVisual(project)}

                <div className="p-7 sm:p-8 space-y-4">
                  {/* Category and Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-[13px] font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-2.5 py-1 rounded-md font-medium">
                      {project.displayCategory}
                    </span>

                    {project.isInternal ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1AAA3] bg-[#151A17] border border-[#253129] px-2.5 py-1 rounded-md">
                        <Lock className="w-3.5 h-3.5 text-[#A1AAA3]" />
                        <span>Internal</span>
                      </span>
                    ) : project.isCollaborative ? (
                      <span className="text-xs font-mono text-[#A1AAA3] bg-[#151A17] border border-[#253129] px-2.5 py-1 rounded-md">
                        Collaborative
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-[#717B73]">
                        Verified Repository
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3F5F2] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A1AAA3] mt-2.5 line-clamp-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Engineering highlight */}
                  {project.technicalHighlights && (
                    <div className="space-y-1.5 pt-1 border-t border-[#1F2722]/60">
                      <div className="text-xs font-mono text-[#717B73] uppercase tracking-wider">
                        Key Engineering:
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1AAA3] leading-relaxed line-clamp-2">
                        &bull; {project.technicalHighlights[0]}
                      </p>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#151A17] text-xs sm:text-[13px] font-mono text-[#A1AAA3] border border-[#1F2722]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-7 py-4 sm:py-5 bg-[#0E1210] border-t border-[#1F2722] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs sm:text-sm font-mono text-[#B7F36B] hover:text-[#C5F785] transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Inspect Spec</span>
                </button>

                <div className="flex items-center gap-2.5">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#151A17] hover:bg-[#1F2722] border border-[#253129] hover:border-[#B7F36B]/40 text-xs sm:text-sm font-mono text-[#F3F5F2] transition-colors"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : project.isInternal ? (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#717B73]"
                      title="Company internal repository"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Private Repo</span>
                    </span>
                  ) : null}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] text-xs sm:text-sm font-mono font-semibold transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Technical Spec Modal */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-spec-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-3xl rounded-2xl bg-[#111513] border border-[#253129] shadow-2xl p-7 md:p-9 space-y-6 text-left max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-2.5 py-0.5 rounded">
                      {activeModalProject.displayCategory}
                    </span>
                    {activeModalProject.isInternal && (
                      <span className="text-xs sm:text-sm font-mono text-[#A1AAA3] bg-[#151A17] px-2.5 py-0.5 rounded border border-[#253129]">
                        Internal Project
                      </span>
                    )}
                  </div>
                  <h3 id="project-spec-title" className="text-2xl sm:text-3xl font-bold text-[#F3F5F2] mt-2 font-display">
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2.5 rounded-xl bg-[#151A17] border border-[#253129] text-[#A1AAA3] hover:text-[#F3F5F2] hover:bg-[#1F2722] transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#717B73]">
                    Overview &amp; Problem Statement
                  </h4>
                  <p className="text-sm sm:text-base text-[#A1AAA3] mt-1.5 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {activeModalProject.note && (
                  <div className="p-4 rounded-xl bg-[#151A17] border border-[#253129] text-xs sm:text-sm font-mono text-[#A1AAA3]">
                    {activeModalProject.note}
                  </div>
                )}

                {activeModalProject.technicalHighlights && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#717B73]">
                      Technical Highlights &amp; Accomplishments
                    </h4>
                    <ul className="mt-2.5 space-y-2.5">
                      {activeModalProject.technicalHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#F3F5F2]">
                          <CheckCircle2 className="w-5 h-5 text-[#B7F36B] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#717B73]">
                    Technologies Used
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-[#151A17] border border-[#1F2722] text-xs sm:text-sm font-mono text-[#F3F5F2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#1F2722] flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-[#717B73]">
                  ID: {activeModalProject.id}
                </span>

                <div className="flex items-center gap-3.5">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151A17] hover:bg-[#1F2722] border border-[#253129] text-xs sm:text-sm font-mono text-[#F3F5F2] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#1F2722] text-xs sm:text-sm font-mono text-[#A1AAA3] hover:text-[#F3F5F2] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
