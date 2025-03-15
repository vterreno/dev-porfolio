import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"

export default function JustEatClonePage() {
  const projectContent = [
    {
      content: <span className="comment">/*</span>,
    },
    {
      content: <span className="comment"> * Project 1 // _justEat-clone</span>,
    },
    {
      content: <span className="comment"> * Come primo progetto del corso abbiamo realizzato</span>,
    },
    {
      content: <span className="comment"> * un clone del sito di Just Eat.</span>,
    },
    {
      content: <span className="comment"> * Le pagine che abbiamo replicato sono:</span>,
    },
    {
      content: <span className="comment"> * l'home e la pagina che elenca i ristoranti</span>,
    },
    {
      content: <span className="comment"> * in un'area definita.</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> * In questo primo progetto abbiamo usato solamente</span>,
    },
    {
      content: <span className="comment"> * HTML e CSS mentre per coordinare il lavoro in team</span>,
    },
    {
      content: <span className="comment"> * abbiamo usato : Trello, GitHub, Discord, Notion</span>,
    },
    {
      content: <span className="comment"> * e la metodologia Agile.</span>,
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
      <CodeEditor title="_justEat-clone" content={projectContent} />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Project One // _justEat-clone</div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img src="https://github.com/daveinthahood.png" alt="@whoisdave" />
            </Avatar>
            <div className="text-sm">@whoisdave</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Created 5 months ago</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="relative h-60 bg-[#6a8bab] rounded overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="JustEat Clone Homepage"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-60 bg-[#6a8bab] rounded overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="JustEat Clone Restaurants"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

