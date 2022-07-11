import { screen } from "@testing-library/react";

import { BurgerBtn } from "@/components/ui";

import { setupComponentForTest } from "@/utils/utils-test";

describe("<BurgerBtn />", () => {
  // let open = false;

  // const handleOpen = () => {
  //   open = true;
  // };

  // const handleClose = () => {
  //   open = false;
  // };

  // it("renders navigation list", async () => {
  //   const { user, container } = setupComponentForTest(
  //     <BurgerBtn active={open} onClose={handleClose} onOpen={handleOpen} />
  //   );
  //   const button = screen.getByRole("button");
  //   console.log(open, "antes de ser clickeado");
  //   screen.debug();
  //   await user.click(button);
  //   console.log(open, "despues de ser clickeado");
  //   // expect(button).toHaveClass("closable");
  //   setupComponentForTest(
  //     <BurgerBtn active={open} onClose={handleClose} onOpen={handleOpen} />
  //   );
  //   screen.debug();
  // });

  it("<BurgerBtn active={false} />", async () => {
    setupComponentForTest(
      <BurgerBtn active={false} onClose={() => {}} onOpen={() => {}} />
    );
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("closable");
  });
  it("<BurgerBtn active={false} />", async () => {
    setupComponentForTest(
      <BurgerBtn active={true} onClose={() => {}} onOpen={() => {}} />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("closable");
  });
});
