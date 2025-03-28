"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight, File, User, Mail, Github, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import data from "@/public/data.json"

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [personalInfoOpen, setPersonalInfoOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)

  const { projects } = data

  // Cerrar sidebar en mobile al navegar
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [pathname])

  const SidebarContent = () => (
    <>
      <div className="flex-grow  sm:h-[95%] overflow-auto">
        <div>
          <div
            className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-[#1e3a5f]"
            onClick={() => setPersonalInfoOpen(!personalInfoOpen)}
          >
            {personalInfoOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="text-sm">info-personal</span>
          </div>

          {personalInfoOpen && (
            <div className="pl-4">
              <div
                className={cn("file-item", pathname === "/about-me/bio" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/about-me/bio")}
              >
                <File size={16} />
                <span className="text-sm">bio.ts</span>
              </div>
              <div
                className={cn("file-item", pathname === "/about-me/experiences" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/about-me/experiences")}
              >
                <File size={16} />
                <span className="text-sm">experiencias.ts</span>
              </div>
              <div
                className={cn("file-item", pathname === "/about-me/education" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/about-me/education")}
              >
                <File size={16} />
                <span className="text-sm">educación.ts</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-[#1e3a5f]"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            {projectsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="text-sm">proyectos</span>
          </div>

          {projectsOpen && (
            <div className="pl-4">
              {projects.map((project: any) => (
                <div
                  key={project.title}
                  className={cn("file-item", pathname === `/projects/${project.title}` && "bg-[#1e3a5f]")}
                  onClick={() => router.push(`/projects/${project.title}`)}
                >
                  <File size={16} />
                  <span className="text-sm">_{project.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto p-2 flex items-center justify-center gap-4 border-t border-[#1e3a5f]">
        <a href="/" rel="noopener noreferrer">
          <User size={20} className="text-gray-400" />
        </a>
        <a href="/contact-me" rel="noopener noreferrer">
          <Mail size={20} className="text-gray-400" />
        </a>
        <a href="/contact-me" rel="noopener noreferrer">
          <Github size={20} className="text-gray-400" />
        </a>
      </div>
    </>
  )

  return (
    <>
      {/* Sidebar para desktop - siempre visible */}
      <div className="hidden w-[280px] md:block border-r border-[#1e3a5f] flex flex-col">
        <SidebarContent />
      </div>

      {/* Botón para abrir sidebar en mobile */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="md:hidden fixed left-0 top-[36em] -translate-y-1/2 bg-[#1e3a5f] p-2 rounded-r-md z-10"
        aria-label="Abrir sidebar"
      >
        <ChevronRight size={20} />
      </button>

      {/* Overlay para mobile */}
      {mobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Sidebar para mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[280px] bg-[#0a1929] border-r border-[#1e3a5f] flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-3 border-b border-[#1e3a5f]">
          <span className="text-[#4ec9b0]">explorer</span>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 text-gray-400 hover:text-white"
            aria-label="Cerrar sidebar"
          >
            <X size={20} />
          </button>
        </div>
        <SidebarContent />
      </div>
    </>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter((cls): cls is string => typeof cls === "string").join(" ")
}