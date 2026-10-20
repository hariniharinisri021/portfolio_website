'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import {
  ArrowRight,
  FileText,
  TrendingUp,
  Award,
  Sparkles,
  Compass,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const { personal, quickStats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="about">
      {/* Ambient background glows */}
      <div className="glow-spot-indigo -top-24 -left-20" />
      <div className="glow-spot-emerald top-1/2 -right-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.availabilityBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Architecting <br className="hidden sm:inline" />
                <span className="text-gradient-accent">Strategic Growth</span> &{' '}
                <span className="text-gradient-primary">Business Value</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-indigo-200/90 max-w-2xl mx-auto lg:mx-0">
                Hi, I&apos;m <span className="text-white font-bold">{personal.name}</span> — {personal.subheading} (First Year MBA).
              </p>
            </div>

            {/* Professional Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.bio}
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Compass className="w-3.5 h-3.5 text-teal-400" />
                Strategy & Consulting Focus
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Case Challenge Competitor
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 hover:from-indigo-500 hover:to-teal-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Executive CV / Bio</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Schedule a Coffee Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 rounded-3xl opacity-40 blur-xl animate-float" />

              <div className="relative glass-panel rounded-3xl p-4 sm:p-5 border border-white/15 shadow-2xl shadow-black/80">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-800">
                  <Image
                    src={personal.profileImage}
                    alt={`${personal.name} - MBA Student`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating tag inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    <div>
                      <p className="text-xs font-semibold">{personal.fullName}</p>
                      <p className="text-[10px] text-slate-300">MBA First Year Candidate</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-md border border-teal-500/30">
                      <Sparkles className="w-3 h-3" />
                      Class of &apos;27
                    </span>
                  </div>
                </div>

                {/* Micro highlights below image */}
                <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-semibold">National Finalist</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Inter-B-School Strategy Challenge
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-teal-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-semibold">Core Focus</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Strategy, Valuation & GTM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/10 text-center sm:text-left"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                  <span className="text-gradient-accent">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
