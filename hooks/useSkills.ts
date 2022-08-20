import { useState, useEffect } from "react";

import { Skill } from "@/interfaces";

export const useSkills = (initSkills: Skill[]) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  const filterSkills = (levelsSelected: string[]) => {
    setSkills([
      ...initSkills.filter((skill) => levelsSelected.includes(skill.level)),
    ]);
  };

  const resetFilter = () => {
    setSkills([...initSkills]);
  };

  useEffect(() => {
    setSkills(initSkills);
  }, [initSkills]);

  return {
    skills,
    filterSkills,
    resetFilter,
  };
};
