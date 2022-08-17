import { ComponentPropsWithoutRef } from "react";
import { Button, Grid, Text } from "@nextui-org/react";

import { useProjects } from "@/hooks";

import { ProjectCard } from "@/components/me";

import { Project } from "@/interfaces";

import { ProjectsListHeaderStyled, ProjectsListStyled } from "./styles";

type MySkillsStyledProps = ComponentPropsWithoutRef<typeof ProjectsListStyled>;

interface ProjectsListProps extends MySkillsStyledProps {
  projects: Project[];
  projectTags: string[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  projectTags,
  ...rest
}) => {
  const {
    projects: projectsFiltered,
    filterProjects,
    resetFilter,
  } = useProjects(projects);

  return (
    <ProjectsListStyled {...rest}>
      <ProjectsListHeaderStyled>
        <Text className="projects-title" h3>¿Qué proyectos realicé?</Text>
        <div className="filters">
          {projectTags.map((tag, index) => (
            <Button
              key={`${tag}-${index}`}
              onClick={() => filterProjects(tag)}
              size="xs"
              auto
              css={{ tt: "capitalize" }}
            >
              {tag}
            </Button>
          ))}
          <Button onClick={() => resetFilter()} size="xs" auto>
            All
          </Button>
        </div>
      </ProjectsListHeaderStyled>
      <Grid.Container
        gap={2}
        css={{ p: "0", height: "100%", overflow: "auto" }}
        justify="center"
      >
        {projectsFiltered.map((project, index) => (
          <Grid key={project.name + "-" + index} sm={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid.Container>
    </ProjectsListStyled>
  );
};
