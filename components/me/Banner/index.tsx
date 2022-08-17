import { Text, Grid, Card, Row, Button, Container } from "@nextui-org/react";
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
                  <Button
                    auto
                    flat
                    rounded
                    css={{
                      borderRadius: "$xs", // radii.xs
                      border: "$space$1 solid transparent",
                      background: "$blue100", // colors.pink800
                      color: "$blue800",
                      height: "$12", // space[12]
                      boxShadow: "$md", // shadows.md
                      "&:hover": {
                        background: "$blue800",
                        color: "$blue100",
                      },
                      "&:active": {
                        background: "$blue200",
                      },
                      "&:focus": {
                        borderColor: "$blue400",
                      },
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      ¿Quién soy?
                    </Text>
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
