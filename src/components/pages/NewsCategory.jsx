import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { API_URL } from "../../config/api";
import Header from "../Header";
import Footer from "../Footer";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

export default function NewsCategory() {
  const [banner, setBanner] = useState(null);
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { seo } = usePageSEO(
    slug ? `news/category/${slug}` : null
  );

  const pageSlug = `news/category/${slug}`;
  const {
  bannerItem,
  isLoading: bannerLoading,
} = useBanner(pageSlug);

  useEffect(() => {
    fetchCategoryNews();
  }, [slug]);

  const fetchCategoryNews = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/news/category/${slug}`
      );

      console.log(res.data);

      setCategory(res.data.category);
      setNews(res.data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO seo={seo} />
      <Header />
      <main className="pt-16 overflow-hidden">
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
        <section className="max-w-7xl mx-auto px-4 py-12">

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
            {category?.name} <span className="text-[#ffa800]">Category</span>
          </h2>

          <p className="text-gray-500 mb-10 text-center">
            {news.length} Articles Found
          </p>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <p className="text-sm text-gray-500">
                      {item.published_at}
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <Link
                      to={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 mt-5 text-green-600 font-semibold"
                    >
                      Read More 
                      <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center group-hover:border-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-[10px]"
                        />
                      </span>
                    </Link>

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}