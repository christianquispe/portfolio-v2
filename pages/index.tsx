import { Banner, MeSection } from "@/components/me";
import { MainLayout } from "@/components/layouts";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Banner />
      <MeSection />
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
