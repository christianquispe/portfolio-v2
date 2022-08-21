import Head from "next/head";

import { Metadata } from "@/interfaces";

interface OpenGraphProps {
  metadata: Metadata;
}

const siteURL = "https://christianquispe.vercel.app/logo-transparente.png";

export const OpenGraph: React.FC<OpenGraphProps> = ({ metadata }) => {
  const SEO = {
    title: metadata.title || "Christian Quispe",
    description:
      metadata.description ||
      "Hola soy Christian quispe, y este es mi portafolio personal. Aquí hallrás todo la información que necesitas sobre mi y algunos datos extra",
    slug: metadata.slug || "",
    image: `${siteURL}/${metadata.image || "/logo-transparente.png"}`,
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />
      <meta property="og:url" content={`${siteURL}/${SEO.slug}`} />
      <link rel="canonical" href={`${siteURL}/${SEO.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Christian Quispe" />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:image" content={SEO.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@christian_qc20" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />
      <meta property="article:published_time" content={SEO.date} />
      <link
        rel="shortcut icon"
        href="/logo-transparente-blanco.png"
        type="image/x-icon"
      />
    </Head>
  );
};
