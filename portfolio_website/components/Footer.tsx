'use client';

import React from 'react';
import { portfolioService } from '@/services/portfolioService';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const personal = portfolioService.getPersonal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060911] text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-400 p-[1px]">
              <div className="w-full h-full bg-[#080C16] rounded-[11px] flex items-center justify-center font-bold text-white font-mono text-sm">
                H
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-sm">{personal.fullName}</p>
              <p className="text-xs text-slate-400">MBA First Year Candidate | Class of 2027</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#pillars" className="hover:text-white transition-colors">Strategy Pillars</a>
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#skills" className="hover:text-white transition-colors">Competencies</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {personal.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built for Strategy, Management Consulting & Business Analytics Roles</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
