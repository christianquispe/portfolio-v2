import { render, screen } from "@testing-library/react";

import { Project } from "@/interfaces";

import { ProjectCard } from "./index";

const mockProjects: Project[] = [
  {
    name: "Crud",
    description: "Este proyecto",
    tags: ["responsive", "some"],
    img: "/algo.jpg",
    url: "/slkfjadsklj",
    stack: ["test", "algo"],
    urlCode: "askfjdksaj"
  },
];

test("<ProjectCard />", () => {
  render(<ProjectCard project={mockProjects[0]} />);
  const title = screen.getByRole("heading", {
    name: "Crud",
  });
  const stack = screen.getByText(mockProjects[0].stack.join(', '));
  expect(title).toBeInTheDocument();
  expect(stack).toBeInTheDocument();
});
