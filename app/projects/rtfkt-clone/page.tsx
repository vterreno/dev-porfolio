import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"

export default function RtfktClonePage() {
  const projectContent = [
    {
      content: <span className="comment">/*</span>,
    },
    {
      content: <span className="comment"> * Project 2 // _rtfkt-clone</span>,
    },
    {
      content: <span className="comment"> * Nel secondo progetto stiamo replicando il sito</span>,
    },
    {
      content: <span className="comment"> * "rtfkt.com".</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> * A differenza del primo lo stack utilizzato in</span>,
    },
    {
      content: <span className="comment"> * questo caso è : HTML, SCSS e Javascript.</span>,
    },
    {
      content: <span className="comment"> * Gli strumenti per coordinare il lavoro sono</span>,
    },
    {
      content: <span className="comment"> * gli stessi del primo progetto anche se in modo</span>,
    },
    {
      content: <span className="comment"> * individuale ho aggiunto Jira così da imparare</span>,
    },
    {
      content: <span className="comment"> * un nuovo tool.</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> * //+! N.B. Questo progetto non è ancora terminato !+//</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> */</span>,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <CodeEditor title="_rtfkt-clone" content={projectContent} />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Project 2 // _rtfkt-clone(in progress ... )</div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img src="https://github.com/daveinthahood.png" alt="@whoisdave" />
            </Avatar>
            <div className="text-sm">@whoisdave</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Created 5 months ago</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">// Desktop</div>
              <div className="relative h-80 bg-[#6a8bab] rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="RTFKT Clone Desktop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">// Mobile</div>
              <div className="relative h-80 bg-[#6a8bab] rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=200"
                  alt="RTFKT Clone Mobile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

