'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Mail, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Header from "@/components/header"

export default function RegistroExitoPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-5xl font-bold mb-4">
              ¡Bienvenido a <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Advento</span>!
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Tu registro ha sido exitoso
            </p>
            <p className="text-gray-400">
              Estás a un paso de transformar tu marketing digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What's Next */}
            <Card className="bg-gray-800/90 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-yellow-400" />
                  Próximos Pasos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Confirmación por Email</h3>
                    <p className="text-gray-400 text-sm">
                      Revisa tu bandeja de entrada en los próximos minutos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Llamada de Bienvenida</h3>
                    <p className="text-gray-400 text-sm">
                      Nuestro equipo te contactará en las próximas 24 horas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Demo Personalizada</h3>
                    <p className="text-gray-400 text-sm">
                      Sesión gratuita adaptada a tu negocio
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-gray-800/90 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-green-400" />
                  Mientras Tanto...
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2">📚 Centro de Recursos</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Explora guías y casos de éxito
                  </p>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    Explorar Recursos
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2">🎥 Video Tour</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Conoce Advento en 5 minutos
                  </p>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    Ver Video
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2">💬 Comunidad</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Únete a otros empresarios
                  </p>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    Unirse Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/precios">
              <Button className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 font-semibold hover:from-yellow-500 hover:to-green-500 px-8 py-4">
                <Sparkles className="h-5 w-5 mr-2" />
                Ver Planes y Precios
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4">
                Volver al Inicio
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-white/10">
            <h3 className="text-white font-semibold mb-4">¿Tienes preguntas?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="text-center">
                <Mail className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="font-medium text-white">Email</p>
                <p>hola@advento.com</p>
              </div>
              <div className="text-center">
                <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-medium text-white">Horario</p>
                <p>Lun-Vie 9:00-18:00</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="font-medium text-white">Respuesta</p>
                <p>Menos de 2 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
