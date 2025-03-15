import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import { getPersonalInfo } from "@/lib/data"
import { GitBranch, GitCommit, GitMerge } from "lucide-react"

// Función para generar hash aleatorio estilo Git
const generateRandomHash = () => {
  return Math.random().toString(36).substring(2, 9)
}

export default function EducationPage() {
  const personalInfo = getPersonalInfo()

  const educationContent = personalInfo.education.map((line) => ({
    content: line
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor 
        title="educación" 
        content={educationContent.map((line, index) => ({
          content: line.content,
          lineNumber: index + 1
        }))} 
      />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="text-gray-300 mb-2">// Mis certificados</div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={personalInfo.avatar || "/placeholder.svg"}
              alt={`@${personalInfo.githubNickname}`}
            />
          </div>
          <div className="text-sm">@{personalInfo.githubNickname}</div>
        </div>
        <div className="text-xs text-gray-500 mb-6">Creado hace 5 meses</div>

        {/* Rama principal */}
        <div className="flex items-center gap-2 mb-4 text-sm text-blue-400">
          <GitBranch className="w-4 h-4" />
          <span>master</span>
        </div>

        {/* Listado de commits */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 top-0 w-px h-full bg-gray-600" />
          
          {/* Commits */}
          <div className="space-y-8">
            {personalInfo.certifications?.map((certificate, index) => (
              <div key={index} className="flex gap-4 relative">
                {/* Ícono de commit */}
                <div className="w-12 flex justify-center">
                  <GitCommit className="w-6 h-6 text-gray-400" />
                </div>
                
                {/* Contenido del commit */}
                <div className="flex-1">
                  {/* Hash y título */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-mono text-blue-400">
                      {generateRandomHash()}
                    </span>
                    <span className="text-gray-300">{certificate.title}</span>
                  </div>
                  
                  {/* Detalles de la certificación */}
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>Institución: {certificate.organization}</div>
                    <div>Fecha: {certificate.date}</div>
                    <div>Link: <a href={certificate.link} target="_blank" className="text-blue-400">{certificate.link}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}