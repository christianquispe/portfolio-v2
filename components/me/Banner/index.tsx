import {
  Text,
  Grid,
  Card,
  Row,
  Button,
  Container,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { BannerStyled } from "./styles";

export const Banner: React.FC = ({}) => {
  const t = useTranslations("Index.Banner");

  return (
    <Container lg>
      <BannerStyled>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <div>
              <Text
                h1
                css={{
                  fontSize: "$xl5",
                  "@md": {
                    fontSize: "$xl8",
                  },
                }}
              >
                {t("greet")},
                <br /> {t("presentation")}
              </Text>
              <Text
                h2
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  fontSize: "$xl3",
                  "@md": {
                    fontSize: "$xl4",
                  },
                }}
              >
                Front End Developer
              </Text>
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <Card css={{ w: "100%", h: "400px" }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/banner-me.jpg"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt="Relaxing app background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="flex-end">
                  <Button color="secondary" auto flat rounded>
                    <NextLink href="/#me">
                      <Link css={{ color: "inherit" }}>¿Quién soy?</Link>
                    </NextLink>
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </BannerStyled>
    </Container>
  );
};
