'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/data/portfolioData';
import {
  FolderGit2,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowRight,
  ExternalLink,
  BarChart,
  Target,
  Sparkles,
  X,
} from 'lucide-react';

export default function CaseStudiesSection() {
  const { projects, caseStudyVisual } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Strategy', 'Marketing', 'Finance', 'Operations'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 relative" id="projects">
      {/* Background ambient lighting */}
      <div className="glow-spot-indigo -bottom-24 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              Strategic Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              MBA Case Studies & <span className="text-gradient-accent">Business Strategy</span>
            </h2>
            <p className="text-slate-400 text-base">
              Real-world business challenges solved through structured hypothesis testing, quantitative modeling, and strategic implementation roadmaps.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0B101E] p-1.5 rounded-2xl border border-white/10 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Visual Banner */}
        <div className="relative mb-12 rounded-3xl overflow-hidden glass-panel border border-white/15 p-1">
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-[22px] overflow-hidden bg-slate-900">
            <Image
              src={caseStudyVisual}
              alt="Corporate Strategy Dashboard and Performance Presentation"
              fill
              className="object-cover object-center brightness-90 hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C16] via-[#080C16]/75 to-transparent sm:w-2/3 flex items-center p-6 sm:p-10">
              <div className="space-y-3 max-w-lg">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-indigo-500/25 text-indigo-300 border border-indigo-500/40">
                  Featured Case Study
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  Corporate Growth Strategy & Market Expansion
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 sm:line-clamp-none">
                  A multi-horizon business review mapping product innovation, digital distribution, and global unit economics for mid-market scale.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="text-left">
                    <span className="text-lg sm:text-2xl font-extrabold text-emerald-400">+28% YoY</span>
                    <p className="text-[10px] text-slate-400">Target Growth Pipeline</p>
                  </div>
                  <div className="h-8 w-[1px] bg-white/15" />
                  <div className="text-left">
                    <span className="text-lg sm:text-2xl font-extrabold text-indigo-400">4 Horizons</span>
                    <p className="text-[10px] text-slate-400">Expansion Roadmap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-indigo-300">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-indigo-400 font-medium mb-3">
                  Role: {project.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Frameworks Applied */}
                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-teal-400" />
                    Strategic Frameworks Used
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.frameworks.map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-lg bg-indigo-500/10 text-indigo-200 border border-indigo-500/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2 mb-6">
                  {project.keyOutcomes.slice(0, 2).map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Impact & Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-base sm:text-lg font-bold text-emerald-400">
                    {project.impactMetric}
                  </span>
                  <p className="text-[10px] text-slate-400">{project.impactLabel}</p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-indigo-600 transition-colors cursor-pointer"
                >
                  <span>Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400">{selectedProject.timeline}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-xs font-medium text-indigo-300">Role: {selectedProject.role}</p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                  The Core Challenge
                </h4>
                <p className="text-sm text-slate-300">{selectedProject.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Detailed Strategic Outcomes & Impact
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((d, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-xl bg-white/5 border border-white/10 text-slate-300"
                    >
                      📄 {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
                >
                  Close Case Breakdown
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
