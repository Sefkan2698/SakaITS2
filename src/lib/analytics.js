// src/lib/analytics.js
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-95VLJG7LJ1', {
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

export const trackContactClick = (contactMethod) => {
  trackEvent('contact_click', {
    contact_method: contactMethod,
  });
};

export const trackServiceClick = (serviceName) => {
  trackEvent('service_click', {
    service_name: serviceName,
  });
};

export const trackScrollToSection = (sectionName) => {
  trackEvent('scroll_to_section', {
    section_name: sectionName,
  });
};