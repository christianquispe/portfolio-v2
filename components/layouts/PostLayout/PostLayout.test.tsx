import { screen } from "@testing-library/react";

import { withIntl } from "@/test-utils";

import { PostLayout } from "./index";

describe("<PostLayout />", () => {
  it("should render with content", () => {
    withIntl(
      <PostLayout metadata={{}}>
        <h1>Title</h1>
      </PostLayout>,
      ["layout"]
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
