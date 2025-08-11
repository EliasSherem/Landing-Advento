"use client"

import type React from "react"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useMemo, useState } from "react"
import {
  Banknote,
  Cable,
  Rocket,
  ShieldCheck,
  BarChartIcon as ChartBar,
  PlugZap,
  UserCheck,
  Building2,
  Globe2,
  CheckCircle2,
  Sparkles,
  Wand2,
  Megaphone,
  Target,
  Layers,
  Clock,
  SplitSquareHorizontal,
  Link2,
} from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

const HeroSticker = () => (
  <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 rotate-12 hover:scale-105 transition-transform select-none z-20 pointer-events-none">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-yellow-400/30">
      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
        $0/mes
      </span>
    </div>
  </div>
)

const GradientHeading = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
    {children}
  </span>
)

const InfoBar = () => (
  <div className="sticky top-0 z-30 border-b border-slate-700 bg-slate-800/80 backdrop-blur supports-[backdrop-filter]:bg-slate-800/60">
    <div className="container mx-auto py-2 text-sm flex items-center justify-center gap-6 text-gray-300">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-green-400" />
        <span>Transparencia total</span>
      </div>
      <div className="flex items-center gap-2">
        <UserCheck className="h-4 w-4 text-green-400" />
        <span>Sin contrato</span>
      </div>
      <div className="flex items-center gap-2">
        <Banknote className="h-4 w-4 text-green-400" />
        <span>Tú controlas el presupuesto</span>
      </div>
    </div>
  </div>
)

const CreateInSeconds = () => (
  <section id="crear-en-segundos" className="relative z-10 px-6 py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <GradientHeading>Crea campañas en segundos</GradientHeading>
        </h2>
        <p className="text-xl text-gray-300">
          Todo lo que puedes hacer con nuestro whitelabel Starter para lanzar campañas rápido en Meta, Google y TikTok.
        </p>
      </div>

      <Tabs defaultValue="meta" className="w-full">
        <TabsList className="mb-8 bg-slate-800 border border-slate-700">
          <TabsTrigger
            value="meta"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-cyan-400 data-[state=active]:text-slate-900"
          >
            Meta
          </TabsTrigger>
          <TabsTrigger
            value="google"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-cyan-400 data-[state=active]:text-slate-900"
          >
            Google
          </TabsTrigger>
          <TabsTrigger
            value="tiktok"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-cyan-400 data-[state=active]:text-slate-900"
          >
            TikTok
          </TabsTrigger>
        </TabsList>

        <TabsContent value="meta">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid gap-6">
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Elige objetivo</h3>
                    <p className="text-gray-600">Tráfico, leads o ventas con plantillas listas.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">IA para copies y creativos</h3>
                    <p className="text-gray-600">Genera variaciones en segundos, A/B testing listo.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lanza en 1 click</h3>
                    <p className="text-gray-600">Publica y aplica reglas automáticas desde el Hub.</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xl font-semibold">Vista previa Meta</div>
                  <Badge className="bg-blue-100 text-blue-800">Ads</Badge>
                </div>
                <img
                  src="/meta-preview.webp"
                  alt="Vista previa de anuncio Meta creada en segundos con Starter"
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl border border-gray-200 shadow-sm w-full h-auto mb-4"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg h-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Variación A</span>
                  </div>
                  <div className="rounded-lg h-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Variación B</span>
                  </div>
                  <div className="rounded-lg h-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Variación C</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Preview ilustrativa. UI tipo Meta Ads.</p>
              </motion.div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="google">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid gap-6">
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Selecciona tipo de campaña</h3>
                    <p className="text-gray-600">Search, Performance Max o Display con presets.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Activos generados por IA</h3>
                    <p className="text-gray-600">Keywords, headlines y extensiones sugeridas.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Publica con un click</h3>
                    <p className="text-gray-600">Seguimiento y reportes en tiempo real.</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="text-xl font-semibold mb-6">Vista previa Google</div>
                <img
                  src="/google-preview.webp"
                  alt="Vista previa de anuncio Google creada en segundos con Starter"
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl border border-gray-200 shadow-sm w-full h-auto mb-4"
                />
                <p className="text-xs text-gray-500 mt-4">Preview ilustrativa. UI tipo Google Ads.</p>
              </motion.div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tiktok">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid gap-6">
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Define audiencia y objetivo</h3>
                    <p className="text-gray-600">Plantillas optimizadas para rendimiento.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creativos verticales con IA</h3>
                    <p className="text-gray-600">Guiones, hooks y variaciones en segundos.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lanzamiento instantáneo</h3>
                    <p className="text-gray-600">Con reglas automáticas y controles de gasto.</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="text-xl font-semibold mb-6">Vista previa TikTok</div>
                <img
                  src="/tiktok-preview.webp"
                  alt="Vista previa de anuncio TikTok creada en segundos con Starter"
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl border border-gray-200 shadow-sm w-full h-auto mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg h-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Hook A</span>
                  </div>
                  <div className="rounded-lg h-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Hook B</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Preview ilustrativa. UI tipo TikTok Ads.</p>
              </motion.div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Plantillas multi‑plataforma", icon: Layers, color: "from-blue-400 to-cyan-400" },
          { title: "Automatizaciones y reglas", icon: Clock, color: "from-green-400 to-emerald-400" },
          { title: "A/B testing integrado", icon: SplitSquareHorizontal, color: "from-purple-400 to-pink-400" },
          { title: "Un click, múltiples redes", icon: Link2, color: "from-yellow-400 to-orange-400" },
          { title: "Brand safety y roles", icon: ShieldCheck, color: "from-red-400 to-pink-400" },
          { title: "Reportes en tiempo real", icon: ChartBar, color: "from-indigo-400 to-purple-400" },
          { title: "Integraciones", icon: PlugZap, color: "from-teal-400 to-cyan-400" },
          { title: "Control de permisos", icon: UserCheck, color: "from-emerald-400 to-green-400" },
        ].map((f, i) => (
          <Card
            key={i}
            className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${f.color} rounded-lg flex items-center justify-center`}>
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <p className="font-medium">{f.title}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 px-8 py-4 text-lg"
          size="lg"
          asChild
        >
          <Link href="/registro?plan=starter">
            <Sparkles className="w-5 h-5 mr-2" />
            Activar Starter Gratis
          </Link>
        </Button>
      </div>
    </div>
  </section>
)

const FeeCalculator = () => {
  const [spend, setSpend] = useState(1000)
  const fee = useMemo(() => Math.round(spend * 0.2), [spend])
  const total = spend + fee

  return (
    <section id="calculadora" className="relative z-10 px-6 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <GradientHeading>Calcula tu fee en segundos.</GradientHeading>
          </h2>
          <p className="text-xl text-gray-300">El software Starter cuesta $0/mes.</p>
        </div>
        <Card className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Label className="mb-4 block text-lg font-semibold">Ad spend mensual (USD)</Label>
              <input
                type="range"
                min={100}
                max={100000}
                step={100}
                value={spend}
                onChange={(e) => setSpend(Number.parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-400"
              />
              <div className="mt-6 flex items-center gap-4">
                <Input
                  type="number"
                  value={spend}
                  onChange={(e) => setSpend(Number.parseInt(e.target.value || "0"))}
                  className="text-lg"
                />
                <Button
                  className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 px-6 py-3"
                  asChild
                >
                  <Link href="/registro?plan=starter">Activar Starter Gratis</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-green-400/10 to-cyan-400/10 border border-green-400/20">
              <ul className="space-y-4 text-left">
                <li className="text-lg">
                  Tu inversión en anuncios: <strong className="text-green-600">${spend.toLocaleString()}</strong>
                </li>
                <li className="text-lg">
                  Nuestra comisión (20%):{" "}
                  <strong className="text-green-600">
                    ${spend.toLocaleString()} × 0.20 = ${fee.toLocaleString()}
                  </strong>
                </li>
                <li className="text-xl border-t border-green-400/20 pt-4">
                  Costo total: <strong className="text-green-600">${total.toLocaleString()}</strong>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

const Metrics = () => {
  const controls = useAnimation()
  const [scope, setScope] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!scope) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) controls.start({ opacity: 1, y: 0 })
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(scope)
    return () => observer.disconnect()
  }, [controls, scope])

  return (
    <section className="relative z-10 px-6 py-20 bg-slate-900" ref={setScope}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { label: "+1.2k campañas lanzadas", icon: Rocket },
            { label: "65% ahorro de tiempo", icon: ChartBar },
            { label: "3.8k cuentas conectadas", icon: PlugZap },
          ].map((m, i) => (
            <Card
              key={i}
              className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <m.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-lg font-semibold">{m.label}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Features = () => (
  <section className="relative z-10 px-6 py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Dashboard unificado", icon: ChartBar, color: "from-blue-400 to-cyan-400" },
          { title: "Plantillas y automatizaciones", icon: PlugZap, color: "from-green-400 to-emerald-400" },
          { title: "Reportes en tiempo real", icon: Globe2, color: "from-purple-400 to-pink-400" },
          { title: "Integraciones con tus redes", icon: Cable, color: "from-yellow-400 to-orange-400" },
          { title: "Soporte prioritario", icon: UserCheck, color: "from-red-400 to-pink-400" },
          { title: "Seguridad y roles", icon: ShieldCheck, color: "from-indigo-400 to-purple-400" },
        ].map((f, i) => (
          <Card
            key={i}
            className="p-6 rounded-2xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center`}>
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="relative z-10 px-6 py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          <GradientHeading>Impacto y prueba social</GradientHeading>
        </h2>
        <div className="text-right">
          <Button
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 px-6 py-3"
            asChild
          >
            <Link href="/registro?plan=starter">Activar Starter Gratis</Link>
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { quote: '"Escalamos sin costos fijos."', company: "Acme Co.", author: "María González, CMO" },
          {
            quote: '"Reportes claros y decisiones más rápidas."',
            company: "Globex",
            author: "Carlos Ruiz, Director Marketing",
          },
          { quote: '"Soporte humano real. 10/10."', company: "Umbrella", author: "Ana López, Fundadora" },
        ].map((t, i) => (
          <Card key={i} className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg">
            <div className="mb-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-4">{t.quote}</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold">{t.author}</p>
              <p className="text-sm text-gray-600">{t.company}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const Comparison = () => (
  <section className="relative z-10 px-6 py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        <GradientHeading>Paga por lo que usas, no por promesas.</GradientHeading>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 rounded-2xl bg-white text-slate-900 shadow-lg border-2 border-green-400">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold">ADVENTO Starter</h3>
          </div>
          <p className="text-xl mb-6 text-green-600 font-semibold">$0/mes + 20% ad spend</p>
          <ul className="space-y-3">
            {["Sin contrato", "Transparencia total", "Soporte humano"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-lg">{t}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-8 rounded-2xl bg-slate-800 text-white shadow-lg border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-gray-400" />
            <h3 className="text-2xl font-bold">Software tradicional</h3>
          </div>
          <p className="text-xl mb-6 text-gray-400">$49–$299/mes + cargos extra</p>
          <ul className="space-y-3">
            {["Períodos anuales", "Cargos ocultos", "Soporte limitado"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                <span className="text-lg text-gray-300">{t}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  </section>
)

const CTAColorBand = () => (
  <section className="relative z-10 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="rounded-3xl p-12 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 text-slate-900 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Empieza hoy por $0</h3>
            <p className="text-xl">Paga solo cuando corres anuncios.</p>
          </div>
          <Button
            className="bg-white text-slate-900 hover:bg-gray-100 font-semibold shadow-lg px-8 py-4 text-lg"
            size="lg"
            asChild
          >
            <Link href="/registro?plan=starter">
              <Sparkles className="w-5 h-5 mr-2" />
              Activar Starter Gratis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

const FAQ = () => (
  <section className="relative z-10 px-6 py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
        <GradientHeading>Preguntas Frecuentes</GradientHeading>
      </h2>
      <Accordion type="single" collapsible className="max-w-4xl mx-auto">
        {[
          {
            q: '¿Qué es "ad spend"?',
            a: "Es el presupuesto que inviertes directamente en las plataformas de anuncios como Meta, Google, TikTok, etc. Nosotros no tocamos ese dinero, solo cobramos una comisión del 20% sobre lo que efectivamente gastes.",
          },
          {
            q: "¿Cuándo se cobra el 20%?",
            a: "Mensualmente, sobre el ad spend efectivamente invertido. Si no corres anuncios un mes, no pagas nada. Si gastas $1000 en anuncios, pagas $200 de comisión.",
          },
          {
            q: "¿Hay permanencia o contrato?",
            a: "No, puedes cancelar cuando quieras sin penalizaciones. No hay contratos anuales ni compromisos de permanencia.",
          },
          {
            q: "¿Puedo agregar add‑ons después?",
            a: "Sí. Los add‑ons como Cliento, Botento y Agento se activan desde el Hub y requieren tener Starter activo. Cada uno tiene su propio costo mensual.",
          },
          {
            q: "¿Qué plataformas de anuncios soportan?",
            a: "Meta (Facebook e Instagram), Google Ads, TikTok Ads, LinkedIn Ads, Twitter Ads y Pinterest Ads. Constantemente agregamos más plataformas.",
          },
          {
            q: "¿Qué tipo de soporte incluye?",
            a: "Soporte prioritario por chat y email. También tienes acceso a nuestra base de conocimientos y tutoriales en video.",
          },
        ].map((f, i) => (
          <AccordionItem value={`faq-${i}`} key={i} className="border-b border-slate-700">
            <AccordionTrigger className="text-white hover:text-green-400 text-left text-lg font-semibold py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-slate-700 py-12 mt-20 bg-slate-900">
    <div className="max-w-6xl mx-auto px-6 text-sm text-gray-400">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-400 rounded flex items-center justify-center">
              <img src="/advento-profile1.jpg" alt="Advento" className="w-full h-full object-contain" />
            </div>
            <img
              src="/LOGO-BLANCO-2.png"
              alt="Advento"
              className="object-contain"
              style={{ width: "120px", height: "auto", maxHeight: "80px" }}
            />
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="/terminos" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="/privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
        <div className="text-right">
          <p className="text-base leading-relaxed">
            <strong className="text-white">Starter es gratis.</strong> ADVENTO cobra una comisión del 20% sobre el ad
            spend gestionado. Los add‑ons se contratan por separado.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default function Starter() {
  useEffect(() => {
    document.title = "Lanza campañas en 3 clicks con STARTER, GRATIS"
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        "content",
        "Crea y lanza campañas en Meta, Google y TikTok en segundos con Starter. $0/mes, pagas 20% de ad spend.",
      )
    }
  }, [])

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

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,204,21,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.25),transparent_40%)]"
          />

          {/* Laptop background image */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full h-full hidden lg:block pointer-events-none">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22---Laptop-Mockup-V01%5B1%5D-n4m9NeXXBbbblpB20IuSHWaJU4ZonX.png"
              alt=""
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-4xl opacity-30 select-none"
              loading="eager"
            />
          </div>

          <div className="relative z-10 px-6 pt-20 pb-32">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-4xl">
                <Badge className="border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Nuevo
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                  <div className="mb-4">
                    <span className="text-white">Lanza campañas en 3 clicks con </span>
                    <GradientHeading>STARTER, GRATIS</GradientHeading>
                  </div>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
                  Sin costos fijos. Sin líos. Solo crece.
                </p>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
                  Activa ADVENTO Starter sin pagar suscripción. Escalamos contigo; tú controlas el presupuesto, nosotros
                  solo cobramos el 20% de lo que inviertas en anuncios.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start relative">
                  <Button
                    className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 px-8 py-4 text-lg"
                    size="lg"
                    asChild
                  >
                    <Link href="/registro?plan=starter">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Activar Starter Gratis
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
                    size="lg"
                    asChild
                  >
                    <a href="#crear-en-segundos">Ver cómo funciona</a>
                  </Button>
                </div>
                <HeroSticker />
                <div className="mt-8 flex flex-wrap gap-3 text-sm">
                  {["Sin contrato", "Cancela cuando quieras", "Transparencia total"].map((c) => (
                    <span
                      key={c}
                      className="border border-green-400/30 bg-green-400/10 text-green-400 rounded-full px-4 py-2"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <InfoBar />
        <CreateInSeconds />
        <FeeCalculator />
        <Metrics />
        <Features />
        <Testimonials />
        <Comparison />
        <CTAColorBand />
        <FAQ />

        <section className="relative z-10 px-6 py-20 text-center bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white">¿Listo para crecer </span>
              <GradientHeading>sin costos fijos?</GradientHeading>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-semibold hover:from-green-500 hover:to-cyan-500 px-8 py-4 text-lg"
                size="lg"
                asChild
              >
                <Link href="/registro?plan=starter">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Activar Starter Gratis
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
                size="lg"
              >
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
