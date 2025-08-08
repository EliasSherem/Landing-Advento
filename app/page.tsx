import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, Hand, MessageCircle, Store, Users, Zap, ArrowRight, Globe, Megaphone, Star, Settings, Package, Cog, Rocket, Shield, TrendingUp, Palette } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"

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
      <Header />

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
            <Link href="/registro">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-200 px-8 py-4 text-lg"
              >
                <Hand className="w-5 h-5 mr-2" />
                Empieza ahora
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white px-8 py-4 text-lg"
            >
              Ver planes
            </Button>
          </div>
        </div>
      </main>

      {/* Pricing Section */}
      <section className="relative z-10 px-6 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">¿Qué es </span>
              <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Advento Starter
              </span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advento Starter es tu plataforma de automatización de campañas con IA en white-label para agencias, totalmente marcada con tu marca y dominio.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Solitario Plan */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 transition-all duration-300 hover:border-2 hover:border-cyan-400 border-2 border-transparent hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Solitario</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  $49
                </span>
                <span className="text-gray-500 ml-2">USD/mes</span>
              </div>
              <p className="text-gray-600 mb-8">
                Ideal para freelancers y creadores individuales
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Automatización IA Meta, Google, YouTube, TikTok</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Creación de anuncios con IA y A/B testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Biblioteca Shutterstock integrada</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Editor creativo avanzado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Tu propia marca personalizada</span>
                </li>
              </ul>
            </div>

            {/* Agencia Plan */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 relative border-2 border-transparent transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-105">
              {/* Popular Badge */}
              <div className="absolute -top-3 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Agencia</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  $449
                </span>
                <span className="text-gray-500 ml-2">USD/mes</span>
              </div>
              <p className="text-gray-600 mb-8">
                <span className="font-semibold">Solución White-Label</span> para agencias
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Todo del plan Solitario</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Usuarios ilimitados con roles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Control total de client workspaces</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Branding 100% personalizado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Integraciones avanzadas (Stripe, CRM)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Características clave */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Características clave
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Lanza campañas en 3 clicks
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Conecta Google, TikTok y Facebook Ads
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Obtén ideas de anuncios virales al instante
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Analítica sencilla sin paneles complicados
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Investiga audiencias y palabras clave en segundos
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Planeación de contenido automatizado
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Optimización automática para mejor rendimiento
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Interfaz minimalista estilo Apple, cero curva de aprendizaje
                </p>
              </div>
            </div>
          </div>

          {/* Casos de uso */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Casos de uso
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-3">
                  Freelancers
                </h3>
                <p className="text-gray-600 text-sm">
                  Campañas personales eficientes
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-3">
                  Agencias
                </h3>
                <p className="text-gray-600 text-sm">
                  Gestión de múltiples clientes
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-3">
                  E-commerce
                </h3>
                <p className="text-gray-600 text-sm">
                  Automatización de ventas
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-3">
                  Servicios locales
                </h3>
                <p className="text-gray-600 text-sm">
                  Local Services Ads optimizados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="relative z-10 px-6 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-yellow-400">Nuestros </span>
              <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                Add-Ons
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Cada herramienta ha sido cuidadosamente seleccionada para complementar tu stack de marketing.
            </p>
            
            <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent mb-16">
              Clientes ilimitados para agencias.
            </p>
          </div>

          {/* Add-On Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CUENTO Card */}
            <div className="bg-blue-100 rounded-3xl p-8 text-black transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">CLIENTO</h3>
                  <p className="text-gray-700">Chat IA + QR</p>
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">
                Crea chatbots IA y flujos de atención sin código. QR codes, Google Calendar y webhooks.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Chatbot IA avanzado</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Flujos sin código</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-blue-500 mr-3" />
                  <span>QR codes dinámicos</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Webhooks CRM</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Solitario</p>
                  <span className="text-2xl font-bold text-blue-600">$29/mes</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Agencia</p>
                  <span className="text-2xl font-bold text-blue-600">$129/mes</span>
                </div>
              </div>
              
              <Link href="/cliento">
                <Button className="w-full bg-slate-800 text-white hover:bg-slate-700 py-3">
                  <span className="mr-2">Explorar CLIENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* BOTENTO Card */}
            <div className="bg-pink-100 rounded-3xl p-8 text-black transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-200 rounded-2xl flex items-center justify-center mr-4">
                  <Store className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">BOTENTO</h3>
                  <p className="text-gray-700">Constructor Visual</p>
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">
                Constructor de páginas de destino para cada de tus anuncios. Pre-diseños y IA integrada.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-pink-500 mr-3" />
                  <span>Constructor visual</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-pink-500 mr-3" />
                  <span>Templates premium</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-pink-500 mr-3" />
                  <span>IA integrada</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-pink-500 mr-3" />
                  <span>A/B testing</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Solitario</p>
                  <span className="text-2xl font-bold text-pink-600">$19/mes</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Agencia</p>
                  <span className="text-2xl font-bold text-pink-600">$119/mes</span>
                </div>
              </div>
              
              <Link href="/botento">
                <Button className="w-full bg-purple-900 text-white hover:bg-purple-800 py-3">
                  <span className="mr-2">Explorar BOTENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* AGENTO Card */}
            <div className="bg-green-100 rounded-3xl p-8 text-black transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">AGENTO</h3>
                  <p className="text-gray-700">IA Conversacional</p>
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">
                IA conversacional y agentes de IA para tu negocio. Widget personalizable y análisis avanzado.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-green-500 mr-3" />
                  <span>Agentes IA personalizados</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-green-500 mr-3" />
                  <span>Widget embebido</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-green-500 mr-3" />
                  <span>Análisis conversacional</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-green-500 mr-3" />
                  <span>Multicanal integrado</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Solitario</p>
                  <span className="text-2xl font-bold text-green-600">$19/mes</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Agencia</p>
                  <span className="text-2xl font-bold text-green-600">$119/mes</span>
                </div>
              </div>
              
              <Link href="/agento">
                <Button className="w-full bg-green-800 text-white hover:bg-green-700 py-3">
                  <span className="mr-2">Explorar AGENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Additional Add-On Cards - Centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {/* WEBENTO Card */}
            <div className="bg-orange-100 rounded-3xl p-8 text-black transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">WEBENTO</h3>
                  <p className="text-gray-700">Constructor IA</p>
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">
                Constructor IA que clona cualquier sitio. Hosting Google Cloud y PageSpeed 90+ garantizado.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-orange-500 mr-3" />
                  <span>Constructor IA avanzado</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-orange-500 mr-3" />
                  <span>Hosting Google Cloud</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-orange-500 mr-3" />
                  <span>PageSpeed 90+</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-orange-500 mr-3" />
                  <span>Elementor Pro</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Solitario</p>
                  <span className="text-2xl font-bold text-orange-600">$9/mes</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Agencia</p>
                  <span className="text-2xl font-bold text-orange-600">$99/mes</span>
                </div>
              </div>
              
              <Link href="/webento">
                <Button className="w-full bg-amber-900 text-white hover:bg-amber-800 py-3">
                  <span className="mr-2">Explorar WEBENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* CONTENTO Card */}
            <div className="bg-yellow-100 rounded-3xl p-8 text-black relative transition-all duration-300 hover:scale-105">
              {/* PLUS Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  PLUS
                </span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mr-4">
                  <Megaphone className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">CONTENTO</h3>
                  <p className="text-gray-700">Anuncios IA</p>
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">
                Creación de anuncios con IA para todas las plataformas. Optimización automática y A/B testing inteligente.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                  <span>Creación automática de anuncios</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                  <span>Multi-plataforma integrado</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                  <span>A/B testing inteligente</span>
                </li>
                <li className="flex items-center text-black">
                  <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                  <span>Optimización continua</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Solitario</p>
                  <span className="text-2xl font-bold text-yellow-600">PLUS</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Agencia</p>
                  <span className="text-2xl font-bold text-yellow-600">PLUS</span>
                </div>
              </div>
              
              <Link href="/contento">
                <Button className="w-full bg-amber-900 text-white hover:bg-amber-800 py-3">
                  <span className="mr-2">Explorar CONTENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advento PLUS CTA Section */}
      <section className="relative z-10 px-6 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-12 text-center border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400">¿Quieres TODO el Arsenal?</span>
              <Star className="w-8 h-8 text-yellow-400 ml-3" />
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Con <span className="text-yellow-400 font-semibold">Advento</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent font-semibold">PLUS</span>{' '}
              obtienes acceso a TODAS las herramientas, incluyendo CONTENTO (generador de anuncios IA) y funciones premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/registro">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-cyan-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-cyan-500 transition-all duration-200 px-8 py-4 text-lg"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Empezar Ahora
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-gray-600 text-white hover:bg-gray-500 hover:scale-103 transition-all duration-200 px-8 py-4 text-lg"
              >
                Conocer el Proceso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advento PLUS Info Section */}
      <section className="relative z-10 px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-black">Advento </span> 
              <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                PLUS
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La suscripción <span className="font-semibold bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">PLUS</span> te da acceso ilimitado a todas las herramientas y funciones premium.
            </p>
          </div>

          {/* Advento PLUS Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <Package className="w-6 h-6 text-yellow-500 inline-block mr-2 align-middle" />
                Acceso a Contento
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Crea anuncios con IA para todas las plataformas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <Cog className="w-6 h-6 text-green-500 inline-block mr-2 align-middle" />
                Funciones Premium
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Desbloquea funciones avanzadas en todas las herramientas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <Rocket className="w-6 h-6 text-cyan-500 inline-block mr-2 align-middle" />
                Soporte Prioritario
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Obtén asistencia rápida y personalizada.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <Shield className="w-6 h-6 text-yellow-500 inline-block mr-2 align-middle" />
                Seguridad Avanzada
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Protección de datos y encriptación de extremo a extremo.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <TrendingUp className="w-6 h-6 text-green-500 inline-block mr-2 align-middle" />
                Analíticas Avanzadas
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Informes detallados y seguimiento del rendimiento.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                <Palette className="w-6 h-6 text-cyan-500 inline-block mr-2 align-middle" />
                Personalización Ilimitada
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Adapta la plataforma a tu marca y estilo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
