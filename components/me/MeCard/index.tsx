import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { Text, User, useTheme } from "@nextui-org/react";

import { SocialLinks } from "@/components/me";

import { Icon } from "@/components/ui";

import { IconsId } from "@/interfaces";

import { DetailsStyled, MeCardStyled, ContactDataStyled } from "./styles";

type MeCardProps = ComponentPropsWithoutRef<typeof MeCardStyled>;

export const MeCard: React.FC<MeCardProps> = ({ ...props }) => {
  const { isDark } = useTheme()

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
        <User
          className="social-media-links"
          name="Christian Quispe"
          src={isDark ? "/logo-transparente-blanco.png" : "/logo-transparente.png"}
          altText="Logo de Christian Quispe"
        >
          Programador Front End
        </User>
      </div>
      <DetailsStyled>
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
        <ContactDataStyled>
          <ul>
            <li>
              <Icon id={IconsId.MailFilled} alt="Mail" size={16} />
              christianquispecamasca@gmail.com
            </li>
            <li>
              <Icon id={IconsId.PhoneFilled} alt="Phone" size={16} />
              +51 952350324
            </li>
          </ul>
          <SocialLinks />
        </ContactDataStyled>
      </DetailsStyled>
    </MeCardStyled>
  );
};
