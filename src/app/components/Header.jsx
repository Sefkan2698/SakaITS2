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
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 backdrop-blur-sm bg-black/90 ">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          <a href="/">SakaITS</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/ki-agenten" className="hover:text-blue-400 transition-colors duration-300">KI-Agenten</a>
          <a href="/webdesign" className="hover:text-blue-400 transition-colors duration-300">Webdesign</a>
          <a href="/it-support" className="hover:text-blue-400 transition-colors duration-300">IT-Support</a>
        </div>
        
        {/* Desktop CTA Button */}
        <a href="/kontakt" className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
          Projektanfrage
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden relative z-20 bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a href="/ki-agenten" className="block py-2 hover:text-blue-400 transition-colors duration-300">KI-Agenten</a>
            <a href="/webdesign" className="block py-2 hover:text-blue-400 transition-colors duration-300">Webdesign</a>
            <a href="/it-support" className="block py-2 hover:text-blue-400 transition-colors duration-300">IT-Support</a>
            <a href="/kontakt" className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 block text-center">
              Projektanfrage
            </a>
          </div>
        </div>
      )}
    </>
  )
}