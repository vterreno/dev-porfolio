import React from "react"
import { ArrowsEditor } from "./arrows-editor"

interface CodeEditorProps {
  title?: string
  content: Array<{
    content: React.ReactNode
    lineNumber?: number
  }>
  className?: string
  startLineNumber?: number
  urlSteps?: string[]
}

const applyCommentStyles = (content: React.ReactNode): React.ReactNode => {
  const commentStyles = [
    { regex: /^\s*\* \!/, class: "text-[#FF2D00]" },
    { regex: /^\s*\* \*/, class: "text-[#86BE6A]" },
    { regex: /^\s*\* \?/, class: "text-[#1E90FF]" },
    { regex: /^\s*\* TODO/, class: "text-[#FF9E1F]" },
    { regex: /^\s*\/\/!/, class: "text-[#FF2D00]" },
    { regex: /^\s*\/\/\*/, class: "text-[#86BE6A]" },
    { regex: /^\s*\/\/\?/, class: "text-[#1E90FF]" },
    { regex: /^\s*\/\/TODO/, class: "text-[#FF9E1F]" },
    { regex: /^\s*\/\/\//, class: "text-[#86BE6A] line-through" },
  ];

  for (const style of commentStyles) {
    let children;
    if (typeof content === 'string') {
      children = content;
    } else if (React.isValidElement(content)) {
      children = (content as React.ReactElement<any>).props.children;
    }

    if (children && style.regex.test(children)) {
      return <span className={style.class}>{content}</span>;
    }
  }

  return <span className={"comment"}>{content}</span>
}

export default function CodeEditor({
  title,
  content,
  className,
  startLineNumber = 1,
  urlSteps
}: CodeEditorProps) {

  return (
    <div className={`h-full ${className} text-gray-300 rounded-lg overflow-hidden border border-[#333]`}>
      {title && (
       
          <div className="flex justify-between items-center border-b border-[#333] p-2 text-sm font-medium">
            {title}
            {urlSteps && <ArrowsEditor urlSteps={urlSteps} />}
          </div>
      

      )}
      <div className="p-2 sm:p-4 font-mono text-sm sm:text-sm overflow-auto">
        {content.map((line, index) => {
          const lineNumber = line.lineNumber ?? startLineNumber + index

          return (
            <div key={lineNumber} className="flex hover:bg-[#122e4c]">
              <div className="line-number text-gray-500 pr-4 select-none w-12 text-right">
                {lineNumber}
              </div>
              <div className="code-content text-green-200 flex-1">
                {applyCommentStyles(line.content)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}