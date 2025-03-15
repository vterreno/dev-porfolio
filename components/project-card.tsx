import { getAllProjects } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  number: number
  title: string
  description: string
  imageSrc: string
  githubLink: string
  index: number
}

export default function ProjectCard({ number, title, description, imageSrc, githubLink, index }: ProjectCardProps) {
  const projects = getAllProjects()
  return (
    <a href={"/" + projects[index].title}>
      <div className="border border-[#1e3a5f] rounded-md overflow-hidden bg-[#0d2137]">
            <div className="p-4">
              <div className="text-[#d19a66] mb-2">
                Project {number} // _{title}
              </div>
              <div className="relative h-40 mb-4">
                <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover rounded" />
              </div>
              <div className="text-sm text-gray-300 mb-6">{description}</div>
              <Link
                href={githubLink}
                className="inline-block px-4 py-2 bg-[#1e3a5f] hover:bg-[#2a4d76] text-sm rounded text-center w-full"
              >
                view-project-on-github
              </Link>
            </div>
          </div>
    </a>
    
  )
}

