import { ArrowLeft, Database, QrCode, Calendar, Webhook, TrendingUp, Zap, Users, Target, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function ClientoPage() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gestión de leads automatizada",
      description: "Flujos de conversación complejos y automatizados, listos en minutos, sin necesidad de saber programar"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Integración con Google Calendar",
      description: "Agenda citas automáticamente según disponibilidad"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Uso de IA (OpenAI / GPT)",
      description: "Los agentes comprenden contexto, responden con naturalidad y mejoran con el tiempo"
    },
    {
      icon: <Webhook className="w-8 h-8" />,
      title: "Webhooks y automatizaciones",
      description: "Conecta fácilmente con CRM, WhatsApp, Google Sheets y otras plataformas mediante Webhooks"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Usuarios ilimitados (para plan Agencia)",
      description: "Gestión por workspace para múltiples agentes internos o externos"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Multi-cuentas abiertas",
      description: "Puedes manejar múltiples cuentas de WhatsApp y otras redes dentro de un solo workspace"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Soporte y hosting incluidos",
      description: "Plataforma SaaS en marca blanca, con hosting propio y soporte por WhatsApp/email"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Campañas de difusión (Broadcast)",
      description: "Envío masivo segmentado (WhatsApp, email u otros canales), con análisis de rendimiento"
    }
  ];

  const useCases = [
    {
      title: "Pequeño Negocio",
      description: "QR → Lead capture → CRM → Seguimiento automático",
      example: "Una pequeña tienda imprime códigos QR en su empaque. Los clientes escanean el QR, se capturan como leads en CLIENTO. El sistema CRM los califica, agenda citas y sincroniza con Google Calendar. Todo sin código, con integración directa al pipeline de ventas."
    },
    {
      title: "Agencia de Marketing",
      description: "Gestión de múltiples clientes con pipelines automatizados",
      example: "Agencia maneja 20+ clientes → Workspace separados → Automatización personalizada → Reportes automáticos → Escalabilidad sin límites"
    },
    {
      title: "Consultoría",
      description: "Leads → Calificación IA → Agenda automática → CRM completo",
      example: "Lead llena formulario → IA califica potencial → Agenda automática según disponibilidad → Seguimiento CRM → Conversión optimizada"
    },
    {
      title: "E-commerce",
      description: "Abandono de carrito → Re-engagement → Conversión → CRM",
      example: "Cliente abandona carrito → Secuencia automática de re-engagement → Ofertas personalizadas → Recuperación de venta → Datos en CRM"
    }
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
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
                  <Database className="w-12 h-12 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">CLIENTO</h1>
                  <p className="text-xl text-white/60">CRM automatizado con IA</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                CRM con IA automatizada sin código en minutos
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Complementa tu plan Advento con esta herramienta poderosa que automatiza la gestión de leads, 
                la generación de clientes y la agenda de citas. No se requiere conocimientos técnicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-4">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Ver Demo
                </Button>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Solitario</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$29/mes</p>
                </div>
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Agencia</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$129/mes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-blue-500/20">
                <div className="bg-black/80 rounded-2xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <QrCode className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">QR Scan → Lead Capture</span>
                  </div>
                  <div className="bg-gray-800/90 rounded-lg p-4 border border-white/20">
                    <p className="text-white/80 text-sm">Una pequeña tienda imprime códigos QR en su empaque...</p>
                  </div>
                </div>
                
                <div className="bg-black/80 rounded-2xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Pipeline CRM</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 border border-green-500/20">
                      <p className="text-white text-sm">✅ Lead capturado automáticamente</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-blue-500/20">
                      <p className="text-white text-sm">🎯 IA califica potencial del cliente</p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-3 border border-cyan-500/20">
                      <p className="text-white text-sm">📅 Cita agendada en Google Calendar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Resultado</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-500/20">
                    <p className="text-white text-sm">Todo sin código, con integración directa al CRM</p>
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">✅ Características principales</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ideal para soporte 24/7, automatización de ventas o atención al cliente. Flexibilidad de integración con APIs, CRM y calendarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
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

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">🧠 Ejemplo de uso real</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Escalable para freelance o agencias con usuarios ilimitados. Plataforma completa con hosting y soporte bajo tu marca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg text-white/60">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-6">
                    <h5 className="font-semibold text-white mb-3">Flujo de automatización:</h5>
                    <p className="text-white/80 leading-relaxed">{useCase.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">Todo lo que Incluye CLIENTO</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Plan Solitario - $29/mes</h4>
              <ul className="space-y-4">
                {[
                  "CRM sin código con pipeline automatizado",
                  "QR codes para lead capture",
                  "Integración Google Calendar",
                  "Webhooks básicos para CRM",
                  "Hasta 1,000 contactos",
                  "IA para calificación de leads",
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
              <h4 className="text-2xl font-bold text-white mb-6">Plan Agencia - $129/mes</h4>
              <ul className="space-y-4">
                {[
                  "Todo del plan Solitario",
                  "Contactos ilimitados",
                  "Usuarios ilimitados con roles",
                  "Webhooks avanzados y API",
                  "White-label completo",
                  "Multi-workspace para clientes",
                  "Campañas de difusión segmentadas",
                  "Analytics avanzados de CRM"
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
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Comienza a automatizar hoy mismo
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            No se requiere conocimientos técnicos para montar flujos complejos. Únete a miles de negocios que ya automatizan su CRM con CLIENTO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-10 py-5">
              Empezar con CLIENTO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 text-lg px-10 py-5">
              Agendar Demo
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
