import { GetStaticProps } from "next";

import { getAllFilesMetadata } from "@/lib/mdx";

import { MainLayout } from "@/components/layouts";
import { AlertInfo, LenguageSection } from "@/components/learning";

import { orderByDate } from "@/utils/functions";

import { NextPageWithLayout } from "../_app";

interface HomeProps {
  posts: any[];
}

const Home: NextPageWithLayout<HomeProps> = ({ posts }) => {
  return (
    <>
      <AlertInfo />
      <LenguageSection posts={posts} />
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout
    metadata={{
      title: "Blog - Christian Quispe",
      description:
        "Escribo este blog para que mi hermano aprenda a desarrollar",
    }}
  >
    {page}
  </MainLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const unorderedPosts = await getAllFilesMetadata();
  const posts = unorderedPosts.sort(orderByDate);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
