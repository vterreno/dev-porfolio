import { Twitter, Facebook, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="border-t border-[#1e3a5f] flex flex-wrap items-center">
      <div className="text-[#4ec9b0] text-xs sm:text-sm border-r border-[#1e3a5f] p-2 px-2 sm:px-4 h-full hidden sm:block">encuéntrame en:</div>
      <Link href="#" className="p-2 sm:px-4 border-r border-[#1e3a5f] h-full hover:text-primary">
        <Twitter size={16} />
      </Link>
      <div className="ml-auto flex items-center gap-1 text-xs sm:text-sm">
        <Link href="https://github.com/daveinthahood" className="text-[#4ec9b0] border-l border-[#1e3a5f] p-2 sm:px-4 h-full flex items-center gap-1">
          @vterreno
          <Github size={16} />
        </Link>
      </div>
    </div>
  )
}

