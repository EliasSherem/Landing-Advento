import { ArrowLeft, Bot, MessageSquare, Workflow, TestTube, Palette, BarChart3, Star, Check, ArrowRight, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function BotentoPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Constructor Drag-n-Drop",
      description: "Interfaz visual intuitiva para crear flujos complejos sin escribir código."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multi-Canal Automático",
      description: "Messenger, Instagram, WhatsApp, SMS y Email desde una sola plataforma."
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing A/B Avanzado",
      description: "Prueba diferentes flujos automáticamente y optimiza conversiones."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "50+ Integraciones",
      description: "Conecta con CRM, e-commerce, analytics y herramientas de marketing."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Segmentación Inteligente",
      description: "Audiencias automáticas basadas en comportamiento y engagement."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Plantillas Premium",
      description: "Flujos pre-construidos para diferentes industrias y objetivos."
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Recuperación de Carritos Abandonados",
      description: "Automatización completa para convertir carritos abandonados en ventas",
      flow: "Carrito abandonado → Mensaje en 1 hora → Descuento personalizado → Recordatorio en 24h → Conversión",
      results: "Hasta 35% de recuperación de carritos"
    },
    {
      industry: "Educación",
      title: "Onboarding de Estudiantes",
      description: "Secuencia automática para nuevos estudiantes con contenido personalizado",
      flow: "Registro → Bienvenida → Evaluación de nivel → Contenido personalizado → Seguimiento semanal",
      results: "90% menos abandono en primeras semanas"
    },
    {
      industry: "Inmobiliario",
      title: "Calificación de Leads",
      description: "Califica automáticamente leads y programa visitas",
      flow: "Lead nuevo → Cuestionario automático → Calificación IA → Agenda visita → Seguimiento vendedor",
      results: "3x más citas calificadas"
    },
    {
      industry: "Fitness",
      title: "Retención de Miembros",
      description: "Mantén a tus miembros activos con seguimiento automatizado",
      flow: "Inactividad detectada → Check-in automático → Motivación personalizada → Oferta de clase → Re-engagement",
      results: "45% reducción en cancelaciones"
    }
  ];

  const integrations = [
    "Shopify", "WooCommerce", "HubSpot", "Salesforce", "Mailchimp", "Zapier",
    "Google Analytics", "Facebook Pixel", "Stripe", "PayPal", "Calendly", "Zoom"
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
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                  <Bot className="w-12 h-12 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">BOTENTO</h1>
                  <p className="text-xl text-white/60">Bots para automatización</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Crea flujos de automatización que convierten en Messenger, Instagram y WhatsApp
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                BOTENTO te permite construir experiencias conversacionales complejas con un editor visual. 
                Sin código, sin límites, con resultados reales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-4">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Ver Demo Interactiva
                </Button>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Solitario</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$19/mes</p>
                </div>
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Agencia</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$119/mes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
                {/* Visual Flow Builder */}
                <div className="bg-black/80 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Workflow className="w-5 h-5 mr-2 text-purple-400" />
                    Constructor Visual
                  </h4>
                  
                  <div className="space-y-4">
                    {/* Trigger */}
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="bg-green-400/20 border border-green-400/30 rounded-lg px-3 py-2 flex-1">
                        <span className="text-green-400 text-sm font-medium">Nuevo mensaje Instagram</span>
                      </div>
                    </div>
                    
                    {/* Condition */}
                    <div className="ml-6 border-l-2 border-white/20 pl-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg px-3 py-2 flex-1">
                          <span className="text-yellow-400 text-sm font-medium">¿Es primera vez?</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="ml-12 border-l-2 border-white/20 pl-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="bg-blue-400/20 border border-blue-400/30 rounded-lg px-3 py-2 flex-1">
                          <span className="text-blue-400 text-sm font-medium">Enviar bienvenida</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <div className="bg-purple-400/20 border border-purple-400/30 rounded-lg px-3 py-2 flex-1">
                          <span className="text-purple-400 text-sm font-medium">Agregar a secuencia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi-Platform */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center">
                    <Instagram className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                    <span className="text-white/80 text-sm">Instagram</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center">
                    <Facebook className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-white/80 text-sm">Messenger</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center">
                    <Send className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <span className="text-white/80 text-sm">WhatsApp</span>
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Herramientas Profesionales</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Todo lo que necesitas para crear automatizaciones que realmente convierten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-purple-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
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

      {/* Use Cases by Industry */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Casos de Éxito por Industria</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ve cómo diferentes industrias están usando BOTENTO para crecer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
                      {useCase.industry}
                    </Badge>
                    <span className="text-green-400 font-semibold">{useCase.results}</span>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg text-white/60">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-6">
                    <h5 className="font-semibold text-white mb-3">Flujo automático:</h5>
                    <p className="text-white/80 leading-relaxed mb-4">{useCase.flow}</p>
                    <div className="text-sm text-green-400 font-medium">
                      📈 Resultado: {useCase.results}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">50+ Integraciones Nativas</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Conecta BOTENTO con todas las herramientas que ya usas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center hover:bg-gray-700/90 transition-colors">
                <span className="text-white/80 font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Todo lo que Incluye BOTENTO</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Plan Solitario - $19/mes</h4>
              <ul className="space-y-4">
                {[
                  "Constructor visual sin código",
                  "Hasta 3 plataformas conectadas",
                  "1,000 contactos incluidos",
                  "5 flujos automáticos activos",
                  "Testing A/B básico",
                  "Analytics esenciales",
                  "Plantillas pre-construidas",
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
              <h4 className="text-2xl font-bold text-white mb-6">Plan Agencia - $119/mes</h4>
              <ul className="space-y-4">
                {[
                  "Todo lo del plan Solitario",
                  "Contactos ilimitados",
                  "Flujos ilimitados",
                  "Todas las integraciones disponibles",
                  "Testing A/B avanzado",
                  "Analytics detallados + reportes",
                  "White-label completo",
                  "Multi-usuario con roles",
                  "API acceso completo",
                  "Soporte prioritario 24/7"
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
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Automatiza como un profesional
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Únete a miles de marketers que ya están viendo resultados reales con BOTENTO
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-10 py-5">
              Empezar con BOTENTO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 text-lg px-10 py-5">
              Ver Demo Live
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
