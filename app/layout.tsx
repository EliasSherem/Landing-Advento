import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CartProvider } from '@/contexts/cart-context'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advento - Transformación Digital Completa',
  description: 'Plataforma integral de herramientas digitales para empresas modernas',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
