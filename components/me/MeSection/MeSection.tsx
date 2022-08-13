import { render, screen } from "@testing-library/react";

import { MeSection } from "./index";

function setup() {
  render(<MeSection />);
}

describe("<MeSection />", () => {
  it("Should rendered", () => {
    setup();
    const texto = screen.getByText(
      "I am a Front-end developer with a passion for creating beautiful and functional web applications"
    );
    expect(texto).toBeInTheDocument();
  });
});
