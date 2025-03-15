"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight, File, User, Mail, Github, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileView, setIsMobileView] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const [personalInfoOpen, setPersonalInfoOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)

  // Check if we're in mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close mobile sidebar when navigating
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [pathname])

  const SidebarContent = () => (
    <>
      <div className="flex-grow overflow-auto">
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
                className={cn("file-item", pathname === "/about-me/interests" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/about-me/interests")}
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
              <div
                className={cn("file-item", pathname === "/projects/juseat-clone" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/projects/juseat-clone")}
              >
                <File size={16} />
                <span className="text-sm">_justEat-clone</span>
              </div>
              <div
                className={cn("file-item", pathname === "/projects/rtfkt-clone" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/projects/rtfkt-clone")}
              >
                <File size={16} />
                <span className="text-sm">_rtfkt-clone</span>
              </div>
              <div
                className={cn("file-item", pathname === "/projects/alpha-spy" && "bg-[#1e3a5f]")}
                onClick={() => router.push("/projects/alpha-spy")}
              >
                <File size={16} />
                <span className="text-sm">_alpha-spy</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto p-2 flex items-center justify-center gap-4 border-t border-[#1e3a5f]">
        <User size={20} className="text-gray-400" />
        <Mail size={20} className="text-gray-400" />
        <Github size={20} className="text-gray-400" />
      </div>
    </>
  )

  // Mobile sidebar toggle button
  const MobileSidebarToggle = () => (
    <button
      onClick={() => setMobileSidebarOpen(true)}
      className="md:hidden fixed left-0 top-[40em] -translate-y-1/2 bg-[#1e3a5f] p-2 rounded-r-md z-10"
      aria-label="Open sidebar"
    >
      <ChevronRight size={20} />
    </button>
  )

  // For desktop view
  if (!isMobileView) {
    return (
      <div className="w-60 border-r border-[#1e3a5f] flex flex-col">
        <SidebarContent />
      </div>
    )
  }

  // For mobile view
  return (
    <>
      <MobileSidebarToggle />

      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileSidebarOpen(false)} />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#0a1929] border-r border-[#1e3a5f] flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-3 border-b border-[#1e3a5f]">
          <span className="text-[#4ec9b0]">explorer</span>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 text-gray-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
        <SidebarContent />
      </div>
    </>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

