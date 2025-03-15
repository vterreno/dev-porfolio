import fs from "fs"
import path from "path"

// Define types for our data structure
export interface Skill {
  name: string
  checked: boolean
}

export interface ProjectImage {
  title?: string
  src: string
  alt: string
}

export interface Project {
  id: string
  number: number
  title: string
  description: string
  imageSrc: string
  githubLink: string
  content: string[]
  images?: ProjectImage[]
  logo?: ProjectImage
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  location: string
  githubNickname: string
  githubLink: string
  behanceLink: string
  linkedInLink: string
  avatar: string
  bio: string[]
  interests: string[]
  education: string[]
}

export interface CodeSnippet {
  title: string
  description: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  skills: Skill[]
  projects: Project[]
  codeSnippets: {
    [key: string]: CodeSnippet
  }
}

// Function to get all portfolio data
export function getPortfolioData(): PortfolioData {
  const filePath = path.join(process.cwd(), "public", "data.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const data = JSON.parse(fileContents) as PortfolioData

  return data
}

// Function to get a specific project by ID
export function getProjectById(id: string): Project | undefined {
  const data = getPortfolioData()
  return data.projects.find((project) => project.id === id)
}

// Function to get all projects
export function getAllProjects(): Project[] {
  const data = getPortfolioData()
  return data.projects
}

// Function to get personal info
export function getPersonalInfo(): PersonalInfo {
  const data = getPortfolioData()
  return data.personalInfo
}

// Function to get skills
export function getSkills(): Skill[] {
  const data = getPortfolioData()
  return data.skills
}

// Function to get a specific code snippet
export function getCodeSnippet(id: string): CodeSnippet | undefined {
  const data = getPortfolioData()
  return data.codeSnippets[id]
}

