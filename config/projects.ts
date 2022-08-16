import { Project } from "@/interfaces";

export const PROJECTS_LIST: Project[] = [
  {
    name: "React context crud",
    description: "Simple crud usando useContext",
    url: "https://crud-react-context.vercel.app/",
    urlCode: "https://github.com/christianquispe/crud-react-context",
    stack: ["React", "Typescript", "Tailwindcss"],
    img: "/projects/crud-use-context.png",
    tags: ["sample"],
  },
  {
    name: "Dely landing page",
    description: "Landing page de la compañia Dely",
    url: "https://dely.pe/",
    urlCode: "https://github.com/christianquispe/dely-landing-page",
    stack: ["React", "Typescript", "Bootstrap"],
    img: "/projects/dely.png",
    tags: ["responsive", "landing", "production"],
  },
  {
    name: "My old portfolio",
    description: "Esta fue la primera version de mi portafolio",
    url: "https://old-christianquispe.vercel.app/",
    urlCode: "https://github.com/christianquispe/portfolio-v2",
    stack: ["Nextjs", "Typescript", "Tailwindcss"],
    img: "/projects/old-portfolio.png",
    tags: ["responsive", "landing", "production"],
  },
  {
    name: "Portfolio",
    description: "Versión actual de mi portfolio",
    url: "https://christianquispe.vercel.app/",
    urlCode: "https://github.com/christianquispe/portfolio-v1",
    stack: ["Nextjs", "Typescript", "Nextui", "Jest", "React Testing Library"],
    img: "/projects/portfolio.png",
    tags: ["responsive", "landing", "production"],
  },
];
