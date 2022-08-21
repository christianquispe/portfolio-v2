import { screen } from "@testing-library/react";

import { MainLayout } from "@/components/layouts";

import { withIntl } from "@/test-utils";

describe("<MainLayout />", () => {
  it("render showQr button", () => {
    withIntl(
      <MainLayout metadata={{}}>
        <h1>Title</h1>
      </MainLayout>,
      ["layout"]
    );
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
