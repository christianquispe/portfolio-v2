import { render, screen } from "@testing-library/react";

import { MySkills } from "./index";

import { IconsId } from "@/interfaces";

describe("<MySkills />", () => {
  const mockSkills = [
    { name: "Skill1", web: "Webskill.com", iconId: IconsId.GitHub },
    { name: "Skill2", web: "Webskill.com", iconId: IconsId.GitHub },
    { name: "Skill3", web: "Webskill.com", iconId: IconsId.GitHub },
  ];

  it("should render", () => {
    render(<MySkills skills={mockSkills} />);
    const skills = screen.getAllByRole("listitem");
    expect(skills).toHaveLength(3);
  });
});
