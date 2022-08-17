import { GetStaticProps } from 'next';

import { Banner, MeSection } from "@/components/me";
import { MainLayout } from "@/components/layouts";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <MainLayout
      metadata={{
        title: "Christian Quispe",
        description:
          "Hola soy Christian Quispe, y esta es mi web. Aquí estará mi información laboral y algunos datos extra.",
      }}
    >
      <Banner />
      <MeSection />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/layout/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
    },
  };
};

export default Home;
