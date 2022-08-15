import { ComponentPropsWithoutRef } from "react";
import { Grid, Text } from "@nextui-org/react";

import { ProjectCard } from "@/components/me";

import { Project } from "@/interfaces";

import { ProjectsListStyled } from "./styles";

type MySkillsStyledProps = ComponentPropsWithoutRef<typeof ProjectsListStyled>;

interface ProjectsListProps extends MySkillsStyledProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  ...rest
}) => {
  return (
    <ProjectsListStyled {...rest}>
      <Text h3>¿Qué proyectos realicé?</Text>
      <Grid.Container gap={2} css={{ p: "0" }} justify="center">
        {projects.map((project, index) => (
          <Grid key={project.name + "-" + index} sm={6}>
            <ProjectCard
              project={{ description: project.description, name: project.name }}
            />
          </Grid>
        ))}
      </Grid.Container>
    </ProjectsListStyled>
  );
};
