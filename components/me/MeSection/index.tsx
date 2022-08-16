import { Text, Container, theme } from "@nextui-org/react";

import { ProjectsList, MySkills, MeCard } from "@/components/me";

import { SKILLS_LIST, PROJECTS_LIST } from "@/config";

import { MeSectionStyled } from "./styles";

export const MeSection: React.FC = () => {
  return (
    <Container
      css={{
        "@xsMax": {
          padding: 0,
          backgroundColor: "$accents0",
        },
        "@md": {
          maxWidth: `${theme.breakpoints.lg}`,
          backgroundColor: "initial",
        },
      }}
    >
      <MeSectionStyled>
        <Text h2 className="title">
          Sobre mí
        </Text>
        <div className="wrapper-me-content">
          <MeCard className="me" />
          <MySkills className="skills" skills={SKILLS_LIST} />
          <ProjectsList className="projects" projects={PROJECTS_LIST} />
        </div>
      </MeSectionStyled>
    </Container>
  );
};
