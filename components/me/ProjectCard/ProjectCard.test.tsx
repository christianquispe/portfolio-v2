import { render, screen } from "@testing-library/react";

import { ProjectCard } from "./index";

const mockProjects = [
  {
    name: "Crud",
    description: "Este proyecto es de prueba",
  },
];

test("<ProjectCard />", () => {
  render(<ProjectCard project={mockProjects[0]} />);
  const title = screen.getByRole("heading", {
    name: "Crud",
  });
  const description = screen.getByText(mockProjects[0].description);
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
