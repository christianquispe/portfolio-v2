import { ComponentPropsWithoutRef } from "react";

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
          <a href={socialItem.link} target="_blank" rel="noreferrer">
            <Icon
              alt={socialItem.name}
              id={socialItem.iconId}
              size={25}
              filled
            />
          </a>
        </SocialMediaItemStyled>
      ))}
    </SocialMediaStyled>
  );
};
