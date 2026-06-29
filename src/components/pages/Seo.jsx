import { Helmet } from "react-helmet-async";

const SEO = ({ seo }) => {
  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta
        name="description"
        content={seo.description || ""}
      />

      <meta
        name="keywords"
        content={seo.keywords || ""}
      />

      {/* Open Graph */}
      <meta property="og:title" content={seo.og_title || seo.title} />
      <meta
        property="og:description"
        content={seo.og_description || seo.description}
      />

      <meta
        property="og:type"
        content={seo.og_type || "website"}
      />

      {seo.og_image_url && (
        <meta property="og:image" content={seo.og_image_url} />
      )}

      {seo.canonical_url && (
        <link rel="canonical" href={seo.canonical_url} />
      )}

      {seo.robots && (
        <meta name="robots" content={seo.robots} />
      )}
    </Helmet>
  );
};

export default SEO;