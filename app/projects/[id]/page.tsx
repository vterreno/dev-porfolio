import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { getProjectById, getPersonalInfo } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)
  const personalInfo = getPersonalInfo()

  if (!project) {
    notFound()
  }

  // Map the project content to the format expected by CodeEditor
  const projectContent = project.content.map((line) => ({
    content: <span className="comment">{line}</span>,
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor title={`_${project.title}`} content={projectContent} />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">
            // Project {project.number} // _{project.title}
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={`@${personalInfo.name.toLowerCase().replace(" ", "")}`}
              />
            </Avatar>
            <div className="text-sm">@{personalInfo.name.toLowerCase().replace(" ", "")}</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Created 5 months ago</div>

          {project.logo ? (
            <div className="mb-6">
              <div className="text-[#d19a66] mb-2">
                Project {project.number} // _{project.title}
              </div>
              <div className="relative h-24 bg-[#6a8bab] rounded overflow-hidden mb-6">
                <Image
                  src={project.logo.src || "/placeholder.svg"}
                  alt={project.logo.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-sm text-gray-300 mb-6">{project.description}</div>

              <Link
                href={project.githubLink}
                className="inline-block px-4 py-2 bg-[#1e3a5f] hover:bg-[#2a4d76] text-sm rounded text-center"
              >
                view-project-on-github
              </Link>
            </div>
          ) : project.images ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {project.images.map((image, index) => (
                <div key={index}>
                  {image.title && <div className="text-sm text-gray-400 mb-2">// {image.title}</div>}
                  <div className="relative h-60 bg-[#6a8bab] rounded overflow-hidden">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

