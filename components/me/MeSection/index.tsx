import { Text, Container, theme } from "@nextui-org/react";

import { ProjectsList, MySkills, MeCard } from "@/components/me";

import { IconsId } from "@/interfaces";

import { MeSectionStyled } from "./styles";

const hardcodeProjects = [
  { name: "Test Project", description: "Prueba" },
  { name: "Test Project 2", description: "Prueba 2" },
  { name: "Test Project 3", description: "Prueba 3" },
  { name: "Test Project 4", description: "Prueba 4" },
];

const hardcodeSkills = [
  {
    name: "HTML",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "CSS",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "JavaScript",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Typescript",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "React.js",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Next.js",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Graphql",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Node",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Jest",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "MongoDB",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
  {
    name: "Go",
    web: "klfadjskljfds",
    iconId: IconsId.GitHub,
  },
];

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
          <MySkills className="skills" skills={hardcodeSkills} />
          <ProjectsList className="projects" projects={hardcodeProjects} />
        </div>
      </MeSectionStyled>
    </Container>
  );
};
