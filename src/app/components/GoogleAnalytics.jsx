// src/app/components/GoogleAnalytics.jsx - DSGVO-konforme Version
'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-95VLJG7LJ1'

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Prüfe Cookie-Consent beim Laden
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      if (consent) {
        const consentData = JSON.parse(consent)
        setHasConsent(consentData.analytics === true)
      }
    }

    checkConsent()

    // Höre auf Storage-Änderungen (wenn User Consent ändert)
    const handleStorageChange = () => {
      checkConsent()
    }

    window.addEventListener('storage', handleStorageChange)

    // Custom Event für lokale Consent-Änderungen
    const handleConsentChange = (event) => {
      setHasConsent(event.detail.analytics === true)
    }

    window.addEventListener('consentChanged', handleConsentChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('consentChanged', handleConsentChange)
    }
  }, [])

  // Nur laden wenn Consent gegeben wurde
  if (!hasConsent) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'samesite=strict;secure'
          });
        `}
      </Script>
    </>
  )
}