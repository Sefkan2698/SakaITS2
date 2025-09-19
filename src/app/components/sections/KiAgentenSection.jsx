import React from 'react';

const KiAgentenSection = () => {
  return (
    <section id="ki-agenten" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card Container */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-purple-900/20 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-purple-500/30 transition-all duration-500">
          
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              KI-Agenten für intelligente Automatisierung
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionieren Sie Ihren Kundenservice und Ihre Geschäftsprozesse mit intelligenten KI-Agenten. 
              Von Chatbots bis hin zu komplexen Entscheidungssystemen.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Content */}
            <div className="scroll-animate">
              <div className="space-y-8">
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Intelligente KI-Automatisierung
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Moderne <span className="text-purple-400 font-semibold">KI-Agenten</span> arbeiten rund um die Uhr für Sie. 
                    Sie lernen aus Daten und verbessern sich kontinuierlich für optimale Ergebnisse.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Als <span className="text-blue-400 font-semibold">KI-Spezialist</span> entwickle ich maßgeschneiderte 
                    Agenten für Ihre spezifischen Geschäftsanforderungen.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Was sind KI-Agenten?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Intelligenter Kundenservice:</strong> 24/7 Support mit natürlicher Sprachverarbeitung und kontextuellem Verständnis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Datenanalyse & Insights:</strong> Automatische Auswertung großer Datenmengen mit intelligenten Empfehlungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Prozessoptimierung:</strong> Intelligente Entscheidungsfindung und Workflow-Automatisierung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">24/7 Verfügbarkeit:</strong> Kontinuierlicher Service ohne menschliche Eingriffe</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href="/ki-agenten" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    Mehr erfahren
                  </a>
                  <a 
                    href="/kontakt?kategorie=ki-agenten&demo=true" 
                    className="border border-purple-600 hover:bg-purple-600/20 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center text-purple-400 hover:text-white"
                  >
                    Live-Demo anfragen
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className="scroll-animate animate-delay-1">
              <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-purple-500/30 transition-all duration-300">
                
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Technologien & Features
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Natural Language Processing</h4>
                      <p className="text-gray-400 text-sm md:text-base">Verstehen und verarbeiten natürlicher Sprache für menschenähnliche Kommunikation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Machine Learning & AI</h4>
                      <p className="text-gray-400 text-sm md:text-base">Fortschrittliche ML-Algorithmen für kontinuierliches Lernen und Verbesserung</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Workflow-Integration</h4>
                      <p className="text-gray-400 text-sm md:text-base">Nahtlose Einbindung in bestehende Systeme und Geschäftsprozesse</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Analytics & Reporting</h4>
                      <p className="text-gray-400 text-sm md:text-base">Detaillierte Einblicke und Berichte für datengesteuerte Entscheidungen</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default KiAgentenSection;  