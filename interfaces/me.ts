import { IconsId } from './components';

export interface Project {
  name: string;
  description: string;
  img: string
  stack: string[]
  tags: string[]
  url: string
}

export type SkillLevel = "high" | "medium" | "low"

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: IconsId | React.ReactElement;
}