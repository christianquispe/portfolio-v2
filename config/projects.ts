import { Project } from "@/interfaces";

export const PROJECTS_LIST: Project[] = [
  {
    name: "React context crud",
    description: "Simple crud usando useContext",
    url: "https://crud-react-context.vercel.app/",
    stack: ["React", "Typescript", "React Hooks"],
    img: "/projects/crud-use-context.png",
    tags: ["sample"],
  },
  {
    name: "Dely landing page",
    description: "Landing page de la compañia Dely",
    url: "https://dely.pe/",
    stack: ["React", "Typescript", "React Hooks"],
    img: "/projects/dely.png",
    tags: ["responsive", "landing", "production"],
  },
  {
    name: "My old portfolio",
    description: "Esta fue la primera version de mi portafolio",
    url: "https://old-christianquispe.vercel.app/",
    stack: ["Nextjs", "Typescript", "React Hooks", "Tailwindcss"],
    img: "/projects/old-portfolio.png",
    tags: ["responsive", "landing", "production"],
  },
];
