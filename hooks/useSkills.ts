import { useState, useEffect } from "react";

import { Skill } from "@/interfaces";

export const useSkills = (initSkills: Skill[]) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [allSkills, setAllSkills] = useState<Skill[]>([]);

  const filterSkills = (levelsSelected: string[]) => {
    if (!levelsSelected.length) {
      setSkills(allSkills);
    } else {
      setSkills([
        ...initSkills.filter((skill) => levelsSelected.includes(skill.level)),
      ]);
    }
  };

  const resetFilter = () => {
    setSkills([...initSkills]);
  };

  useEffect(() => {
    if (!allSkills.length) setAllSkills(initSkills);
    setSkills(initSkills);
  }, [initSkills]);

  return {
    skills,
    filterSkills,
    resetFilter,
  };
};
