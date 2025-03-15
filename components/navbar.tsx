"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-[#1e3a5f] z-20 relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center h-12">
        <div className="px-4 h-full flex items-center w-[20em] py-2 border-r border-[#1e3a5f] text-[#4ec9b0] text-sm ">
          <a href="/">
            @vterreno
          </a>
        </div>
        <div className="flex h-full">
          <div className="border-r border-[#1e3a5f]">
            <Link href="/" className={cn("nav-link px-6 flex h-full items-center text-sm", pathname === "/" && "active")}>
              _hola
            </Link>
          </div>

          <div className="border-r border-[#1e3a5f]">
            <Link href="/about-me/bio" className={cn("nav-link px-6 h-full flex items-center text-sm", pathname.startsWith("/about-me") && "active")}>
              _acerca-de-mi
            </Link>
          </div>

          <div className="border-r border-[#1e3a5f]">
            <Link href="/projects" className={cn("nav-link h-full px-6 flex items-center text-sm", pathname.startsWith("/projects") && "active")}>
              _proyectos
            </Link>
          </div>


        </div>
        <div className="ml-auto h-full border-l border-[#1e3a5f]">
          <Link href="/contact-me" className={cn("nav-link px-6 h-full h-full flex items-center text-sm", pathname === "/contact-me" && "active")}>
            _contacto
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-between h-12 px-4">
        <div className="text-[#4ec9b0]">@vterreno</div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-300 focus:outline-none">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1929] border-b border-[#1e3a5f] absolute w-full z-30">
          <div className="flex flex-col">
            <Link
              href="/"
              className={cn("px-4 py-3 border-b border-[#1e3a5f]", pathname === "/" && "text-[#F7BE39]")}
              onClick={() => setMobileMenuOpen(false)}
            >
              _hola
            </Link>
            <Link
              href="/about-me/bio"
              className={cn(
                "px-4 py-3 border-b border-[#1e3a5f]",
                pathname.startsWith("/about-me") && "text-[#F7BE39]",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              _acerca-de-mi
            </Link>
            <Link
              href="/projects"
              className={cn(
                "px-4 py-3 border-b border-[#1e3a5f]",
                pathname.startsWith("/projects") && "text-[#F7BE39]",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              _proyectos
            </Link>
            <Link
              href="/contact-me"
              className={cn("px-4 py-3", pathname === "/contact-me" && "text-[#F7BE39]")}
              onClick={() => setMobileMenuOpen(false)}
            >
              _contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

