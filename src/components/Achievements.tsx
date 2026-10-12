import React from 'react';
import { achievementsData } from '../data/achievements';
import { Award, BookOpen, Trophy, ExternalLink, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Conference':
        return <Award className="w-6 h-6 text-[#B7F36B]" />;
      case 'Hackathon':
        return <Trophy className="w-6 h-6 text-[#B7F36B]" />;
      case 'Publication':
        return <BookOpen className="w-6 h-6 text-[#B7F36B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B7F36B]" />;
    }
  };

  return (
    <section id="recognition" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
            <span>05 // Milestones</span>
            <span className="w-8 h-px bg-[#253129]" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
            Recognition and research.
          </h2>
          <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
            Academic conference presentations, national hackathon awards, and peer-reviewed technical
            publications.
          </p>
        </div>

        {/* 3 Editorial Cards Grid: wide, balanced, high-contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 text-left">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 sm:p-9 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#151A17] border border-[#253129] flex items-center justify-center group-hover:border-[#B7F36B]/40 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-3 py-1 rounded-md font-medium">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F3F5F2] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono text-[#A1AAA3] mt-1.5">
                    {item.organization}
                  </p>
                  {item.year && (
                    <span className="text-xs sm:text-sm font-mono text-[#717B73] block mt-1">
                      Session: {item.year}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#A1AAA3] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer / Verification link */}
              <div className="pt-5 mt-7 border-t border-[#1F2722] flex items-center justify-between text-xs sm:text-sm font-mono">
                <span className="text-[#717B73] font-bold">0{idx + 1}</span>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#B7F36B] hover:underline font-medium"
                  >
                    <span>{item.linkText || 'Verify Link'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[#717B73]">Verified Milestone</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
