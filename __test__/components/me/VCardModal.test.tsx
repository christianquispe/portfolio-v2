import { screen } from "@testing-library/react";

import { VCardModal } from "../../../components/me";

import { setupComponentForTest } from "../../../utils/utils-test";

describe("Modal vcard", () => {
  it("render showQr button", () => {
    const { getByRole } = setupComponentForTest(<VCardModal src="/tset" />);
    const button = getByRole("button", {
      name: "show qr",
    });
    expect(button).toBeInTheDocument();
  });
  it("show qr code after click the button", async () => {
    const { user } = setupComponentForTest(<VCardModal src="/tset" />);
    const button = screen.getByRole("button", {
      name: "show qr",
    });
    await user.click(button);
    const email = screen.getByText(/christianquispecamasca@gmail.com/);
    expect(email).toBeInTheDocument();
  });
});
