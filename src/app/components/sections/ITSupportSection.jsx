import React from 'react';

const ItSupportSection = () => {
  return (
    <section id="it-support" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professioneller IT-Support & Cloud Infrastruktur
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zuverlässiger PC Service und IT-Dienstleistungen für Ihr Unternehmen. 
            Von der Cloud Infrastruktur bis zum täglichen IT-Support - wir halten Ihre Systeme am Laufen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Visual/Benefits */}
          <div className="scroll-animate">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              
              <h3 className="text-2xl font-bold mb-6 text-white">
                Unsere IT-Dienstleistungen
              </h3>
              
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">PC Service & Hardware</h4>
                    <p className="text-gray-400">Reparatur, Wartung und Optimierung Ihrer Computer und Netzwerke</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cloud Infrastruktur</h4>
                    <p className="text-gray-400">Sichere und skalierbare Cloud-Lösungen für moderne Unternehmen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sicherheit & Backup</h4>
                    <p className="text-gray-400">Umfassende Sicherheitslösungen und automatische Datensicherung</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                    <p className="text-gray-400">Schnelle Hilfe bei IT-Problemen - auch außerhalb der Geschäftszeiten</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="scroll-animate animate-delay-1">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Warum unseren IT-Support wählen?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Professioneller <span className="text-orange-400 font-semibold">PC Service</span> und umfassende 
                  <span className="text-blue-400 font-semibold"> IT-Dienstleistungen</span> aus einer Hand. 
                  Wir sorgen dafür, dass Ihre IT-Infrastruktur reibungslos funktioniert.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mit jahrelanger Erfahrung in der <span className="text-purple-400 font-semibold">Systemintegration</span> 
                  und modernen Cloud-Technologien bieten wir Ihnen zuverlässige Lösungen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Häufige Fragen zu unserem IT-Support
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Implementieren Sie M365?</strong> Ja, wir sind Microsoft 365 Experten und unterstützen bei Migration und Setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Kleinere Services möglich?</strong> Ja, von Einzelreparaturen bis zu großen Projekten - alles ist möglich</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Kostet eine Beratung?</strong> Nein, das Erstgespräch und die Beratung sind komplett kostenlos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Remote Support möglich?</strong> Ja, viele Probleme können wir direkt per Fernwartung lösen</span>
                  </li>
                </ul>
              </div>

              {/* OPTIMIERTE BUTTONS - Weniger Redundanz */}
              <div className="flex space-x-4 pt-4">
                <a href="/it-support" className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold inline-block text-center">
                  Mehr erfahren
                </a>
                <a href="/kontakt?kategorie=it-support" className="border border-orange-600 hover:bg-orange-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold inline-block text-center">
                  IT-Beratung
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ItSupportSection;