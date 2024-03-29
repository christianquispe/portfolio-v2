import { Text, Card, Button, Link } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import { Project } from "@/interfaces";

import { CardFooterStyled, IconsStyled } from "./styles";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const t = useTranslations("Index.Projects.Item")

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
            <Text h3>{project.name}</Text>
            <IconsStyled>{project?.stack?.join(", ")}</IconsStyled>
          </div>
          <div className="actions">
            <Link href={project.urlCode} target="_blank" rel="noreferrer">
              <Button color="secondary" flat auto>
                {t('code')}
              </Button>
            </Link>
            <Link href={project.url} target="_blank" rel="noreferrer">
              <Button color="gradient" bordered auto>
                {t('visit')}
              </Button>
            </Link>
          </div>
        </CardFooterStyled>
      </Card>
    </article>
  );
};
