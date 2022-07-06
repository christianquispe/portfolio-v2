import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function setupComponentForTest(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
