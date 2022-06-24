import { Grid, Text } from "@nextui-org/react";

import { LenguageCard } from "../LenguageCard";

import { SectionLenguagesStyled } from "./styles";

export const LenguageSection: React.FC = ({}) => {
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
        <Grid xs={12} sm={6} lg={4}>
          <LenguageCard
            title="HTML5"
            extension=".html"
            description="Es el lenguaje de marcado, con él podemos estructurar todas nuestras webs. Tiene un valor semántico con el que le decimos a los navegadores qué es cada elemento."
            imgSrc="/html-icon.png"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <LenguageCard
            title="CSS3"
            extension=".css"
            description="Es un lenguaje que maneja el diseño y presentación de las páginas web. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas."
            imgSrc="/css-icon.png"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <LenguageCard
            title="Javascript"
            extension=".js"
            description="A diferencia de HTML, y CSS, Javascript es una lenguaje de programación que funciona en los navegadores de forma nativa (lenguaje interpretado sin necesidad de compilación)."
            imgSrc="/html-icon.png"
          />
        </Grid>
      </Grid.Container>
    </SectionLenguagesStyled>
  );
};
