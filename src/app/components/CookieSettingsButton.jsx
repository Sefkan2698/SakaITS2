// src/app/components/CookieSettingsButton.jsx - Korrigierte Version
'use client'
import { useState, useEffect } from 'react'

export default function CookieSettingsButton() {
  const [showModal, setShowModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Button nur anzeigen wenn bereits Cookie-Consent vorhanden ist
    const consent = localStorage.getItem('cookie-consent')
    if (consent) {
      setIsVisible(true)
      const consentData = JSON.parse(consent)
      setSettings({
        necessary: consentData.necessary,
        analytics: consentData.analytics,
        marketing: consentData.marketing
      })
    }

    // Listen für Consent-Änderungen
    const handleConsentChange = (event) => {
      const consent = localStorage.getItem('cookie-consent')
      setIsVisible(!!consent)
      if (consent) {
        const consentData = JSON.parse(consent)
        setSettings({
          necessary: consentData.necessary,
          analytics: consentData.analytics,
          marketing: consentData.marketing
        })
      }
    }

    window.addEventListener('consentChanged', handleConsentChange)
    return () => window.removeEventListener('consentChanged', handleConsentChange)
  }, [])

  const saveConsent = (consentSettings) => {
    const consent = {
      ...consentSettings,
      timestamp: Date.now()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    
    window.dispatchEvent(new CustomEvent('consentChanged', { 
      detail: consent 
    }))
    
    setShowModal(false)
  }

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true }
    setSettings(consent)
    saveConsent(consent)
  }

  const acceptNecessary = () => {
    const consent = { necessary: true, analytics: false, marketing: false }
    setSettings(consent)
    saveConsent(consent)
  }

  const saveCustomSettings = () => {
    saveConsent(settings)
  }

  const toggleSetting = (key) => {
    if (key === 'necessary') return
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isVisible) return null

  return (
    <>
      {/* Cookie Settings Button - Fixed Bottom Left */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 left-6 z-40 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Cookie-Einstellungen ändern"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
        </svg>
        <span className="sr-only">Cookie-Einstellungen</span>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-2 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-gray-600">
            Cookie-Einstellungen
          </div>
        </div>
      </button>

      {/* Inline Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🍪</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Cookie-Einstellungen</h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Necessary Cookies */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔒</span>
                    <h3 className="text-white font-semibold text-lg">Notwendige Cookies</h3>
                  </div>
                  <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Immer aktiv
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Diese Cookies sind essentiell für die Funktionalität der Website. Sie ermöglichen grundlegende Funktionen 
                  wie Navigation und Zugriff auf sichere Bereiche und können nicht deaktiviert werden.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    <h3 className="text-white font-semibold text-lg">Analyse-Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.analytics}
                      onChange={() => toggleSetting('analytics')}
                    />
                    <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
                  </label>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Diese Cookies sammeln anonymisierte Informationen über Ihre Nutzung unserer Website (Google Analytics). 
                  Sie helfen uns, unseren Service zu verbessern, indem wir verstehen, wie Sie mit unserer Website interagieren.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📢</span>
                    <h3 className="text-white font-semibold text-lg">Marketing-Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.marketing}
                      onChange={() => toggleSetting('marketing')}
                    />
                    <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
                  </label>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Diese Cookies werden für personalisierte Werbung und Retargeting verwendet. 
                  Sie ermöglichen es uns und unseren Partnern, Ihnen relevante Anzeigen zu zeigen. (Aktuell nicht aktiv)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 font-medium"
              >
                Nur notwendige
              </button>
              <button
                onClick={saveCustomSettings}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-200 font-medium"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-500/25"
              >
                Alle akzeptieren
              </button>
            </div>

            {/* Footer Info */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-xs text-center">
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}