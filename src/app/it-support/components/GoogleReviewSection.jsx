'use client'
import React, { useState, useEffect } from 'react';

const GoogleReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      image: '/review1.png',
      name: 'LeeAnasaki',
      rating: 5,
      timeAgo: 'Vor 18 Stunden',
      reviewCount: '1 Rezension',
      text: 'Da Fachleute rar gesät sind in Goch was Computerreparatur angeht war ich positiv überrascht. Rechner fuhr nicht mehr hoch und am ende war ein defekter RAM Riegel das Problem, als ich ihn hier her brachte wurde mir schnell kompetent geholfen und auch eine super Kommunikation was den Status anging. Preis würde ich persönlich als fair einstufen.',
      service: 'PC Reparatur'
    },
    {
      id: 2,
      image: '/review2.png',
      name: 'Cornelia de Witt',
      rating: 5,
      timeAgo: 'Vor 20 Stunden',
      reviewCount: '5 Rezensionen',
      text: 'Da ich mein Programm auf Windows 11 umstellen muss, hat mich Herr Saka sehr kompetent und professionell beraten. Diese erste Beratung ist kostenlos. Ich kann Herr Saka nur empfehlen, er ist freundlich und zuvorkommend',
      service: 'Windows 11 Beratung'
    },
    {
      id: 3,
      image: '/review3.png',
      name: 'Deniz Tüzün',
      rating: 5,
      timeAgo: 'Vor 2 Tagen',
      reviewCount: '1 Rezension',
      text: 'Ich bin absolut zufrieden mit der Arbeit dieser Firma! Meine Website wurde professionell, modern und genau nach meinen Vorstellungen erstellt. Besonders positiv fand ich die klare Kommunikation, die schnelle Umsetzung und die vielen hilfreichen Tipps, die ich während des Prozesses bekommen habe. Alles lief reibungslos und zuverlässig – vom ersten Gespräch bis zur Fertigstellung. Ich kann die Firma jedem empfehlen, der eine professionelle Website benötigt. Vielen Dank für die großartige Zusammenarbeit!',
      service: 'Webdesign'
    },
    {
      id: 4,
      image: '/review4.png',
      name: 'Klaus Vienken',
      rating: 5,
      timeAgo: 'Vor 11 Wochen',
      reviewCount: '3 Rezensionen',
      text: 'Der Hr. Saka hat mir dabei geholfen die Alt-Daten von meinem alten Notebook auf meinen neuen zu übertragen. Danke, bin sehr zufrieden. !',
      service: 'Datenübertragung'
    }
  ];

  const itemsPerSlide = {
    desktop: 2,
    mobile: 1
  };

  const maxSlides = Math.ceil(reviews.length / itemsPerSlide.desktop);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <svg className="w-8 h-8 text-blue-400 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Google Rezensionen
            </h2>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-3 text-2xl font-bold text-white">5.0</span>
              <span className="ml-2 text-gray-400">von 5 Sternen</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Das sagen unsere zufriedenen Kunden über unsere IT-Dienstleistungen
          </p>
        </div>

        {/* Reviews Slider Container */}
        <div className="relative">
          
          {/* Reviews Grid */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 px-4">
                    {reviews
                      .slice(slideIndex * itemsPerSlide.desktop, (slideIndex + 1) * itemsPerSlide.desktop)
                      .map((review, index) => (
                        <div
                          key={review.id}
                          className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                          style={{
                            animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`
                          }}
                        >
                          
                          {/* Review Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                                review.name === 'LeeAnasaki' ? 'bg-red-600' :
                                review.name === 'Cornelia de Witt' ? 'bg-orange-600' :
                                review.name === 'Deniz Tüzün' ? 'bg-purple-600' :
                                'bg-pink-600'
                              }`}>
                                {review.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <h4 className="font-semibold text-blue-400 text-lg">{review.name}</h4>
                                <p className="text-gray-400 text-sm">{review.reviewCount} • 0 Fotos</p>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center mb-1">
                                {renderStars(review.rating)}
                              </div>
                              <div className="flex items-center text-sm text-gray-400">
                                <span>{review.timeAgo}</span>
                                <span className="ml-2 bg-gray-700 px-2 py-1 rounded text-xs">NEU</span>
                              </div>
                            </div>
                          </div>

                          {/* Review Content */}
                          <div className="mb-6">
                            <p className="text-gray-300 leading-relaxed text-base">
                              {review.text}
                            </p>
                          </div>

                          {/* Service Tag */}
                          <div className="mb-4">
                            <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                              {review.service}
                            </span>
                          </div>

                          {/* Google Business Response */}
                          <div className="border-t border-gray-700 pt-4">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                              </div>
                              <div className="ml-3">
                                <p className="text-blue-400 font-semibold text-sm">Saka IT-Solutions</p>
                                <p className="text-gray-500 text-xs">Inhaber</p>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {review.name === 'LeeAnasaki' ? 'Vielen Dank für die netten Worte!' :
                               review.name === 'Cornelia de Witt' ? 'Vielen Danke, immer wieder gerne!' :
                               review.name === 'Klaus Vienken' ? '' : ''}
                            </p>
                          </div>

                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Werden Sie unser nächster zufriedener Kunde
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Qualität und unserem Service. 
            Erste Beratung ist kostenlos!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
            Kostenlose Beratung anfragen
          </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default GoogleReviewsSection;