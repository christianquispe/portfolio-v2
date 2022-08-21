import { screen } from "@testing-library/react";

import { withIntl } from "@/test-utils";

import { SKILLS_LEVELS, SKILLS_LIST } from "@/config";

import { MySkills } from "./index";

describe("<MySkills />", () => {
  it("should render", () => {
    withIntl(<MySkills skills={SKILLS_LIST} levels={SKILLS_LEVELS} />, [
      "index",
    ]);
    const skills = screen.getAllByRole("listitem");
    expect(skills).toHaveLength(SKILLS_LIST.length);
  });
});
