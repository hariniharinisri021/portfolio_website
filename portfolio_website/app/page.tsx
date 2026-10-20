'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080C16] text-[#F8FAFC] relative selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
      <PillarsSection />
      <CaseStudiesSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
