import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import { getAllProjects, getPersonalInfo } from "@/lib/data"
import { Github, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MiMascotapp() {
  const personalInfo = getPersonalInfo()
  const projects = getAllProjects()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor
        title={projects[0].title}
        content={[{ content: projects[0].content }]}
      />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// _{projects[0].title}</div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img src={personalInfo.avatar} alt={"@" + personalInfo.githubNickname} />
            </Avatar>
            <div className="text-sm">@{personalInfo.githubNickname}</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Creado hace 5 meses</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {
              projects[0].images?.map((image, index) => (
                <div key={index} className="relative h-60 bg-[#6a8bab] rounded overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))
            }
          </div>
          <div className="mb-4">
            <div className="text-gray-300 mb-2">// _Tecnologías utilizadas</div>
            <div className="block sm:flex items-center gap-2">
              {projects[0].technologies.map((tech, index) => (
                <div key={index} className="text-sm text-white bg-gray-700 rounded px-3 mb-2 sm:mb-0 py-1">{tech}</div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-12">
            <Link
              href="#"
              target="_blank"
              className="flex gap-2 px-4 py-2 bg-[#1e3a5f] hover:bg-[#2a4d76] text-sm rounded text-center"
            >
              github
              <Github size={20} className="text-gray-400" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="flex gap-2 px-4 py-2 bg-[#1e3a5f] hover:bg-[#2a4d76] text-sm rounded text-center"
            >
              demo
              <Play size={20} className="text-gray-400" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

