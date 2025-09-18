// IT-Support Seite - Optimierte Buttons
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ITSupportHeroSection from './components/ITSupportHeroSection';
import ITServicesSection from './components/ITServiceSection';
import GoogleReviewsSection from './components/GoogleReviewSection';
import WhySakaITSSection from './components/WhySakaITSSection';

// Main Page Component
export default function ITSupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Component - Always visible */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <ITSupportHeroSection />
        <ITServicesSection />
        <GoogleReviewsSection />
        <WhySakaITSSection />
        
      </main>

      {/* Footer Component */}
      <Footer />

      {/* WhatsApp Button Component */}
      <WhatsAppButton />
    </div>
  );
}