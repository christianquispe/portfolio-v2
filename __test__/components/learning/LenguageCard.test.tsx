import { RouterContext } from "next/dist/shared/lib/router-context";
import { screen, render } from "@testing-library/react";

import { LenguageCard } from "@/components/learning";

import { createMockRouter } from "../../../test-utils/createMockRouter";

describe("<LenguageCard />", () => {
  const cardData = {
    title: "TITLE",
    description: "DESCRIPTION",
    extension: "tsx",
    imgSrc: "/html-icon.png",
    slug: "html",
  };
  it("render component with props", async () => {
    render(<LenguageCard {...cardData} />);
    expect(screen.getByText(cardData.title)).toBeInTheDocument();
    expect(screen.getByText(cardData.description)).toBeInTheDocument();
    expect(screen.getByText(cardData.extension)).toBeInTheDocument();
  });
  it("when is clicked", async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <LenguageCard {...cardData} />
      </RouterContext.Provider>
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/blog/lenguages/${cardData.slug}`
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
