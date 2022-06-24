import { GetStaticPaths, GetStaticProps } from "next";

import { MDXRemote } from "next-mdx-remote";
import { MainLayout } from "../../../components/layouts";

import { getFiles, getFileBySlug } from "../../../lib/mdx";

interface LenguagePageProps {
  frontmatter: any;
  source: any;
}

const LenguagePage: React.FC<LenguagePageProps> = ({ frontmatter, source }) => {
  return (
    <MainLayout metadata={frontmatter}>
      <MDXRemote {...source} />
    </MainLayout>
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
}) => {
  const slug = params?.slug as any;

  const { frontmatter, source } = await getFileBySlug(slug);

  return {
    props: {
      frontmatter,
      source,
    },
  };
};

export default LenguagePage;
