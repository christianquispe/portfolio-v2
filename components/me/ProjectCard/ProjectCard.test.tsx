import { render, screen } from "@testing-library/react";

import { ProjectCard } from "./index";

const mockProjects = [
  {
    name: "Crud",
  },
];

test("<ProjectCard />", () => {
  render(<ProjectCard project={mockProjects[0]} />);
  screen.getByRole("heading", {
    name: "Crud",
  });
});
