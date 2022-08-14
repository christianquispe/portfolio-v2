import { IconsId } from "@/interfaces";

interface Skill {
  name: string;
  web: string;
  iconId: IconsId;
}

interface MySkillsProps {
  skills: Skill[];
}

export const MySkills: React.FC<MySkillsProps> = ({ skills }) => {
  return (
    <ul>
      {skills.map((item, index) => (
        <li key={item + " " + index}>{item.name}</li>
      ))}
      {/* <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Typescript</li>
      <li>Reactjs</li>
      <li>Nextjs</li>
      <li>Graphql</li> */}
    </ul>
  );
};
