'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function DatenschutzPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Component */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Datenschutz-<br className="sm:hidden" />erklärung
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Transparente Informationen gem. Art. 12 ff. DSGVO
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12">
              
              {/* 1. Verantwortlicher */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Verantwortlicher
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-semibold text-white mb-4">Saka IT-Solutions</p>
                  <div className="space-y-1">
                    <p><span className="text-blue-400">Inhaber:</span> Sefkan Saka</p>
                    <p>Voßheiderstraße 154, 47574 Goch</p>
                    <p><span className="text-blue-400">Tel.:</span> <a href="tel:+491741928943" className="hover:text-blue-400 transition-colors">+49 174 192 8943</a></p>
                    <p><span className="text-blue-400">E-Mail:</span> <a href="mailto:sefkansaka@sakaits.com" className="hover:text-blue-400 transition-colors">sefkansaka@sakaits.com</a></p>
                  </div>
                </div>
              </div>

              {/* 2. Verarbeitete Daten & Zwecke */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Verarbeitete Daten & Zwecke
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">Server-Logfiles</h3>
                    <p className="text-gray-300 text-sm">
                      (IP-Adresse, Zeitstempel, Referrer) – Websitebetrieb & Sicherheit (Art. 6 Abs. 1 lit. f DSGVO)
                    </p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">Kontaktformular / E-Mail</h3>
                    <p className="text-gray-300 text-sm">
                      Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO)
                    </p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">Cookies & ähnliche Technologien</h3>
                    <p className="text-gray-300 text-sm">
                      Komfort, Statistik (Art. 6 Abs. 1 lit. a oder f DSGVO)
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Rechtsgrundlagen */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Rechtsgrundlagen
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3">
                    <span className="font-semibold text-green-400">Einwilligung</span>
                    <p className="text-gray-300 text-sm">Art. 6 Abs. 1 lit. a DSGVO</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3">
                    <span className="font-semibold text-blue-400">Vertrag / vorvertraglich</span>
                    <p className="text-gray-300 text-sm">Art. 6 Abs. 1 lit. b</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3">
                    <span className="font-semibold text-purple-400">Rechtliche Pflicht</span>
                    <p className="text-gray-300 text-sm">Art. 6 Abs. 1 lit. c</p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-3">
                    <span className="font-semibold text-orange-400">Berechtigtes Interesse</span>
                    <p className="text-gray-300 text-sm">Art. 6 Abs. 1 lit. f</p>
                  </div>
                </div>
              </div>

              {/* 4. Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Cookies
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    Wir setzen Cookies ein. Sie können die Speicherung in Ihrem Browser deaktivieren; dies kann Funktionen einschränken. Details finden Sie in unseren Cookie-Einstellungen.
                  </p>
                </div>
              </div>

              {/* 5. Eingesetzte Dienste */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Eingesetzte Dienste (Drittanbieter)
                </h2>
                
                {/* 5.1 Hosting */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="text-blue-400 mr-2">5.1</span>
                    Hosting (Namecheap & GitHub Pages)
                  </h3>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      Die Website wird von <span className="text-blue-400 font-semibold">Namecheap, Inc.</span> (USA) und <span className="text-blue-400 font-semibold">GitHub Pages</span> (GitHub, Inc., USA) gehostet. Es bestehen Auftragsverarbeitungsverträge bzw. Standardvertragsklauseln nach Art. 28 DSGVO, die ein angemessenes Datenschutzniveau sichern.
                    </p>
                  </div>
                </div>

                {/* 5.2 WhatsApp */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="text-green-400 mr-2">5.2</span>
                    Kommunikation via WhatsApp
                  </h3>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      Erst nach Klick auf den WhatsApp-Link wird eine Verbindung zu <span className="text-green-400 font-semibold">WhatsApp Ireland Ltd.</span> hergestellt. Dabei können personenbezogene Daten (z. B. IP-Adresse) an WhatsApp übertragen werden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Es gelten die WhatsApp-Datenschutzrichtlinien.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Speicherdauer */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Speicherdauer
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    Wir löschen personenbezogene Daten, sobald der Zweck entfällt oder gesetzliche Aufbewahrungsfristen enden.
                  </p>
                </div>
              </div>

              {/* 7. Ihre Rechte */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Ihre Rechte
                </h2>
                <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch (Art. 15 – 21 DSGVO) sowie ein Beschwerderecht bei einer Aufsichtsbehörde (Art. 77).
                  </p>
                  <p className="text-blue-400 font-semibold">
                    Kontakt: <a href="mailto:sefkansaka@sakaits.com" className="hover:text-blue-300 transition-colors">sefkansaka@sakaits.com</a>
                  </p>
                </div>
              </div>

              {/* 8. Automatisierte Entscheidungen */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Automatisierte Entscheidungen
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    Wir führen kein Profiling durch und treffen keine automatisierten Entscheidungen.
                  </p>
                </div>
              </div>

              {/* 9. Aktualität */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">9</span>
                  Aktualität dieser Erklärung
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-blue-400 font-semibold">Stand:</span> Juni 2025 – wir passen den Inhalt bei Bedarf an.
                  </p>
                </div>
              </div>

              {/* Rechtlicher Hinweis */}
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-2">Hinweis</h3>
                    <p className="text-gray-300 text-sm">
                      Diese Muster-Erklärung ersetzt keine individuelle Rechtsberatung.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fragen zum Datenschutz?
                </h3>
                <p className="text-gray-300 mb-6">
                  Bei Fragen zu Ihren Daten oder dieser Datenschutzerklärung kontaktieren Sie uns gerne.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/kontakt" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Kontakt aufnehmen
                  </a>
                  <a 
                    href="mailto:sefkansaka@sakaits.com"
                    className="border-2 border-blue-400 px-6 py-3 rounded-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    E-Mail senden
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Component */}
      <Footer />

      {/* WhatsApp Button Component */}
      <WhatsAppButton />
    </>
  );
}