'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed z-50 transition-all duration-500 ${
      isScrolled
        ? 'top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl md:rounded-2xl border border-black/10'
        : 'top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.15em] md:tracking-[0.2em] hover:opacity-70 transition-opacity">
            ERYBYERI .
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <Link
              href="/"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
            >
              Sobre
            </Link>
            <Link
              href="/produtos"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
            >
              Produtos
            </Link>
            <Link
              href="/contato"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pt-4 border-t border-black/5">
            <Link
              href="/"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/produtos"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="/contato"
              className="text-sm font-light tracking-wider hover:text-gray-500 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
