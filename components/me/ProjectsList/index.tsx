import { Grid } from "@nextui-org/react";

import { ProjectCard } from "@/components/me";

import { Project } from "@/interfaces";

interface ProjectsListProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <Grid.Container gap={2} css={{ p: "0" }} justify="center">
      {projects.map((project, index) => (
        <Grid key={project.name + "-" + index} sm={6}>
          <ProjectCard
            project={{ description: project.description, name: project.name }}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};
