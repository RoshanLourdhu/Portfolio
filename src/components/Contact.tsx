import React, { useState } from 'react';
import { profileData } from '../data/profile';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Internship Opportunity / Technical Inquiry');
  const [inquiryType, setInquiryType] = useState('Data Science / ML Role');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoHref = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
    `[${inquiryType}] - ${subject}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#1F2722] bg-[#0B0D0C] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7F36B] tracking-wider uppercase">
            <span>07 // Direct Channel</span>
            <span className="w-8 h-px bg-[#253129]" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-[#F3F5F2] font-display">
            Let's connect.
          </h2>
          <p className="text-section-subhead font-mono text-[#A1AAA3] max-w-3xl">
            Currently available for Data Science, Python Backend, and AI/ML engineering roles. Reach
            out directly via email or verified networks.
          </p>
        </div>

        {/* Balanced Two-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 text-left items-stretch">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Email Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#111513] border border-[#253129] space-y-5 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#151A17] border border-[#253129] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#B7F36B]" />
                </div>
                <span className="text-xs sm:text-[13px] font-mono text-[#B7F36B] bg-[#B7F36B]/10 px-3 py-1 rounded-md font-medium">
                  Primary Contact
                </span>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#717B73] font-semibold">
                  Direct Email Address
                </h3>
                <p className="text-base sm:text-lg font-mono text-[#F3F5F2] mt-1.5 font-bold break-all select-all">
                  {profileData.contact.email}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#1F2722]">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] text-xs sm:text-sm font-semibold font-mono transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151A17] hover:bg-[#1A211D] border border-[#253129] text-xs sm:text-sm font-mono text-[#A1AAA3] hover:text-[#F3F5F2] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#B7F36B]" />
                      <span className="text-[#B7F36B]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Verified Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:p-7 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <GithubIcon className="w-6 h-6 text-[#F3F5F2]" />
                    <ArrowUpRight className="w-4 h-4 text-[#717B73] group-hover:text-[#B7F36B] transition-colors" />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs sm:text-sm font-mono text-[#717B73]">Repositories</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F3F5F2] group-hover:text-white mt-0.5">
                      GitHub Profile
                    </h4>
                  </div>
                </a>
              )}

              {profileData.contact.linkedin ? (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:p-7 rounded-2xl bg-[#111513] border border-[#253129] hover:border-[#B7F36B]/40 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <LinkedinIcon className="w-6 h-6 text-[#F3F5F2]" />
                    <ArrowUpRight className="w-4 h-4 text-[#717B73] group-hover:text-[#B7F36B] transition-colors" />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs sm:text-sm font-mono text-[#717B73]">Network</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F3F5F2] group-hover:text-white mt-0.5">
                      LinkedIn Profile
                    </h4>
                  </div>
                </a>
              ) : null}

              {/* Location Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111513] border border-[#253129] flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between">
                  <MapPin className="w-6 h-6 text-[#B7F36B]" />
                  <span className="text-xs font-mono text-[#717B73]">Remote / On-site</span>
                </div>
                <div className="mt-5">
                  <span className="text-xs sm:text-sm font-mono text-[#717B73]">Base Location</span>
                  <h4 className="text-base sm:text-lg font-bold text-[#F3F5F2] mt-0.5">
                    {profileData.contact.location}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-configured Client-side Mailto Composer */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#111513] border border-[#253129] space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#1F2722]">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#B7F36B]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#F3F5F2]">
                    Quick Mail Composer
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-mono text-[#717B73]">
                  Direct Client-side
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="inquiry-type-select" className="block text-xs sm:text-sm font-mono text-[#A1AAA3] mb-2 font-medium">
                    Opportunity / Inquiry Focus:
                  </label>
                  <select
                    id="inquiry-type-select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#151A17] border border-[#253129] text-sm sm:text-base font-mono text-[#F3F5F2] focus:outline-none focus:ring-1 focus:ring-[#B7F36B]"
                  >
                    <option value="Data Science / ML Role">Data Science / ML Intern / Developer</option>
                    <option value="Python Backend Role">Python / FastAPI Backend Developer</option>
                    <option value="Data Analyst Role">Data Analyst / Analytics Engineering</option>
                    <option value="Research Collaboration">Academic / Paper Collaboration</option>
                    <option value="General Inquiry">General Conversation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject-input" className="block text-xs sm:text-sm font-mono text-[#A1AAA3] mb-2 font-medium">
                    Subject Line:
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#151A17] border border-[#253129] text-sm sm:text-base font-mono text-[#F3F5F2] focus:outline-none focus:ring-1 focus:ring-[#B7F36B]"
                    placeholder="Brief description of the role or topic..."
                  />
                </div>

                <div className="p-5 rounded-xl bg-[#151A17] border border-[#1F2722] space-y-2">
                  <div className="text-xs font-mono text-[#717B73] uppercase tracking-wider">
                    Mailto Dispatch Recipient:
                  </div>
                  <div className="text-sm sm:text-base font-mono text-[#B7F36B] font-semibold break-all">
                    {profileData.contact.email}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1AAA3] leading-relaxed pt-1">
                    Clicking below launches your preferred email client with the subject and
                    recipient headers pre-configured. No third-party servers or forms involved.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mailtoHref}
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] text-sm sm:text-base font-bold font-mono transition-colors shadow-md shadow-[#B7F36B]/20"
            >
              <Send className="w-4 h-4" />
              <span>Open Email in Client</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
