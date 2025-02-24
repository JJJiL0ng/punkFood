// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PUNK FOOD - Plant-based Restaurant',
  description: 'At PUNK FOOD, we don&apos;t just go meatless—we go stronger. 💪',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="keywords" content="plant-based food, vegan restaurant, vegetarian food, healthy eating, PUNK FOOD, sustainable dining" />
        <meta property="og:title" content="PUNK FOOD - Plant-based Restaurant" />
        <meta property="og:description" content="At PUNK FOOD, we don't just go meatless—we go stronger. Experience revolutionary plant-based dining." />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="gradient-bg">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}