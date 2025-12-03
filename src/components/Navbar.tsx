'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
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
        <div className={`flex justify-center items-center transition-all duration-500 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}>
          {/* Logo - centralizado */}
          <Link href="/monte-sua-bolsa" className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.15em] md:tracking-[0.2em] hover:opacity-70 transition-opacity">
            ERYBYERI .
          </Link>
        </div>
      </div>
    </nav>
  )
}
