'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { CartIcon } from './cart-icon'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-[100000] px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-400 rounded flex items-center justify-center">
            <span className="text-slate-900 font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-semibold">Advento</span>
        </Link>

        {/* Desktop Navigation - Simplified */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
            Inicio
          </Link>
          
          <Link href="/ppp" className="text-gray-300 hover:text-white transition-colors">
            PPP
          </Link>
          
          <Link href="/registro" className="text-gray-300 hover:text-white transition-colors">
            Registro
          </Link>
        </div>

        {/* Cart and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <CartIcon />
          <Link href="/registro">
            <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-200">
              Empezar Ahora
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4 mt-4">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
              Inicio
            </Link>
            
            <Link href="/ppp" className="text-white hover:text-yellow-400 transition-colors">
              PPP
            </Link>
            
            <Link href="/registro" className="text-white hover:text-yellow-400 transition-colors">
              Registro
            </Link>

            <div className="flex items-center space-x-4 pt-4">
              <CartIcon />
              <Link href="/registro">
                <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-200">
                  Empezar Ahora
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
