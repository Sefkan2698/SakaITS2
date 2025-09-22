'use client'
import { useState } from 'react'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  // Fallback für den Fall, dass keine Props übergeben werden
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false)
  
  // Verwende die Props wenn vorhanden, sonst die interne State
  const isMenuOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : internalMobileMenuOpen
  const toggleMenu = setMobileMenuOpen || setInternalMobileMenuOpen
  
  return (
    <>
      {/* Navigation - Vollständig undurchsichtig mit klarem Kontrast */}
      <nav className="relative z-10 bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <a href="/">SakaITS</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/ki-agenten" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
              KI-Agenten
            </a>
            <a href="/webdesign" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
              Webdesign
            </a>
            <a href="/it-support" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
              IT-Support
            </a>
          </div>
          
          {/* Desktop CTA Button */}
          <a href="/kontakt" className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-white font-semibold">
            Projektanfrage
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Improved */}
      {isMenuOpen && (
        <div className="md:hidden relative z-20 bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="px-6 py-4 space-y-4 max-w-6xl mx-auto">
            <a href="/ki-agenten" className="block py-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium border-b border-gray-800">
              KI-Agenten
            </a>
            <a href="/webdesign" className="block py-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium border-b border-gray-800">
              Webdesign
            </a>
            <a href="/it-support" className="block py-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium border-b border-gray-800">
              IT-Support
            </a>
            <a href="/kontakt" className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center text-white font-semibold">
              Projektanfrage
            </a>
          </div>
        </div>
      )}
    </>
  )
}