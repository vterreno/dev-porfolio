"use client"

import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-mono bg-[#0a1929] text-gray-300`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 flex relative">
            {!isHomePage && <Sidebar />}
            <main className={`flex-1 ${!isHomePage ? "md:border-l border-[#1e3a5f]" : ""}`}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

