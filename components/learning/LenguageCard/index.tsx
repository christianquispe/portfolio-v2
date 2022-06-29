import { useRouter } from "next/router";
import Image from "next/image";
import { Card, Grid, Text } from "@nextui-org/react";

import { ImgWrapper } from "./styles";

interface LenguageCardProps {
  title: string;
  description: string;
  imgSrc: string;
  extension: string;
  slug: string;
}

export const LenguageCard: React.FC<LenguageCardProps> = ({
  title,
  description,
  imgSrc,
  extension,
  slug,
}) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/blog/lenguages/${slug}`)}
      css={{ p: "$6" }}
      disableRipple={false}
      isHoverable
      isPressable
    >
      <Card.Header>
        <ImgWrapper>
          <Image alt={title} src={imgSrc || ""} width="34px" height="34px" />
        </ImgWrapper>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {title}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{description}</Text>
      </Card.Body>
      <Card.Footer>
        <Text>
          Los archivos que escribimos en este lenguaje llevan la extensión{" "}
          <code>{extension}</code>
        </Text>
      </Card.Footer>
    </Card>
  );
};
