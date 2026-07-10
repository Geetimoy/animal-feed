import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";
import HeroBanner from "../HeroBanner";

import { API_URL } from "../../config/api";
import { useBanner } from "../../hooks/useBanner";
import usePageSEO from "../../hooks/usePageSEO";
import SEO from "./SEO";

export default function CMSPage() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const { seo } = usePageSEO(slug ? `cms_page/${slug}` : null);

  const {
    bannerItem,
    isLoading: bannerLoading,
  } = useBanner(`pages/${slug}`);

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/pages/${slug}`
      );

      setPage(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO seo={seo} />

      <Header />

      <main className="pt-16">

        <HeroBanner
          imageUrl={bannerItem?.image_url}
          titleWhite={bannerItem?.title_white}
          titleGold={bannerItem?.title_gold}
          subtitle={bannerItem?.subtitle}
          ctaPrimaryLabel={bannerItem?.cta_primary_label}
          ctaPrimaryUrl={bannerItem?.cta_primary_url}
          ctaSecondaryLabel={bannerItem?.cta_secondary_label}
          ctaSecondaryUrl={bannerItem?.cta_secondary_url}
          isLoading={bannerLoading}
        />

        <section className="max-w-7xl mx-auto px-4 py-14">

          {loading ? (

            <div className="text-center py-20">
              Loading...
            </div>

          ) : (

            <>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
                {page?.title}
              </h1>

              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-[#1b4d1b]
                  prose-p:text-gray-700
                  prose-li:text-gray-700
                  prose-ul:list-disc
                  prose-a:text-green-700"
                dangerouslySetInnerHTML={{
                  __html: page?.content,
                }}
              />

              <div className="mt-10 text-sm text-gray-500">
                Last Updated : {page?.updated_at}
              </div>
            </>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}