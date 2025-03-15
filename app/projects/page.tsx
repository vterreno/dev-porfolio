import ProjectCard from "@/components/project-card"
import { getAllProjects } from "@/lib/data"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            number={project.number}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

