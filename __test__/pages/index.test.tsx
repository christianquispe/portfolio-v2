// import { screen } from "@testing-library/react";
import { withIntl } from "@/test-utils";

import Home from "../../pages/index";

describe("<Home />", () => {
  it("should render", () => {
    // const { messages } = withIntl(<Home />, ["index", "layout"]);
    withIntl(<Home />, ["index", "layout"]);

    // console.log(messages, "messages");
    // const heading = screen.getByRole("heading", {
      // name: "title",
    // });

    // expect(heading).toHaveTextContent(messages["Index"]["Banner"]["greet"])

    // expect(heading).toBeInTheDocument();
  });
});
