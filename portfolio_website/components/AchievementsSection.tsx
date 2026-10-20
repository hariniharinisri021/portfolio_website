'use client';

import React, { useState } from 'react';
import { portfolioData, Achievement } from '@/data/portfolioData';
import {
  Trophy,
  Award,
  GraduationCap,
  Users2,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function AchievementsSection() {
  const { achievements, education, leadershipRoles } = portfolioData;
  const [activeTab, setActiveTab] = useState<'honors' | 'education' | 'leadership'>('honors');

  return (
    <section className="py-20 md:py-28 relative" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5" />
            Milestones & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Honors, <span className="text-gradient-gold">Certifications</span> & Leadership
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognitions earned through competitive case cracking, rigorous certifications, and campus community leadership.
          </p>

          {/* Interactive Navigation Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#0B101E] border border-white/10">
              <button
                onClick={() => setActiveTab('honors')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'honors'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Honors & Certifications</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education Background</span>
              </button>

              <button
                onClick={() => setActiveTab('leadership')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'leadership'
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users2 className="w-4 h-4" />
                <span>MBA Leadership</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Honors & Certifications */}
        {activeTab === 'honors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {ach.badgeText}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {ach.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{ach.title}</h3>

                  <p className="text-xs text-indigo-400 font-medium mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    {ach.issuer}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">{ach.description}</p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credential verified and active</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education Background */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm font-semibold text-indigo-400">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {edu.period}
                    </span>
                    {edu.gpaOrScore && (
                      <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {edu.gpaOrScore}
                      </span>
                    )}
                  </div>
                </div>

                {edu.specialization && (
                  <p className="text-sm font-medium text-slate-300 mb-4 pb-3 border-b border-white/5">
                    {edu.specialization}
                  </p>
                )}

                <div className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Leadership & Extracurriculars */}
        {activeTab === 'leadership' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            {leadershipRoles.map((role, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <h3 className="text-lg font-bold text-white">{role.role}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-slate-400 bg-white/5 rounded-xl border border-white/10 self-start sm:self-center shrink-0">
                  {role.period}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
