import type React from "react"
import type { Metadata } from "next"
import PageContent from "./pageContent"
import './globals.css'
import data from "@/public/data.json"

const { personalInfo } = data
export const metadata: Metadata = {
  title: "Porfolio de " + personalInfo.name + " | " + personalInfo.title,
  description: "Portfolio de" + personalInfo.name + ", " + personalInfo.title, 
  generator: 'v0.dev',
  icons: [
    new URL("/static/favicon.png", "http://localhost:3000"),
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PageContent>
      {children}
    </PageContent>
}
