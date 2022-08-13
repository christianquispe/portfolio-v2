import { Text } from "@nextui-org/react";

interface Project {
  name: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      <Text h3>{project.name}</Text>
    </div>
  );
};
