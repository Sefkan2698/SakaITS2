'use client'
import React, { useState } from 'react';

const KIAgentenPraxisSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('healthcare');
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = {
    healthcare: {
      name: 'Gesundheitswesen',
      icon: '🏥',
      color: 'from-green-500 to-emerald-500',
      description: 'Automatisierte Patientenbetreuung und administrative Prozesse',
      useCases: [
        'Terminplanung und -erinnerungen',
        'Patientenaufnahme automatisieren',
        'Medikamenten-Compliance überwachen',
        'Notfall-Protokolle aktivieren'
      ],
      results: {
        efficiency: '85%',
        timeReduction: '6h',
        satisfaction: '94%'
      }
    },
    finance: {
      name: 'Finanzdienstleistungen',
      icon: '💰',
      color: 'from-blue-500 to-cyan-500',
      description: 'Intelligente Kundenberatung und Risikobewertung',
      useCases: [
        'Kreditanträge vorprüfen',
        'Anlageberatung personalisieren',
        'Betrugserkennung aktivieren',
        'Compliance-Checks automatisieren'
      ],
      results: {
        efficiency: '78%',
        timeReduction: '4h',
        satisfaction: '89%'
      }
    },
    retail: {
      name: 'Einzelhandel',
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500',
      description: 'Personalisierte Kundenbetreuung und Bestandsmanagement',
      useCases: [
        'Produktempfehlungen generieren',
        'Lagerbestände optimieren',
        'Reklamationen bearbeiten',
        'Cross-Selling automatisieren'
      ],
      results: {
        efficiency: '72%',
        timeReduction: '3h',
        satisfaction: '91%'
      }
    },
    manufacturing: {
      name: 'Produktion',
      icon: '🏭',
      color: 'from-orange-500 to-red-500',
      description: 'Predictive Maintenance und Qualitätskontrolle',
      useCases: [
        'Wartungszyklen optimieren',
        'Qualitätsprüfungen automatisieren',
        'Lieferkettenmanagement',
        'Produktionsplanung anpassen'
      ],
      results: {
        efficiency: '82%',
        timeReduction: '8h',
        satisfaction: '87%'
      }
    }
  };

  const automationLevels = [
    {
      level: 'Basis Automatisierung',
      percentage: 25,
      description: 'Einfache, repetitive Aufgaben',
      examples: ['E-Mail Weiterleitung', 'Datenerfassung', 'Terminplanung'],
      color: 'bg-gray-500'
    },
    {
      level: 'Intelligente Automatisierung',
      percentage: 60,
      description: 'Kontextuelle Entscheidungen',
      examples: ['Kundenanfragen klassifizieren', 'Prioritäten setzen', 'Eskalationen'],
      color: 'bg-blue-500'
    },
    {
      level: 'KI-Agenten',
      percentage: 90,
      description: 'Autonome Problemlösung',
      examples: ['Komplexe Dialoge', 'Multi-System Integration', 'Selbstlernend'],
      color: 'bg-purple-500'
    }
  ];

const roiMetrics = [
  {
    metric: 'Zeitersparnis',
    value: '40-80%',
    description: 'Weniger manuelle Arbeit',
    icon: '⏱️'
  },
  {
    metric: 'Kosten-\neinsparung',
    value: '€50k-200k',
    description: 'Pro Jahr und Abteilung',
    icon: '💰'
  },
  {
    metric: 'Fehlerreduktion',
    value: '95%',
    description: 'Weniger menschliche Fehler',
    icon: '✅'
  },
  {
    metric: 'Kunden-\nzufriedenheit',
    value: '+25%',
    description: 'Schnellere Reaktionszeiten',
    icon: '😊'
  }
];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            KI-Agenten in der Praxis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Echte <span className="text-purple-400 font-semibold">Automatisierung</span> mit messbaren Ergebnissen - 
            sehen Sie, wie Unternehmen ihre Effizienz revolutionieren.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="mb-16 scroll-animate">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeIndustry === key
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {industry.icon} {key === 'finance' ? (
                  <>
                    Finanz-<br className="sm:hidden" />dienstleistungen
                  </>
                ) : (
                  industry.name
                )}
              </button>
            ))}
          </div>

          {/* Active Industry Detail - Fixed Layout */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left: Use Cases */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
  <span className="text-2xl md:text-3xl mr-3">{industries[activeIndustry].icon}</span>
  {activeIndustry === 'finance' ? (
    <>Finanz-<br />dienstleistungen</>
  ) : (
    industries[activeIndustry].name
  )}
</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-6">
                    {industries[activeIndustry].description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Anwendungsfälle:</h4>
                  <div className="space-y-3">
                    {industries[activeIndustry].useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${industries[activeIndustry].color} mr-3 mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Results - Fixed Container */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-6">Erreichte Ergebnisse:</h4>
                
                {/* Results Cards - Fixed Heights and Responsive Text */}
                <div className="space-y-4">
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm md:text-base">Effizienzsteigerung</span>
                      <span className="text-green-400 font-bold text-lg md:text-xl">+{industries[activeIndustry].results.efficiency}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${industries[activeIndustry].color}`}
                        style={{ width: industries[activeIndustry].results.efficiency }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm md:text-base">Zeitersparnis pro Tag</span>
                      <span className="text-blue-400 font-bold text-lg md:text-xl">{industries[activeIndustry].results.timeReduction} täglich</span>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm md:text-base">Kundenzufriedenheit</span>
                      <span className="text-purple-400 font-bold text-lg md:text-xl">{industries[activeIndustry].results.satisfaction}</span>
                    </div>
                  </div>

                </div>
                
                {/* CTA Button - Mobile Responsive */}
                <div className="pt-4">
                  <a href="/kontakt">
                  <button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                    Mehr Details anfragen
                  </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Automation Levels Comparison */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Automatisierungsgrad im Vergleich
            </h3>
            <p className="text-gray-300">
              Von einfacher Automatisierung zu intelligenten KI-Agenten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {automationLevels.map((level, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 flex flex-col"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 md:w-24 md:h-24 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}>
                    <span className="text-white text-xl md:text-2xl font-bold">{level.percentage}%</span>
                    <div 
                      className="absolute inset-0 bg-white/20 transform transition-transform duration-500"
                      style={{ 
                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(0)',
                        borderRadius: '50%'
                      }}
                    ></div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">{level.level}</h4>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">{level.description}</p>
                </div>

                <div className="space-y-2 flex-grow">
                  {level.examples.map((example, exIndex) => (
                    <div key={exIndex} className="flex items-start text-sm">
                      <div className={`w-2 h-2 ${level.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-300 leading-relaxed">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Messbare Erfolge durch KI-Agenten
            </h3>
            <p className="text-gray-300">
              Return on Investment der unsere Kunden erreichen
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {roiMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-lg md:text-2xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-purple-400 mb-2 whitespace-pre-line">
  {metric.metric}
</h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Von der Idee zur Automatisierung
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Unser bewährter Prozess für erfolgreiche KI-Agent Implementation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg md:text-xl">1</span>
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2">Analyse</h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  Identifikation der optimalen Automatisierungspotentiale
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg md:text-xl">2</span>
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2">Konzept</h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  Entwicklung der KI-Agent Architektur und Workflows
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg md:text-xl">3</span>
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2">Umsetzung</h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  Implementation und Integration in bestehende Systeme
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg md:text-xl">4</span>
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2">Optimierung</h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  Kontinuierliche Verbesserung und Skalierung
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KIAgentenPraxisSection;