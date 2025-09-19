'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ImpressumPage() {
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Impressum
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Rechtliche Angaben gemäß § 5 TMG
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12">
              
              {/* Angaben gemäß § 5 TMG */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-semibold text-white mb-2">Sefkan Saka</p>
                  <p>Voßheiderstraße 154</p>
                  <p>47574 Goch</p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Kontakt
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium text-blue-400 w-16">Tel.:</span>
                    <a href="tel:+491741928943" className="hover:text-blue-400 transition-colors">
                      +49 1741928943
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-blue-400 w-16">E-Mail:</span>
                    <a href="mailto:sefkansaka@sakaits.com" className="hover:text-blue-400 transition-colors">
                      sefkansaka@sakaits.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Haftung für Inhalte */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Haftung für Inhalte
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Sobald uns entsprechende Rechtsverletzungen bekannt werden, entfernen wir diese Inhalte umgehend.
                  </p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Haftung für Links
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                  </p>
                  <p>
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße geprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine dauerhafte inhaltliche Kontrolle verlinkter Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung jedoch nicht zumutbar. Werden uns Rechtsverletzungen bekannt, entfernen wir derartige Links umgehend.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Urheberrecht
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p>
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht-kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechende Inhalte als solche gekennzeichnet. Sollten Sie trotzdem eine Urheberrechtsverletzung feststellen, informieren Sie uns bitte. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
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
                      Diese Mustertexte ersetzen keine individuelle Rechtsberatung. Lassen Sie sie im Zweifel von einem Fachanwalt prüfen.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fragen zum Impressum?
                </h3>
                <p className="text-gray-300 mb-6">
                  Bei Fragen oder Anregungen können Sie uns gerne kontaktieren.
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