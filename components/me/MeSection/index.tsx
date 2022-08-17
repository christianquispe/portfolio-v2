import { Text, Container, theme } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import { ProjectsList, MySkills, MeCard } from "@/components/me";

import { SKILLS_LIST, PROJECTS_LIST, PROJECT_TAGS } from "@/config";

import { MeSectionStyled } from "./styles";

export const MeSection: React.FC = () => {
  const t = useTranslations("Index.AboutMe");

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
      <MeSectionStyled id="me">
        <Text h2 className="title">
          {t("title")}
        </Text>
        <div className="wrapper-me-content">
          <MeCard className="me" />
          <MySkills className="skills" skills={SKILLS_LIST} />
          <ProjectsList className="projects" projects={PROJECTS_LIST} projectTags={PROJECT_TAGS} />
        </div>
      </MeSectionStyled>
    </Container>
  );
};
