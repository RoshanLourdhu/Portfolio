import React, { useState } from 'react';
import { profileData } from '../data/profile';
import {
  ArrowDown,
  FileText,
  Mail,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'architecture' | 'stats'>('pipeline');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-36 pb-20 sm:pt-40 sm:pb-24 flex flex-col justify-center overflow-hidden bg-radial-glow bg-tech-grid"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-[#B7F36B]/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Typographic identity & Introduction */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#151A17] border border-[#253129] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7F36B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B7F36B]"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-[#A1AAA3]">
                {profileData.availability.text}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <h2 className="text-sm sm:text-base uppercase tracking-widest font-mono text-[#A1AAA3]">
                  {profileData.name}
                </h2>
                <span className="h-px w-12 bg-[#253129]" />
                <span className="text-xs sm:text-sm font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-2.5 py-0.5 rounded-md">
                  {profileData.initials}
                </span>
              </div>

              <h1 className="text-hero-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
                Building <span className="text-[#B7F36B]">intelligent systems</span> with Python,
                data, and AI.
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-mono text-[#A1AAA3] pt-1">
                {profileData.supportingTitle}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A1AAA3] leading-relaxed max-w-2xl font-normal">
              {profileData.supportingDescription}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] transition-all duration-200 shadow-md shadow-[#B7F36B]/20 hover:shadow-[#B7F36B]/30 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('resume')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl bg-[#151A17] text-[#F3F5F2] hover:bg-[#1A211D] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#B7F36B]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Social & Direct Contact Links */}
            <div className="pt-5 border-t border-[#1F2722] flex flex-wrap items-center gap-6 sm:gap-7 text-xs sm:text-sm text-[#A1AAA3]">
              <span className="font-mono text-[#717B73]">Connect:</span>

              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#B7F36B] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#B7F36B] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}

              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-[#B7F36B] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">{profileData.contact.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#151A17] hover:bg-[#1F2722] text-[#A1AAA3] hover:text-[#F3F5F2] font-mono text-xs transition-colors border border-[#1F2722]"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B7F36B]" />
                    <span className="text-[#B7F36B]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Premium Technical Console / Architectural Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto rounded-2xl bg-[#111513] border border-[#253129] shadow-2xl overflow-hidden group hover:border-[#B7F36B]/35 transition-all duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#151A17] border-b border-[#1F2722]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2A352E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#2A352E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#2A352E] inline-block" />
                  <span className="ml-2 font-mono text-xs text-[#717B73]">roshan_env :: zsh</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('pipeline')}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'pipeline'
                        ? 'bg-[#1F2722] text-[#B7F36B] font-semibold'
                        : 'text-[#717B73] hover:text-[#A1AAA3]'
                    }`}
                  >
                    pipeline.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('architecture')}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-[#1F2722] text-[#B7F36B] font-semibold'
                        : 'text-[#717B73] hover:text-[#A1AAA3]'
                    }`}
                  >
                    stack.json
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('stats')}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'stats'
                        ? 'bg-[#1F2722] text-[#B7F36B] font-semibold'
                        : 'text-[#717B73] hover:text-[#A1AAA3]'
                    }`}
                  >
                    metrics.sys
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[320px] flex flex-col justify-between">
                {activeTab === 'pipeline' && (
                  <div className="space-y-2 text-left">
                    <p className="text-[#717B73]"># Autonomous System &amp; Data Pipeline</p>
                    <p className="text-[#A1AAA3]">
                      <span className="text-[#B7F36B]">from</span> fastapi{' '}
                      <span className="text-[#B7F36B]">import</span> FastAPI
                    </p>
                    <p className="text-[#A1AAA3]">
                      <span className="text-[#B7F36B]">import</span> torch, pandas{' '}
                      <span className="text-[#B7F36B]">as</span> pd
                    </p>
                    <p className="text-[#717B73] pt-1.5">
                      <span className="text-[#B7F36B]">class</span>{' '}
                      <span className="text-[#F3F5F2] font-semibold">IntelligencePipeline</span>:
                    </p>
                    <p className="pl-4 text-[#A1AAA3]">
                      target_domain = <span className="text-[#B7F36B]">'Data Analytics &amp; ML'</span>
                    </p>
                    <p className="pl-4 text-[#A1AAA3]">
                      core_stack = [<span className="text-[#B7F36B]">'PyTorch'</span>,{' '}
                      <span className="text-[#B7F36B]">'FastAPI'</span>,{' '}
                      <span className="text-[#B7F36B]">'Scikit-learn'</span>]
                    </p>
                    <p className="pl-4 text-[#A1AAA3]">
                      vision_models = <span className="text-[#B7F36B]">'CNNs + Grad-CAM'</span>
                    </p>
                    <p className="pl-4 text-[#A1AAA3]">
                      deployment_state = <span className="text-[#B7F36B]">True</span>
                    </p>
                    <p className="pl-4 text-[#717B73] pt-1.5">
                      <span className="text-[#B7F36B]">def</span> execute_analysis(self, records):
                    </p>
                    <p className="pl-8 text-[#A1AAA3]">
                      cleaned = self.preprocess(records)
                    </p>
                    <p className="pl-8 text-[#A1AAA3]">
                      <span className="text-[#B7F36B]">return</span> model.evaluate(cleaned)
                    </p>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-1.5 text-left text-[#A1AAA3]">
                    <p className="text-[#717B73]">{`{`}</p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"engineer"</span>: "{profileData.name}",
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"specialization"</span>: "Data Analytics &amp; AI",
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"backend"</span>: ["FastAPI", "Flask", "SQLite"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"data_science"</span>: ["Pandas", "NumPy", "Scikit-learn"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"deep_learning"</span>: ["PyTorch", "CNNs", "Grad-CAM"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"offline_first"</span>: ["Vosk", "LanguageTool"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#B7F36B]">"methodology"</span>: "Evidence-driven &amp; Testable"
                    </p>
                    <p className="text-[#717B73]">{`}`}</p>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-3.5 text-left text-sm">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2722]">
                      <span className="text-[#A1AAA3]">Production Projects</span>
                      <span className="text-[#B7F36B] font-bold text-base">06</span>
                    </div>
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2722]">
                      <span className="text-[#A1AAA3]">Industry Internships</span>
                      <span className="text-[#B7F36B] font-bold text-base">02</span>
                    </div>
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2722]">
                      <span className="text-[#A1AAA3]">IEEE Conference Papers</span>
                      <span className="text-[#B7F36B] font-bold text-base">01 (Co-authored)</span>
                    </div>
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2722]">
                      <span className="text-[#A1AAA3]">National Hackathon Awards</span>
                      <span className="text-[#B7F36B] font-bold text-base">Best Open Source</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A1AAA3]">Primary Core Language</span>
                      <span className="text-[#B7F36B] font-bold text-base">Python &amp; SQL</span>
                    </div>
                  </div>
                )}

                {/* Status Bar */}
                <div className="pt-4 mt-4 border-t border-[#1F2722] flex items-center justify-between text-xs text-[#717B73]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B7F36B]" />
                    <span>system status: optimal</span>
                  </div>
                  <span>utf-8 | 60 fps</span>
                </div>
              </div>
            </div>

            {/* Quick telemetry badges underneath console */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-[#151A17] border border-[#1F2722]">
                <div className="text-xl font-bold font-mono text-[#F3F5F2]">6</div>
                <div className="text-xs font-mono text-[#717B73] mt-0.5">Repositories</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#151A17] border border-[#1F2722]">
                <div className="text-xl font-bold font-mono text-[#B7F36B]">2</div>
                <div className="text-xs font-mono text-[#717B73] mt-0.5">Internships</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#151A17] border border-[#1F2722]">
                <div className="text-xl font-bold font-mono text-[#F3F5F2]">1</div>
                <div className="text-xs font-mono text-[#717B73] mt-0.5">IEEE Paper</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
