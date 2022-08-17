import { useState, useEffect } from "react";

import { Project } from "@/interfaces";

export const useProjects = (initProjects: Project[]) => {
  const [projects, setProjects] = useState<Project[]>([]);

  console.log(projects);

  const filterProjects = (tag: string) => {
    setProjects([
      ...initProjects.filter((project) => project.tags.includes(tag)),
    ]);
  };

  const resetFilter = () => {
    setProjects([...initProjects]);
  };

  useEffect(() => {
    setProjects(initProjects);
  }, [initProjects]);

  return {
    projects,
    filterProjects,
    resetFilter,
  };
};
