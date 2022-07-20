import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/ui";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "@/test-utils";

describe("<NavBar />", () => {
  it("should render", () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );
  });
  it("should render content link list", async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );
    const [aboutMe, blog] = await screen.findAllByRole("listitem");
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
    expect(aboutMe.textContent).toBe("Sobre mi");
    expect(blog.textContent).toBe("Blog");
  });
  it("link list must be closed on first load", () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );
    const list = screen.getByRole("list");
    expect(list).not.toHaveClass("open");
  });
});
