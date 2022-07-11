import { screen, render } from "@testing-library/react";

import { MainLayout } from "@/components/layouts";

describe("<MainLayout />", () => {
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
  it("render showQr button", () => {
    render(
      <MainLayout metadata={{}}>
        <h1>Title</h1>
      </MainLayout>
    );
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
