'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, User, Mail, Phone, ArrowRight, Check, Shield, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Header from "@/components/header"

export default function RegistroPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Redirect to success page or dashboard
    router.push('/registro/exito')
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    ¡Comienza tu transformación digital!
                  </h1>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Únete a miles de empresarios que ya están automatizando su marketing con Advento
                </p>
              </div>

              <Card className="bg-gray-800/90 border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">Registro Gratuito</CardTitle>
                  <p className="text-gray-300 text-center">Completa tus datos para comenzar</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300 flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Nombre Completo *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-300 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-300 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400"
                        placeholder="+52 123 456 7890"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 py-4 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2"></div>
                          Procesando...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>Comenzar Ahora</span>
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      )}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      Al registrarte aceptas nuestros{' '}
                      <a href="/terminos" className="text-yellow-400 hover:underline">
                        Términos y Condiciones
                      </a>{' '}
                      y{' '}
                      <a href="/privacidad" className="text-yellow-400 hover:underline">
                        Política de Privacidad
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  ¿Qué obtienes al registrarte?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Demo personalizada gratuita</h3>
                      <p className="text-gray-300">Sesión de 30 minutos para conocer Advento</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Acceso anticipado</h3>
                      <p className="text-gray-300">Sé de los primeros en probar nuevas funciones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Consultoría inicial</h3>
                      <p className="text-gray-300">Análisis gratuito de tu estrategia actual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Recursos exclusivos</h3>
                      <p className="text-gray-300">Guías, templates y mejores prácticas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Tu información está segura</h3>
                <div className="flex items-center justify-around text-sm text-gray-300">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>SSL Seguro</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Respuesta 24h</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Sin spam</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">Únete a más de 10,000 empresarios</p>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
