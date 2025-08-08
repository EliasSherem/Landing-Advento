'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'

export default function CarritoPage() {
  const { state, removeItem, clearCart } = useCart()

  const subtotal = state.total
  const tax = subtotal * 0.16 // 16% IVA
  const total = subtotal + tax

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-8" />
            <h1 className="text-4xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-400 mb-8">
              Agrega algunos productos para comenzar tu transformación digital
            </p>
            <Link href="/precios">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600">
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
            <Link href="/precios" className="flex items-center text-gray-400 hover:text-white transition-colors mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Continuar comprando
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8">Carrito de Compras</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <Card key={item.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500 capitalize">
                            {item.type} • {item.billing === 'monthly' ? 'Mensual' : 'Anual'}
                          </span>
                        </div>
                        {item.features && (
                          <div className="mt-3">
                            <p className="text-sm text-gray-400 mb-2">Incluye:</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              {item.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          ${item.price}
                        </div>
                        <div className="text-sm text-gray-400 mb-4">
                          USD/{item.billing === 'monthly' ? 'mes' : 'año'}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-gray-400 border-gray-600 hover:bg-gray-700"
                >
                  Vaciar Carrito
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-800 border-gray-700 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal ({state.itemCount} {state.itemCount === 1 ? 'item' : 'items'})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300">
                    <span>IVA (16%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)} USD</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Link href="/checkout">
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600 py-3">
                        Proceder al Checkout
                      </Button>
                    </Link>
                    
                    <Link href="/precios">
                      <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                        Continuar Comprando
                      </Button>
                    </Link>
                  </div>

                  {/* Security Badges */}
                  <div className="pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Pago Seguro
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        SSL Encriptado
                      </div>
                    </div>
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
