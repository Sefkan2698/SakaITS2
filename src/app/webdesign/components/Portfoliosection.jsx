import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'dt-finanzierung',
      title: 'DT Finanzierungsberatung',
      category: 'Finanzdienstleistungen',
      description: 'Eine moderne Website für Baufinanzierung und Immobiliendarlehen mit fokussiertem Design und optimierter User Experience.',
      technologies: ['WordPress', 'Custom CSS', 'Responsive Design', 'Contact Forms'],
      features: [
        'Responsive Webdesign',
        'Optimierte Conversion-Rate',
        'Benutzerfreundliche Navigation',
        'Mobile-First Approach',
        'WhatsApp Integration'
      ],
      results: {
        improvement: 'Clean, professionelles Design',
        performance: 'Mobile-optimiert',
        conversion: 'CTA-optimiert'
      },
      images: {
        desktop: '/referenz1.png',
        mobile: '/referenz2.png'
      },
      liveUrl: '#',
      tags: ['Webdesign', 'WordPress', 'Responsive']
    },
    {
      id: 'e-commerce-shop',
      title: 'E-Commerce Shop',
      category: 'Online-Handel',
      description: 'Vollständig entwickelter Shopify-Store mit modernem Design, optimierter Produktdarstellung und nahtloser Checkout-Erfahrung.',
      technologies: ['Shopify', 'Liquid', 'Custom CSS', 'JavaScript'],
      features: [
        'Mobile-optimiertes Design',
        'Produktkatalog-Management',
        'Sichere Zahlungsabwicklung',
        'Inventory Management',
        'SEO-Optimierung'
      ],
      results: {
        improvement: 'Modernes E-Commerce Design',
        performance: 'Schnelle Ladezeiten',
        conversion: 'Optimierte Checkout-Prozesse'
      },
      images: {
        desktop: '/shopify1.png',
        mobile: '/shopify2.png'
      },
      liveUrl: '#',
      tags: ['E-Commerce', 'Shopify', 'Online Shop']
    }
  ];

  const upcomingProjects = [
    {
      title: 'SakaITS Website',
      category: 'IT-Dienstleistungen',
      description: 'Moderne Website für IT-Services, KI-Agenten und Automatisierung.',
      status: 'In Entwicklung',
      technologies: ['Next.js', 'React', 'Tailwind CSS']
    },
    {
      title: 'E-Commerce Plattform',
      category: 'Online Shop',
      description: 'Vollständige E-Commerce Lösung mit modernem Design.',
      status: 'Konzeptphase',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  const [selectedDevice, setSelectedDevice] = useState('desktop');

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Unsere Referenzen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Einblicke in unsere <span className="text-purple-400 font-semibold">Webentwicklung</span> - 
            von der ersten Idee bis zur fertigen Website erstellen wir digitale Lösungen, die begeistern.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20 scroll-animate">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
            
            {/* Project Navigation */}
            <div className="p-8 border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
{/* Project Selector - Desktop: Buttons, Mobile: Dropdown */}
<div className="mb-4">
  {/* Desktop Version */}
  <div className="hidden md:flex gap-2">
    {projects.map((project, index) => (
      <button
        key={project.id}
        onClick={() => setActiveProject(index)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          activeProject === index
            ? 'bg-purple-600 text-white'
            : 'text-gray-400 hover:text-white bg-gray-800/50'
        }`}
      >
        {project.title}
      </button>
    ))}
  </div>
  
  {/* Mobile Dropdown Version */}
  <div className="md:hidden">
    <select
      value={activeProject}
      onChange={(e) => setActiveProject(parseInt(e.target.value))}
      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem'
      }}
    >
      {projects.map((project, index) => (
        <option key={project.id} value={index} className="bg-gray-800">
          {project.title}
        </option>
      ))}
    </select>
  </div>
</div>
                  
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-bold text-white">
                      {projects[activeProject].title}
                    </h3>
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-600/30">
                      Live
                    </span>
                  </div>
                  <p className="text-purple-400 font-semibold mb-2">{projects[activeProject].category}</p>
                  <p className="text-gray-300 max-w-2xl">{projects[activeProject].description}</p>
                </div>
                
                {/* Device Toggle */}
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setSelectedDevice('desktop')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedDevice === 'desktop'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setSelectedDevice('mobile')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedDevice === 'mobile'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Mobile
                  </button>
                </div>
              </div>
            </div>

            {/* Project Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              
              {/* Left: Project Image */}
              <div className="relative">
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                  {selectedDevice === 'desktop' ? (
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                      {/* Browser Bar */}
                      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="ml-4 bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">
                          baufi-tuezuen.de
                        </div>
                      </div>
                      {/* Website Image */}
                      <img 
                        src={projects[activeProject].images.desktop}
                        alt={`${projects[activeProject].title} Desktop`}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-sm">
                        {/* Phone Frame */}
                        <div className="bg-gray-800 h-6 rounded-t-3xl flex justify-center items-center">
                          <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                        {/* Mobile Image */}
                        <img 
                          src={projects[activeProject].images.mobile}
                          alt={`${projects[activeProject].title} Mobile`}
                          className="w-full h-auto"
                        />
                        {/* Phone Bottom */}
                        <div className="bg-gray-800 h-6 rounded-b-3xl"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="space-y-6">
                
                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Umgesetzte Features</h4>
                  <div className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Verwendete Technologien</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Projektergebnisse</h4>
                  <div className="grid gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-green-400 font-semibold mb-1">Design</div>
                      <div className="text-gray-300 text-sm">{projects[activeProject].results.improvement}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-blue-400 font-semibold mb-1">Performance</div>
                      <div className="text-gray-300 text-sm">{projects[activeProject].results.performance}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-purple-400 font-semibold mb-1">Conversion</div>
                      <div className="text-gray-300 text-sm">{projects[activeProject].results.conversion}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Projekt Details ansehen
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Aktuelle Projekte
            </h3>
            <p className="text-gray-300">
              Ein Einblick in unsere laufenden Webentwicklung-Projekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-purple-400 font-semibold text-sm mb-2">{project.category}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'In Entwicklung' 
                      ? 'bg-orange-600/20 text-orange-400 border border-orange-600/30'
                      : 'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="mt-20 scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Unsere Webdesign Expertise
              </h3>
              <p className="text-gray-300">
                Von der Konzeption bis zur finalen Website erstellen - diese Bereiche decken wir ab
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">Benutzerfreundliche Interfaces</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Webentwicklung</h4>
                <p className="text-gray-400 text-sm">Moderne Web-Technologien</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">SEO Optimierung</h4>
                <p className="text-gray-400 text-sm">Bessere Sichtbarkeit</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">Schnelle Ladezeiten</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;