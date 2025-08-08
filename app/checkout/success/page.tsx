'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'

export default function CheckoutSuccessPage() {
  const [orderNumber] = useState(() => 
    'ADV-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  )

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">¡Compra Exitosa!</h1>
            <p className="text-xl text-gray-300 mb-2">
              Gracias por elegir Advento para tu transformación digital
            </p>
            <p className="text-gray-400">
              Número de orden: <span className="font-mono text-yellow-400">{orderNumber}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Next */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-yellow-400" />
                  ¿Qué sigue?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Confirmación por Email</h3>
                      <p className="text-gray-400 text-sm">
                        Recibirás un email con los detalles de tu compra y las instrucciones de acceso.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Configuración de Cuenta</h3>
                      <p className="text-gray-400 text-sm">
                        Nuestro equipo te contactará en las próximas 24 horas para configurar tu cuenta.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Onboarding Personalizado</h3>
                      <p className="text-gray-400 text-sm">
                        Sesión de onboarding gratuita para maximizar el valor de tu inversión.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support & Resources */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Download className="h-6 w-6 mr-3 text-green-400" />
                  Recursos y Soporte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Centro de Ayuda</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Accede a guías, tutoriales y documentación completa.
                    </p>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                      Visitar Centro de Ayuda
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Soporte Técnico</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      ¿Necesitas ayuda? Nuestro equipo está disponible 24/7.
                    </p>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                      Contactar Soporte
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Comunidad</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Únete a nuestra comunidad de usuarios y expertos.
                    </p>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                      Unirse a la Comunidad
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600">
              Acceder a mi Dashboard
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Volver al Inicio
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-white font-semibold mb-3">Información Importante</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <p className="mb-2">
                  <strong className="text-white">Facturación:</strong> Recibirás tu factura por email en las próximas 2 horas.
                </p>
                <p>
                  <strong className="text-white">Renovación:</strong> Tu suscripción se renovará automáticamente según el plan seleccionado.
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">Cancelación:</strong> Puedes cancelar en cualquier momento desde tu dashboard.
                </p>
                <p>
                  <strong className="text-white">Garantía:</strong> 30 días de garantía de devolución de dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
