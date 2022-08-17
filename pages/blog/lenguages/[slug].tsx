import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "@/lib/mdx";

import { PostLayout } from "@/components/layouts";
import { MDXComponents } from "@/components/ui";

interface LenguagePageProps {
  frontmatter: any;
  source: any;
}

const LenguagePage: React.FC<LenguagePageProps> = ({ frontmatter, source }) => {
  return (
    <PostLayout metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
    </PostLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const files = getFiles();

  return {
    paths: files.map((filename: string) => ({
      params: { slug: filename.replace(".mdx", "") },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<LenguagePageProps> = async ({
  params,
  locale,
}) => {
  const slug = params?.slug as any;

  const { frontmatter, source } = await getFileBySlug(slug);

  return {
    props: {
      frontmatter,
      source,
      messages: {
        ...require(`../../../messages/layout/${locale}.json`),
        ...require(`../../../messages/index/${locale}.json`),
      },
    },
  };
};

export default LenguagePage;
