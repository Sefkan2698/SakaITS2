import React, { useState } from 'react';

const KeywordsFinalSection = () => {
  const [activeTab, setActiveTab] = useState('webdesign');

  const services = {
    webdesign: {
      title: 'Professionelles Webdesign',
      description: 'Von der ersten Idee bis zur fertigen Website - wir gestalten digitale Erlebnisse, die begeistern.',
      features: [
        'Responsive Webdesign für alle Geräte',
        'Benutzerzentriertes UI/UX Design',
        'Moderne Designsprache',
        'Conversion-optimierte Layouts',
        'Barrierefreie Gestaltung',
        'Corporate Design Integration'
      ],
      benefits: [
        {
          title: 'Markenidentität stärken',
          description: 'Einheitliches Design, das Ihre Marke authentisch repräsentiert'
        },
        {
          title: 'Nutzerfreundlichkeit',
          description: 'Intuitive Navigation und optimierte User Experience'
        },
        {
          title: 'Mobile-First',
          description: 'Perfekte Darstellung auf Smartphones und Tablets'
        }
      ]
    },
    entwicklung: {
      title: 'Moderne Webentwicklung',
      description: 'Technische Umsetzung mit aktuellsten Frameworks und bewährten Entwicklungspraktiken.',
      features: [
        'React & Next.js Entwicklung',
        'Performance-Optimierung',
        'SEO-freundlicher Code',
        'Sicherheitsstandards',
        'API-Integrationen',
        'Content Management Systeme'
      ],
      benefits: [
        {
          title: 'Zukunftssicher',
          description: 'Moderne Technologien für langfristige Wartbarkeit'
        },
        {
          title: 'Schnelle Ladezeiten',
          description: 'Optimierter Code für bessere Performance'
        },
        {
          title: 'Skalierbar',
          description: 'Architektur, die mit Ihrem Unternehmen wächst'
        }
      ]
    },
    erstellung: {
      title: 'Komplette Website erstellen',
      description: 'Full-Service Webentwicklung von der Konzeption bis zum Go-Live und darüber hinaus.',
      features: [
        'Bedarfsanalyse & Konzeption',
        'Design & Prototyping',
        'Frontend & Backend Entwicklung',
        'Content Management Setup',
        'Testing & Qualitätssicherung',
        'Launch & Wartung'
      ],
      benefits: [
        {
          title: 'Alles aus einer Hand',
          description: 'Kompletter Service ohne externe Abhängigkeiten'
        },
        {
          title: 'Transparent',
          description: 'Klare Kommunikation in jeder Projektphase'
        },
        {
          title: 'Langfristig',
          description: 'Betreuung auch nach dem Launch'
        }
      ]
    }
  };

  const industries = [
    {
      name: 'Finanzdienstleistungen',
      description: 'Vertrauensvolle Websites für Banken, Berater und Fintech',
      projects: 'DT Finanzierungsberatung',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'E-Commerce',
      description: 'Online-Shops mit optimierter Conversion-Rate',
      projects: 'Shopify Stores',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'IT-Dienstleistungen',
      description: 'Technische Expertise professionell präsentiert',
      projects: 'SakaITS Website',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Beratung & Coaching',
      description: 'Persönlichkeit und Kompetenz digital vermitteln',
      projects: 'In Planung',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const qualityStandards = [
    {
      standard: 'Responsive Design',
      description: 'Optimale Darstellung auf allen Endgeräten',
      implementation: 'Mobile-First Entwicklung mit Tailwind CSS'
    },
    {
      standard: 'Performance',
      description: 'Schnelle Ladezeiten für bessere User Experience',
      implementation: 'Next.js Optimierungen und Code Splitting'
    },
    {
      standard: 'SEO-Optimierung',
      description: 'Bessere Sichtbarkeit in Suchmaschinen',
      implementation: 'Semantisches HTML und Meta-Tags'
    },
    {
      standard: 'Accessibility',
      description: 'Barrierefreie Websites für alle Nutzer',
      implementation: 'WCAG Guidelines und Screen Reader Support'
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Website erstellen leicht gemacht
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Professionelle <span className="text-purple-400 font-semibold">Webentwicklung</span> und 
            <span className="text-blue-400 font-semibold"> Webdesign</span> - 
            von der ersten Idee bis zur fertigen Website erstellen wir digitale Lösungen, die Ihr Unternehmen voranbringen.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-16 scroll-animate">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('webdesign')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'webdesign'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Webdesign
            </button>
            <button
              onClick={() => setActiveTab('entwicklung')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'entwicklung'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Webentwicklung
            </button>
            <button
              onClick={() => setActiveTab('erstellung')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'erstellung'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Website erstellen
            </button>
          </div>

          {/* Active Service Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left: Service Description */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {services[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {services[activeTab].description}
                </p>

                <h4 className="text-xl font-semibold text-white mb-4">Was wir bieten:</h4>
                <div className="grid gap-3">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Ihre Vorteile:</h4>
                <div className="space-y-6">
                  {services[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                      <h5 className="text-lg font-semibold text-purple-400 mb-2">
                        {benefit.title}
                      </h5>
                      <p className="text-gray-300 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Webdesign für verschiedene Branchen
            </h3>
            <p className="text-gray-300">
              Branchenspezifische Lösungen für optimale Ergebnisse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                <h4 className="text-lg font-bold text-white mb-2">{industry.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <div className="text-purple-400 text-xs font-semibold">
                  Referenz: {industry.projects}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Unsere Webentwicklung Standards
            </h3>
            <p className="text-gray-300">
              Qualität und Best Practices in jedem Projekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{standard.standard}</h4>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <p className="text-gray-300 mb-4">{standard.description}</p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-purple-400 text-sm font-semibold mb-1">Umsetzung:</div>
                  <div className="text-gray-400 text-sm">{standard.implementation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Warum Website erstellen mit uns?
              </h3>
              <p className="text-gray-300">
                Die perfekte Kombination aus kreativem Webdesign und professioneller Webentwicklung
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Schnelle Umsetzung</h4>
                <p className="text-gray-400">
                  Effiziente Webentwicklung mit modernen Tools und bewährten Prozessen
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Qualitätsversprechen</h4>
                <p className="text-gray-400">
                  Höchste Standards bei Webdesign und technischer Umsetzung
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Langfristige Betreuung</h4>
                <p className="text-gray-400">
                  Kontinuierliche Wartung und Weiterentwicklung Ihrer Website
                </p>
              </div>

            </div>

            <div className="text-center mt-12">
              <div className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Kostenlose Erstberatung
                </h4>
                <p className="text-gray-300 text-sm">
                  Lassen Sie uns über Ihr Projekt sprechen. Wir analysieren Ihre Anforderungen 
                  und erstellen ein maßgeschneidertes Angebot für Ihre neue Website.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default KeywordsFinalSection;