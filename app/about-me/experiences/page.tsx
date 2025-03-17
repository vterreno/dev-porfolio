import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import data from "@/public/data.json"
 
export default function ExperiencesPage() {  
  const { personalInfo, projects, codeSnippets } = data
  const experiencesContent = personalInfo.experiences.map((line) => ({
    content: line,
  }))

  const urlSteps = [
    'about-me/bio',
    'about-me/experiences',
    'about-me/education',
    ...(Array.isArray(projects) && projects.length > 0 
      ? projects
          .filter(project => project && typeof project === 'object' && 'title' in project && project.title)
          .map(project => `projects/${project.title}`)
      : []),
    'contact-me'
  ]

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <CodeEditor 
          title="experiencias" 
          urlSteps={urlSteps} 
          content={
            Array.isArray(experiencesContent) 
              ? experiencesContent.map((line, index) => {
                  return {
                    content: line?.content || "",
                    lineNumber: index + 1
                  }
                })
              : []
          }  
        />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Snippet de código</div>
          <div className="text-xs text-gray-400 mb-4">{codeSnippets.apiExample?.description}</div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img
                src={personalInfo?.avatar || "/placeholder.svg"}
                alt={`@${personalInfo?.githubNickname || "user"}`}
              />
            </Avatar>
            <div className="text-sm">@{personalInfo?.githubNickname || "user"}</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Creado hace 5 meses</div>

          <div className="bg-[#1e1e1e] rounded p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="text-white">
              <div>
                <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">$table</span> ={" "}
                <span className="text-[#dcdcaa]">document.querySelector</span>(
                <span className="text-[#ce9178]">"#table"</span>);
              </div>

              <div>
                <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">state</span> = {"{"}
                <span className="text-[#9cdcfe]">data</span>: [] {"}"};
              </div>

              <div className="mt-2">
                <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">fetchData</span> ={" "}
                <span className="text-[#569cd6]">async</span>
                {"()"} {"=>"} {"{"}
              </div>
              <div className="pl-4">
                <span className="text-[#c586c0]">try</span> {"{"}
              </div>
              <div className="pl-8">
                <span className="text-[#9cdcfe]">const</span> <span className="text-[#4fc1ff]">result</span> ={" "}
                <span className="text-[#569cd6]">await</span> <span className="text-[#dcdcaa]">fetch</span>(
                <span className="text-[#ce9178]">"https://exp-data.com"</span>);
              </div>
              <div className="pl-8">
                <span className="text-[#9cdcfe]">state.data</span> = <span className="text-[#569cd6]">await</span>{" "}
                <span className="text-[#4fc1ff]">result</span>.<span className="text-[#dcdcaa]">json</span>();
              </div>
              <div className="pl-8">
                <span className="text-[#dcdcaa]">console.log</span>(
                <span className="text-[#ce9178]">"fetch hecho!"</span>);
              </div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"};</div>

              <div className="mt-2">
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-[#dcdcaa]">generateTemplateHTML</span> = (
                <span className="text-[#9cdcfe]">data</span>) {"=>"} {"{"}
              </div>
              <div className="pl-4">
                <span className="text-[#c586c0]">return</span> `
              </div>
              <div className="pl-8">&lt;tr&gt;</div>
              <div className="pl-12">
                &lt;td&gt;${"{"}(<span className="text-[#9cdcfe]">data</span>).experienceId{"}"}&lt;/td&gt;
              </div>
              <div className="pl-12">
                &lt;td&gt;${"{"}(<span className="text-[#9cdcfe]">data</span>).name{"}"}&lt;/td&gt;
              </div>
              <div className="pl-12">
                &lt;td&gt;${"{"}(<span className="text-[#9cdcfe]">data</span>).description{"}"}&lt;/td&gt;
              </div>
              <div className="pl-8">&lt;/tr&gt;</div>
              <div className="pl-4">`;</div>
              <div>{"}"};</div>

              <div className="mt-2">
                <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">renderHTML</span> = (){" "}
                {"=>"}
                {"{"}
              </div>
              <div className="pl-4">
                <span className="text-[#9cdcfe]">const</span> <span className="text-[#4fc1ff]">HTML</span> ={" "}
                <span className="text-[#9cdcfe]">state.data</span>.<span className="text-[#dcdcaa]">map</span>(
                <span className="text-[#9cdcfe]">data</span> {"=>"}{" "}
                <span className="text-[#dcdcaa]">generateTemplateHTML</span>(
                <span className="text-[#9cdcfe]">data</span>)).<span className="text-[#dcdcaa]">join</span>(
                <span className="text-[#ce9178]">""</span>);
              </div>
              <div className="pl-4">
                <span className="text-[#4fc1ff]">$table</span>.<span className="text-[#9cdcfe]">innerHTML</span> ={" "}
                <span className="text-[#4fc1ff]">HTML</span>;
              </div>
              <div>{"}"};</div>

              <div className="mt-2">
                <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">init</span> ={" "}
                <span className="text-[#569cd6]">async</span>
                {"()"} {"=>"} {"{"}
              </div>
              <div className="pl-4">
                <span className="text-[#569cd6]">await</span> <span className="text-[#dcdcaa]">fetchData</span>();
              </div>
              <div className="pl-4">
                <span className="text-[#dcdcaa]">renderHTML</span>();
              </div>
              <div>{"}"};</div>

              <div className="mt-2">
                <span className="text-[#dcdcaa]">init</span>();
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

