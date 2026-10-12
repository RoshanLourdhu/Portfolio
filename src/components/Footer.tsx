import React from 'react';
import { profileData } from '../data/profile';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-14 sm:py-16 border-t border-[#1F2722] bg-[#070908] text-left">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1A211D]">
          {/* Brand & Closing statement */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="font-mono font-bold text-base sm:text-lg text-[#F3F5F2] tracking-wider">
                {profileData.name}
              </span>
              <span className="text-[#B7F36B] font-mono text-xs sm:text-sm">[{profileData.initials}]</span>
            </div>
            <p className="text-sm text-[#A1AAA3] font-mono">
              Designed with precision for Data Analytics, Python &amp; AI Engineering roles.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5 sm:gap-6 text-sm font-mono text-[#A1AAA3]">
            {profileData.contact.github && (
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B7F36B] transition-colors inline-flex items-center gap-1.5"
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
                className="hover:text-[#B7F36B] transition-colors inline-flex items-center gap-1.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            )}

            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-[#B7F36B] transition-colors inline-flex items-center gap-1.5"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#111513] border border-[#1F2722] hover:border-[#B7F36B]/50 hover:text-[#B7F36B] transition-colors ml-2"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Copyright & Technology stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] font-mono text-[#717B73]">
          <div>
            &copy; {CURRENT_YEAR} {profileData.name}. All verified projects &amp; academic rights
            reserved.
          </div>
          <div>
            Built with React, TypeScript &amp; Tailwind CSS &bull; Local Data Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};
