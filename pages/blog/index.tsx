import { GetStaticProps } from "next";

import { getAllFilesMetadata } from "@/lib/mdx";

import { MainLayout } from "@/components/layouts";
import { AlertInfo, LenguageSection } from "@/components/learning";

import { orderByDate, validateDate } from "@/utils/functions";

import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface HomeProps {
  posts: any[];
}

const Home: NextPageWithLayout<HomeProps> = ({ posts }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function redirectToHome() {
      await router.replace("/");
      setLoading(false);
    }
    redirectToHome()
  }, []);

  if (loading) {
    return <div></div>;
  }

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const unorderedPosts: any[] = await getAllFilesMetadata();
  unorderedPosts.forEach((post: any) => {
    const hasValidDate = validateDate(post.date);
    if (!hasValidDate) {
      throw new Error("Fecha mal escrita");
    }
  });
  const posts = orderByDate(unorderedPosts);

  return {
    props: {
      posts,
      messages: {
        ...require(`../../messages/layout/${locale}.json`),
      },
    },
  };
};

export default Home;
