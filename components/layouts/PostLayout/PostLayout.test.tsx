import { PostLayout } from "./index";
import { render, screen } from "@testing-library/react";

describe("<PostLayout />", () => {
  beforeEach(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    // Para Mockear el hook useRouter
    // https://stackoverflow.com/questions/69125633/mocking-nextjs-router-events-with-jest
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
  });
  it("should render with content", () => {
    render(
      <PostLayout metadata={{}}>
        <h1>Title</h1>
      </PostLayout>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
