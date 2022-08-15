import { ComponentPropsWithoutRef } from "react";
import { Text } from "@nextui-org/react";

import { Icon } from "@/components/ui";

import { IconsId } from "@/interfaces";

import { SkillItemStyled, SkillsListStyled, MySkillsStyled } from "./styles";

interface Skill {
  name: string;
  web: string;
  iconId: IconsId;
}

type MySkillsStyledProps = ComponentPropsWithoutRef<typeof MySkillsStyled>;

interface MySkillsProps extends MySkillsStyledProps {
  skills: Skill[];
}

export const MySkills: React.FC<MySkillsProps> = ({ skills, ...rest }) => {
  return (
    <MySkillsStyled {...rest}>
      <Text h3>¿Con qué tecnologías trabajo?</Text>
      <div>
        <Text>Uso las siguientes tecnologías para trabajar</Text>
        <SkillsListStyled>
          {skills.map((item, index) => (
            <SkillItemStyled key={item + " " + index}>
              <Icon alt={item.name} id={item.iconId} filled size={20} />
              {item.name}
            </SkillItemStyled>
          ))}
        </SkillsListStyled>
      </div>
    </MySkillsStyled>
  );
};
