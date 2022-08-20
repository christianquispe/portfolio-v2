import { LenguageSection } from "./index";
import { render, screen } from "@testing-library/react";

describe("<LenguagesSection />", () => {
  it("should render", () => {
    render(<LenguageSection posts={[]} />);
  });
  it("should show content", () => {
    render(<LenguageSection posts={[]} />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/lenguajes para un front end/i);
  });
  it("should render posts", () => {
    const fakePosts = [
      {
        title: "html",
        description: "Html es genial",
        icon: "/html-icon.png",
        extension: ".html",
        slug: "html",
        imgAlt: "Icono de html",
      },
    ];
    render(<LenguageSection posts={fakePosts} />);
    expect(screen.getByText(fakePosts[0].description)).toBeInTheDocument();
  });
});
