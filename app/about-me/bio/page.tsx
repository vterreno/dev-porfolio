import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import SkillItem from "@/components/skill-item"
import data from "@/public/data.json"

export default function BioPage() {
  const { personalInfo, skills } = data
  
  const bioContent = personalInfo.bio.map((line) => ({
    content: line,
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor title="bio" content={
        bioContent.map((line, index) => {
          return {
            content: line.content,
            lineNumber: index + 1
          }
        })
      } />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Lenguajes de programación que utilizo 👨🏻‍💻 ...</div>
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={`@${personalInfo.githubNickname}`}
              />
            </Avatar>
            <div className="text-sm">@{personalInfo.githubNickname}</div>
          </div>
          <div className="text-xs text-gray-500">Creado hace 5 meses</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} checked={skill.checked} />
          ))}
        </div>
      </div>
    </div>
  )
}

