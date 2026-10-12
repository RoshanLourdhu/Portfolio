import React from 'react';
import { profileData } from '../data/profile';
import {
  Brain,
  Cpu,
  Bug,
  BookOpen,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export const About: React.FC = () => {
  const getAttributeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-5 h-5 text-[#B7F36B]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#B7F36B]" />;
      case 2:
        return <Bug className="w-5 h-5 text-[#B7F36B]" />;
      case 3:
      default:
        return <BookOpen className="w-5 h-5 text-[#B7F36B]" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
            <span>01 // Background</span>
            <span className="w-8 h-px bg-[#253129]" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
            A little about how I work.
          </h2>
          <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
            Engineering software with an analytical mindset, empirical validation, and end-to-end
            responsibility.
          </p>
        </div>

        {/* Balanced Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left Column: Narrative & Academic Foundation */}
          <div className="space-y-6 text-left flex flex-col justify-between">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#111513] border border-[#253129] space-y-5 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F3F5F2]">
                Engineering &amp; Data Specialization
              </h3>
              <p className="text-base sm:text-lg text-[#F3F5F2] leading-relaxed">
                {profileData.about.lead}
              </p>
              <div className="space-y-3.5 pt-1">
                {profileData.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[#A1AAA3] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-5 border-t border-[#1F2722] flex items-center justify-between text-xs sm:text-sm font-mono text-[#717B73]">
                <span>Status: Engineering Student &amp; Developer</span>
                <span className="text-[#B7F36B] font-semibold">Internship Experienced</span>
              </div>
            </div>

            {/* Academic Credentials Card */}
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-9 rounded-2xl bg-[#151A17] border border-[#253129] space-y-4 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#B7F36B]">
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-semibold">Academic Foundation</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#717B73]">
                    <Calendar className="w-4 h-4 text-[#B7F36B]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#F3F5F2]">{edu.degree}</h4>
                  <p className="text-sm sm:text-base font-mono text-[#A1AAA3] mt-1">
                    {edu.specialization}
                  </p>
                  <p className="text-xs sm:text-sm text-[#717B73] mt-1 font-mono">
                    {edu.institution}
                  </p>
                </div>

                {edu.location && (
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#717B73] font-mono">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                )}

                {edu.notes && edu.notes.length > 0 && (
                  <ul className="pt-3 space-y-2 border-t border-[#1F2722]">
                    {edu.notes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1AAA3]">
                        <CheckCircle className="w-4 h-4 text-[#B7F36B] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: 4 Professional Attributes & Principles */}
          <div className="space-y-6 text-left flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {profileData.about.coreAttributes.map((attr, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-300 space-y-3.5 text-left group shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#151A17] border border-[#253129] flex items-center justify-center group-hover:border-[#B7F36B]/40 transition-colors">
                        {getAttributeIcon(idx)}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#717B73] group-hover:text-[#B7F36B] transition-colors">
                        {attr.metric}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#F3F5F2] tracking-tight">
                      {attr.title}
                    </h4>

                    <p className="text-sm sm:text-[15px] text-[#A1AAA3] leading-relaxed">
                      {attr.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Principles Highlight Banner */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-r from-[#151A17] to-[#111513] border border-[#253129] flex items-start sm:items-center gap-5 text-left shadow-lg">
              <div className="w-2.5 h-14 bg-[#B7F36B] rounded-full shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#B7F36B] font-bold">
                  Core Engineering Philosophy
                </h4>
                <p className="text-sm sm:text-base text-[#F3F5F2] mt-1.5 leading-relaxed">
                  Avoid black-box assumptions. Build observable systems, validate inputs strictly at
                  API boundaries, and verify machine learning models with qualitative interpretability
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
