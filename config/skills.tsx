import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
  SiTestinglibrary,
  SiDocker,
} from "react-icons/si";
import { GrGraphQl, GrNode } from "react-icons/gr";

import { Skill } from "@/interfaces";

export const SKILLS_LIST: Skill[] = [
  {
    name: "HTML",
    level: "high",
    icon: <AiFillHtml5 size={20} />,
  },
  {
    name: "CSS",
    level: "high",
    icon: <DiCss3 size={20} />,
  },
  {
    name: "JavaScript",
    level: "high",
    icon: <SiJavascript size={20} />,
  },
  {
    name: "Typescript",
    level: "high",
    icon: <SiTypescript size={20} />,
  },
  {
    name: "React.js",
    level: "high",
    icon: <DiReact size={20} />,
  },
  {
    name: "Next.js",
    level: "high",
    icon: <SiNextdotjs size={20} />,
  },
  {
    name: "Graphql",
    level: "high",
    icon: <GrGraphQl size={20} />,
  },
  {
    name: "Node",
    level: "medium",
    icon: <GrNode size={20} />,
  },
  {
    name: "Jest",
    level: "medium",
    icon: <SiJest size={20} />,
  },
  {
    name: "React Testing Library",
    level: "medium",
    icon: <SiTestinglibrary size={20} />,
  },
  {
    name: "MongoDB",
    level: "medium",
    icon: <SiMongodb size={20} />,
  },
  {
    name: "Docker",
    level: "low",
    icon: <SiDocker size={20} />,
  },
];

export const SKILLS_LEVELS  = ["high", "medium", "low"]
