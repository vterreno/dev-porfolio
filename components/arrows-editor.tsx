'use client';

import { MoveLeft, MoveRight } from "lucide-react";
import { JSX } from "react";

interface ArrowsEditorProps {
     urlSteps: string[];
}

export function ArrowsEditor({ urlSteps }: ArrowsEditorProps): JSX.Element {
     return (
          <div className="flex gap-2 items-center mr-2">
               <MoveLeft
                    className="cursor-pointer hover:text-[#F7BE39]"
                    onClick={() => {
                         const url = window.location.href.substring(22)
                         const index = urlSteps.indexOf(url)
                         if (index > 0) {
                              window.location.href
                                   = `/${urlSteps[index - 1]}`
                         }
                    }}
               />
               <MoveRight
                    className="cursor-pointer hover:text-[#F7BE39]"
                    onClick={() => {
                         const url = window.location.href.substring(22)
                         const index = urlSteps.indexOf(url)
                         if (index < urlSteps.length - 1) {
                              window.location.href
                                   = `/${urlSteps[index + 1]}`;
                         }
                    }}
               />
          </div>
     )
}