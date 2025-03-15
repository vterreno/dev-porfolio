import type React from "react"
import type { Metadata } from "next"
import PageContent from "./pageContent"
import { getPersonalInfo } from "@/lib/data"
import './globals.css'

export const metadata: Metadata = {
  title: getPersonalInfo().name + " | " + getPersonalInfo().title,
  description: "Portfolio de" + getPersonalInfo().name + ", " + getPersonalInfo().title, 
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PageContent>{children}</PageContent>
}
