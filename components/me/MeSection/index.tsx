import Image from "next/image";

import { MeSectionStyled } from "./styles";
import { Text } from "@nextui-org/react";

export const MeSection: React.FC = () => {
  return (
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
                I am a Front-end developer with a passion for creating beautiful
                and functional web applications. I have a strong background in
                web development and have worked with a variety of technologies,
                including HTML, CSS, JavaScript, Typescript, React, Nextjs and
                Graphql.
              </Text>
            </div>
          </div>
        </article>
        <article className="skills section-into-me">
          <Text h3>¿Con qué tecnologías trabajo?</Text>
          <div>
            <Text>Uso las siguientes tecnologías para trabajar</Text>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>Reactjs</li>
              <li>Nextjs</li>
              <li>Graphql</li>
            </ul>
          </div>
        </article>
        <section className="projects section-into-me">
          <Text h3>¿Qué proyectos realicé?</Text>
        </section>
      </div>
    </MeSectionStyled>
  );
};
