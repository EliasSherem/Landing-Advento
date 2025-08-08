'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/cart-context'

export function CartIcon() {
  const { state } = useCart()

  return (
    <Link href="/carrito" className="relative p-2 text-white hover:text-yellow-400 transition-colors">
      <ShoppingCart className="h-6 w-6" />
      {state.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {state.itemCount}
        </span>
      )}
    </Link>
  )
}
