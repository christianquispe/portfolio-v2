import { Text, Card, Col, Row, Button } from "@nextui-org/react";

import { Project } from "@/interfaces";

import { CardFooterStyled, IconsStyled } from "./styles";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article>
      <Card>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={project.img}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <CardFooterStyled>
          <div className="details">
            <Text h3 color="white">
              {project.name}
            </Text>
            <IconsStyled>{project?.stack?.join(", ")}</IconsStyled>
          </div>
          <Button flat auto rounded className="actions" css={{ color: "#94f9f0", bg: "#94f9f026" }}>
            <Text
              css={{ color: "inherit" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Demo
            </Text>
          </Button>
        </CardFooterStyled>
      </Card>
    </article>
  );
};
