'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { CreditCard, Lock, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'México'
  })

  const subtotal = state.total
  const tax = subtotal * 0.16
  const total = subtotal + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push('/checkout/success')
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">No hay productos en el carrito</h1>
            <p className="text-gray-400 mb-8">
              Agrega algunos productos antes de proceder al checkout
            </p>
            <Link href="/precios">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/carrito" className="flex items-center text-gray-400 hover:text-white transition-colors mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al carrito
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </span>
                      Información de Contacto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">Nombre *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">Apellido *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-gray-300">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Tu empresa (opcional)"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        2
                      </span>
                      Información de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-300">Número de Tarjeta *</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white pl-10"
                          placeholder="1234 5678 9012 3456"
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-gray-300">Fecha de Vencimiento *</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          required
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-gray-300">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        3
                      </span>
                      Dirección de Facturación
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-gray-300">Dirección *</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Calle y número"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-300">Ciudad *</Label>
                        <Input
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode" className="text-gray-300">Código Postal *</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          required
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600 py-4 text-lg"
                >
                  {isProcessing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Procesando Pago...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Completar Compra - ${total.toFixed(2)} USD
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-400 capitalize">
                            {item.billing === 'monthly' ? 'Mensual' : 'Anual'}
                          </p>
                        </div>
                        <div className="text-white font-medium">
                          ${item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-gray-600" />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-300">
                      <span>IVA (16%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <Separator className="bg-gray-600" />
                    
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)} USD</span>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Lock className="h-4 w-4 mr-1" />
                        Pago Seguro
                      </div>
                      <div className="flex items-center">
                        <Check className="h-4 w-4 mr-1" />
                        SSL Encriptado
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Tu información está protegida con encriptación de 256 bits
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
