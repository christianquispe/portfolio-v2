import { ComponentPropsWithoutRef } from "react";
import { Text } from "@nextui-org/react";

import { Icon } from "@/components/ui";

import { Skill } from "@/interfaces";

import { SkillItemStyled, SkillsListStyled, MySkillsStyled } from "./styles";

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
              {typeof item.icon === "string" ? (
                <Icon alt={item.name} id={item.icon} filled size={20} />
              ) : (
                <>{item.icon}</>
              )}
              {item.name}
            </SkillItemStyled>
          ))}
        </SkillsListStyled>
      </div>
    </MySkillsStyled>
  );
};
