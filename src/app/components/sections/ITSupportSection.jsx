import React from 'react';

const ItSupportSection = () => {
  return (
    <section id="it-support" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card Container */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-orange-900/20 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-orange-500/30 transition-all duration-500">
          
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Professioneller IT-Support & Cloud Infrastruktur
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Zuverlässiger PC Service und IT-Dienstleistungen für Ihr Unternehmen. 
              Von der Cloud Infrastruktur bis zum täglichen IT-Support - wir halten Ihre Systeme am Laufen.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Content */}
            <div className="scroll-animate">
              <div className="space-y-8">
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Professioneller IT-Support
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Moderner <span className="text-orange-400 font-semibold">IT-Support</span> bedeutet mehr als nur Problemlösung. 
                    Wir bieten proaktive IT-Betreuung, die Ausfälle verhindert und Ihre Produktivität maximiert.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Als <span className="text-blue-400 font-semibold">IT-Experte</span> sorge ich dafür, 
                    dass Ihre Systeme zuverlässig und sicher funktionieren.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Unsere IT-Dienstleistungen
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">PC Service & Hardware:</strong> Reparatur, Wartung und Optimierung Ihrer Computer und Netzwerke</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Microsoft 365 Setup:</strong> Vollständige Implementierung und Migration mit umfassendem Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Cloud Infrastruktur:</strong> Moderne Cloud-Lösungen für Skalierbarkeit und Sicherheit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">24/7 Support:</strong> Rund um die Uhr verfügbar für kritische IT-Probleme</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href="/it-support" 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    Mehr erfahren
                  </a>
                  <a 
                    href="/kontakt?kategorie=it-support" 
                    className="border border-orange-600 hover:bg-orange-600/20 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center text-orange-400 hover:text-white"
                  >
                    Support anfragen
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className="scroll-animate animate-delay-1">
              <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-orange-500/30 transition-all duration-300">
                
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Technologien & Expertise
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Hardware-Expertise</h4>
                      <p className="text-gray-400 text-sm md:text-base">Professionelle Reparatur und Wartung aller PC- und Server-Komponenten</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="8" height="8" fill="currentColor"/>
                        <rect x="13" y="3" width="8" height="8" fill="currentColor"/>
                        <rect x="3" y="13" width="8" height="8" fill="currentColor"/>
                        <rect x="13" y="13" width="8" height="8" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Microsoft 365 & Office</h4>
                      <p className="text-gray-400 text-sm md:text-base">Vollständige Implementierung, Migration und Verwaltung von M365-Umgebungen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Cloud & Azure</h4>
                      <p className="text-gray-400 text-sm md:text-base">Skalierbare Cloud-Infrastruktur mit Azure, AWS und hybriden Lösungen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5a.75.75 0 00-1.14-.983L12 8.25l-2.36-2.36a.75.75 0 00-1.14.983l3 3.75a.75.75 0 001.14 0l3-3.75z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Monitoring & Security</h4>
                      <p className="text-gray-400 text-sm md:text-base">Proaktive Überwachung und umfassende Sicherheitslösungen</p>
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

export default ItSupportSection;