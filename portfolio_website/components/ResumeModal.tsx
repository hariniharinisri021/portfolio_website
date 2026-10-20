'use client';

import React from 'react';
import { portfolioService } from '@/services/portfolioService';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, education, skills, projects, achievements, leadershipRoles } = portfolioService.getAll();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0B0F19] text-slate-100 rounded-3xl border border-white/20 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0F172A]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Executive Resume Preview — Harini (MBA First Year)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090D17] print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/15 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">{personal.fullName}</h1>
              <p className="text-indigo-400 font-semibold text-base mt-0.5">{personal.subheading}</p>
              <p className="text-slate-400 text-xs mt-1">{personal.tagline}</p>
            </div>

            <div className="text-xs text-slate-300 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>{personal.linkedinUrl}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 border-b border-indigo-500/20 pb-1">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{personal.bio}</p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 border-b border-indigo-500/20 pb-1">
              Education & Academic Track
            </h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-indigo-300">
                    <span>{edu.institution}</span>
                    {edu.gpaOrScore && <span className="font-semibold">{edu.gpaOrScore}</span>}
                  </div>
                  {edu.specialization && (
                    <p className="text-[11px] text-slate-400">{edu.specialization}</p>
                  )}
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Case Studies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 border-b border-indigo-500/20 pb-1">
              Select Strategic Case Studies & Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-slate-400">{proj.timeline}</span>
                  </div>
                  <div className="text-xs text-teal-400 font-medium">Role: {proj.role}</div>
                  <p className="text-xs text-slate-300">{proj.summary}</p>
                  <div className="text-[11px] text-slate-400 pt-0.5">
                    <span className="font-semibold text-slate-300">Key Impact:</span>{' '}
                    {proj.impactMetric} ({proj.impactLabel})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Frameworks */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 border-b border-indigo-500/20 pb-1">
              Key Competencies & Analytical Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-200">Consulting & Strategy:</span>
                <p className="text-slate-400">
                  MECE Trees, Market Sizing, Porter&apos;s 5 Forces, Ansoff Matrix, GTM Strategy.
                </p>
              </div>
              <div>
                <span className="font-bold text-slate-200">Analytics & Valuation:</span>
                <p className="text-slate-400">
                  Financial Modeling, DCF, Advanced Excel, PowerBI, Unit Economics (CAC/LTV).
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 border-b border-indigo-500/20 pb-1">
              Honors, Certifications & Leadership
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {achievements.map((ach) => (
                <li key={ach.id} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">{ach.title}</strong> — {ach.issuer} ({ach.year})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
