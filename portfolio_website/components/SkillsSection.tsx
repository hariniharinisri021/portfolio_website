'use client';

import React, { useState } from 'react';
import { portfolioService, SkillCategory } from '@/services/portfolioService';
import {
  Layers,
  BarChart3,
  Megaphone,
  Award,
  Search,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Megaphone: <Megaphone className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export default function SkillsSection() {
  const skills = portfolioService.getSkills();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = skills.map((category) => ({
    ...category,
    skills: category.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.skills.length > 0);

  return (
    <section className="py-20 md:py-28 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Competency Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Skills & <span className="text-gradient-accent">Analytical Toolkits</span>
            </h2>
            <p className="text-slate-400 text-base">
              A comprehensive toolkit developed through intensive MBA coursework, case interview preparations, and data modeling simulations.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skills (e.g. MECE, DCF)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    {iconMap[cat.icon] || <Layers className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{cat.title}</h3>
                    <p className="text-[11px] text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-4 mt-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {skill.tag && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-indigo-300 font-medium border border-white/10">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      
                      {/* Proficiency bar */}
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-teal-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom mini note */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>Verified in academic simulations</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Frameworks Pills Cloud */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              MBA Strategic Decision Frameworks Quick-Reference
            </h4>
            <span className="text-xs text-slate-400">Mastered & Applied</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {[
              "MECE Problem Trees",
              "Porter's 5 Forces",
              "Ansoff Growth Matrix",
              "BCG Growth-Share Matrix",
              "3Cs & 4Ps Marketing Mix",
              "VRIO Resource Framework",
              "McKinsey 7S Model",
              "Discounted Cash Flow (DCF)",
              "Sensitivity & Scenario Analysis",
              "Value Chain Optimization",
              "Root Cause (5 Whys)",
              "STP Segmentation",
            ].map((framework, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:text-white transition-all"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
