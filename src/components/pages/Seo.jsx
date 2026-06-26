import { Helmet } from "react-helmet-async";

const SEO = ({ seo }) => {
  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.meta_title}</title>

      <meta
        name="description"
        content={seo.meta_description}
      />

      <meta
        name="keywords"
        content={seo.meta_keywords}
      />
    </Helmet>
  );
};

export default SEO;