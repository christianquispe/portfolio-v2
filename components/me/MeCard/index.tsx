import { ComponentPropsWithoutRef } from "react";
import { useRouter } from 'next/router';
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button, Text, User, useTheme, Link } from "@nextui-org/react";

import { SocialLinks } from "@/components/me";

import { Icon } from "@/components/ui";

import { IconsId } from "@/interfaces";

import { DetailsStyled, MeCardStyled, ContactDataStyled } from "./styles";

type MeCardProps = ComponentPropsWithoutRef<typeof MeCardStyled>;

export const MeCard: React.FC<MeCardProps> = ({ ...props }) => {
  const { isDark } = useTheme();
  const { locale } = useRouter();
  const t = useTranslations("Index.MeCard");

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
          src={
            isDark ? "/logo-transparente-blanco.png" : "/logo-transparente.png"
          }
          altText="Logo de Christian Quispe"
        >
          Programador Front End
        </User>
      </div>
      <DetailsStyled>
        <Text h3>¿Quién soy?</Text>
        <div>
          <Text>{t("description")}</Text>
        </div>
        <ContactDataStyled>
          <ul>
            <li>
              <Icon
                className="mail-icon"
                id={IconsId.MailFilled}
                alt="Mail"
                size={16}
              />
              <Link
                color="secondary"
                href="mailto:christianquispecamasca@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                christianquispecamasca@gmail.com
              </Link>
            </li>
            <li>
              <Icon id={IconsId.PhoneFilled} alt="Phone" size={16} />
              +51 952350324
            </li>
          </ul>
          <SocialLinks />
        </ContactDataStyled>
        <Link href={`/resume_${locale?.toLocaleUpperCase()}.pdf`} target="_blank" css={{ display: "block" }}>
          <Button
            color="secondary"
            shadow
            css={{ display: "block", w: "100%" }}
          >
            {t("seeResume")}
          </Button>
        </Link>
      </DetailsStyled>
    </MeCardStyled>
  );
};
