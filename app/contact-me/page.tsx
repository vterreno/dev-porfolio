import { getPersonalInfo } from "@/lib/data"

export default function ContactPage() {
  const personalInfo = getPersonalInfo()

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Contacto</h1>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#1e3a5f] rounded-full">
              <span className="text-xs">@</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#4ec9b0] hover:underline text-sm sm:text-base break-all"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#1e3a5f] rounded-full">
              <span className="text-xs">GH</span>
            </div>
            <a
              href={personalInfo.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ec9b0] hover:underline text-sm sm:text-base break-all"
            >
              {personalInfo.githubLink.replace("https://", "")}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#1e3a5f] rounded-full">
              <span className="text-xs">LI</span>
            </div>
            <a
              href={personalInfo.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ec9b0] hover:underline text-sm sm:text-base break-all"
            >
              {personalInfo.linkedInLink.replace("https://www.", "")}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

