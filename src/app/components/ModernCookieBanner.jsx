// src/app/components/ModernCookieBanner.jsx - Vollständige Version
'use client'
import { useState, useEffect } from 'react'

export default function ModernCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Kleine Verzögerung für bessere UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      const consentData = JSON.parse(consent)
      setSettings({
        necessary: consentData.necessary,
        analytics: consentData.analytics,
        marketing: consentData.marketing
      })
    }
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
    
    setShowBanner(false)
    setShowSettings(false)
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

  if (!showBanner) return null

  return (
    <>
      {/* Modern Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-t from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-gray-700/50 shadow-2xl">
          <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🍪</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    Cookies & Datenschutz
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unseren Service zu optimieren. 
                  Sie können Ihre Präferenzen anpassen oder alle akzeptieren.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-5 py-2.5 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-gray-800/50 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Einstellungen
                </button>
                
                <button
                  onClick={acceptNecessary}
                  className="px-5 py-2.5 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-gray-800/50"
                >
                  Nur notwendige
                </button>
                
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
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
                onClick={() => setShowSettings(false)}
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