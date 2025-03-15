import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import { getPersonalInfo } from "@/lib/data"
import { GitBranch, GitCommit, GitMerge } from "lucide-react"

export default function EducationPage() {
  const personalInfo = getPersonalInfo()

  // Map the education content to the format expected by CodeEditor
  const educationContent = personalInfo.education.map((line) => ({
    content: <span className="comment">{line}</span>,
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor title="education" content={educationContent} />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Historial de Git de mi educación</div>
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={`@${personalInfo.githubNickname}`}
              />
            </Avatar>
            <div className="text-sm">@{personalInfo.githubNickname}</div>
          </div>
          <div className="text-xs text-gray-500 mb-6">Creado hace 5 meses</div>

          {/* Git-style timeline visualization */}
          <div className="relative pl-8 pb-2 text-sm">
            {/* Main branch line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#38bdf8]"></div>

            {/* DevelHope */}
            <div className="mb-12 relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitCommit className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">DevelHope</div>
                  <div className="text-[#38bdf8] text-xs">2023 - Presente</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 8a7d3e9</div>
                <div className="mt-3 text-sm text-gray-300">
                  Corso Full Stack Developer con focus su tecnologie moderne come React, Node.js e TypeScript. Sviluppo
                  di progetti pratici in team utilizzando metodologie Agile.
                </div>
              </div>
            </div>

            {/* Feature branch - Certifications */}
            <div className="mb-12 relative">
              {/* Branch line */}
              <div className="absolute left-[-9px] top-[-20px] w-12 h-12 border-l-2 border-t-2 border-[#d19a66] rounded-tl-lg"></div>
              <div className="absolute left-3 top-[-20px] bottom-[-40px] w-0.5 bg-[#d19a66]"></div>

              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitBranch className="text-[#d19a66] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f] ml-8">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Certificazioni</div>
                  <div className="text-[#d19a66] text-xs">branch: skills/certifications</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 5e2f7b1</div>
                <div className="mt-3 text-sm text-gray-300">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Responsive Web Design (freeCodeCamp)</li>
                    <li>JavaScript Algorithms and Data Structures (freeCodeCamp)</li>
                    <li>Inglese B2 (Cambridge English)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Merge branch back to main */}
            <div className="mb-12 relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitMerge className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Merge: skills/certifications → main</div>
                  <div className="text-[#38bdf8] text-xs">2022</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">merge commit 3f7a9c2</div>
                <div className="mt-3 text-sm text-gray-300">Merged skills and certifications into education path</div>
              </div>
            </div>

            {/* University */}
            <div className="mb-12 relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitCommit className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Università degli Studi di Milano</div>
                  <div className="text-[#38bdf8] text-xs">2018 - 2022</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 2b4c8d7</div>
                <div className="mt-3 text-sm text-gray-300">
                  Laurea Triennale in Scienze Politiche con specializzazione in Relazioni Internazionali. Tesi di laurea
                  sull'impatto delle criptovalute sull'economia globale.
                </div>
              </div>
            </div>

            {/* Feature branch - Side Projects */}
            <div className="mb-12 relative">
              {/* Branch line */}
              <div className="absolute left-[-9px] top-[-20px] w-12 h-12 border-l-2 border-t-2 border-[#ce9178] rounded-tl-lg"></div>
              <div className="absolute left-3 top-[-20px] bottom-[-40px] w-0.5 bg-[#ce9178]"></div>

              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitBranch className="text-[#ce9178] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f] ml-8">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Progetti Personali</div>
                  <div className="text-[#ce9178] text-xs">branch: projects/personal</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 7d1e6f3</div>
                <div className="mt-3 text-sm text-gray-300">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sviluppo bot Discord per monitoraggio NFT</li>
                    <li>Creazione podcast "Issa Podcast"</li>
                    <li>Partecipazione a hackathon di sviluppo web</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Merge branch back to main */}
            <div className="mb-12 relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitMerge className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Merge: projects/personal → main</div>
                  <div className="text-[#38bdf8] text-xs">2018</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">merge commit 9c4b2e1</div>
                <div className="mt-3 text-sm text-gray-300">Applied practical skills to formal education</div>
              </div>
            </div>

            {/* High School */}
            <div className="mb-12 relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitCommit className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Istituto Tecnico Commerciale</div>
                  <div className="text-[#38bdf8] text-xs">2010 - 2015</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 1a2b3c4</div>
                <div className="mt-3 text-sm text-gray-300">
                  Diploma in Amministrazione, Finanza e Marketing con voto finale 92/100. Formazione in economia,
                  diritto e matematica finanziaria.
                </div>
              </div>
            </div>

            {/* Initial commit */}
            <div className="relative">
              <div className="absolute left-[-12px] top-0 flex items-center justify-center">
                <GitCommit className="text-[#38bdf8] w-6 h-6" />
              </div>
              <div className="bg-[#0d2137] p-4 rounded border border-[#1e3a5f]">
                <div className="flex justify-between items-center">
                  <div className="text-white font-semibold">Initial commit</div>
                  <div className="text-[#38bdf8] text-xs">2010</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">commit 0e1f2d3</div>
                <div className="mt-3 text-sm text-gray-300">Started educational journey</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

