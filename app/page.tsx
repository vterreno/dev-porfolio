import data from "@/public/data.json"

export default function Home() {
  const { personalInfo } = data
  const email = 'mailto:' + personalInfo.email

  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Circulos animados en background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute 
            top-[10%] 
            right-[15%] 
            w-[400px] 
            h-[400px] 
            bg-gradient-radial 
            from-[#00ff9d]/20
            sm:from-[#00ff9d]/50
            to-transparent 
            blur-3xl 
            opacity-70 
            rounded-full 
            animate-float
          "
        />
        <div
          className="
            absolute 
            top-[40%] 
            right-[10%] 
            w-[500px] 
            h-[500px] 
            bg-gradient-radial 
            from-[#4c00ff]/20
            sm:from-[#4c00ff]/50
            to-transparent 
            blur-3xl 
            opacity-70 
            rounded-full 
            animate-floatReverse
          "
        />
        <div
          className="
            absolute 
            top-[10%] 
            right-[0%] 
            w-[400px] 
            h-[400px] 
            bg-gradient-radial 
            from-[#00ff9d]/20
            sm:from-[#00ff9d]/50
            to-transparent 
            blur-3xl 
            opacity-70 
            rounded-full 
            animate-floatReverse
          "
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <p className="text-gray-400 text-base sm:text-lg mb-2 sm:mb-3">Bienvenido 👋🏻, yo soy...</p>
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1 sm:mb-2">
          {personalInfo.name}
        </h1>
        <p className="font-mono text-[#6278F4] text-lg sm:text-xl">&gt; {personalInfo.title}</p>
        <p className="font-mono text-[#6278F4] text-lg sm:text-xl">&gt; {personalInfo.location}</p>
        <a href="/about-me/bio"
          className="block mb-4 sm:mb-6 bg-[#6278F4] text-white font-bold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 
          rounded-md hover:bg-[#4c00ff] transition duration-300 ease-in-out mt-6 flex items-center group">
          Ver porfolio <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">→</span>
        </a>

        <div className="leading-[1.5em] hidden sm:block font-normal text-sm sm:text-[15px] overflow-x-auto">
          <div className="mt-3 sm:mt-4">
            <span className="text-gray-500">// E-mail</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-[#569CD6]">const</span> <span className="text-[#4EC9B0]">email</span>{" "}
            <span className="text-white">= </span> <span className="text-[#CE9178]">"</span>
            <a href={email}>
              <span className="text-[#CE9178] hover:underline">{personalInfo.email}</span>
            </a>
            <span className="text-[#CE9178]">"</span>
            <span className="text-white">;</span>
          </div>

          <div className="mt-3 sm:mt-4">
            <span className="text-gray-500">// Github</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-[#569CD6]">const</span> <span className="text-[#4EC9B0]">githubLink</span>{" "}
            <span className="text-white">=</span>  <span className="text-[#CE9178]">"</span>
            <a href={personalInfo.githubLink} target="_blank">
              <span className="text-[#CE9178] hover:underline">{personalInfo.githubLink}</span>
            </a>
            <span className="text-[#CE9178]">"</span>
            <span className="text-white">;</span>
          </div>

          <div className="mt-3 sm:mt-4">
            <span className="text-gray-500">// LinkedIn</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-[#569CD6]">const</span> <span className="text-[#4EC9B0]">linkedInLink</span>{" "}
            <span className="text-white">=</span> <span className="text-[#CE9178]">"</span>
            <a href={personalInfo.linkedInLink} target="_blank">
              <span className="text-[#CE9178] hover:underline">{personalInfo.linkedInLink}</span>
            </a>
            <span className="text-[#CE9178]">"</span>
            <span className="text-white">;</span>
          </div>

        </div>
      </div>
    </div>
  )
}

