import { render, screen } from "@testing-library/react";
import { MainLayout } from "../components/layouts";
import Home from "../pages/index";

beforeEach(() => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: "/",
    asPath: "/",
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));

  render(
    <MainLayout metadata={{ title: "Christian Test" }}>
      <Home />
    </MainLayout>
  );
});

describe("Home", () => {
  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /hola, soy christian/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
