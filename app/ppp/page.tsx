import { ArrowLeft, Globe, DollarSign, TrendingUp, Check, Heart, Users, Shield, Calculator, ArrowRight, Sparkles, Crown, Star, Award, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header"

export default function PPPPage() {
  const partnerTiers = [
    { name: "Bronze Partner", flag: "🥉", commission: "15%", requirements: "5+ referidos/mes" },
    { name: "Silver Partner", flag: "🥈", commission: "20%", requirements: "15+ referidos/mes" },
    { name: "Gold Partner", flag: "🥇", commission: "25%", requirements: "30+ referidos/mes" },
    { name: "Platinum Partner", flag: "💎", commission: "30%", requirements: "50+ referidos/mes" },
    { name: "Diamond Partner", flag: "💍", commission: "35%", requirements: "100+ referidos/mes" }
  ];

  const partnerBenefits = [
    {
      tier: "Bronze",
      commission: "15%",
      bonuses: ["Material de marketing", "Soporte por email"],
      monthlyBonus: "$100",
      requirements: "5+ referidos/mes"
    },
    {
      tier: "Silver",
      commission: "20%",
      bonuses: ["Todo lo anterior", "Webinars exclusivos", "Manager dedicado"],
      monthlyBonus: "$300",
      requirements: "15+ referidos/mes"
    },
    {
      tier: "Gold",
      commission: "25%",
      bonuses: ["Todo lo anterior", "Acceso beta", "Co-marketing"],
      monthlyBonus: "$750",
      requirements: "30+ referidos/mes"
    },
    {
      tier: "Platinum",
      commission: "30%",
      bonuses: ["Todo lo anterior", "Eventos VIP", "Consultoría 1:1"],
      monthlyBonus: "$1,500",
      requirements: "50+ referidos/mes"
    }
  ];

  const benefits = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Comisiones Premium",
      description: "Gana hasta 35% de comisión recurrente por cada cliente que refiereas a Advento."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Red de Partners",
      description: "Únete a una comunidad exclusiva de partners exitosos y comparte estrategias."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Soporte Dedicado",
      description: "Acceso a managers dedicados y soporte prioritario para maximizar tus ventas."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crecimiento Escalable",
      description: "Sistema de niveles que premia tu crecimiento con mejores comisiones y beneficios."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Aplica al programa",
      description: "Completa el formulario de aplicación y cuéntanos sobre tu experiencia en marketing."
    },
    {
      number: "2",
      title: "Recibe aprobación",
      description: "Nuestro equipo revisará tu aplicación y te contactará en 24-48 horas."
    },
    {
      number: "3",
      title: "Comienza a referir",
      description: "Recibe tus materiales de marketing y comienza a generar ingresos inmediatamente."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Crown className="w-16 h-16 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                PPP
              </span>
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Premium Partner Program
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Únete a nuestro programa de partners exclusivo y genera ingresos recurrentes 
            refiriendo clientes a Advento. Comisiones de hasta 35% y beneficios premium.
          </p>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">35%</div>
              <div className="text-gray-300">Comisión máxima</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">$10K+</div>
              <div className="text-gray-300">Ingresos mensuales top partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">500+</div>
              <div className="text-gray-300">Partners activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PPP Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">¿Qué es el </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Premium Partner Program?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nuestro programa de partners premium está diseñado para emprendedores, agencias y 
                profesionales del marketing que quieren generar ingresos recurrentes significativos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Comisiones recurrentes</h3>
                    <p className="text-gray-300">
                      Gana comisiones mensuales recurrentes por cada cliente que permanezca activo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Sistema de niveles</h3>
                    <p className="text-gray-300">
                      Mientras más refiereas, mejores comisiones y beneficios exclusivos obtienes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crown className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Beneficios premium</h3>
                    <p className="text-gray-300">
                      Acceso a herramientas exclusivas, eventos VIP y soporte personalizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-500/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Ejemplo de Ingresos</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-800/90 rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🥉</span>
                        <div>
                          <p className="text-white font-medium">Bronze Partner</p>
                          <p className="text-gray-400 text-sm">10 clientes referidos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">$675</p>
                        <p className="text-gray-400 text-sm">USD/mes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">💎</span>
                        <div>
                          <p className="text-white font-medium">Platinum Partner</p>
                          <p className="text-yellow-400 text-sm">100 clientes referidos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-yellow-400">$14,850</p>
                        <p className="text-gray-400 text-sm">USD/mes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Niveles de Partners
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mientras más refiereas, mejores beneficios y comisiones obtienes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {partnerTiers.map((tier, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 text-center hover:bg-gray-800/90 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{tier.flag}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{tier.name}</h3>
                  <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-3">
                    {tier.commission} comisión
                  </Badge>
                  <p className="text-gray-300 text-sm">{tier.requirements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Comparison */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Beneficios por </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                nivel
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada nivel desbloquea nuevos beneficios y oportunidades de ingresos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{benefit.tier} Partner</CardTitle>
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                      {benefit.commission} comisión
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {benefit.requirements}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Bono mensual:</span>
                      <span className="text-xl font-bold text-yellow-400">{benefit.monthlyBonus}</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-white font-medium mb-2">Beneficios incluidos:</h4>
                      <ul className="space-y-1">
                        {benefit.bonuses.map((bonus, bonusIndex) => (
                          <li key={bonusIndex} className="text-gray-300 text-sm flex items-center">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {bonus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">¿Por qué unirte al </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                PPP?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900/80 border-white/20 group hover:bg-gray-800/90 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-yellow-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">¿Cómo </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                funciona?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unirte al Premium Partner Program es simple y rápido
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-yellow-500/20">
                  {step.number === "1" && <Target className="w-10 h-10 text-yellow-400" />}
                  {step.number === "2" && <Award className="w-10 h-10 text-orange-400" />}
                  {step.number === "3" && <Star className="w-10 h-10 text-red-400" />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">¿Listo para </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              comenzar a ganar?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestro programa de partners premium y comienza a generar ingresos recurrentes hoy mismo
          </p>
          
          <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8">
            🎉 Si te registras hoy, ¡es completamente GRATIS!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold hover:from-yellow-500 hover:to-orange-500 text-lg px-8 py-4">
              <Crown className="w-5 h-5 mr-2" />
              Aplicar al PPP
            </Button>
            <Link href="/precios">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                <Calculator className="w-5 h-5 mr-2" />
                Ver comisiones detalladas
              </Button>
            </Link>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            * Aplicación sujeta a aprobación. Términos y condiciones aplican.
          </p>
        </div>
      </section>
    </div>
  );
}
