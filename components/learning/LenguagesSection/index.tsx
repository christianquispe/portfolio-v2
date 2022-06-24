import { Grid, Text } from "@nextui-org/react";

import { LenguageCard } from "../LenguageCard";

import { SectionLenguagesStyled } from "./styles";

interface LenguageProps {
  posts: any[];
}

export const LenguageSection: React.FC<LenguageProps> = ({ posts }) => {
  return (
    <SectionLenguagesStyled>
      <Text
        h2
        size={25}
        transform="uppercase"
        css={{ fd: "column", dflex: "center" }}
      >
        Lenguajes para un
        <Text
          span
          size={30}
          transform="uppercase"
          css={{ color: "$purple500" }}
        >
          Front End
        </Text>
      </Text>
      <Grid.Container gap={2} justify="center">
        {posts.map((post) => (
          <Grid key={post.title} xs={12} sm={6} lg={4}>
            <LenguageCard
              title={post.title}
              extension={post.extensionFile}
              description={post.description}
              imgSrc={post.icon}
              slug={post.slug}
            />
          </Grid>
        ))}
      </Grid.Container>
    </SectionLenguagesStyled>
  );
};
