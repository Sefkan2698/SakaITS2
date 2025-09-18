'use client'
import React, { useState } from 'react';

const SoftwareToolsSection = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  const tools = [
    {
      id: 'n8n',
      name: 'n8n',
      category: 'Workflow-Automatisierung',
      description: 'Open-source Workflow-Automatisierung für komplexe KI-Agent Prozesse',
      features: ['Visual Workflow Builder', 'API Integrationen', 'Custom Logic', 'Skalierbar'],
      color: 'from-purple-500 to-pink-500',
      icon: '📄'
    },
    {
      id: 'openai',
      name: 'OpenAI GPT',
      category: 'KI-Engine',
      description: 'Fortschrittliche Sprachmodelle für natürliche Konversationen',
      features: ['GPT-4o', 'Function Calling', 'Reasoning', 'Multi-Modal'],
      color: 'from-green-500 to-teal-500',
      icon: '🧠'
    },
    {
      id: 'claude',
      name: 'Anthropic Claude',
      category: 'KI-Reasoning',
      description: 'Hochentwickelte KI für komplexe Entscheidungsfindung',
      features: ['Advanced Reasoning', 'Tool Usage', 'Safety First', 'Long Context'],
      color: 'from-orange-500 to-red-500',
      icon: '⚡'
    },
    {
      id: 'voice',
      name: 'Voice AI',
      category: 'Spracherkennung',
      description: 'Realtime Voice-to-Text und Text-to-Speech Technologie',
      features: ['Real-time STT', 'Natural TTS', 'Multi-Language', 'Low Latency'],
      color: 'from-blue-500 to-indigo-500',
      icon: '🎤'
    },
    {
      id: 'database',
      name: 'Vector DB',
      category: 'Wissensspeicher',
      description: 'Hochperformante Vektordatenbanken für KI-Wissen',
      features: ['Vector Search', 'RAG Support', 'Scalable', 'Real-time'],
      color: 'from-cyan-500 to-blue-500',
      icon: '💾'
    },
    {
      id: 'apis',
      name: 'API Ecosystem',
      category: 'System-Integration',
      description: 'Nahtlose Integration in bestehende Geschäftssysteme',
      features: ['REST APIs', 'Webhooks', 'Real-time Sync', 'Secure'],
      color: 'from-yellow-500 to-orange-500',
      icon: '🔗'
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Unsere KI-Agent Lösungen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von <span className="text-purple-400 font-semibold">Voice KI</span> bis intelligente Chatbots - 
            maßgeschneiderte Automatisierungslösungen für Ihr Unternehmen.
          </p>
        </div>

        {/* Solutions Grid - Voice KI, Chatbots, Workflow */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 scroll-animate">
          
          {/* Voice KI */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Voice KI</h4>
            <p className="text-gray-400 mb-4">
              Sprachgesteuerte KI-Assistenten für Telefon-Support und Voice-Interfaces. 
              Natürliche Gespräche statt Roboter-Antworten.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">Telefonservice</span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">Voice Assistant</span>
            </div>
          </div>

          {/* Chatbots */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Intelligente Chatbots</h4>
            <p className="text-gray-400 mb-4">
              Website-Chatbots die komplexe Anfragen verstehen und intelligente 
              Konversationen führen. Integration in bestehende Systeme.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">Website Chat</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">Kundenservice</span>
            </div>
          </div>

          {/* Workflow KI */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Workflow-Automatisierung</h4>
            <p className="text-gray-400 mb-4">
              KI-gesteuerte Geschäftsprozesse die eigenständig Entscheidungen treffen. 
              Von E-Mail-Bearbeitung bis komplexe Workflow-Logik.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">Automatisierung</span>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">Entscheidungslogik</span>
            </div>
          </div>

        </div>

        {/* Keywords & Integration Section */}
        <div className="mt-20 scroll-animate">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Left: Workflowautomatisierung */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  <span className="text-purple-400">Workflowautomatisierung</span> mit n8n
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Visual Workflow Designer</h4>
                      <p className="text-gray-400 text-sm">Drag & Drop Interface für komplexe Automatisierungen ohne Code</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">500+ Integrationen</h4>
                      <p className="text-gray-400 text-sm">Verbindung zu allen wichtigen Business-Tools und APIs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">KI-Agent Orchestrierung</h4>
                      <p className="text-gray-400 text-sm">Intelligente Koordination mehrerer KI-Systeme für optimale Ergebnisse</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Voice KI */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  <span className="text-blue-400">Voice KI</span> Integration
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">🎤</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Real-time Spracherkennung</h4>
                      <p className="text-gray-400 text-sm">Sofortige Umwandlung von Sprache zu Text mit 99%+ Genauigkeit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">🔊</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Natürliche Stimmsynthese</h4>
                      <p className="text-gray-400 text-sm">Menschlich klingende Sprachausgabe in mehreren Sprachen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Telefon-Integration</h4>
                      <p className="text-gray-400 text-sm">Nahtlose Integration in bestehende Telefonsysteme und Call-Center</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Technology Benefits */}
        <div className="mt-16 text-center scroll-animate">
          <div className="grid md:grid-cols-4 gap-6">
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Schnelle Deployment</h4>
              <p className="text-gray-400 text-sm">
                KI-Agenten in wenigen Tagen statt Monaten implementiert
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Wartungsarm</h4>
              <p className="text-gray-400 text-sm">
                Self-healing Systems mit automatischen Updates und Optimierungen
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Skalierbar</h4>
              <p className="text-gray-400 text-sm">
                Von wenigen Anfragen bis hin zu Millionen von Interaktionen
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise-Sicher</h4>
              <p className="text-gray-400 text-sm">
                DSGVO-konform mit End-to-End Verschlüsselung und Audit-Logs
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


export default SoftwareToolsSection;