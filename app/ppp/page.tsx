import { ArrowLeft, Globe, DollarSign, TrendingUp, Check, Heart, Users, Shield, Calculator, ArrowRight, Sparkles, Crown, Star, Award, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function PPPPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <div className="flex gap-2.5 flex-wrap mb-6">
                <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">Tecnología de primer nivel</Badge>
                <Badge className="bg-green-400/20 text-green-400 border-green-400/30">Sin experiencia técnica</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Conviertete en partner de el sistema más avanzado de marketing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Convierte el poder de la inteligencia artificial en tu negocio y genera ingresos desde el primer día con una plataforma White Label bajo tu marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 text-lg px-8 py-4">
                  Quiero mi agencia White Label
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Ver cómo funciona
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-3xl p-8 border border-yellow-500/20">
                <div className="h-96 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 relative overflow-hidden border border-white/20">
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">¿Qué vas a anunciar hoy?</h3>
                      <p className="text-white/80 text-sm">Introduzca cualquier texto para crear anuncios relevantes en más de 40 idiomas.</p>
                    </div>
                    
                    {/* Input Section */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium text-sm">AI</span>
                          <input 
                            type="text" 
                            className="bg-transparent text-white flex-1 outline-none text-sm"
                            placeholder="Describe tu producto o servicio..."
                          />
                        </div>
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Generar
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Guardado
                      </button>
                    </div>
                    
                    {/* Platform Selection */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-white text-sm">Select All</span>
                      </div>
                      <select className="bg-white/10 text-white text-sm rounded-lg px-3 py-1 border border-white/20">
                        <option>Plataforma</option>
                        <option>All</option>
                      </select>
                    </div>
                    
                                         {/* Platform Grid */}
                     <div className="grid grid-cols-3 gap-2 flex-1">
                       {[
                         { name: 'Meta', color: 'bg-blue-500', icon: 'M' },
                         { name: 'Calls', color: 'bg-blue-600', icon: 'C' },
                         { name: 'Messenger', color: 'bg-purple-500', icon: 'M' },
                         { name: 'WhatsApp', color: 'bg-green-500', icon: 'W' },
                         { name: 'Instagram', color: 'bg-gradient-to-r from-orange-400 to-pink-500', icon: 'I' },
                         { name: 'Google', color: 'bg-gradient-to-r from-blue-500 to-green-500', icon: 'G' },
                         { name: 'Display', color: 'bg-green-600', icon: 'D' },
                         { name: 'PMax', color: 'bg-blue-700', icon: 'P' },
                         { name: 'YouTube', color: 'bg-red-500', icon: 'Y' }
                       ].map((platform, index) => (
                         <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 relative">
                           <div className={`w-6 h-6 ${platform.color} rounded flex items-center justify-center mb-1`}>
                             <span className="text-white text-xs font-bold">{platform.icon}</span>
                           </div>
                           <span className="text-white text-xs truncate block">{platform.name}</span>
                           <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-orange-500 rounded flex items-center justify-center">
                             <span className="text-white text-xs">✓</span>
                           </div>
                         </div>
                       ))}
                     </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 font-bold text-yellow-400 bg-gray-900/90 px-3 py-2 rounded-lg border border-yellow-400/30 text-sm">
                    TU DASHBOARD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">🚀 ¿Qué es esto?</h2>
          <p className="text-xl text-gray-300 mb-8">Con nuestra solución White Label de Advento STARTER tendrás una plataforma <strong className="text-white">todo-en-uno</strong> para vender marketing bajo tu marca.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-green-400">✅</span>
              <div>
                <strong className="text-white">Tu marca, tu dominio</strong><br/>
                <span className="text-gray-300">Logo, colores y URL propios.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-green-400">✅</span>
              <div>
                <strong className="text-white">Definir precios</strong><br/>
                <span className="text-gray-300">Crea planes y márgenes a tu medida.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-green-400">✅</span>
              <div>
                <strong className="text-white">Sin técnico</strong><br/>
                <span className="text-gray-300">Listo para usar, enfoque 100% en ventas.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-green-400">✅</span>
              <div>
                <strong className="text-white">Todo en un lugar</strong><br/>
                <span className="text-gray-300">Ads, SEO, reportes y automatizaciones.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">✅ ¿Qué incluye tu agencia White Label?</h2>
          <p className="text-xl text-gray-300 mb-8">Todo lo necesario para vender como una agencia profesional desde el día uno.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">🌐 Marca 100%</h3>
                <p className="text-gray-300">Dominio, logo y colores personalizados.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">🤖 IA de marketing</h3>
                <p className="text-gray-300">Generación de anuncios, SEO y más.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">📈 Dashboard de clientes</h3>
                <p className="text-gray-300">Transparencia total de resultados.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">💳 Pagos integrados</h3>
                <p className="text-gray-300">Planes, suscripciones y cobros simples.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">🔄 Automatizaciones</h3>
                <p className="text-gray-300">Campañas, reportes y flujos 24/7.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3">🧩 Integraciones clave</h3>
                <p className="text-gray-300">Google, Meta, TikTok, y más.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">💰 ¿Cuánto puedes ganar?</h2>
          <p className="text-2xl text-gray-300 mb-8">Tú decides cuánto cobrar. Con márgenes de hasta el <strong className="text-yellow-400 text-3xl">98%</strong></p>
          
          <div className="overflow-x-auto">
          <div className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 rounded-2xl py-10 px-6 mb-8 flex items-center justify-center shadow-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center drop-shadow-lg">
              ¡El límite lo pones tú! 🫵

            </h1>
          </div>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">👥 ¿Para quién es esto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-2xl">🎯</span>
              <div>
                <strong className="text-white">Freelancers</strong><br/>
                <span className="text-gray-300">Listos para escalar ingresos.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-2xl">🏢</span>
              <div>
                <strong className="text-white">Agencias</strong><br/>
                <span className="text-gray-300">Que buscan automatizar la operación.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-2xl">💼</span>
              <div>
                <strong className="text-white">Emprendedores</strong><br/>
                <span className="text-gray-300">Ingresos recurrentes con SaaS.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-gray-800/90 border border-white/20 rounded-xl p-4">
              <span className="text-2xl">📣</span>
              <div>
                <strong className="text-white">Creadores</strong><br/>
                <span className="text-gray-300">Monetiza tu audiencia con valor.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">🧠 ¿Qué hace diferente esta plataforma?</h2>
          <p className="text-xl text-gray-300">
            <em>"Advento es como tener un equipo de marketing completo, funcionando 24/7 por ti… y por tus clientes."</em> Ahora puedes revender esa potencia <strong className="text-yellow-400">bajo tu marca</strong>.
          </p>
        </div>
      </section>

      {/* Pasos */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">🔓 Empezar es fácil</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-4">1</Badge>
                <h3 className="text-xl font-bold text-white mb-3">Acceso White Label</h3>
                <p className="text-gray-300">Recibe tu plataforma lista.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-4">2</Badge>
                <h3 className="text-xl font-bold text-white mb-3">Personaliza</h3>
                <p className="text-gray-300">Colores, logo y dominio propios.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-4">3</Badge>
                <h3 className="text-xl font-bold text-white mb-3">Vende</h3>
                <p className="text-gray-300">Lanza planes y atrae clientes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonos */}
      

      {/* CTA Final */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-3xl p-12 border border-yellow-500/20">
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6 px-6 py-3 text-lg">¡Cupos limitados este mes!</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              🔥 ¡Inicia hoy desde <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">$449 USD/mes</span>!
            </h2>
            <p className="text-xl text-gray-300 mb-6">Reserva tu marca y lanza tu agencia en días, no meses.</p>
            
            <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 text-lg px-10 py-5 mb-4">
              Quiero mi agencia White Label
            </Button>
            <p className="text-gray-400 text-sm">Al hacer clic aceptas nuestros <a href="#terms" className="text-yellow-400 hover:underline">Términos y Condiciones</a>.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">❓ Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="p-6">
                <details>
                  <summary className="cursor-pointer font-bold text-white mb-3">¿Necesito experiencia técnica?</summary>
                  <p className="text-gray-300">No. La plataforma llega lista y nosotros te apoyamos con el set-up inicial.</p>
                </details>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="p-6">
                <details>
                  <summary className="cursor-pointer font-bold text-white mb-3">¿Puedo poner mi dominio y logo?</summary>
                  <p className="text-gray-300">Sí. Todo corre bajo tu marca (dominio, logo y colores).</p>
                </details>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="p-6">
                <details>
                  <summary className="cursor-pointer font-bold text-white mb-3">¿Cómo cobro a mis clientes?</summary>
                  <p className="text-gray-300">Integra tu pasarela preferida y crea planes o suscripciones.</p>
                </details>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20">
              <CardContent className="p-6">
                <details>
                  <summary className="cursor-pointer font-bold text-white mb-3">¿Puedo escalar a muchos clientes?</summary>
                  <p className="text-gray-300">Totalmente. La plataforma está preparada para crecer contigo.</p>
                </details>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
