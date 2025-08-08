import { ArrowLeft, Globe, Zap, Cloud, Palette, ShoppingCart, BarChart3, Star, Check, ArrowRight, Gauge, Shield, Users, Code, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function WebentoPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Constructor IA Revolucionario",
      description: "Clona cualquier sitio web con solo pegar una URL. La IA recrea diseño y contenido automáticamente."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Hosting Google Cloud Premium",
      description: "Infraestructura de nivel empresarial con 99.9% uptime garantizado y escalabilidad automática."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "PageSpeed 90+ Automático",
      description: "Optimización automática que garantiza puntuaciones de PageSpeed superiores a 90 sin configuración."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Elementor Pro Incluido",
      description: "Editor drag-and-drop profesional con widgets premium y plantillas avanzadas."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce WooCommerce",
      description: "Tienda online completa con pasarelas de pago, inventario y gestión de pedidos."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics y SEO Automático",
      description: "Optimización SEO automática y herramientas de análisis integradas para máximo rendimiento."
    }
  ];

  const useCases = [
    {
      industry: "Agencias Web",
      title: "Desarrollo Ultra-Rápido",
      description: "Crea sitios profesionales para clientes en minutos, no semanas",
      workflow: "Cliente muestra sitio que le gusta → WEBENTO lo clona con IA → Personalización con Elementor → Entrega en 24h",
      benefits: ["10x más rápido que desarrollo tradicional", "Márgenes de ganancia superiores", "Clientes más satisfechos"]
    },
    {
      industry: "E-commerce",
      title: "Tiendas Optimizadas",
      description: "Stores con conversión máxima y PageSpeed perfecto",
      workflow: "Selecciona nicho → IA crea tienda optimizada → Importa productos → Configura pagos → Lanza en Google Cloud",
      benefits: ["Conversión 40% superior", "SEO optimizado desde día 1", "Escalabilidad automática"]
    },
    {
      industry: "Corporativo",
      title: "Presencia Digital Profesional",
      description: "Sitios empresariales con imagen premium y performance máximo",
      workflow: "Define objetivos → IA genera estructura → Personaliza contenido → Integra sistemas → Deploy automático",
      benefits: ["Imagen corporativa premium", "Integración con sistemas existentes", "Seguridad empresarial"]
    },
    {
      industry: "Freelancers",
      title: "Portfolio y Servicios",
      description: "Presencia online profesional que convierte visitantes en clientes",
      workflow: "Elige plantilla de tu industria → IA optimiza para tu nicho → Agrega portfolio → Conecta formularios → Publica",
      benefits: ["Más leads calificados", "Imagen profesional", "Gestión simplificada"]
    }
  ];

  const techFeatures = [
    "WordPress optimizado",
    "CDN global integrado",
    "SSL automático",
    "Backups diarios automáticos",
    "Migración con 1 clic",
    "Staging environment",
    "Monitoreo 24/7",
    "Actualizaciones automáticas",
    "Cache inteligente",
    "Compresión de imágenes",
    "Minificación automática",
    "Base de datos optimizada"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20">
                  <Globe className="w-12 h-12 text-orange-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">WEBENTO</h1>
                  <p className="text-xl text-white/60">Websites con IA</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                El constructor que revoluciona cómo se crean sitios web profesionales
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                WEBENTO utiliza IA avanzada para clonar cualquier sitio web y recrearlo con tu contenido. 
                Hosting premium en Google Cloud, PageSpeed 90+ garantizado y Elementor Pro incluido.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Ver IA en Acción
                </Button>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Solitario</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">$9/mes</p>
                </div>
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Agencia</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">$99/mes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20">
                {/* AI Website Builder Demo */}
                <div className="bg-black/80 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Zap className="w-6 h-6 text-orange-400" />
                    <span className="text-white font-medium">IA Constructor</span>
                    <Badge className="bg-orange-400/20 text-orange-400 text-xs">CLONANDO</Badge>
                  </div>
                  
                  {/* URL Input Simulation */}
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-orange-400" />
                      <input 
                        type="text" 
                        className="bg-transparent text-white flex-1 outline-none"
                        placeholder="https://sitio-que-te-gusta.com"
                        value="https://apple.com"
                        readOnly
                      />
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs px-3 py-1">Clonar</Button>
                    </div>
                  </div>
                  
                  {/* Progress Simulation */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Analizando estructura del sitio...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Extrayendo elementos de diseño...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-yellow-400 text-sm">Recreando con tu contenido...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-400 text-sm">Optimizando para PageSpeed 90+...</span>
                    </div>
                  </div>
                </div>

                {/* Performance Indicators */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <Gauge className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <span className="text-green-400 text-xs font-bold">95</span>
                    <br />
                    <span className="text-white/80 text-xs">PageSpeed</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <Cloud className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <span className="text-blue-400 text-xs font-bold">99.9%</span>
                    <br />
                    <span className="text-white/80 text-xs">Uptime</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <Shield className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <span className="text-purple-400 text-xs font-bold">SSL</span>
                    <br />
                    <span className="text-white/80 text-xs">Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">Tecnología de Vanguardia</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              La combinación perfecta de IA avanzada e infraestructura empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-orange-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-white text-center">{feature.title}</h4>
                  <p className="text-white/70 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">Infraestructura Premium Incluida</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Todo lo que necesitas para un sitio web de nivel empresarial, sin configuración complicada
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center hover:bg-gray-700/90 transition-colors group">
                <Code className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">Casos de Éxito por Industria</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ve cómo WEBENTO está transformando la creación de sitios web en diferentes sectores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30">
                      {useCase.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg text-white/60">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-6">
                    <h5 className="font-semibold text-white mb-3">Proceso automatizado:</h5>
                    <p className="text-white/80 leading-relaxed">{useCase.workflow}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-3">Resultados comprobados:</h5>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">Todo lo que Incluye WEBENTO</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Plan Solitario - $9/mes</h4>
              <ul className="space-y-4">
                {[
                  "1 sitio web incluido",
                  "Constructor IA para clonar sitios",
                  "Hosting Google Cloud (10GB)",
                  "SSL automático",
                  "PageSpeed 90+ garantizado",
                  "Elementor Pro básico",
                  "Backups semanales",
                  "Soporte por email"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Plan Agencia - $99/mes</h4>
              <ul className="space-y-4">
                {[
                  "Todo lo del plan Solitario",
                  "10 sitios web incluidos",
                  "Hosting ilimitado en Google Cloud",
                  "Elementor Pro completo + widgets premium",
                  "WooCommerce e-commerce completo",
                  "White-label completo",
                  "Colaboración en equipo",
                  "Migración automática",
                  "Staging environments",
                  "Backups diarios automáticos",
                  "Monitoreo 24/7",
                  "Soporte prioritario"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            El futuro de la creación web está aquí
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            No más esperas, no más complicaciones. Crea sitios web profesionales en minutos con la potencia de la IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-10 py-5">
              Crear mi Sitio Web
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 text-lg px-10 py-5">
              Ver IA Clonando
            </Button>
          </div>

          <p className="text-white/60 mt-6">
            * Requiere plan Advento Inicio activo
          </p>
        </div>
      </section>
    </div>
  );
}
