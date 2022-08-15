import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { Text } from "@nextui-org/react";

import { SocialLinks } from "@/components/me";

import { MeCardStyled } from "./styles";

type MeCardProps = ComponentPropsWithoutRef<typeof MeCardStyled>;

export const MeCard: React.FC<MeCardProps> = ({ ...props }) => {
  return (
    <MeCardStyled {...props}>
      <div className="container-avatar">
        <Image
          src="/avatar.jpg"
          alt="Foto de Christian Quispe Camasca"
          height={50}
          width={50}
          layout="responsive"
        />
        <SocialLinks className="social-media-links" />
      </div>
      <div>
        <Text h3>¿Quién soy?</Text>
        <div>
          <Text>
            I am a Front-end developer with a passion for creating beautiful and
            functional web applications. I have a strong background in web
            development and have worked with a variety of technologies,
            including HTML, CSS, JavaScript, Typescript, React, Nextjs and
            Graphql.
          </Text>
        </div>
      </div>
    </MeCardStyled>
  );
};
