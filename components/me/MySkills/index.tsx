import { ComponentPropsWithoutRef } from "react";
import { useTranslations } from "next-intl";
import { Checkbox, Text } from "@nextui-org/react";

import { useMounted, useSkills } from "@/hooks";

import { Icon } from "@/components/ui";

import { Skill } from "@/interfaces";

import {
  SkillItemStyled,
  SkillsListStyled,
  MySkillsStyled,
  MySkillsHeaderStyled,
} from "./styles";

type MySkillsStyledProps = ComponentPropsWithoutRef<typeof MySkillsStyled>;

interface MySkillsProps extends MySkillsStyledProps {
  skills: Skill[];
  levels: string[];
}

export const MySkills: React.FC<MySkillsProps> = ({
  skills: initSkills,
  levels,
  ...rest
}) => {
  const { isMounted } = useMounted();
  const { skills, filterSkills } = useSkills(initSkills);
  const t = useTranslations("Index.Skills");

  return (
    <MySkillsStyled {...rest}>
      <Text h3>{t("title")}</Text>
      <MySkillsHeaderStyled>
        <Text>{t("description")}</Text>
        {isMounted ? (
          <Checkbox.Group
            label={t("filterLabel")}
            orientation="horizontal"
            color="secondary"
            defaultValue={levels}
            onChange={filterSkills}
          >
            {levels.map((level, index) => (
              <Checkbox key={`${level}-${index}`} value={level} size="sm">
                {t(level)}
              </Checkbox>
            ))}
          </Checkbox.Group>
        ) : null}
      </MySkillsHeaderStyled>
      <SkillsListStyled>
        {skills.map((item, index) => (
          <SkillItemStyled key={item + " " + index}>
            {typeof item.icon === "string" ? (
              <Icon alt={item.name} id={item.icon} filled size={20} />
            ) : (
              <>{item.icon}</>
            )}
            <span className="only-desktop">{item.name}</span>
          </SkillItemStyled>
        ))}
      </SkillsListStyled>
    </MySkillsStyled>
  );
};
