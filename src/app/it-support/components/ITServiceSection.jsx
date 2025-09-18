'use client'
import React, { useState } from 'react';

const ITServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 1h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"/>
          <path d="M4 7h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z"/>
          <path d="M4 13h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z"/>
        </svg>
      ),
      title: "IT-Support",
      subtitle: "24/7 Betreuung",
      description: "Professioneller IT-Support für alle Ihre technischen Herausforderungen. Von der Problemdiagnose bis zur nachhaltigen Lösung.",
      features: [
        "Remote & Vor-Ort Support",
        "Hardware & Software Probleme",
        "Netzwerk-Troubleshooting",
        "System-Wartung"
      ],
      price: "39€/Stunde",
      priceNote: "Abrechnung im 15-Minuten-Takt",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="3" width="8" height="8" fill="currentColor"/>
          <rect x="13" y="3" width="8" height="8" fill="currentColor"/>
          <rect x="3" y="13" width="8" height="8" fill="currentColor"/>
          <rect x="13" y="13" width="8" height="8" fill="currentColor"/>
        </svg>
      ),
      title: "Microsoft 365",
      subtitle: "Setup & Migration",
      description: "Vollständige Microsoft 365 Implementierung und Migration. Von der Planung bis zum Go-Live mit umfassendem Support.",
      features: [
        "Tenant-Einrichtung",
        "Email-Migration",
        "Teams & SharePoint Setup",
        "Benutzer-Schulungen"
      ],
      price: "Preis auf Anfrage",
      priceNote: "Individuell nach Projektumfang",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      ),
      title: "Cloud Infrastruktur",
      subtitle: "Azure & AWS",
      description: "Moderne Cloud-Lösungen für Ihr Unternehmen. Skalierbar, sicher und kosteneffizient - von der Migration bis zum Management.",
      features: [
        "Cloud-Migration",
        "Infrastruktur-Design",
        "Security & Backup",
        "Monitoring & Support"
      ],
      price: "Preis auf Anfrage",
      priceNote: "Abhängig von Infrastruktur-Größe",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 13H4V5h16v11z"/>
        </svg>
      ),
      title: "PC Service",
      subtitle: "Hardware & Software",
      description: "Umfassender PC-Service für Privatkunden und Unternehmen. Hardware-Reparaturen, Software-Installation und Systemoptimierung.",
      features: [
        "Hardware-Reparatur",
        "Software-Installation",
        "Virus-Entfernung",
        "System-Optimierung"
      ],
      price: "Preis auf Anfrage",
      priceNote: "Je nach Aufwand und Material",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IT-Dienstleistungen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von der schnellen Problemlösung bis zur kompletten IT-Infrastruktur - 
            wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm hover:border-gray-600 transition-all duration-500 group cursor-pointer`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                animation: `slideUp ${0.6 + index * 0.2}s ease-out forwards`
              }}
            >
              
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="mt-auto pt-6 border-t border-gray-800">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-bold text-white">{service.price}</p>
                    <p className="text-sm text-gray-400">{service.priceNote}</p>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                    Anfragen
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Nicht das Richtige dabei?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Wir bieten auch maßgeschneiderte IT-Lösungen. Sprechen Sie uns an und wir finden die perfekte Lösung für Ihre Anforderungen.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
            Individuelle Beratung anfragen
          </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default ITServicesSection;