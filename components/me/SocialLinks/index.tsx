import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import { Icon } from "@/components/ui";

import { IconsId } from "@/interfaces";

import { SocialMediaItemStyled, SocialMediaStyled } from "./styles";

const SOCIAL_LINKS = [
  {
    iconId: IconsId.LinkedIn,
    link: "https://www.linkedin.com/in/christian-quispe-camasca-171266192/",
    name: "LinkedIn",
  },
  {
    iconId: IconsId.GitHub,
    link: "https://github.com/christianquispe",
    name: "GitHub",
  },
];

type SocialLinksProps = ComponentPropsWithoutRef<typeof SocialMediaStyled>;

export const SocialLinks: React.FC<SocialLinksProps> = ({ ...props }) => {
  return (
    <SocialMediaStyled {...props}>
      {SOCIAL_LINKS.map((socialItem, index) => (
        <SocialMediaItemStyled key={socialItem.iconId + " " + index}>
          <Link href={socialItem.link}>
            <a target="_blank" rel="noreferrer">
              <Icon
                alt={socialItem.name}
                id={socialItem.iconId}
                size={25}
                filled
              />
            </a>
          </Link>
        </SocialMediaItemStyled>
      ))}
    </SocialMediaStyled>
  );
};
