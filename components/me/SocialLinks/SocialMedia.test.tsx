import { render, screen } from "@testing-library/react";

import { SocialLinks } from "./index";

describe("<SocialMedia />", () => {
  it("should render", () => {
    render(<SocialLinks />);
  });
});
