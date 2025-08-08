import { ArrowLeft, UserCheck, Brain, Database, Palette, Users, BarChart3, Star, Check, ArrowRight, MessageSquare, BookOpen, Settings, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function AgentoPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Conversacional Avanzada",
      description: "Entrenada específicamente con tu contenido y conocimiento empresarial."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Knowledge Hub Multi-Fuente",
      description: "Integra PDFs, websites, bases de datos y documentos en una IA unificada."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Widget Ultra-Personalizable",
      description: "Diseña el chat widget perfecto que se adapte a tu marca y website."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Usuario con Roles",
      description: "Equipos completos con permisos granulares y colaboración avanzada."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics en Tiempo Real",
      description: "Monitorea conversaciones, satisfacción y métricas de performance."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "SDK e Integraciones",
      description: "API completa y SDK para desarrolladores con máxima flexibilidad."
    }
  ];

  const useCases = [
    {
      industry: "Servicios Legales",
      title: "Consultas Automatizadas 24/7",
      description: "Responde preguntas legales básicas y califica leads automáticamente",
      example: "Cliente pregunta sobre divorcio → AGENTO consulta base legal → Respuesta personalizada → Agenda consulta si califica",
      benefits: ["70% reducción en consultas básicas", "5x más leads calificados", "Disponible 24/7"]
    },
    {
      industry: "Sector Médico",
      title: "Triaje Inteligente de Síntomas",
      description: "Evaluación inicial de síntomas y direccionamiento apropiado",
      example: "Paciente describe síntomas → AGENTO evalúa urgencia → Recomienda acción → Programa cita si necesario",
      benefits: ["Reduce tiempo de espera", "Mejora experiencia paciente", "Optimiza agenda médica"]
    },
    {
      industry: "Educación",
      title: "Tutor Virtual Personalizado",
      description: "Asistente educativo que adapta contenido al nivel del estudiante",
      example: "Estudiante hace pregunta → AGENTO evalúa nivel → Explica con ejemplos apropiados → Sugiere recursos adicionales",
      benefits: ["Aprendizaje personalizado", "Disponibilidad constante", "Seguimiento de progreso"]
    },
    {
      industry: "E-commerce",
      title: "Experto en Productos",
      description: "Conoce todo tu catálogo y asiste en el proceso de compra",
      example: "Cliente busca producto → AGENTO recomienda opciones → Compara características → Facilita decisión de compra",
      benefits: ["Aumenta conversión", "Reduce abandonos", "Mejora satisfacción"]
    }
  ];

  const knowledgeSources = [
    "Documentos PDF",
    "Sitios web completos",
    "Bases de datos",
    "Archivos Excel/CSV",
    "Documentos Word",
    "Presentaciones PPT",
    "Videos de YouTube",
    "APIs externas",
    "Confluence/Notion",
    "CRM data",
    "FAQs existentes",
    "Manuales técnicos"
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
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/20">
                  <UserCheck className="w-12 h-12 text-green-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">AGENTO</h1>
                  <p className="text-xl text-white/60">Agente virtual 24/7</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Tu experto virtual que nunca duerme, entrenado con todo tu conocimiento
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                AGENTO es más que un chatbot. Es tu representante digital que conoce tu negocio tan bien como tú, 
                disponible 24/7 para atender clientes con respuestas precisas y profesionales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg px-8 py-4">
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
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">$19/mes</p>
                </div>
                <div className="bg-gray-900/80 border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Plan Agencia</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">$119/mes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border border-green-500/20">
                {/* AI Conversation Demo */}
                <div className="bg-black/80 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Brain className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">AGENTO en Acción</span>
                    <Badge className="bg-green-400/20 text-green-400 text-xs">EN VIVO</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/90 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">U</div>
                        <span className="text-white/80 text-sm">Usuario</span>
                      </div>
                      <p className="text-white">¿Cuáles son sus políticas de devolución para productos electrónicos?</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-black text-sm font-bold">A</div>
                        <span className="text-green-400 text-sm">AGENTO</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                        </div>
                      </div>
                      <p className="text-white leading-relaxed">
                        Para productos electrónicos, ofrecemos devoluciones dentro de 30 días desde la compra. 
                        El producto debe estar en condiciones originales con embalaje intacto. 
                        
                        <br/><br/>
                        
                        <strong>Proceso simple:</strong><br/>
                        1. Solicita devolución en tu cuenta<br/>
                        2. Empaca el producto de forma segura<br/>
                        3. Usa la etiqueta prepagada que te enviamos<br/>
                        
                        <br/>
                        
                        ¿Te gustaría que te ayude a iniciar una devolución específica?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Knowledge Sources Indicator */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <BookOpen className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-white/80 text-xs">Políticas</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <Database className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-white/80 text-xs">Catálogo</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <MessageSquare className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-white/80 text-xs">FAQs</span>
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">IA que Realmente Entiende</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tecnología de punta para crear el asistente virtual más inteligente de tu industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-green-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
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

      {/* Knowledge Sources */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">Entrena tu IA con Cualquier Fuente</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              AGENTO puede aprender de todos tus recursos existentes para convertirse en el experto definitivo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {knowledgeSources.map((source, index) => (
              <div key={index} className="bg-gray-800/90 border border-white/20 rounded-xl p-4 text-center hover:bg-gray-700/90 transition-colors group">
                <Zap className="w-6 h-6 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 font-medium text-sm">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">Casos de Éxito Especializados</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ve cómo AGENTO se adapta perfectamente a diferentes industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                      {useCase.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg text-white/60">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-6">
                    <h5 className="font-semibold text-white mb-3">Flujo de trabajo:</h5>
                    <p className="text-white/80 leading-relaxed">{useCase.example}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-3">Beneficios comprobados:</h5>
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">Todo lo que Incluye AGENTO</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Plan Solitario - $19/mes</h4>
              <ul className="space-y-4">
                {[
                  "IA entrenada con hasta 100 documentos",
                  "Widget personalizable",
                  "Hasta 1,000 conversaciones/mes",
                  "Analytics básicos",
                  "Knowledge Hub básico",
                  "Integración web simple",
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
                  "Documentos ilimitados para entrenar IA",
                  "Conversaciones ilimitadas",
                  "Multi-usuario con roles granulares",
                  "Analytics avanzados + reportes",
                  "Widget white-label completo",
                  "API y SDK completo",
                  "Integraciones premium",
                  "Knowledge Hub avanzado",
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
          <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Tu experto digital te está esperando
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Imagina tener al mejor representante de tu empresa disponible 24/7, sin vacaciones, sin descansos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black text-lg px-10 py-5">
              Crear mi AGENTO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 text-lg px-10 py-5">
              Probar la IA
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
