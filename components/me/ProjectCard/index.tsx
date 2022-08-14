import { Text, Card, Col, Row, Button } from "@nextui-org/react";

import { Project } from "@/interfaces";

import { CardFooterStyled, CardHeaderStyled } from "./styles";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article>
      <Card>
        <CardHeaderStyled>
          <Col>
            <Text h3 color="white">
              {project.name}
            </Text>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              {project.description}
            </Text>
          </Col>
        </CardHeaderStyled>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="https://nextui.org/images/card-example-5.jpeg"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <CardFooterStyled>
          <Row>
            <Col>
              <Row>
                <Col span={3}>iconos</Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Demo
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </CardFooterStyled>
      </Card>
    </article>
  );
};
