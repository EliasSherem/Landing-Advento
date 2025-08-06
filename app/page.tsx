import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, Hand } from 'lucide-react'
import Link from "next/link"

export default function AdventoLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-8 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-60 right-40 w-5 h-5 bg-teal-400 rounded-full opacity-30"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-cyan-300 rounded-full opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold">Advento</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
              Inicio
            </Link>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Add-Ons</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Precios
            </Link>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-200">
            Empezar Ahora
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mr-4" />
              <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Todo tu marketing
              </span>
            </div>
            <div className="text-white mb-4">
              en un solo lugar.
            </div>
            <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bienvenido a Advento.
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            ADVENTO es una suite modular de herramientas inteligentes para agencias y negocios
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-200 px-8 py-4 text-lg"
            >
              <Hand className="w-5 h-5 mr-2" />
              Empieza ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200 px-8 py-4 text-lg"
            >
              Descubre más planes
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
