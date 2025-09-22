// src/app/components/GoogleAnalytics.jsx
'use client'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-95VLJG7LJ1' // Deine echte Google Analytics ID

export default function GoogleAnalytics() {
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
          });
        `}
      </Script>
    </>
  )
}



// 4. Analytics Tracking Functions
// src/lib/analytics.js
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

// Beispiele für Event Tracking:
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName,
  });
};

export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    contact_method: 'whatsapp',
  });
};