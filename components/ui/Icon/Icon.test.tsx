import { render, screen } from "@testing-library/react";
import { IconsId } from "@/interfaces";

import { Icon } from "./";

describe("<Icon />", () => {
  it("should render", () => {
    const altText = "Icono de la red social LinkedIn";
    render(<Icon alt={altText} id={IconsId.LinkedIn} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(altText);
  });
});
