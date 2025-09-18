import React, { useState } from 'react';

const ToolsSection = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  const toolCategories = [
    {
      category: 'Frontend Development',
      description: 'Moderne Webentwicklung mit React-Ecosystem',
      tools: [
        {
          name: 'React',
          description: 'Komponentenbasierte UI-Entwicklung für dynamische Websites',
          icon: '⚛️',
          color: 'from-blue-400 to-cyan-400',
          features: ['Komponentenbasiert', 'Virtual DOM', 'State Management', 'Hooks'],
          why: 'Ermöglicht skalierbare und wartbare Web-Anwendungen'
        },
        {
          name: 'Next.js',
          description: 'Full-Stack React Framework für optimierte Performance',
          icon: '▲',
          color: 'from-gray-700 to-gray-900',
          features: ['SSR/SSG', 'File-based Routing', 'API Routes', 'Image Optimization'],
          why: 'Perfekte Balance zwischen Performance und Developer Experience'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-First CSS Framework für schnelles Styling',
          icon: '🎨',
          color: 'from-teal-400 to-blue-500',
          features: ['Utility Classes', 'Responsive Design', 'Custom Components', 'JIT Compiler'],
          why: 'Konsistentes Design-System ohne Custom CSS schreiben zu müssen'
        }
      ]
    },
    {
      category: 'Content Management',
      description: 'Bewährte CMS-Lösungen für verschiedene Anforderungen',
      tools: [
        {
          name: 'WordPress',
          description: 'Das meistgenutzte CMS für Content-getriebene Websites',
          icon: '📝',
          color: 'from-blue-600 to-indigo-600',
          features: ['Benutzerfreundlich', 'Plugin-Ecosystem', 'SEO-Optimiert', 'Flexibel'],
          why: 'Ideal für Kunden, die ihre Inhalte selbst verwalten möchten'
        },
        {
          name: 'Shopify',
          description: 'E-Commerce Plattform für Online-Shops',
          icon: '🛒',
          color: 'from-green-500 to-emerald-600',
          features: ['Payment Integration', 'Inventory Management', 'Mobile Optimized', 'App Store'],
          why: 'All-in-One Lösung für E-Commerce ohne technische Komplexität'
        }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: 'Planung & Konzept',
      description: 'Anforderungsanalyse und technische Architektur',
      tools: ['React', 'Next.js'],
      duration: ''
    },
    {
      step: 2,
      title: 'Design & Layout',
      description: 'Responsive Design mit Tailwind CSS',
      tools: ['Tailwind CSS'],
      duration: ''
    },
    {
      step: 3,
      title: 'Entwicklung',
      description: 'Component-basierte Webentwicklung',
      tools: ['React', 'Next.js'],
      duration: ''
    },
    {
      step: 4,
      title: 'CMS Integration',
      description: 'Content Management System Setup',
      tools: ['WordPress', 'Shopify'],
      duration: ''
    }
  ];

  const advantages = [
    {
      title: 'Modern & Zukunftssicher',
      description: 'Website erstellen mit aktuellsten Technologien',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Performance-Optimiert',
      description: 'Schnelle Ladezeiten durch Next.js Optimierungen',
      icon: '⚡',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Responsive Design',
      description: 'Perfekte Darstellung auf allen Geräten',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SEO-Freundlich',
      description: 'Optimiert für Suchmaschinen von Grund auf',
      icon: '🔍',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Unsere Webentwicklung Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Moderne <span className="text-purple-400 font-semibold">Webentwicklung</span> mit bewährten Technologien - 
            für jede Website erstellen wir die optimale technische Grundlage.
          </p>
        </div>

        {/* Tools Categories */}
        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 scroll-animate">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {category.category}
              </h3>
              <p className="text-gray-300">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tools.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onMouseEnter={() => setHoveredTool(`${categoryIndex}-${toolIndex}`)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Tool Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-2xl font-bold text-white">{tool.name}</h4>
                    </div>
                  </div>

                  {/* Tool Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} mr-2`}></div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why we use it */}
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="text-purple-400 font-semibold text-sm mb-2">Warum wir es verwenden:</h5>
                    <p className="text-gray-300 text-sm">{tool.why}</p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${tool.color} pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Development Process */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Unser Webentwicklung Prozess
            </h3>
            <p className="text-gray-300">
              Strukturierter Ansatz für jedes Website erstellen Projekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center relative"
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
                
                {/* Tools used in this phase */}
                <div className="space-y-1 mb-4">
                  {phase.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="inline-block px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded mr-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="text-purple-400 font-semibold text-sm">
                
                </div>

                {/* Connection Line */}
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Warum unsere Webdesign Technologien?
            </h3>
            <p className="text-gray-300">
              Die Vorteile moderner Webentwicklung für Ihr Projekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{advantage.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{advantage.title}</h4>
                <p className="text-gray-400 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bereit für moderne Webentwicklung?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre professionelle Website erstellen - 
              mit den neuesten Technologien und bewährten Methoden.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/25 transform hover:scale-105">
                Webdesign Projekt starten
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg text-lg font-semibold text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300">
                Kostenlose Beratung
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;