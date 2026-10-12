import React from 'react';
import { experienceData } from '../data/experience';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
            <span>04 // Industry Path</span>
            <span className="w-8 h-px bg-[#253129]" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
            Experience.
          </h2>
          <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
            Practical technical experience gained through industry internships and real-world data
            initiatives.
          </p>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative border-l-2 border-[#1F2722] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[43px] md:-left-[59px] top-2 w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  exp.isCurrent
                    ? 'bg-[#B7F36B] border-[#0B0D0C] ring-4 ring-[#B7F36B]/25'
                    : 'bg-[#151A17] border-[#253129] group-hover:border-[#B7F36B]'
                }`}
              />

              {/* Experience Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-300 space-y-6 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-3 py-1 rounded-md font-medium">
                        {exp.role}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-xs font-mono text-[#F3F5F2] bg-[#1F2722] px-2.5 py-1 rounded-md border border-[#253129]">
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F5F2] mt-2.5 group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono text-[#717B73] space-y-1.5">
                    <div className="flex items-center gap-2 text-[#A1AAA3]">
                      <Calendar className="w-4 h-4 text-[#B7F36B]" />
                      <span className="font-medium">{exp.dates}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Role Narrative */}
                <p className="text-base sm:text-lg text-[#F3F5F2] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Technical Contributions */}
                {exp.keyContributions && exp.keyContributions.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-[#1F2722]">
                    <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#717B73] font-semibold">
                      Key Technical Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.keyContributions.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#A1AAA3]">
                          <CheckCircle className="w-5 h-5 text-[#B7F36B] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used in the role */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs sm:text-sm font-mono text-[#717B73] mr-1.5 font-semibold">
                      Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-[#151A17] text-xs sm:text-sm font-mono text-[#F3F5F2] border border-[#1F2722]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification note */}
        <div className="mt-10 text-left ml-4 md:ml-8 pl-8 md:pl-12">
          <p className="text-xs sm:text-sm font-mono text-[#717B73]">
            [Note: Internship timelines, corporate details, and responsibilities are synchronized
            via <code className="text-[#A1AAA3]">src/data/experience.ts</code>.]
          </p>
        </div>
      </div>
    </section>
  );
};
