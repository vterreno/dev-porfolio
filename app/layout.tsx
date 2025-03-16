import type React from "react"
import type { Metadata } from "next"
import PageContent from "./pageContent"
import { getPersonalInfo } from "@/lib/data"
import './globals.css'
import { ProjectsProvider } from "./projects/context/projets-context"

export const metadata: Metadata = {
  title: "Porfolio de " + getPersonalInfo().name + " | " + getPersonalInfo().title,
  description: "Portfolio de" + getPersonalInfo().name + ", " + getPersonalInfo().title, 
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
  return <ProjectsProvider>
    <PageContent>
      {children}
    </PageContent>
  </ProjectsProvider>
  
}
