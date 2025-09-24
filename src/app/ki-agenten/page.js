'use client'
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
// ⬇️ HIER: Import der neuen Section
import WasSindKIAgentenSection from './components/WasSindKIAgentenSection';
import SoftwareToolsSection from './components/SoftwareToolsSection';
import KIAgentenPraxisSection from './components/KIAgentenPraxisSection';
import FinalCTASection from './components/FinalCTASection';

// Typing Animation Hero Section
const KiHeroSectionTyping = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const fullText = "Intelligente KI-Agenten";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Animation complete
      setTimeout(() => setShowSubtext(true), 500);
      setTimeout(() => setShowButtons(true), 1000);
    }
  }, [currentIndex, fullText.length]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {/* Fixed positions to avoid hydration mismatch */}
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '10%', top: '20%', animation: 'float 4s ease-in-out infinite', animationDelay: '0s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '20%', top: '80%', animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '30%', top: '40%', animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '40%', top: '70%', animation: 'float 6s ease-in-out infinite', animationDelay: '1.5s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '50%', top: '15%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '2s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '60%', top: '60%', animation: 'float 3s ease-in-out infinite', animationDelay: '2.5s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '70%', top: '90%', animation: 'float 5.5s ease-in-out infinite', animationDelay: '0.2s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '80%', top: '30%', animation: 'float 4.2s ease-in-out infinite', animationDelay: '0.8s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '90%', top: '50%', animation: 'float 3.8s ease-in-out infinite', animationDelay: '1.2s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '15%', top: '75%', animation: 'float 6.2s ease-in-out infinite', animationDelay: '1.8s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '25%', top: '25%', animation: 'float 4.8s ease-in-out infinite', animationDelay: '0.3s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '35%', top: '85%', animation: 'float 3.2s ease-in-out infinite', animationDelay: '2.2s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '45%', top: '10%', animation: 'float 5.8s ease-in-out infinite', animationDelay: '0.7s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '55%', top: '45%', animation: 'float 4.3s ease-in-out infinite', animationDelay: '1.3s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '65%', top: '65%', animation: 'float 3.7s ease-in-out infinite', animationDelay: '2.7s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '75%', top: '5%', animation: 'float 6.5s ease-in-out infinite', animationDelay: '0.1s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '85%', top: '80%', animation: 'float 4.7s ease-in-out infinite', animationDelay: '1.7s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '95%', top: '35%', animation: 'float 3.3s ease-in-out infinite', animationDelay: '2.3s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '12%', top: '55%', animation: 'float 5.3s ease-in-out infinite', animationDelay: '0.9s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '22%', top: '95%', animation: 'float 4.1s ease-in-out infinite', animationDelay: '2.1s'}} />
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(59, 130, 246, 0.4);
          }
        }
        
        .glow-button {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Typing Animation Headline */}
          <div className="min-h-[200px] flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">
                {currentText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </h1>
          </div>
          
       {/* Progressive Reveal Buttons */}
<div className={`transition-all duration-1000 delay-500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
    <button className="glow-button w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
      Live Demo starten
    </button>
    <button className="w-full md:w-auto border border-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300">
      KI-Beratung buchen
    </button>
  </div>
</div>
          
          {/* Progressive Reveal Buttons */}
          <div className={`transition-all duration-1000 delay-500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="glow-button w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Live Demo starten
              </button>
              <button className="w-full md:w-auto border border-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300">
                KI-Beratung buchen
              </button>
            </div>
          </div>
          
          {/* Feature Pills */}
          <div className={`transition-all duration-1000 delay-1000 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/50 rounded-full text-purple-400 text-sm font-medium animate-pulse">
                24/7 Verfügbar
              </span>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/50 rounded-full text-blue-400 text-sm font-medium animate-pulse" style={{animationDelay: '0.5s'}}>
                Selbstlernend
              </span>
              <span className="px-4 py-2 bg-green-600/20 border border-green-600/50 rounded-full text-green-400 text-sm font-medium animate-pulse" style={{animationDelay: '1s'}}>
                Kosteneffizient
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function KiAgentenPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Component - Always visible */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <KiHeroSectionTyping />
        
        {/* ⬇️ HIER: Neue Section eingefügt */}
        <WasSindKIAgentenSection />
        
        <SoftwareToolsSection />

        <KIAgentenPraxisSection />
        
        <FinalCTASection />
        {/* Hier können später weitere Sections hinzugefügt werden */}
        {/* <KiUseCasesSection /> */}
        {/* <KiPricingSection /> */}
      </main>

      {/* Footer Component */}
      <Footer />

      {/* WhatsApp Button Component */}
      <WhatsAppButton />
    </>
  );
}