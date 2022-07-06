import { render, screen } from "@testing-library/react";
import { Navbar } from "../../../components/ui";

beforeEach(() => {
  // Para Mockear el hook useRouter
  // https://stackoverflow.com/questions/69125633/mocking-nextjs-router-events-with-jest
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
  render(<Navbar />);
});

describe("Navigation", () => {
  it("renders navigation list", async () => {
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });
});
