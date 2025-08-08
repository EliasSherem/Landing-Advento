import { ArrowLeft, Megaphone, Brain, Target, Globe, BarChart3, Palette, Star, Check, ArrowRight, TrendingUp, Video, Image, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function ContentoPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Meta Ads Library IA",
      description: "Analiza 10M+ anuncios exitosos y crea variaciones basadas en los mejores performers de tu industria."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Generación Multi-Formato",
      description: "Crea imágenes, videos, carousels, historias y anuncios faceless con una sola descripción."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Traducción Automática",
      description: "Adapta tu copy a +35 idiomas con contexto cultural y optimización por mercado local."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Optimización por Plataforma",
      description: "Ajuste automático de formatos, tamaños y copy para Facebook, TikTok, Google, LinkedIn."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Testing A/B Automatizado",
      description: "Genera múltiples variaciones y prueba automáticamente para encontrar los ganadores."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Predictivos",
      description: "Predicciones de performance basadas en datos históricos y tendencias actuales."
    }
  ];

  const adFormats = [
    {
      type: "Imágenes",
      icon: <Image className="w-6 h-6" />,
      description: "Anuncios estáticos con IA",
      features: ["Diseños profesionales", "Múltiples variaciones", "Optimización automática"]
    },
    {
      type: "Videos",
      icon: <Video className="w-6 h-6" />,
      description: "Videos promocionales automáticos",
      features: ["Edición automática", "Música y efectos", "Subtítulos incluidos"]
    },
    {
      type: "Carousels",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Historias interactivas",
      features: ["Múltiples tarjetas", "CTAs optimizados", "Transiciones suaves"]
    },
    {
      type: "Faceless",
      icon: <Brain className="w-6 h-6" />,
      description: "Videos sin rostros visibles",
      features: ["Animaciones IA", "Voces sintéticas", "Textos dinámicos"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Campañas de Productos Automatizadas",
      description: "Genera anuncios para todo tu catálogo automáticamente",
      workflow: "Conecta catálogo → IA analiza productos → Genera creativos por categoría → Testing automático → Scale ganadores",
      results: ["300% más creativos en menos tiempo", "45% mejores CTR", "Reducción 60% en costo por adquisición"]
    },
    {
      industry: "Agencias",
      title: "Producción Masiva de Creativos",
      description: "Escala tu producción sin aumentar equipo creativo",
      workflow: "Brief del cliente → IA genera conceptos → Aprobación rápida → Producción automática → Entrega en 24h",
      results: ["10x más capacidad de producción", "Márgenes 80% superiores", "Clientes más satisfechos"]
    },
    {
      industry: "SaaS",
      title: "Growth Marketing Acelerado",
      description: "Testing continuo de hipótesis creativas para crecimiento",
      workflow: "Define objetivos → IA sugiere ángulos → Genera variaciones → Testing A/B automático → Optimización continua",
      results: ["5x más experimentos por mes", "Faster time-to-market", "Data-driven creative decisions"]
    },
    {
      industry: "Local Business",
      title: "Presencia Digital Profesional",
      description: "Anuncios locales que compiten con grandes marcas",
      workflow: "Analiza competencia local → Adapta mejores prácticas → Localiza copy y ofertas → Optimiza por audiencia local",
      results: ["Competir con grandes marcas", "Mayor reconocimiento local", "ROI superior"]
    }
  ];

  const languages = [
    "Español", "Inglés", "Francés", "Alemán", "Italiano", "Portugués", "Holandés", "Ruso",
    "Chino", "Japonés", "Coreano", "Árabe", "Hindi", "Polaco", "Sueco", "Danés",
    "Noruego", "Finlandés", "Checo", "Húngaro", "Rumano", "Búlgaro", "Croata", "Eslovaco",
    "Esloveno", "Estonio", "Letón", "Lituano", "Maltés", "Turco", "Griego", "Hebreo",
    "Tailandés", "Vietnamita", "Indonesio", "Malayo", "Filipino"
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
                <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/20">
                  <Megaphone className="w-12 h-12 text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">CONTENTO</h1>
                  <p className="text-xl text-white/60">Ads con IA</p>
                  <Badge className="mt-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Solo en ADVENTO PLUS
                  </Badge>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                La IA más avanzada para crear anuncios que realmente convierten
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                CONTENTO analiza millones de anuncios exitosos de Meta Ads Library y genera creativos 
                optimizados automáticamente. Con traducción a +35 idiomas y formatos para todas las plataformas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black text-lg px-8 py-4">
                  Comenzar con PLUS
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Ver IA Generando
                </Button>
              </div>

              {/* Pricing Info */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-2">Incluido en Advento PLUS:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-white/60 text-sm">PLUS Solitario</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">$99/mes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm">PLUS Agencia</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">$699/mes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-3xl p-8 border border-yellow-500/20">
                {/* AI Ad Generation Demo */}
                <div className="bg-black/80 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Brain className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">CONTENTO IA</span>
                    <Badge className="bg-yellow-400/20 text-yellow-400 text-xs">GENERANDO</Badge>
                  </div>
                  
                  {/* Input Simulation */}
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-4 mb-6">
                    <p className="text-white/80 text-sm mb-2">Descripción del producto:</p>
                    <p className="text-white">"Auriculares inalámbricos con cancelación de ruido, batería 30h, deportivos"</p>
                  </div>
                  
                  {/* Generated Ads Preview */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Video className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">Video Ad Generado</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        "🎧 ¿Cansado del ruido? Nuestros auriculares con cancelación activa te dan 30h de música pura. 
                        Perfectos para deporte y trabajo. ¡Última semana con 40% OFF!"
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Image className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">Imagen + Copy</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        "Libertad sin cables 🎵 Sumérgete en tu música favorita con la mejor tecnología de cancelación. 
                        Resistentes al agua, cómodos y con batería que dura todo el día."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multi-Platform Output */}
                <div className="mt-6 grid grid-cols-4 gap-3">
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
                    <span className="text-white/80 text-xs">Facebook</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <div className="w-6 h-6 bg-pink-500 rounded mx-auto mb-1"></div>
                    <span className="text-white/80 text-xs">TikTok</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <div className="w-6 h-6 bg-red-500 rounded mx-auto mb-1"></div>
                    <span className="text-white/80 text-xs">Google</span>
                  </div>
                  <div className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center">
                    <div className="w-6 h-6 bg-blue-600 rounded mx-auto mb-1"></div>
                    <span className="text-white/80 text-xs">LinkedIn</span>
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">IA de Última Generación</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              La tecnología más avanzada para crear anuncios que superan a la competencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-yellow-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
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

      {/* Ad Formats */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">Todos los Formatos que Necesitas</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desde imágenes estáticas hasta videos complejos, CONTENTO domina todos los formatos publicitarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adFormats.map((format, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 text-center group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-yellow-400 mb-4 flex justify-center">
                    {format.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{format.type}</h4>
                  <p className="text-white/60 text-sm mb-4">{format.description}</p>
                  <ul className="space-y-1">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-xs">✓ {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Support */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">Expande Globalmente</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Traduce y adapta tus anuncios a +35 idiomas con contexto cultural automático
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {languages.slice(0, 35).map((language, index) => (
              <div key={index} className="bg-gray-800/90 border border-white/20 rounded-lg p-3 text-center hover:bg-gray-700/90 transition-colors">
                <span className="text-white/80 text-sm">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">Casos de Éxito Reales</h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ve cómo diferentes industrias están escalando con CONTENTO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30">
                      {useCase.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg text-white/60">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/90 border border-white/20 rounded-xl p-6">
                    <h5 className="font-semibold text-white mb-3">Flujo automatizado:</h5>
                    <p className="text-white/80 leading-relaxed">{useCase.workflow}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-3">Resultados medibles:</h5>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{result}</span>
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
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">CONTENTO en Advento PLUS</h3>
            <p className="text-lg text-white/70">Acceso completo a la IA publicitaria más avanzada del mercado</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">PLUS Solitario - $99/mes</h4>
              <ul className="space-y-4">
                {[
                  "Advento Inicio completo",
                  "Todos los Add-Ons incluidos",
                  "CONTENTO: 1,000 creativos IA/mes",
                  "Traducción a todos los idiomas",
                  "Formatos básicos (imagen + video)",
                  "Testing A/B automático",
                  "Analytics básicos",
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
              <h4 className="text-2xl font-bold text-white mb-6">PLUS Agencia - $699/mes</h4>
              <ul className="space-y-4">
                {[
                  "Todo lo del PLUS Solitario",
                  "Creativos IA ilimitados",
                  "Todos los formatos disponibles",
                  "Videos faceless y carousels",
                  "Meta Ads Library completa",
                  "Analytics predictivos avanzados",
                  "White-label completo",
                  "Multi-usuario con roles",
                  "API acceso completo",
                  "Soporte prioritario 24/7",
                  "Training personalizado"
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
          <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">
            Domina el advertising con IA
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            No más bloqueos creativos. No más campañas mediocres. Con CONTENTO, cada anuncio es un potencial ganador.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black text-lg px-10 py-5">
              Acceder a CONTENTO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 text-lg px-10 py-5">
              Ver IA en Acción
            </Button>
          </div>

          <p className="text-white/60 mt-6">
            * Solo disponible en planes Advento PLUS
          </p>
        </div>
      </section>
    </div>
  );
}
