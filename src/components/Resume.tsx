import React, { useState } from 'react';
import { profileData } from '../data/profile';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';

export const Resume: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
            <span>06 // Verification</span>
            <span className="w-8 h-px bg-[#253129]" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
            Curriculum Vitae &amp; Credentials.
          </h2>
          <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
            A comprehensive record of technical projects, research publications, industrial
            internships, and academic foundation.
          </p>
        </div>

        {/* Central Resume Feature Box: generous desktop width */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#111513] border border-[#253129] p-8 sm:p-12 shadow-2xl space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-7 border-b border-[#1F2722]">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#151A17] border border-[#253129] flex items-center justify-center shrink-0 shadow-md">
                <FileText className="w-8 h-8 text-[#B7F36B]" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F5F2] font-display">
                    {profileData.resume.fileName}
                  </h3>
                  <span className="text-xs sm:text-[13px] font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-2.5 py-0.5 rounded-md font-medium">
                    PDF Document
                  </span>
                </div>
                <p className="text-sm sm:text-base font-mono text-[#A1AAA3]">
                  Candidate: {profileData.name} &bull; Targeted for Software &amp; Data Engineering Roles
                </p>
              </div>
            </div>

            {profileData.resume.lastUpdated && (
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#717B73]">
                <Clock className="w-4 h-4 text-[#B7F36B]" />
                <span>Updated: {profileData.resume.lastUpdated}</span>
              </div>
            )}
          </div>

          {/* Quick Outline of what recruiters will find in the resume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-xl bg-[#151A17] border border-[#1F2722] space-y-2.5 shadow-md">
              <div className="text-xs sm:text-sm font-mono text-[#B7F36B] uppercase font-bold">
                Target Roles
              </div>
              <p className="text-sm sm:text-base text-[#F3F5F2] font-mono leading-relaxed">
                Python Developer &bull; Data Analyst &bull; Machine Learning Intern &bull; AI/ML Developer &bull; Backend Developer
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#151A17] border border-[#1F2722] space-y-2.5 shadow-md">
              <div className="text-xs sm:text-sm font-mono text-[#B7F36B] uppercase font-bold">
                Highlighted Experience
              </div>
              <p className="text-sm sm:text-base text-[#F3F5F2] font-mono leading-relaxed">
                White &amp; Box Tech Products &bull; Airkrit &bull; IEEE Conference Publication
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-5 border-t border-[#1F2722]">
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={profileData.resume.filePath}
                download={profileData.resume.fileName}
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] text-sm sm:text-base font-semibold transition-all duration-200 shadow-md shadow-[#B7F36B]/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={profileData.resume.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#151A17] hover:bg-[#1A211D] border border-[#253129] hover:border-[#B7F36B]/40 text-sm sm:text-base font-mono text-[#F3F5F2] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#B7F36B]" />
                <span>Open in New Tab</span>
              </a>
            </div>

            {downloadSuccess && (
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#B7F36B]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Download initiated</span>
              </div>
            )}
          </div>

          {/* Configuration Note */}
          <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#1F2722] flex items-start gap-3 text-xs sm:text-sm text-[#717B73]">
            <AlertCircle className="w-5 h-5 text-[#A1AAA3] shrink-0 mt-0.5" />
            <span className="font-mono leading-relaxed">
              Path configured: <code className="text-[#A1AAA3]">{profileData.resume.filePath}</code>.
              To update your credentials, replace <code className="text-[#A1AAA3]">public/resume.pdf</code>{' '}
              with your updated formal document.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
