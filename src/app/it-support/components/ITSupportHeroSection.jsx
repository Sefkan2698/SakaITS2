'use client'
import React, { useState, useEffect } from 'react';

const ITSupportHeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const words = ["IT-Support", "Cloud Services", "Hardware Reparatur", "IT-Lösungen"];
  const mainHeading = "Ihr "

  // Typing Animation Effect
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      const targetWord = words[currentWord];
      if (currentText.length < targetWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWord, isTyping, words]);

  // Progressive Content Reveal
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    
    const buttonTimer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white overflow-hidden flex items-center">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30" style={{left: '10%', top: '20%', animation: 'float 3s ease-in-out infinite'}} />
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40" style={{left: '20%', top: '40%', animation: 'float 4s ease-in-out infinite', animationDelay: '1s'}} />
        <div className="absolute w-3 h-3 bg-green-400 rounded-full opacity-20" style={{left: '80%', top: '30%', animation: 'float 5s ease-in-out infinite', animationDelay: '2s'}} />
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30" style={{left: '70%', top: '70%', animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s'}} />
        <div className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-25" style={{left: '90%', top: '10%', animation: 'float 4.2s ease-in-out infinite', animationDelay: '1.5s'}} />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Animation Styles */}
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
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.4);
          }
        }
        
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background-color: #60a5fa;
          margin-left: 5px;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .availability-pulse {
          animation: glow 2s ease-in-out infinite;
        }
        
        .service-card {
          backdrop-filter: blur(10px);
          background: rgba(17, 24, 39, 0.3);
          border: 1px solid rgba(75, 85, 99, 0.5);
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          backdrop-filter: blur(15px);
          background: rgba(17, 24, 39, 0.5);
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Availability Status */}
        <div className="mb-8" style={{
          animation: showContent ? 'slideInFromLeft 0.8s ease-out' : 'none',
          opacity: showContent ? 1 : 0
        }}>
          <div className="inline-flex items-center bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 availability-pulse">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400 font-medium">Verfügbar für IT-Projekte</span>
          </div>
        </div>

        {/* Main Headline with Typing Animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">{mainHeading}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              {currentText}
            </span>
            <span className="typing-cursor"></span>
            <br />
            <span className="text-white">Partner</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className={`mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed">
            Von <span className="text-blue-400 font-semibold">M365 Setup</span> über 
            <span className="text-cyan-400 font-semibold"> Cloud Services</span> bis hin zur 
            <span className="text-green-400 font-semibold"> Hardware Reparatur</span> - wir sind Ihr IT-Partner.
          </p>
        </div>

        {/* Service Highlights */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            
            {/* IT-Support Card */}
            <div className="service-card rounded-xl p-4 md:p-6 hover:border-blue-500/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 1h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"/>
                  <path d="M4 7h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z"/>
                  <path d="M4 13h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">IT-Support</h3>
              <p className="text-gray-400 text-xs md:text-sm">24/7 Betreuung</p>
            </div>

            {/* Microsoft 365 Card */}
            <div className="service-card rounded-xl p-4 md:p-6 hover:border-orange-500/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="8" height="8" fill="currentColor"/>
                  <rect x="13" y="3" width="8" height="8" fill="currentColor"/>
                  <rect x="3" y="13" width="8" height="8" fill="currentColor"/>
                  <rect x="13" y="13" width="8" height="8" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Microsoft 365</h3>
              <p className="text-gray-400 text-xs md:text-sm">Setup & Migration</p>
            </div>

            {/* Cloud Services Card */}
            <div className="service-card rounded-xl p-4 md:p-6 hover:border-cyan-500/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Cloud Services</h3>
              <p className="text-gray-400 text-xs md:text-sm">Azure & AWS</p>
            </div>

            {/* PC Service Card */}
            <div className="service-card rounded-xl p-4 md:p-6 hover:border-green-500/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 13H4V5h16v11z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Hardware Service</h3>
              <p className="text-gray-400 text-xs md:text-sm">Reparatur & Wartung</p>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-1000 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-lg mx-auto">
            
            <a 
              href="/kontakt?kategorie=it-support" 
              className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 overflow-hidden text-center"
            >
              <span className="relative z-10">Kostenlose IT-Beratung</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            <a 
              href="tel:+491741928943" 
              className="w-full sm:w-auto border-2 border-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 relative overflow-hidden group text-center"
            >
              <span className="relative z-10">Sofort anrufen</span>
              <div className="absolute inset-0 bg-blue-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            </a>
            
          </div>
        </div>

        {/* Target Groups */}
        <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-1500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Für jede Unternehmensgröße</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-md mx-auto">
            <span className="px-3 md:px-4 py-2 bg-blue-600/20 border border-blue-600/50 rounded-full text-blue-400 text-xs md:text-sm font-medium hover:bg-blue-600/30 transition-colors duration-300">
              Privatpersonen
            </span>
            <span className="px-3 md:px-4 py-2 bg-cyan-600/20 border border-cyan-600/50 rounded-full text-cyan-400 text-xs md:text-sm font-medium hover:bg-cyan-600/30 transition-colors duration-300">
              Kleinunternehmen
            </span>
            <span className="px-3 md:px-4 py-2 bg-green-600/20 border border-green-600/50 rounded-full text-green-400 text-xs md:text-sm font-medium hover:bg-green-600/30 transition-colors duration-300">
              Mittelstand
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ITSupportHeroSection;