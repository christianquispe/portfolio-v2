import { render, screen } from "@testing-library/react";

import { BurgerBtn } from "@/components/ui";

import { setupComponentForTest } from "@/utils/utils-test";

describe("<BurgerBtn />", () => {
  it("should render correctly", () => {
    render(<BurgerBtn active={false} onClose={jest.fn()} onOpen={jest.fn()} />);
  });
  it("should trigger event when modal is open and close", async () => {
    let open = false;
    const closeHandler = jest.fn().mockImplementation(() => (open = false));
    const openHandler = jest.fn().mockImplementation(() => (open = true));
    const { user, rerender } = setupComponentForTest(
      <BurgerBtn active={open} onClose={closeHandler} onOpen={openHandler} />
    );
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("closable");
    await user.click(button);
    expect(openHandler).toHaveBeenCalled();
    rerender(
      <BurgerBtn active={open} onClose={closeHandler} onOpen={openHandler} />
    );
    expect(button).toHaveClass("closable");
    await user.click(button);
    expect(closeHandler).toHaveBeenCalled();
    rerender(
      <BurgerBtn active={open} onClose={closeHandler} onOpen={openHandler} />
    );
    expect(button).not.toHaveClass("closable");
  });
});
