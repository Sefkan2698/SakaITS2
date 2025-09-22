'use client'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from '../app/components/WhatsAppButton'
import GoogleReviewsSection from './it-support/components/GoogleReviewSection'
import KiAgentenSection from './components/sections/KiAgentenSection'
import WebdesignSection from './components/sections/WebdesignSection'
import ItSupportSection from './components/sections/ITSupportSection'
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll Animation Hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate')
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    
    <>
      {/* Add CSS for animations */}
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-delay-1 {
          transition-delay: 0.2s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.4s;
        }
        
        .animate-delay-3 {
          transition-delay: 0.6s;
        }
        
        .animate-delay-4 {
          transition-delay: 0.8s;
        }
      `}</style>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

       

        {/* Hero Section */}
        <section className="relative z-10 text-center py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">
                IT-Lösungen für Ihr              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Unternehmen
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              KI-Agenten, moderne Webentwicklung und professioneller IT-Support - 
              <br className="hidden md:block" />
              <span className="text-blue-400 font-semibold">alles aus einer Hand</span>
            </p>
            
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center md:items-center">
              <a href="/kontakt" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 inline-block text-center">
                Kostenloses Beratungsgespräch
              </a>
              <a href="/webdesign#portfolio" className="w-full md:w-auto border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 inline-block text-center">
                Projekte ansehen
              </a>
            </div>
          </div>
        </section>

        {/* Services/Benefits Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Gebaut für Ergebnisse
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Wir digitalisieren Ihr Unternehmen mit modernster Technologie und sorgen für messbaren Erfolg
              </p>
            </div>

            {/* Cards Grid - Now 3 cards instead of 4 */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1: KI-Agenten (moved from position 2) */}
              <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 scroll-animate">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  KI-Agenten
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Intelligente KI-Lösungen für Kundenservice, Datenanalyse und Entscheidungsfindung.
                </p>
                <div className="space-y-3">
                  <a href="/ki-agenten" className="block w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    Mehr erfahren
                  </a>
                  <a href="/kontakt?kategorie=ki-agenten" className="block w-full border border-purple-600 hover:bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    KI-Beratung
                  </a>
                </div>
              </div>

              {/* Card 2: Webdesign */}
              <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 scroll-animate animate-delay-1">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  Webentwicklung
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Moderne, responsive Websites die konvertieren. Von der Idee bis zur fertigen Web-Anwendung.
                </p>
                <div className="space-y-3">
                  <a href="/webdesign" className="block w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    Mehr erfahren
                  </a>
                  <a href="/kontakt?kategorie=webdesign" className="block w-full border border-green-600 hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    Website anfragen
                  </a>
                </div>
              </div>

              {/* Card 3: IT-Support */}
              <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 scroll-animate animate-delay-2">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  IT-Support
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Professioneller IT-Support und Cloud-Infrastruktur. Wir halten Ihre Systeme am Laufen.
                </p>
                <div className="space-y-3">
                  <a href="/it-support" className="block w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    Mehr erfahren
                  </a>
                  <a href="/kontakt?kategorie=it-support" className="block w-full border border-orange-600 hover:bg-orange-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center">
                    Support anfragen
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

{/* KI-Agenten Section */}
<KiAgentenSection />

{/* Webdesign Section */}
<WebdesignSection />

{/* IT-Support Section */}
<ItSupportSection />

{/* Google Reviews Section - NEW */}


        {/* ROI Section */}
        {/* ROI Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* ROI Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-blue-500/50 transition-all duration-500 scroll-animate">
              
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ihr Return on Investment
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Unsere IT-Lösungen zahlen sich bereits nach wenigen Monaten aus. 
                  Sehen Sie die typische ROI-Entwicklung unserer Kunden.
                </p>
              </div>

              {/* Mobile Stats First */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:hidden">
                
                <div className="text-center p-6 bg-black/30 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    6 Monate
                  </div>
                  <p className="text-gray-400">Durchschnittliche Break-even Zeit</p>
                </div>

                <div className="text-center p-6 bg-black/30 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    350%
                  </div>
                  <p className="text-gray-400">ROI nach 24 Monaten</p>
                </div>

                <div className="text-center p-6 bg-black/30 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    €50k+
                  </div>
                  <p className="text-gray-400">Durchschnittliche Kosteneinsparung</p>
                </div>

              </div>

              {/* Desktop Graph Container */}
              <div className="relative bg-black/30 rounded-xl p-8 border border-gray-700 hidden md:block">
                
                {/* Y-Axis Labels */}
                <div className="absolute left-2 top-8 bottom-8 flex flex-col justify-between text-sm text-gray-400">
                  <span>400%</span>
                  <span>300%</span>
                  <span>200%</span>
                  <span>100%</span>
                  <span>0%</span>
                  <span>-100%</span>
                </div>

                {/* Graph Area */}
                <div className="ml-16 mr-8 relative h-80">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="border-t border-gray-700/50"></div>
                    ))}
                  </div>

                  {/* ROI Curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
                    <defs>
                      <linearGradient id="roiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="20%" stopColor="#f97316" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="60%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="roiFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Fill Area */}
                    <path
                      d="M 0 240 Q 50 260 80 220 Q 120 180 160 160 Q 200 140 240 120 Q 280 100 320 80 Q 360 60 400 40 L 400 320 L 0 320 Z"
                      fill="url(#roiFill)"
                    />
                    
                    {/* ROI Line */}
                    <path
                      d="M 0 240 Q 50 260 80 220 Q 120 180 160 160 Q 200 140 240 120 Q 280 100 320 80 Q 360 60 400 40"
                      stroke="url(#roiGradient)"
                      strokeWidth="4"
                      fill="none"
                      className="drop-shadow-lg"
                    />

                    {/* Data Points */}
                    <circle cx="0" cy="240" r="4" fill="#ef4444" className="drop-shadow-lg" />
                    <circle cx="80" cy="220" r="4" fill="#f97316" className="drop-shadow-lg" />
                    <circle cx="160" cy="160" r="4" fill="#eab308" className="drop-shadow-lg" />
                    <circle cx="240" cy="120" r="4" fill="#22c55e" className="drop-shadow-lg" />
                    <circle cx="320" cy="80" r="4" fill="#3b82f6" className="drop-shadow-lg" />
                    <circle cx="400" cy="40" r="4" fill="#3b82f6" className="drop-shadow-lg" />
                  </svg>

                  {/* Break-even Line */}
                  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-yellow-400/60"></div>
                  <div className="absolute top-1/2 right-0 text-yellow-400 text-sm font-semibold">
                    Break-even
                  </div>
                </div>

                {/* X-Axis Labels */}
                <div className="ml-16 mr-8 mt-4 flex justify-between text-sm text-gray-400">
                  <span>Start</span>
                  <span>3 Mon</span>
                  <span>6 Mon</span>
                  <span>12 Mon</span>
                  <span>18 Mon</span>
                  <span>24 Mon</span>
                </div>
              </div>

              {/* Mobile Simple Progress Bar */}
              <div className="md:hidden mb-8">
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 text-center text-white">
                    ROI-Entwicklung über 24 Monate
                  </h3>
                  
                  {/* Timeline Steps */}
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-red-400">Start</div>
                        <div className="text-sm text-gray-400">Investition</div>
                      </div>
                      <div className="text-2xl font-bold text-red-400">-100%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-yellow-400">6 Monate</div>
                        <div className="text-sm text-gray-400">Break-even</div>
                      </div>
                      <div className="text-2xl font-bold text-yellow-400">0%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-green-400">12 Monate</div>
                        <div className="text-sm text-gray-400">Erste Gewinne</div>
                      </div>
                      <div className="text-2xl font-bold text-green-400">+150%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-blue-400">24 Monate</div>
                        <div className="text-sm text-gray-400">Voller ROI</div>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">+350%</div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Desktop Stats Row */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 mt-12">
                
                <div className="text-center group">
                  <div className="text-3xl font-bold mb-2 text-white">
                    6 Monate
                  </div>
                  <p className="text-gray-400">Durchschnittliche Break-even Zeit</p>
                </div>

                <div className="text-center group">
                  <div className="text-3xl font-bold mb-2 text-white">
                    350%
                  </div>
                  <p className="text-gray-400">ROI nach 24 Monaten</p>
                </div>

                <div className="text-center group">
                  <div className="text-3xl font-bold mb-2 text-white">
                    €50k+
                  </div>
                  <p className="text-gray-400">Durchschnittliche Kosteneinsparung</p>
                </div>

              </div>
            </div>
          </div>
        </section>
                    <GoogleReviewsSection />
        {/* About Me Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Aber wer bin ich eigentlich?
              </h2>
            </div>

            {/* About Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-blue-500/50 transition-all duration-500 scroll-animate">
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left: Content */}
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">
                        Fachinformatiker & Entwickler
                      </h3>
                      <p className="text-xl text-gray-300">Sefkan Saka</p>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Ich bin <span className="text-blue-400 font-semibold">Sefkan</span> und sitze schon seit meiner Jugend leidenschaftlich am PC. 
                        Was als Hobby begann, wurde zu meiner <span className="text-purple-400 font-semibold">Berufung</span>.
                      </p>
                      
                      <p>
                        <span className="text-blue-400 font-semibold">2017</span> startete ich meine Ausbildung als Fachinformatiker für Systemintegration 
                        beim Krankenhausverbund KKLE. Dort entwickelte ich mich vom einfachen Hardware-Support zu 
                        <span className="text-purple-400 font-semibold"> komplexen IT-Projekten</span>.
                      </p>
                      
                      <p>
                        Seit <span className="text-blue-400 font-semibold">2022</span> studiere ich dual Verwaltungsinformatik für das Land NRW beim LZPD. 
                        Parallel habe ich mich in <span className="text-purple-400 font-semibold">JavaScript, Webentwicklung, Docker und Containerisierung</span> spezialisiert.
                      </p>
                      
                      <p>
                        <span className="text-blue-400 font-semibold">2025</span> machte ich mich selbständig mit einem klaren Ziel: 
                        <span className="text-white font-semibold"> Unternehmen dabei zu helfen, ihre Arbeitsabläufe durch moderne IT-Lösungen effizienter zu gestalten.</span>
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 text-sm font-medium">
                        Systemintegration
                      </span>
                      <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/50 rounded-lg text-purple-400 text-sm font-medium">
                        Webentwicklung
                      </span>
                      <span className="px-4 py-2 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-sm font-medium">
                        Docker & Container
                      </span>
                      <span className="px-4 py-2 bg-orange-600/20 border border-orange-600/50 rounded-lg text-orange-400 text-sm font-medium">
                        KI-Entwicklung
                      </span>
                    </div>

                  </div>
                </div>

                {/* Right: Profile Image */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <div className="relative">
                      {/* Replaced img with Image component or placeholder */}
                      <div 
                        className="w-80 h-96 bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center text-gray-400"
                      >
                        {/* Placeholder für Profilbild */}
                        <span>Sefkan Saka</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quote */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl font-medium text-gray-300 italic mb-4">
                    &ldquo;Wenn ich etwas mache, dann richtig. Mein Ziel ist es nicht nur IT-Lösungen zu verkaufen, 
                    sondern <span className="text-blue-400 font-semibold">echten Mehrwert</span> für Ihr Unternehmen zu schaffen.&rdquo;
                  </p>
                  <cite className="text-lg font-semibold text-white">
                    — Sefkan Saka
                  </cite>
                </blockquote>
              </div>

            </div>
          </div>
        </section>
    {/* FAQ Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-300">
                Antworten auf die wichtigsten Fragen zu unseren IT-Services
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4 scroll-animate">
              
              {/* FAQ Item 1 */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const content = document.getElementById('faq-1');
                    const icon = document.getElementById('faq-icon-1');
                    if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                      content.style.maxHeight = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                    } else {
                      content.style.maxHeight = '0px';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-4">
                    Was ist Automatisierung und wie kann sie meinem Unternehmen helfen?
                  </h3>
                  <svg 
                    id="faq-icon-1" 
                    className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div 
                  id="faq-1" 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    <span className="text-blue-400 font-semibold">KI-Agenten</span> sind intelligente Software-Systeme, die selbstständig Entscheidungen treffen und lernen. 
                    Sie können als Chatbots für Kundenservice eingesetzt werden, <span className="text-purple-400 font-semibold">Voice KI</span> für Telefonsysteme 
                    oder für komplexe Datenanalyse. Der größte Vorteil: Sie arbeiten 24/7 und werden kontinuierlich besser.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const content = document.getElementById('faq-2');
                    const icon = document.getElementById('faq-icon-2');
                    if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                      content.style.maxHeight = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                    } else {
                      content.style.maxHeight = '0px';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-4">
                    Wie entwickeln Sie Websites und welche Technologien nutzen Sie?
                  </h3>
                  <svg 
                    id="faq-icon-2" 
                    className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div 
                  id="faq-2" 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Wir entwickeln moderne <span className="text-green-400 font-semibold">Websites</span> am liebsten selbst programmiert mit React und Next.js für maximale Performance. 
                    Für kleinere Projekte nutzen wir auch WordPress. Unsere <span className="text-blue-400 font-semibold">Webentwicklung</span> 
                    ist immer SEO-optimiert, mobile-first und auf Conversion ausgelegt.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const content = document.getElementById('faq-3');
                    const icon = document.getElementById('faq-icon-3');
                    if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                      content.style.maxHeight = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                    } else {
                      content.style.maxHeight = '0px';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-4">
                    Implementieren Sie Microsoft 365 und andere Cloud-Lösungen?
                  </h3>
                  <svg 
                    id="faq-icon-3" 
                    className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div 
                  id="faq-3" 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Ja, wir sind <span className="text-orange-400 font-semibold">Microsoft 365 Experten</span> und unterstützen bei Migration, Setup und Schulung. 
                    Unsere <span className="text-blue-400 font-semibold">Cloud Infrastruktur</span> Services umfassen auch AWS, Google Cloud und andere Plattformen. 
                    Wir sorgen für sichere und skalierbare Lösungen.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const content = document.getElementById('faq-4');
                    const icon = document.getElementById('faq-icon-4');
                    if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                      content.style.maxHeight = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                    } else {
                      content.style.maxHeight = '0px';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-4">
                    Können Sie auch kleinere Services übernehmen oder nur große Projekte?
                  </h3>
                  <svg 
                    id="faq-icon-4" 
                    className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div 
                  id="faq-4" 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Absolut! Von einzelnen <span className="text-orange-400 font-semibold">PC Reparaturen</span> bis hin zu komplexen Digitalisierungsprojekten - 
                    wir helfen bei allem. Unser <span className="text-blue-400 font-semibold">IT-Support</span> ist flexibel skalierbar. 
                    Auch für kleine Unternehmen in Goch, Kleve und Umgebung sind wir da.
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const content = document.getElementById('faq-5');
                    const icon = document.getElementById('faq-icon-5');
                    if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
                      content.style.maxHeight = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                    } else {
                      content.style.maxHeight = '0px';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-4">
                    Kostet eine Beratung etwas und wie läuft sie ab?
                  </h3>
                  <svg 
                    id="faq-icon-5" 
                    className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div 
                  id="faq-5" 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Nein, das Erstgespräch und die Beratung sind komplett <span className="text-green-400 font-semibold">kostenlos</span>. 
                    Wir analysieren Ihre Anforderungen, erklären mögliche Lösungsansätze und erstellen Ihnen ein transparentes Angebot. 
                    Erst wenn Sie sich für eine Zusammenarbeit entscheiden, entstehen Kosten.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}