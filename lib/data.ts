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
  title: string
  githubLink: string
  demoLink: string
  content: string[]
  images?: ProjectImage[]
  technologies: string[]
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
  cvLink: string
  avatar: string
  bio: string[]
  experiences: string[]
  education: string[]
  certifications?: Certificate[]
}

export interface Certificate {
  title: string
  organization: string
  date: string
  link: string
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

