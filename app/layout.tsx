import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "РЕМОНТ КАПИТАН - Качественный ремонт квартир под ключ",
  description:
    "Профессиональный ремонт квартир под ключ за 35 дней. Гарантия 2 года. Работаем по стандартам СНиП и ГОСТ.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
