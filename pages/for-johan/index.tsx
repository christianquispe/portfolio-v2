import { MainLayout } from "../../components/layouts";
import { AlertInfo, LenguageSection } from "../../components/learning";

import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <AlertInfo />
      <LenguageSection />
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout
    title="Blog - Christian Quispe"
    description="Escribo este diarion para que mi hermano aprenda a desarrollar"
  >
    {page}
  </MainLayout>
);

export default Home;
