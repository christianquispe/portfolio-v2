import Image from "next/image";
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
        Sobre mi
      </Text>
      <Image
        height={500}
        width={500}
        src="/christian-vcard.png"
        alt="Christian Quispe vCard"
      />
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout
    metadata={{
      title: "Christian Quispe",
      description:
        "Hola soy Christian Quispe, y esta es mi web. Aquí estará mi información laboral y algunos datos extra.",
    }}
  >
    {page}
  </MainLayout>
);

export default Home;
