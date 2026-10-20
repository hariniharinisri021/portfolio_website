'use client';

import React from 'react';
import { portfolioService } from '@/services/portfolioService';
import { Compass, TrendingUp, Target, Users, ArrowUpRight, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function PillarsSection() {
  const executivePillars = portfolioService.getPillars();

  return (
    <section className="py-20 md:py-28 relative" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strategic Pillars & <span className="text-gradient-accent">Consulting Value</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A balanced synthesis of quantitative analysis, structured hypothesis testing, and stakeholder alignment honed in the MBA environment.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {executivePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Subtle accent hover backdrop */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`}
              />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} p-[1px] shadow-lg`}
                >
                  <div className="w-full h-full bg-[#0D1322] rounded-[15px] flex items-center justify-center text-white">
                    {iconMap[pillar.icon] || <Compass className="w-6 h-6" />}
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-500 group-hover:text-indigo-300 transition-colors">
                  0{idx + 1} //
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {pillar.desc}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Applied in MBA Case Challenges</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
