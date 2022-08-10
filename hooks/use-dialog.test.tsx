import { render, act } from "@testing-library/react";

import { useDialog } from "./useDialog";

function setup(initialOpen?: boolean): ReturnType<typeof useDialog> {
  const returnVal: any = {};
  const TestComponent: React.FC = () => {
    Object.assign(returnVal, useDialog(initialOpen));
    return null;
  };
  render(<TestComponent />);
  return returnVal;
}

describe("useDialog", () => {
  it("test hook when dont have initial open arg", () => {
    // intenté destructurar la respuesta de dialog, pero me daba error con la variable "open"
    const dialog = setup();

    // assert initial state
    expect(dialog.open).toBe(false);

    // open dialog
    act(() => {
      dialog.handleOpen();
    });

    // assert new state
    expect(dialog.open).toBe(true);

    // close dialog
    act(() => {
      dialog.handleClose();
    });

    // assert new state
    expect(dialog.open).toBe(false);

    // toogle dialog
    act(() => {
      dialog.handleToggle();
    });

    // assert new state
    expect(dialog.open).toBe(true);

    // toogle dialog
    act(() => {
      dialog.handleToggle();
    });

    // assert new state
    expect(dialog.open).toBe(false);
  });
  it("test hook when have initial open as true", () => {
    const dialog = setup(true);

    // assert initial state
    expect(dialog.open).toBe(true);

    // close dialog
    act(() => {
      dialog.handleClose();
    });

    // assert new state
    expect(dialog.open).toBe(false);

    // open dialog
    act(() => {
      dialog.handleOpen();
    });

    // assert new state
    expect(dialog.open).toBe(true);

    // toogle dialog
    act(() => {
      dialog.handleToggle();
    });

    // assert new state
    expect(dialog.open).toBe(false);

    // toogle dialog
    act(() => {
      dialog.handleToggle();
    });

    // assert new state
    expect(dialog.open).toBe(true);
  });
});
