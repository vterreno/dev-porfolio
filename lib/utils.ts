import type React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates an array of code lines with automatic line numbering
 * @param content Array of strings or React nodes to display as code
 * @param startLineNumber Optional starting line number (defaults to 1)
 * @returns Array of code line objects with content and line numbers
 */
export function createCodeLines(content: React.ReactNode[], startLineNumber = 1) {
  return content.map((line, index) => ({
    content: line,
    lineNumber: startLineNumber + index,
  }))
}

