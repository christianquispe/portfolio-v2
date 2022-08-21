import { screen } from "@testing-library/react";

import { withIntl } from "@/test-utils";

import { Header } from "./";

function setup() {
  withIntl(<Header />, ["layout"]);
}

// Para poder probar el comportamiento del scroll
// las pruebas debes ejecutarse en el navagador
// https://github.com/testing-library/react-testing-library/issues/671
describe("<Header />", () => {
  it("should render", () => {
    setup();
  });
  it("should content", () => {
    setup();
    expect(screen.getByText(/christian quispe/i)).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
