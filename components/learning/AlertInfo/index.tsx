import { Text } from "@nextui-org/react";

export const AlertInfo: React.FC = ({}) => {
  return (
    <blockquote style={{ margin: 0 }}>
      <Text
        h5
        size={20}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Acerca de la sección
      </Text>
      <Text>
        Todo el contenido que pienso llenar en esta sección será información
        útil que le sirva a mi hermano en su aprendizaje como desarrollador.
        Quizá también me sirva a mi para tomar apuntes de mis propias
        investigaciones y documentarlos aquí.
      </Text>
      <Text>
        En cualquiera de la casos, quería advertir a los lectures (si es que
        alguien visita estas páginas) que lo redactado en los párrafos a
        continuación está expuesto a contener errores, de ser el caso y contar
        con mejor información sientase libre de generar un <code>issue</code> o
        en el mejor de los casos un <code>pull request</code>.
      </Text>
    </blockquote>
  );
};