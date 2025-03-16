"use client";
import { Project } from "@/lib/data";
import { createContext, useContext, useEffect, useState } from "react";

interface ProjectsContextValue {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const ProjectsContext = createContext<ProjectsContextValue>({
  projects: [],
  loading: true,
  error: null,
});

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
     const [projects, setProjects] = useState<Project[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
   
     useEffect(() => {
       async function fetchProjects() {
         try {
           const res = await fetch("/api/projects");
           if (!res.ok) {
             throw new Error("Error al obtener los proyectos");
           }
           const data = await res.json();
           const fetchedProjects = data.projects || data;
           setProjects(fetchedProjects);
           const titles = fetchedProjects.map((p: Project) => ({ title: p.title }));
           
           // Guarda en localStorage los títulos de los proyectos la primera vez que se cargue
           if (!localStorage.getItem("projectTitles") || localStorage.getItem("projectTitles") !== JSON.stringify(titles)) {
             localStorage.setItem("projectTitles", JSON.stringify(titles));
           }
         } catch (err: any) {
           setError(err.message);
         } finally {
           setLoading(false);
         }
       }
   
       fetchProjects();
     }, []);
   
     return (
       <ProjectsContext.Provider value={{ projects, loading, error }}>
         {children}
       </ProjectsContext.Provider>
     );
   };
   
   export const useProjects = () => useContext(ProjectsContext);