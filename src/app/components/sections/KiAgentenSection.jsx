import React from 'react';

const KiAgentensSection = () => {
  return (
    <section id="ki-agenten" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            KI-Agenten für intelligente Automatisierung
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionieren Sie Ihren Kundenservice und Ihre Geschäftsprozesse mit intelligenten KI-Agenten. 
            Von Chatbots bis hin zu komplexen Entscheidungssystemen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Visual/Benefits */}
          <div className="scroll-animate">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              
              <h3 className="text-2xl font-bold mb-6 text-white">
                Was sind KI-Agenten?
              </h3>
              
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Intelligenter Kundenservice</h4>
                    <p className="text-gray-400">24/7 Kundensupport mit natürlicher Sprachverarbeitung und kontextuellem Verständnis</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Datenanalyse & Insights</h4>
                    <p className="text-gray-400">Automatische Auswertung großer Datenmengen mit intelligenten Empfehlungen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Prozessoptimierung</h4>
                    <p className="text-gray-400">Intelligente Entscheidungsfindung und kontinuierliche Verbesserung Ihrer Abläufe</p>
                  </div>
                </div>

              </div>

              <div className="flex space-x-4 pt-4">
                <a href="/ki-agenten" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                  Mehr erfahren
                </a>
                <button className="border border-purple-600 hover:bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                  Projektanfrage
                </button>
              </div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="scroll-animate animate-delay-1">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Unsere KI-Agent Lösungen
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  KI-Agenten sind <span className="text-purple-400 font-semibold">intelligente Software-Systeme</span>, die 
                  selbstständig Entscheidungen treffen und komplexe Aufgaben lösen können. Sie lernen aus Daten und 
                  verbessern sich kontinuierlich.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Als <span className="text-blue-400 font-semibold">KI-Spezialist</span> entwickle ich maßgeschneiderte 
                  Agenten für Ihre spezifischen Geschäftsanforderungen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Einsatzgebiete von KI-Agenten
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Voice KI:</strong> Sprachgesteuerte Assistenten für Telefon und Voice-Interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Chatbots:</strong> Intelligente Gesprächsführung für Website und Messenger</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Workflowautomatisierung:</strong> Intelligente Bearbeitung komplexer Geschäftsprozesse</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Predictive Analytics:</strong> Vorhersagen und Empfehlungen basierend auf Ihren Daten</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KiAgentensSection;