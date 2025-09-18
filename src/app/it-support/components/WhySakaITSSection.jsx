'use client'
import React, { useState, useEffect } from 'react';

const WhySakaITSSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('why-sakaits-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: 0,
      title: "Warum SakaITS?",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3.09 8.26L4 9L12 4L20 9L20.91 8.26L12 2ZM17 16L12 13.03L7 16V9.5L12 7L17 9.5V16ZM12 15L19 18L12 22L5 18L12 15Z"/>
        </svg>
      ),
      content: {
        headline: "Ihr zuverlässiger IT-Partner in der Region",
        points: [
          {
            icon: (
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            ),
            title: "Lokale Expertise seit Jahren",
            description: "Als regionaler IT-Dienstleister kennen wir die spezifischen Bedürfnisse von Unternehmen in unserer Umgebung und bieten persönlichen Service vor Ort."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ),
            title: "Transparente Preisgestaltung",
            description: "Keine versteckten Kosten - IT-Support für 39€/Stunde im 15-Minuten-Takt. Projekte werden individuell und fair kalkuliert."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            ),
            title: "Schnelle Reaktionszeiten",
            description: "Bei IT-Problemen zählt jede Minute. Wir reagieren schnell und lösen Ihre Probleme effizient - oft noch am selben Tag."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            ),
            title: "Moderne Technologien",
            description: "Wir arbeiten mit aktuellen Technologien und Tools - von Cloud-Infrastrukturen bis zu modernsten Security-Lösungen."
          }
        ]
      }
    },
    {
      id: 1,
      title: "Unser Ansatz",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9s.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      ),
      content: {
        headline: "Partnerschaft statt nur Service",
        points: [
          {
            icon: (
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ),
            title: "Verständliche Kommunikation",
            description: "IT-Fachchinesisch? Nicht bei uns. Wir erklären technische Zusammenhänge in verständlicher Sprache und halten Sie immer auf dem Laufenden."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            ),
            title: "Proaktive Betreuung",
            description: "Wir warten nicht auf Probleme - durch regelmäßige Wartung und Monitoring verhindern wir Ausfälle bevor sie entstehen."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            ),
            title: "Nachhaltige Lösungen",
            description: "Schnelle Fixes sind nicht unser Stil. Wir entwickeln langfristige, skalierbare Lösungen die mit Ihrem Unternehmen mitwachsen."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            ),
            title: "Kontinuierliche Weiterbildung",
            description: "IT entwickelt sich rasant. Durch ständige Weiterbildung und Zertifizierungen bleiben wir immer am neuesten Stand der Technik."
          }
        ]
      }
    },
    {
      id: 2,
      title: "Warum IT-Support?",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      content: {
        headline: "Die Kosten von IT-Problemen",
        points: [
          {
            icon: (
              <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            ),
            title: "Produktivitätsverluste",
            description: "Ein Systemausfall kann ein Unternehmen hunderte Euro pro Stunde kosten. Mitarbeiter können nicht arbeiten, Aufträge verzögern sich."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            ),
            title: "Datenverlust-Risiko",
            description: "Ohne regelmäßige Backups und Wartung riskieren Sie den Verlust wichtiger Geschäftsdaten - oft unwiederbringlich."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            ),
            title: "Sicherheitslücken",
            description: "Ungeschützte Systeme sind anfällig für Cyberangriffe, Ransomware und Datenlecks - mit verheerenden Folgen für Ihr Geschäft."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2H8V2c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            ),
            title: "Veraltete Systeme",
            description: "Ohne professionelle Wartung werden Systeme langsam, instabil und ineffizient - Zeit und Geld gehen täglich verloren."
          }
        ]
      }
    }
  ];

  return (
    <section id="why-sakaits-section" className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mehr als nur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IT-Service</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Erfahren Sie, warum Unternehmen auf professionelle IT-Betreuung setzen und 
            was SakaITS zu Ihrem idealen IT-Partner macht.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-6 py-3 m-2 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === index 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {tab.content.headline}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tab.content.points.map((point, idx) => (
                  <div
                    key={idx}
                    className={`bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'animate-slideIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 mr-4">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {point.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

          {/* Bottom CTA - OPTIMIERT */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">
          Bereit für professionelle IT-Betreuung?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Lassen Sie uns in einem kostenlosen Beratungsgespräch herausfinden, 
          wie wir Ihre IT-Infrastruktur optimieren können.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/kontakt?kategorie=it-support" className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 inline-block text-center">
            Kostenlose Beratung
          </a>
          <a href="https://wa.me/491741928943?text=Hallo,%20ich%20brauche%20IT-Support" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 inline-block text-center">
            WhatsApp Support
          </a>
        </div>
      </div>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

    </section>
  );
};

export default WhySakaITSSection;