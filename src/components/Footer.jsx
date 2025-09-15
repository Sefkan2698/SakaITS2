export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SakaITS
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professionelle IT-Lösungen für Unternehmen in Goch, Kleve und ganz NRW. 
              Von Automatisierungen über KI-Agenten bis hin zur modernen Webentwicklung - 
              alles aus einer Hand.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>📍 Goch, Nordrhein-Westfalen</p>
              <p>📞 +49 (0) 1741928943</p>
              <p>✉️ sefkansaka@sakaits.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/automatisierungen" className="hover:text-blue-400 transition-colors">
                  Automatisierungen
                </a>
              </li>
              <li>
                <a href="/ki-agenten" className="hover:text-blue-400 transition-colors">
                  KI-Agenten
                </a>
              </li>
              <li>
                <a href="/webdesign" className="hover:text-blue-400 transition-colors">
                  Webentwicklung
                </a>
              </li>
              <li>
                <a href="/it-support" className="hover:text-blue-400 transition-colors">
                  IT-Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/impressum" className="hover:text-blue-400 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-blue-400 transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-blue-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-semibold mb-4">Unsere Service-Regionen</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <strong className="text-blue-400">IT-Support vor Ort:</strong>
              <br />Goch, Kleve, Kamp-Lintfort, Geldern, Moers
            </div>
            <div>
              <strong className="text-green-400">Webentwicklung:</strong>
              <br />Kleve, Düsseldorf, Köln, Aachen, deutschlandweit
            </div>
            <div>
              <strong className="text-purple-400">KI & Automatisierung:</strong>
              <br />Nordrhein-Westfalen, bundesweit remote
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 SakaITS - Sefkan Saka. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</a>
          </div>
        </div>

      </div>
    </footer>
  )
}