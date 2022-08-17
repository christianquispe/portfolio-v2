import { GetStaticProps } from "next";

import { getAllFilesMetadata } from "@/lib/mdx";

import { MainLayout } from "@/components/layouts";
import { AlertInfo, LenguageSection } from "@/components/learning";

import { orderByDate, validateDate } from "@/utils/functions";

import { NextPageWithLayout } from "../_app";

interface HomeProps {
  posts: any[];
}

const Home: NextPageWithLayout<HomeProps> = ({ posts }) => {
  return (
    <MainLayout
      metadata={{
        title: "Blog - Christian Quispe",
        description:
          "Escribo este blog para que mi hermano aprenda a desarrollar",
      }}
    >
      <AlertInfo />
      <LenguageSection posts={posts} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const unorderedPosts: any[] = await getAllFilesMetadata();
  unorderedPosts.forEach((post: any, i) => {
    const hasValidDate = validateDate(post.date);
    if (!hasValidDate) {
      throw new Error("Fecha mal escrita");
    }
  });
  const posts = orderByDate(unorderedPosts);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
