import React from 'react';

const WebdesignSection = () => {
  return (
    <section id="webdesign" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card Container */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-green-900/20 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-green-500/30 transition-all duration-500">
          
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Moderne Webentwicklung für Ihr Unternehmen
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Website erstellen, die überzeugt und konvertiert. Von der Webentwicklung bis zur kompletten digitalen Präsenz - 
              wir entwickeln Websites, die Ihr Unternehmen erfolgreich machen.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Content */}
            <div className="scroll-animate">
              <div className="space-y-8">
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Professionelle Webentwicklung
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Moderne <span className="text-green-400 font-semibold">Website erstellen</span> bedeutet mehr als nur schönes Design. 
                    Wir entwickeln strategische Webseiten, die Ihre Zielgruppe ansprechen und Geschäftsergebnisse liefern.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Als <span className="text-blue-400 font-semibold">Webentwicklung-Experte</span> setze ich auf moderne Technologien 
                    und bewährte Methoden für nachhaltigen Erfolg.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Unsere Webdesign Services
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Responsive Webdesign:</strong> Perfekte Darstellung auf allen Geräten - vom Smartphone bis Desktop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">E-Commerce Lösungen:</strong> Professionelle Online-Shops mit moderner Shopping-Experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">SEO-Optimierung:</strong> Bessere Sichtbarkeit in Google und anderen Suchmaschinen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Performance-Optimierung:</strong> Schnelle Ladezeiten für bessere User Experience</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href="/webdesign" 
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    Mehr erfahren
                  </a>
                  <a 
                    href="/kontakt?kategorie=webdesign" 
                    className="border border-green-600 hover:bg-green-600/20 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center text-green-400 hover:text-white"
                  >
                    Website anfragen
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className="scroll-animate animate-delay-1">
              <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-green-500/30 transition-all duration-300">
                
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Technologien & Tools
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Moderne Frameworks</h4>
                      <p className="text-gray-400 text-sm md:text-base">React, Next.js, Vue.js für hochperformante und skalierbare Web-Anwendungen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Backend & Datenbanken</h4>
                      <p className="text-gray-400 text-sm md:text-base">Node.js, Python, PostgreSQL, MongoDB für robuste Backend-Systeme</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Cloud & Hosting</h4>
                      <p className="text-gray-400 text-sm md:text-base">AWS, Vercel, Netlify für zuverlässiges und skalierbares Hosting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">Testing & Qualität</h4>
                      <p className="text-gray-400 text-sm md:text-base">Automatisierte Tests und Code-Reviews für höchste Qualitätsstandards</p>
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

export default WebdesignSection;