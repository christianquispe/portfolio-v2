import { IconsId } from './components';

export interface Project {
  name: string;
  description: string;
}

export type SkillLevel = "high" | "medium" | "low"

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: IconsId | React.ReactElement;
}