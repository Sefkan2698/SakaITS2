'use client'
import React, { useState, useEffect } from 'react';

const WebdesignHeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const words = ["Websites", "Webdesign", "Webentwicklung", "Online-Präsenzen"];
  const mainHeading = "Wir erstellen ";

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      const targetWord = words[currentWord];
      if (currentText.length < targetWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, 100);
      } else {
        // Word complete, pause then delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        // Word deleted, move to next word
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWord, isTyping, words]);

  useEffect(() => {
    // Show content after initial animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    
    // Show buttons after content
    const buttonTimer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden flex items-center">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="code-element code-1" style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
          fontSize: '14px',
          color: '#8B5CF6'
        }}>
          &lt;div className="hero"&gt;
        </div>
        <div className="code-element code-2" style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
          fontSize: '12px',
          color: '#06B6D4'
        }}>
          const design = () =&gt; magic
        </div>
        <div className="code-element code-3" style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          opacity: 0.1,
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '2s',
          fontSize: '13px',
          color: '#10B981'
        }}>
          responsive: true
        </div>
        <div className="code-element code-4" style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          opacity: 0.1,
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '3s',
          fontSize: '11px',
          color: '#F59E0B'
        }}>
          &lt;/website&gt;
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.5);
            opacity: 0.8;
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background-color: #8B5CF6;
          margin-left: 2px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .availability-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
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
            <span className="text-green-400 font-medium">Verfügbar für neue Projekte</span>
          </div>
        </div>

        {/* Main Headline with Typing Animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">{mainHeading}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              {currentText}
            </span>
            <span className="typing-cursor"></span>
            <br />
            <span className="text-white">die begeistern</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className={`mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Von der ersten Idee bis zur finalen <span className="text-purple-400 font-semibold">Website erstellen</span> wir 
            digitale Erlebnisse, die Ihre Marke zum Leben erwecken und Besucher zu Kunden machen.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-gray-400 text-sm">Perfekt auf allen Geräten</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Blitzschnell</h3>
              <p className="text-gray-400 text-sm">Optimierte Performance</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SEO-Optimiert</h3>
              <p className="text-gray-400 text-sm">Gefunden werden</p>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
      <div className={`transition-all duration-1000 delay-1000 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="/kontakt?kategorie=webdesign" className="group relative w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 overflow-hidden inline-block text-center">
            <span className="relative z-10">Projekt starten</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <button 
            onClick={() => {
              const portfolioSection = document.getElementById('portfolio-section');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full md:w-auto border-2 border-purple-400 px-8 py-4 rounded-lg text-lg font-semibold text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Portfolio ansehen</span>
            <div className="absolute inset-0 bg-purple-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
          </button>
        </div>
      </div>

        {/* Tech Stack Pills */}
        <div className={`mt-16 transition-all duration-1000 delay-1500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6">Moderne Technologien für zukunftssichere Lösungen</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-orange-600/20 border border-orange-600/50 rounded-full text-orange-400 text-sm font-medium hover:bg-orange-600/30 transition-colors duration-300">
              React
            </span>
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/50 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-colors duration-300">
              Next.js
            </span>
            <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-600/50 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-600/30 transition-colors duration-300">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-green-600/20 border border-green-600/50 rounded-full text-green-400 text-sm font-medium hover:bg-green-600/30 transition-colors duration-300">
              WordPress
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/50 rounded-full text-purple-400 text-sm font-medium hover:bg-purple-600/30 transition-colors duration-300">
              Custom Code
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebdesignHeroSection;