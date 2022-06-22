import { Text } from "@nextui-org/react";

import { MainLayout } from "../components/layouts";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <Text
      h1
      size={30}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="bold"
    >
      Para Johan
    </Text>
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
