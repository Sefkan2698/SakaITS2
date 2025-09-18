import React from 'react';

const AutomatisierungsSection = () => {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Automatisierungen für Ihr Unternehmen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sparen Sie Zeit und Kosten durch intelligente Workflow-Automatisierung. 
            Wir entwickeln maßgeschneiderte Automatisierungslösungen für Ihre Geschäftsprozesse.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="scroll-animate">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Was sind Automatisierungen?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Automatisierungen sind <span className="text-blue-400 font-semibold">intelligente Systeme</span>, die 
                  wiederkehrende Aufgaben ohne menschlichen Eingriff ausführen. Von der automatischen E-Mail-Bearbeitung 
                  bis hin zur komplexen Workflow-Automatisierung - wir digitalisieren Ihre Prozesse.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Als <span className="text-purple-400 font-semibold">Automatisierungsexperte</span> entwickle ich 
                  Lösungen, die Ihre Arbeitsabläufe revolutionieren und dabei Kosten sparen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Unsere Automatisierungs-Services
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">E-Mail-Automatisierung:</strong> Automatische Bearbeitung und Weiterleitung von Kundenanfragen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Datenverarbeitung:</strong> Automatische Synchronisation zwischen verschiedenen Systemen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Reporting-Automatisierung:</strong> Automatische Generierung von Berichten und Auswertungen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Workflow-Optimierung:</strong> Komplette Digitalisierung Ihrer Geschäftsprozesse</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right: Visual/Benefits */}
          <div className="scroll-animate animate-delay-1">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              
              <h3 className="text-2xl font-bold mb-6 text-white">
                Vorteile der Automatisierung
              </h3>
              
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Kosteneinsparung</h4>
                    <p className="text-gray-400">Bis zu 60% Reduzierung der Bearbeitungszeit bei wiederkehrenden Aufgaben</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Effizienzsteigerung</h4>
                    <p className="text-gray-400">24/7 Verfügbarkeit ohne Fehler oder Verzögerungen bei der Bearbeitung</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fehlerreduzierung</h4>
                    <p className="text-gray-400">Eliminierung menschlicher Fehler durch präzise automatisierte Abläufe</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Skalierbarkeit</h4>
                    <p className="text-gray-400">Problemlose Anpassung an wachsende Anforderungen Ihres Unternehmens</p>
                  </div>
                </div>

              </div>

              <div className="flex space-x-4 pt-4">
                <a href="/automatisierungen" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                  Mehr erfahren
                </a>
                <button className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                  Projektanfrage
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutomatisierungsSection;