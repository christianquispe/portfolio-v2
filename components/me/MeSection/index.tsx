import Image from "next/image";
import { Text, Container, theme } from "@nextui-org/react";

import { ProjectsList, MySkills } from "@/components/me";

import { MeSectionStyled } from "./styles";
import { IconsId } from "../../../interfaces/components";

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
          <article className="me section-into-me">
            <div className="container-avatar">
              <Image
                src="/avatar.jpg"
                alt="Foto de Christian Quispe Camasca"
                height={50}
                width={50}
                layout="responsive"
              />
            </div>
            <div>
              <Text h3>¿Quién soy?</Text>
              <div>
                <Text>
                  I am a Front-end developer with a passion for creating
                  beautiful and functional web applications. I have a strong
                  background in web development and have worked with a variety
                  of technologies, including HTML, CSS, JavaScript, Typescript,
                  React, Nextjs and Graphql.
                </Text>
              </div>
            </div>
          </article>
          <article className="skills section-into-me">
            <Text h3>¿Con qué tecnologías trabajo?</Text>
            <div>
              <Text>Uso las siguientes tecnologías para trabajar</Text>
              <MySkills
                skills={[
                  {
                    name: "JavaScript",
                    web: "klfadjskljfds",
                    iconId: IconsId.GitHub,
                  },
                  {
                    name: "CSS",
                    web: "klfadjskljfds",
                    iconId: IconsId.GitHub,
                  },
                  {
                    name: "HTML",
                    web: "klfadjskljfds",
                    iconId: IconsId.GitHub,
                  },
                ]}
              />
            </div>
          </article>
          <section className="projects section-into-me">
            <Text h3>¿Qué proyectos realicé?</Text>
            <ProjectsList
              projects={[
                { name: "Test Project", description: "Prueba" },
                { name: "Test Project 2", description: "Prueba 2" },
                { name: "Test Project 3", description: "Prueba 3" },
                { name: "Test Project 4", description: "Prueba 4" },
              ]}
            />
          </section>
        </div>
      </MeSectionStyled>
    </Container>
  );
};
