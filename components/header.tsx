'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { CartIcon } from './cart-icon'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAddOnsOpen, setIsAddOnsOpen] = useState(false)

  const addOns = [
    { name: 'Cliento', href: '/cliento', description: 'CRM y gestión de clientes' },
    { name: 'Webento', href: '/webento', description: 'Constructor de sitios web' },
    { name: 'Contento', href: '/contento', description: 'Gestión de contenido' },
    { name: 'Botento', href: '/botento', description: 'Chatbots inteligentes' },
    { name: 'Agento', href: '/agento', description: 'Agentes de IA' }
  ]

  return (
    <header className="relative z-[100000] px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-slate-900 font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-semibold">Advento</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
            Inicio
          </Link>
          
          {/* Add-Ons Dropdown */}
          <div className="relative group">
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Add-Ons</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="absolute top-full left-0 mt-2 w-48 bg-slate-600 rounded-lg shadow-xl border border-slate-500 opacity-100 invisible group-hover:visible transition-all duration-200 z-[99999]">
              <div className="py-2">
                {addOns.map((addon) => (
                  <Link
                    key={addon.name}
                    href={addon.href}
                    className="block px-4 py-2 text-gray-200 hover:bg-slate-500 hover:text-white transition-colors"
                  >
                    {addon.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/precios" className="text-gray-300 hover:text-white transition-colors">
            Precios
          </Link>
          
          <Link href="/ppp" className="text-gray-300 hover:text-white transition-colors">
            PPP
          </Link>
        </div>

        {/* Cart and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <CartIcon />
          <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-200">
            Empezar Ahora
          </Button>
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
            
            <div>
              <button
                onClick={() => setIsAddOnsOpen(!isAddOnsOpen)}
                className="flex items-center justify-between w-full text-white hover:text-yellow-400 transition-colors"
              >
                <span>Add-Ons</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isAddOnsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAddOnsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {addOns.map((addon) => (
                    <Link
                      key={addon.name}
                      href={addon.href}
                      className="block text-gray-300 hover:text-yellow-400 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsAddOnsOpen(false)
                      }}
                    >
                      {addon.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/precios" className="text-white hover:text-yellow-400 transition-colors">
              Precios
            </Link>
            
            <Link href="/ppp" className="text-white hover:text-yellow-400 transition-colors">
              PPP
            </Link>

            <div className="flex items-center space-x-4 pt-4">
              <CartIcon />
              <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-200">
                Empezar Ahora
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
