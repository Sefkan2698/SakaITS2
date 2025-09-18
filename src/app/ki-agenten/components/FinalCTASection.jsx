'use client'
import React, { useState, useEffect } from 'react';

const FinalCTASection = () => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [statsValues, setStatsValues] = useState({
    efficiency: 0,
    cost: 0,
    time: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedStats) {
          setAnimatedStats(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    const target = document.querySelector('.stats-trigger');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [animatedStats]);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStatsValues({
        efficiency: Math.round(easeOut * 75),
        cost: Math.round(easeOut * 150),
        time: Math.round(easeOut * 8)
      });

      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full top-1/3 -right-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-64 h-64 bg-green-500/10 rounded-full -bottom-10 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main CTA Content */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Bereit für intelligente 
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Automatisierung?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Lassen Sie uns gemeinsam Ihre Geschäftsprozesse revolutionieren. 
            Von der ersten Idee bis zur vollständigen Implementation - 
            <span className="text-purple-400 font-semibold"> wir begleiten Sie auf dem Weg zur KI-gestützten Zukunft</span>.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-trigger mb-16 scroll-animate">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                +{statsValues.efficiency}%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Effizienzsteigerung</h3>
              <p className="text-gray-400">
                Durchschnittliche Verbesserung bei unseren Kunden
              </p>
            </div>

            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                €{statsValues.cost}k+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kosteneinsparung</h3>
              <p className="text-gray-400">
                Jährliche Ersparnis durch KI-Automatisierung
              </p>
            </div>

            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                {statsValues.time}h
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Zeitersparnis</h3>
              <p className="text-gray-400">
                Pro Tag durch automatisierte Workflows
              </p>
            </div>

          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-16 scroll-animate">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Benefits */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Warum mit uns arbeiten?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Schnelle Umsetzung</h4>
                    <p className="text-gray-300">Erste KI-Agenten bereits in 2-3 Wochen produktiv einsetzbar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Maßgeschneiderte Lösungen</h4>
                    <p className="text-gray-300">Individuell entwickelt für Ihre spezifischen Geschäftsprozesse</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Messbare Ergebnisse</h4>
                    <p className="text-gray-300">ROI-Tracking und kontinuierliche Optimierung für maximalen Erfolg</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Enterprise-Sicherheit</h4>
                    <p className="text-gray-300">DSGVO-konforme Implementierung mit höchsten Sicherheitsstandards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Process Steps */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Ihr Weg zur Automatisierung
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Kostenlose Beratung</h4>
                    <p className="text-gray-400 text-sm">Analyse Ihrer Prozesse und Potentiale</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Konzept & Planung</h4>
                    <p className="text-gray-400 text-sm">Maßgeschneiderte KI-Agent Strategie</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Implementation</h4>
                    <p className="text-gray-400 text-sm">Entwicklung und Integration</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Go-Live & Support</h4>
                    <p className="text-gray-400 text-sm">Betreuung und kontinuierliche Optimierung</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Starten Sie heute Ihre KI-Transformation
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses Beratungsgespräch und erfahren Sie, 
              wie KI-Agenten Ihr Unternehmen revolutionieren können.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="/kontakt?kategorie=ki-agenten" className="group relative w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 inline-block text-center">
                <span className="relative z-10">Kostenlose KI-Beratung buchen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="/kontakt?kategorie=ki-agenten&demo=true" className="w-full md:w-auto border-2 border-purple-400 px-8 py-4 rounded-lg text-lg font-semibold text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 hover:border-purple-300 inline-block text-center">
                Live Demo anfordern
              </a>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span>Unverbindliches Angebot</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                <span>Schnelle Umsetzung</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};


export default FinalCTASection;