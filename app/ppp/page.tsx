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
                Lanza tu propia agencia de marketing automatizada
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
          <p className="text-xl text-gray-300 mb-8">Con nuestra solución White Label de Advento tendrás una plataforma <strong className="text-white">todo-en-uno</strong> para vender marketing bajo tu marca.</p>
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
                <p className="text-gray-300">Google, Meta, TikTok, Shopify, y más.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">💰 ¿Cuánto puedes ganar?</h2>
          <p className="text-xl text-gray-300 mb-8">Tú decides cuánto cobrar. Con márgenes de hasta el <strong className="text-yellow-400">90%</strong>, el límite lo pones tú.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 border border-gray-600 rounded-lg shadow-xl">
              <thead>
                <tr className="border-gray-700">
                  <th className="text-white font-semibold p-4 text-left bg-gray-700">Clientes activos</th>
                  <th className="text-white font-semibold p-4 text-left bg-gray-700">Ingreso mensual (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-gray-700">
                  <td className="text-white p-4">10</td>
                  <td className="text-white p-4">$1,000 – $3,000</td>
                </tr>
                <tr className="border-gray-700">
                  <td className="text-white p-4">50</td>
                  <td className="text-white p-4">$5,000 – $15,000</td>
                </tr>
                <tr className="border-gray-700">
                  <td className="text-white p-4">100</td>
                  <td className="text-white p-4">$10,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">Ejemplos estimados. Tus resultados pueden variar según precios y mezcla de servicios.</p>
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
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">🎁 Bono especial (solo hoy)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-white mb-2">✨ Plantillas</h3>
                <p className="text-gray-300">Cierra a tus primeros clientes.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-white mb-2">📣 Scripts</h3>
                <p className="text-gray-300">Prospección y ventas probadas.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-white mb-2">🧑‍🏫 Mini curso</h3>
                <p className="text-gray-300">Onboarding paso a paso.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/90 border-white/20 text-center">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-white mb-2">🎨 Branding editable</h3>
                <p className="text-gray-300">Kit listo para personalizar.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-3xl p-12 border border-yellow-500/20">
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6">Cupos limitados este mes</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              🔥 ¡Inicia hoy por solo <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">$297 USD/mes</span>!
            </h2>
            <p className="text-xl text-gray-300 mb-6">Reserva tu marca y lanza tu agencia en días, no meses.</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8">
              🎉 Si te registras hoy, ¡es completamente GRATIS el primer mes!
            </p>
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
