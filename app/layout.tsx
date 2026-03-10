import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'French Connection Wines — Premium French Wines in Vietnam',
  description: 'Discover our curated selection of premium French wines imported directly from the South of France. Available for delivery across Vietnam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
