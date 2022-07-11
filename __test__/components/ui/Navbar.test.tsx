import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/ui";

describe("Navigation", () => {
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
  render(<Navbar />);
  it("renders navigation list", async () => {
    const [aboutMe, blog] = await screen.findAllByRole("listitem");
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
    expect(aboutMe.textContent).toBe("Sobre mi");
    expect(blog.textContent).toBe("Blog");
  });
});
