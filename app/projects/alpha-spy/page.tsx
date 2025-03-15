import CodeEditor from "@/components/code-editor"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

export default function AlphaSpyPage() {
  const projectContent = [
    {
      content: <span className="comment">/*</span>,
    },
    {
      content: <span className="comment"> * Project 3 // _alpha-spy</span>,
    },
    {
      content: <span className="comment"> * Alpha Spy diversamente dai progetti precedenti</span>,
    },
    {
      content: <span className="comment"> * è un progetto personale.</span>,
    },
    {
      content: <span className="comment"> * In team abbiamo realizzato questo bot per Discord</span>,
    },
    {
      content: <span className="comment"> * che ha la funzione di condividere i messaggi</span>,
    },
    {
      content: <span className="comment"> * inviati da un server Discord ad un server</span>,
    },
    {
      content: <span className="comment"> * personale.</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> * Essendo appassionato di NFTs e delle blockchain</span>,
    },
    {
      content: <span className="comment"> * in generale risultava difficile essere aggiornati</span>,
    },
    {
      content: <span className="comment"> * su più progetti e con questo bot si poteva</span>,
    },
    {
      content: <span className="comment"> * ricevere tutte le news su un solo server.</span>,
    },
    {
      content: <span className="comment"> *</span>,
    },
    {
      content: <span className="comment"> * Il bot è scritto in Javascript soppordandoci sulla</span>,
    },
    {
      content: <span className="comment"> * libreria Axios. Nello specifico il lavoro da me</span>,
    },
    {
      content: <span className="comment"> * svolto è quello di creare i comandi attraverso</span>,
    },
    {
      content: <span className="comment"> * i quali il bot eseguiva delle azioni e in seguito</span>,
    },
    {
      content: <span className="comment"> * ho creato il database usando MongoDB e messo</span>,
    },
    {
      content: <span className="comment"> * online il bot tramite Daki.</span>,
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
      <CodeEditor title="_alpha-spy" content={projectContent} />

      <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#1e3a5f]">
        <div className="mb-6">
          <div className="text-gray-300 mb-2">// Project Three // _alpha-spy</div>

          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-8 h-8">
              <img src="https://github.com/daveinthahood.png" alt="@whoisdave" />
            </Avatar>
            <div className="text-sm">@whoisdave</div>
          </div>
          <div className="text-xs text-gray-500 mb-4">Created 5 months ago</div>

          <div className="mb-6">
            <div className="text-[#d19a66] mb-2">Project 3 // _alpha-spy</div>
            <div className="relative h-24 bg-[#6a8bab] rounded overflow-hidden mb-6">
              <Image src="/placeholder.svg?height=100&width=400" alt="Alpha Spy Logo" fill className="object-cover" />
            </div>

            <div className="text-sm text-gray-300 mb-6">
              Come progetto personale con altre persone ho creato un bot discord dove, lo stesso bot, condivideva i
              messaggi inviati da un server su un altro.
            </div>

            <Link
              href="#"
              className="inline-block px-4 py-2 bg-[#1e3a5f] hover:bg-[#2a4d76] text-sm rounded text-center"
            >
              view-project-on-github
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

