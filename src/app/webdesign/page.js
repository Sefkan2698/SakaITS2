'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import WebdesignHeroSection from './components/WebdesignHeroSection';
import PortfolioSection from './components/Portfoliosection';
import ToolsSection from './components/ToolsSection';
import KeywordsFinalSection from './components/KeywordsFinalSection';

// Main Page Component
export default function WebdesignPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Component - Always visible */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <WebdesignHeroSection />

        <PortfolioSection />
        
        <ToolsSection />

        <KeywordsFinalSection />
        
      </main>

      {/* Footer Component */}
      <Footer />

      {/* WhatsApp Button Component */}
      <WhatsAppButton />
    </>
  );
}