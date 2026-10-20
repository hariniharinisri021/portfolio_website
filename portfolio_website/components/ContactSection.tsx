'use client';

import React, { useState } from 'react';
import { portfolioService } from '@/services/portfolioService';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  Coffee,
  MapPin,
  Calendar,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function ContactSection() {
  const personal = portfolioService.getPersonal();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Strategy Internship Inquiry',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        purpose: 'Strategy Internship Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <section className="py-20 md:py-28 relative" id="contact">
      {/* Background glow */}
      <div className="glow-spot-emerald -bottom-24 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Connect & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Let&apos;s Connect
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Looking for a <span className="text-gradient-accent">Strategic Mind</span> for Your Team?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              I am actively seeking <span className="text-white font-semibold">Summer 2026 Strategy, Management Consulting, and Business Analytics</span> internship opportunities. Open to discussions on consulting challenges, case studies, or informal coffee chats!
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Copy Email Button Card */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Email</p>
                    <p className="text-sm font-semibold text-white">{personal.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-indigo-600 text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location & Mobility</p>
                  <p className="text-sm font-semibold text-white">{personal.location}</p>
                </div>
              </div>

              {/* Coffee Chat */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Informational Coffee Chat</p>
                  <p className="text-sm font-semibold text-white">Always welcome to connect with alumni & leaders</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-white transition-all text-xs font-semibold"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-white transition-all text-xs font-semibold"
              >
                <GitHubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub ({personal.githubUsername})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send an Executive Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the inquiry form below and I will respond within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank you for reaching out!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been captured. Looking forward to discussing strategic synergies and opportunities!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@firm.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject / Conversation Purpose
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Strategy Internship Inquiry">Summer 2026 Strategy Internship</option>
                      <option value="Consulting Project Collaboration">Consulting Project Collaboration</option>
                      <option value="Informational Coffee Chat">Informational Interview / Coffee Chat</option>
                      <option value="General Inquiry">General Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, internship scopes, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-teal-500 shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
