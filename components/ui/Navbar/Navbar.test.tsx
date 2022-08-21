import { screen } from "@testing-library/react";
import { Navbar } from "@/components/ui";
import { withIntl } from "@/test-utils";

function setupNavbar() {
  return { ...withIntl(<Navbar />, ["layout"]) };
}

describe("<NavBar />", () => {
  it("should render", () => {
    setupNavbar();
  });
  it("should render content link list", async () => {
    const {messages} = setupNavbar()
    const [aboutMe, blog] = await screen.findAllByRole("listitem");
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
    expect(aboutMe.textContent).toBe(messages["Layout"]["Navbar"]["aboutMe"]);
    expect(blog.textContent).toBe("Blog");
  });
  it("link list must be closed on first load", () => {
    setupNavbar();
    const list = screen.getByRole("list");
    expect(list).not.toHaveClass("open");
  });
});
