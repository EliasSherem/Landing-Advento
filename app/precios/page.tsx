import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, Crown, Users, Zap, Package, Sparkles, Shield, Clock, HelpCircle, Star, X } from 'lucide-react';
import Link from "next/link";
import Header from "@/components/header"

export default function PreciosPage() {
  const addOns = [
    {
      name: "CLIENTO",
      description: "CRM completo con IA",
      priceSolitario: 29,
      priceAgencia: 299,
      features: ["Chatbot con IA", "Códigos QR personalizados", "Integración Google Calendar", "CRM avanzado"]
    },
    {
      name: "BOTENTO", 
      description: "Bot externo automatizado",
      priceSolitario: 19,
      priceAgencia: 199,
      features: ["Bot automation", "Multi-plataforma", "Flujos avanzados", "Analytics"]
    },
    {
      name: "AGENTO",
      description: "Bot interno con IA",
      priceSolitario: 19,
      priceAgencia: 199,
      features: ["Agente IA avanzado", "Conocimiento personalizado", "API integrations", "Soporte 24/7"]
    },
    {
      name: "WEBENTO",
      description: "Websites con IA",
      priceSolitario: 9,
      priceAgencia: 99,
      features: ["Generación web con IA", "Templates premium", "SEO optimizado", "Hosting incluido"]
    },
    {
      name: "CONTENTO",
      description: "Ads con IA",
      priceSolitario: 0, // Solo PLUS
      priceAgencia: 0, // Solo PLUS
      features: ["Identidad visual", "Manual de marca", "Plantillas personalizadas", "Guías de estilo"]
    }
  ];

  const totalAddOnsSolitario = addOns.reduce((sum, addon) => sum + addon.priceSolitario, 0);
  const totalAddOnsAgencia = addOns.reduce((sum, addon) => sum + addon.priceAgencia, 0);

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o reducir tu plan en cualquier momento. Los cambios se aplican inmediatamente y se prorratea la facturación."
    },
    {
      question: "¿Hay período de prueba gratuito?",
      answer: "Ofrecemos una garantía de 30 días de devolución de dinero. Si no estás satisfecho, te devolvemos el 100% de tu inversión."
    },
    {
      question: "¿Los precios incluyen soporte técnico?",
      answer: "Todos los planes incluyen soporte técnico. Advento PLUS incluye soporte prioritario con respuesta en menos de 2 horas."
    },
    {
      question: "¿Puedo usar mi propia marca (white label)?",
      answer: "Sí, todos los planes Advento PLUS incluyen branding completo bajo tu marca. Puedes personalizar logos, colores y dominios."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y ofrecemos planes de financiamiento hasta 12 meses sin intereses."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl md:text-7xl font-bold">
              Planes y <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Precios</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transparencia total. Sin sorpresas. Elige el plan que mejor se adapte a tu negocio 
            y empieza a automatizar desde el primer día.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>30 días garantía</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Activación inmediata</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Plans Comparison */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Advento Inicio vs Advento PLUS</h2>
            <p className="text-xl text-gray-200">Compara nuestros planes principales</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Advento Inicio */}
            <Card className="bg-gray-900 border-gray-600 shadow-xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Package className="w-6 h-6 text-blue-400" />
                  <CardTitle className="text-2xl text-white">Advento Inicio</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    $49 <span className="text-sm text-gray-300 font-normal">USD/mes</span>
                  </div>
                  <div className="text-gray-300">
                    Sin opción de pago anual
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Dashboard básico",
                    "1 usuario incluido",
                    "Soporte por email",
                    "Integraciones básicas",
                    "Reportes estándar"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white border border-gray-500">
                  Elegir Inicio
                </Button>
              </CardContent>
            </Card>

            {/* Individual Add-Ons */}
            <Card className="bg-gray-900 border-gray-600 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Add-Ons Individuales</CardTitle>
                <p className="text-gray-300 text-sm">Elige solo lo que necesitas</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOns.map((addon, index) => (
                    <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{addon.name}</h4>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white">
                            {addon.name === "CONTENTO" ? "Solo PLUS" : `$${addon.priceSolitario} USD`}
                          </div>
                          <div className="text-xs text-gray-400">Solitario</div>
                          <div className="text-sm font-bold text-white">
                            {addon.name === "CONTENTO" ? "Solo PLUS" : `$${addon.priceAgencia} USD`}
                          </div>
                          <div className="text-xs text-gray-400">Agencia</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-300 mb-2">{addon.description}</p>
                    </div>
                  ))}
                  <Separator className="my-4 bg-gray-600" />
                  <div className="text-center p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <div className="text-lg font-bold text-white">
                      Total Solitario: ${totalAddOnsSolitario - 0} USD/mes
                    </div>
                    <div className="text-lg font-bold text-white">
                      Total Agencia: ${totalAddOnsAgencia - 0} USD/mes
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      *CONTENTO solo disponible en PLUS
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advento PLUS */}
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 border-2 border-blue-400 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span>RECOMENDADO</span>
              </div>
              
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <CardTitle className="text-2xl text-white">Advento PLUS</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">
                    $99 <span className="text-sm text-gray-200 font-normal">USD/mes</span>
                  </div>
                  <div className="text-gray-200">
                    o $999 USD/año <Badge variant="outline" className="ml-2 text-white border-gray-300">12 MSI</Badge>
                  </div>
                  <div className="text-green-300 text-sm font-semibold">
                    Ahorra ${totalAddOnsSolitario - 99} USD/mes vs individual
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl mb-6 border border-blue-400/50">
                  <p className="font-semibold text-white">TODO INCLUIDO</p>
                  <p className="text-sm text-gray-200">Advento Inicio + Todos los Add-Ons</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "CLIENTO + BOTENTO + AGENTO",
                    "WEBENTO + CONTENTO",
                    "Usuarios ilimitados",
                    "Branding completo",
                    "Soporte prioritario",
                    "APIs avanzadas",
                    "Reportes premium"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold">
                  Elegir PLUS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Comparación Detallada de Planes</h2>
            <p className="text-xl text-gray-200">Conoce exactamente qué incluye cada plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-black border border-gray-600 rounded-lg shadow-xl">
              <thead>
                <tr className="border-gray-700">
                  <th className="text-white font-semibold p-4 text-left">Plan / Característica</th>
                  <th className="text-center text-white font-semibold p-4">Starter (Solitario)</th>
                  <th className="text-center text-white font-semibold p-4">Starter (Agencia)</th>
                  <th className="text-center text-white font-semibold p-4 bg-blue-500/10 border-x border-blue-500/30">Plus (Solitario)</th>
                  <th className="text-center text-white font-semibold p-4 bg-blue-500/10 border-r border-blue-500/30">Plus (Agencia)</th>
                </tr>
              </thead>
              <tbody>
                {/* Pricing Rows */}
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Precio mensual</td>
                  <td className="text-center text-2xl font-bold text-white p-4">$49 USD</td>
                  <td className="text-center text-2xl font-bold text-white p-4">$449 USD</td>
                  <td className="text-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent p-4 bg-blue-500/10 border-x border-blue-500/30">$99 USD</td>
                  <td className="text-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent p-4 bg-blue-500/10 border-r border-blue-500/30">$699 USD</td>
                </tr>
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Pago anual</td>
                  <td className="text-center text-gray-400 p-4">-</td>
                  <td className="text-center text-gray-400 p-4">-</td>
                  <td className="text-center text-xl font-bold text-green-400 p-4 bg-blue-500/10 border-x border-blue-500/30">$999 USD</td>
                  <td className="text-center text-xl font-bold text-green-400 p-4 bg-blue-500/10 border-r border-blue-500/30">$6,999 USD</td>
                </tr>

                {/* Base Access */}
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Acceso base Advento</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                {/* Add-ons */}
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">CLIENTO (CRM)</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $29 USD</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $299 USD</td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">BOTENTO (Bot externo)</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $19 USD</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $199 USD</td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">AGENTO (Bot interno)</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $19 USD</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $199 USD</td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">WEBENTO (Websites)</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $9 USD</td>
                  <td className="text-center text-yellow-400 text-sm p-4">Add‑on $99 USD</td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">CONTENTO (Ads IA)</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Incluido</span>
                    </div>
                  </td>
                </tr>

                {/* Agency Features */}
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Clientes ilimitados (Agencia)</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Whitelabel (solo Agencia)</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Usuarios ilimitados (Agencia)</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                {/* Support and Payment */}
                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Soporte prioritario</td>
                  <td className="text-center text-gray-400 p-4">Básico</td>
                  <td className="text-center text-gray-400 p-4">Básico</td>
                  <td className="text-center text-blue-400 font-semibold p-4 bg-blue-500/10 border-x border-blue-500/30">Premium</td>
                  <td className="text-center text-blue-400 font-semibold p-4 bg-blue-500/10 border-r border-blue-500/30">Premium</td>
                </tr>

                <tr className="border-gray-700">
                  <td className="font-semibold text-white p-4">Pago anual</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-x border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-xs">(12 meses sin interés)</span>
                    </div>
                  </td>
                  <td className="text-center p-4 bg-blue-500/10 border-r border-blue-500/30">
                    <div className="flex items-center justify-center space-x-1">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-xs">(12 meses sin interés)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-green-400 text-black font-semibold hover:from-yellow-500 hover:to-green-500">
                Elegir Plan PLUS
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Comparar con Starter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Detailed */}
      <section className="px-6 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Desglose de Add-Ons</h2>
            <p className="text-xl text-gray-200">Conoce a detalle cada herramienta</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-gray-900 border-gray-600 hover:border-blue-400 transition-colors shadow-xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">{addon.name}</CardTitle>
                    <div className="text-right">
                      {addon.name === "CONTENTO" ? (
                        <div>
                          <div className="text-lg font-bold text-yellow-400">Solo PLUS</div>
                          <div className="text-sm text-gray-300">Exclusivo</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-lg font-bold text-blue-400">
                            ${addon.priceSolitario} USD
                          </div>
                          <div className="text-sm text-gray-300">Solitario/mes</div>
                          <div className="text-lg font-bold text-purple-400">
                            ${addon.priceAgencia} USD
                          </div>
                          <div className="text-sm text-gray-300">Agencia/mes</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300">{addon.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {addon.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Preguntas Frecuentes</h2>
            </div>
            <p className="text-xl text-gray-200">Todo lo que necesitas saber sobre nuestros precios</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-600 rounded-lg px-6 bg-gray-900">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 text-left text-white hover:text-blue-400">
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-4 text-gray-200">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-600/30 to-purple-600/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">¿Listo para automatizar tu negocio?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Únete a miles de empresarios que ya están usando Advento para escalar sus negocios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold">
              Empezar con Advento PLUS
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-black">
              Agendar demo personalizada
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-200">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>30 días garantía</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Setup en 24hrs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>+10,000 usuarios</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
