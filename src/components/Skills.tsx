import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import {
  Code,
  LineChart,
  BrainCircuit,
  Server,
  Database,
  Layout,
  Terminal,
  Check,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-5 h-5 text-[#B7F36B]" />;
      case 'data-science':
        return <LineChart className="w-5 h-5 text-[#B7F36B]" />;
      case 'ai-ml':
        return <BrainCircuit className="w-5 h-5 text-[#B7F36B]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[#B7F36B]" />;
      case 'databases':
        return <Database className="w-5 h-5 text-[#B7F36B]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#B7F36B]" />;
      case 'tools':
      default:
        return <Terminal className="w-5 h-5 text-[#B7F36B]" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
              <span>02 // Competencies</span>
              <span className="w-8 h-px bg-[#253129]" />
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
              Technical toolkit &amp; proficiencies.
            </h2>
            <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
              Concrete technologies, frameworks, and practical tools used across software,
              data analytics, and machine learning pipelines.
            </p>
          </div>

          {/* Quick filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#111513] border border-[#1F2722]">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1F2722] text-[#B7F36B] font-semibold shadow-sm'
                  : 'text-[#A1AAA3] hover:text-[#F3F5F2]'
              }`}
            >
              All ({skillsData.length})
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1F2722] text-[#B7F36B] font-semibold shadow-sm'
                    : 'text-[#717B73] hover:text-[#A1AAA3]'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Adaptive Categories Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all duration-300 flex flex-col justify-between group text-left shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#151A17] border border-[#253129] flex items-center justify-center group-hover:border-[#B7F36B]/40 transition-colors">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#717B73]">
                    {category.skills.length} competencies
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F3F5F2] group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#A1AAA3] mt-1.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="pt-3 flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#151A17] border border-[#1F2722] hover:border-[#B7F36B]/50 transition-colors text-xs sm:text-[13px] font-mono text-[#F3F5F2]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#B7F36B]" />
                      <span className="font-medium">{skill.name}</span>
                      {skill.note && (
                        <span className="text-xs text-[#B7F36B] bg-[#0B0D0C] px-2 py-0.5 rounded border border-[#253129]">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-[#1F2722] flex items-center justify-between text-xs sm:text-sm font-mono text-[#717B73]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#B7F36B]" />
                  <span>Practical application</span>
                </span>
                <span className="uppercase text-xs tracking-wider text-[#A1AAA3] font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm font-mono text-[#717B73]">
            [Note: Technologies listed reflect practical implementation in codebases, internships,
            and research prototypes.]
          </p>
        </div>
      </div>
    </section>
  );
};
