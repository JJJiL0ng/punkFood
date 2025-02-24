// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PUNK FOOD - Korean Fashion in India',
  description: 'Your Gateway to Korean Fashion in India. Discover exclusive Korean fashion trends and get 25% off on your first order at PUNK FOOD.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FC7E7A" />
        <meta name="keywords" content="Korean fashion, India fashion, K-fashion, Korean style, PUNK FOOD, fashion discount" />
        <meta property="og:title" content="PUNK FOOD - Korean Fashion in India" />
        <meta property="og:description" content="Your Gateway to Korean Fashion in India. Get 25% off on your first order!" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="gradient-bg">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}