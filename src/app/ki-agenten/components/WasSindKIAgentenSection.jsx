'use client'
import React from 'react';

const WasSindKIAgentenSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Was sind KI-Agenten?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mehr als nur Chatbots - intelligente Software-Systeme, die eigenständig denken, 
            lernen und komplexe Geschäftsprozesse automatisieren.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Erklärung */}
          <div className="scroll-animate">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Intelligenz trifft Automatisierung
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="text-purple-400 font-semibold">KI-Agenten</span> sind die Evolution 
                  der klassischen Automatisierung. Während normale Workflows starren Regeln folgen, 
                  können KI-Agenten kontextuelle Entscheidungen treffen und aus jeder Interaktion lernen.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Sie verstehen natürliche Sprache, interpretieren komplexe Anfragen und führen 
                  <span className="text-blue-400 font-semibold"> intelligente Workflows</span> aus - 
                  24/7, ohne menschliche Intervention.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-white mb-4">
                  KI-Agent vs. Normale Automatisierung
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-400 font-semibold mb-2">❌ Klassische Automation</div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Starre If-Then-Regeln</li>
                      <li>• Kann nur vordefinierte Szenarien</li>
                      <li>• Benötigt konstante Wartung</li>
                      <li>• Versteht keinen Kontext</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold mb-2">✅ KI-Agenten</div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Adaptive Entscheidungsfindung</li>
                      <li>• Lernt aus jeder Interaktion</li>
                      <li>• Verbessert sich automatisch</li>
                      <li>• Versteht Kontext & Nuancen</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Visual Demo */}
          <div className="scroll-animate animate-delay-1">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              
              <h3 className="text-2xl font-bold mb-6 text-white text-center">
                KI-Agent in Aktion
              </h3>
              
              {/* Chat Demo */}
              <div className="bg-black/50 rounded-lg p-4 h-80 overflow-y-auto border border-gray-700">
                <div className="space-y-4">
                  
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                      "Ich brauche Hilfe bei der Rechnungsstellung für Kunde XYZ"
                    </div>
                  </div>
                  
                  {/* Agent Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                      <div className="text-purple-400 text-xs mb-1">🤖 KI-Agent analysiert...</div>
                      Ich habe Kunde XYZ gefunden. Letzte Rechnung: 15.11.2024. 
                      Soll ich eine neue Rechnung erstellen oder die bestehende bearbeiten?
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                      "Neue Rechnung für Q4 Services"
                    </div>
                  </div>
                  
                  {/* Agent Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                      <div className="text-green-400 text-xs mb-1">✅ Rechnung erstellt</div>
                      Rechnung #2024-089 erstellt (€2.450). 
                      Automatisch an kunde@xyz.de gesendet. 
                      Zahlungserinnerung in 14 Tagen geplant.
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-400">
                Echte Konversation - Kein vordefiniertes Skript
              </div>

            </div>
          </div>

        </div>

        {/* Keywords Integration */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-gray-700 scroll-animate">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Revolutionieren Sie Ihre IT-Dienstleistungen
            </h3>
            <p className="text-gray-300">
              Verbinden Sie moderne KI-Technologie mit bewährten IT-Services und Cloud-Infrastruktur
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Perfekte Integration in Ihre IT-Landschaft</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong className="text-white">PC Service</strong> - KI-Agenten für Remote-Diagnose und Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong className="text-white">IT-Support</strong> - Intelligente Ticket-Bearbeitung und Problemlösung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong className="text-white">Cloud Infrastruktur</strong> - KI-basierte Ressourcen-Optimierung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong className="text-white">Webentwicklung</strong> - Intelligente Website-Features und Chatbots</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Warum KI-Agenten für IT-Unternehmen?</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Reduzieren Sie IT-Support-Tickets um 70%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">24/7 Verfügbarkeit ohne zusätzliche Mitarbeiter</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Automatische Eskalation bei komplexen Problemen</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Nahtlose Integration in bestehende IT-Systeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WasSindKIAgentenSection;