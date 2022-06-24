import { Card, Grid, Text } from "@nextui-org/react";
import Image from "next/image";

import { ImgWrapper } from "./styles";

interface LenguageCardProps {
  title: string;
  description: string;
  imgSrc: string;
  extension: string;
}

export const LenguageCard: React.FC<LenguageCardProps> = ({
  title,
  description,
  imgSrc,
  extension,
}) => {
  return (
    <Card css={{ p: "$6" }}>
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
