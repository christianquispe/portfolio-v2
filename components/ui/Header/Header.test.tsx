import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "../../../test-utils/createMockRouter";

import { Header } from "./";

// Para poder probar el comportamiento del scroll
// las pruebas debes ejecutarse en el navagador
// https://github.com/testing-library/react-testing-library/issues/671
describe("<Header />", () => {
  it("should render", () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
  });
  it("should content", () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
    expect(screen.getByText(/christian quispe/i)).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
