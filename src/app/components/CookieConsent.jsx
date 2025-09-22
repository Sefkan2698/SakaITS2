// 1. Cookie Consent Component
// src/app/components/CookieConsent.jsx
'use client'
import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      // Initialize analytics if consent was given
      const consentData = JSON.parse(consent)
      if (consentData.analytics) {
        initializeGA()
      }
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
    initializeGA()
  }

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const initializeGA = () => {
    // Initialize Google Analytics
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href
    })
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">🍪 Wir verwenden Cookies</h3>
              <p className="text-gray-300 text-sm">
                Diese Website verwendet Cookies, um Ihnen die beste Benutzererfahrung zu bieten. 
                Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm border border-gray-600 rounded"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm border border-gray-600 rounded"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Cookie-Einstellungen</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Notwendige Cookies</h3>
                  <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">Immer aktiv</div>
                </div>
                <p className="text-gray-300 text-sm">
                  Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Analyse-Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-300 text-sm">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Marketing-Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-300 text-sm">
                  Diese Cookies werden für personalisierte Werbung und Conversion-Tracking verwendet.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-800 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

