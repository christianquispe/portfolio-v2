import { Text } from "@nextui-org/react";

import { MainLayout } from "../components/layouts";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Acerca de la sección
      </Text>
      <Text>
        Todo el contenido que pienso ingresar en esta sección será información
        útil que le sirva a mi hermano en su aprendizaje como desarrollador.
        Quizá también me sirva a mi para tomar apuntes de mis propias
        investigaciones y documentarlos aquí.
      </Text>
      <Text>
        En cualquiera de la casos, quería advertir a los lectures (si es que
        alguien visita estas páginas) que lo redactado en los párrafos a
        continuación está expuesto a contener fallas, de ser el caso y contar
        con mejor información sientase libre de generar un <code>issue</code> o
        en el mejor de los casos un <code>pull request</code>.
      </Text>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout
    title="Christian Blog"
    description="Escribo este diarion para que mi hermano aprenda a desarrollar"
  >
    {page}
  </MainLayout>
);

export default Home;
