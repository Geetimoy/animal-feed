import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser, faArrowRight, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import newsEvents from "../../assets/images/news-banner.jpg";
import newsslider from "../../assets/images/newfish.jpeg";
import newsslider2 from "../../assets/images/news-details2.jpg";

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";

import { useParams } from "react-router-dom";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ---- Helpers to convert CKEditor <oembed> tags into real iframes ----

/**
 * Extracts a YouTube video ID from any common YouTube URL format
 * and returns a proper embeddable URL.
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return null;

  const patterns = [
    /youtu\.be\/([^?&]+)/,               // https://youtu.be/VIDEO_ID
    /youtube\.com\/watch\?v=([^&]+)/,    // https://youtube.com/watch?v=VIDEO_ID
    /youtube\.com\/embed\/([^?&]+)/,     // already an embed URL
    /youtube\.com\/shorts\/([^?&]+)/,    // shorts
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  return null;
}

/**
 * Replaces CKEditor's <figure class="media"><oembed url="..."></oembed></figure>
 * (and bare <oembed> tags) with a real responsive iframe, since browsers
 * don't know how to render <oembed> natively.
 */
function processEmbeds(html) {
  if (!html) return html;

  return html.replace(
    /<figure[^>]*class="media"[^>]*>\s*<oembed\s+url="([^"]+)"\s*>\s*<\/oembed>\s*<\/figure>|<oembed\s+url="([^"]+)"\s*>\s*<\/oembed>/g,
    (match, urlA, urlB) => {
      const rawUrl = urlA || urlB;
      const embedUrl = getYouTubeEmbedUrl(rawUrl);

      if (!embedUrl) {
        // Unknown provider - just drop the unusable tag rather than leave it broken
        return "";
      }

      return `
        <div class="video-embed" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin:24px 0;border-radius:8px;">
          <iframe
            src="${embedUrl}"
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
    }
  );
}

function NewsDetails() {
  const [banner, setBanner] = useState(null);

  const { slug } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const { seo } = usePageSEO(slug ? `news/${slug}` : null);

  const pageSlug = `news/${slug}`;
  const { bannerItem, isLoading: bannerLoading } = useBanner(pageSlug);

  const [sidebar, setSidebar] = useState({
    recent_posts: [],
    news_categories: [],
    product_categories: [],
  });

  useEffect(() => {
    fetchNewsDetails();
  }, [slug]);

  const fetchNewsDetails = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API_URL}/news/${slug}`);

      console.log("News Details:", res.data);

      setNewsDetails(res.data?.data);
      setSidebar(res.data.sidebar);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Newsletter
    const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
  
    try {
      setLoading(true);
  
      const res = await axios.post(
        `${API_URL}/newsletter/subscribe`,
        {
          email,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
  
      toast.success(res.data.message || "Subscribed successfully.");
  
      setEmail("");
    } catch (err) {
      const res = err.response?.data;
  
      if (res?.errors?.email) {
        toast.error(res.errors.email[0]);
      } else {
        toast.error(res?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO seo={seo} />
      <Header></Header>
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
        <section>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-8 md:flex-row flex-col">
              <div className="w-full md:w-3/4">
                <div className="bg-white p-4 md:p-8 shadow-xl">
                  <div className="relative">
                    <img
                      src={newsDetails?.image_url}
                      alt={newsDetails?.title}
                      className="w-full h-auto"
                    />
                    {newsDetails?.category && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {newsDetails.category.name}
                      </div>
                    )}
                    <div className="absolute -bottom-5 left-15 bg-[#ffa800] rounded-full px-4 py-2">
                      {newsDetails?.published_at}
                    </div>
                  </div>
                  <div className="flex mt-12">
                    <span className="mr-4 text-sm text-gray-500">
                      <FontAwesomeIcon icon={faUser} /> by Green Gold
                    </span>
                    <span className="text-sm text-gray-500">
                      <FontAwesomeIcon icon={faCommentDots} /> (03) Comments
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mt-4">
                    {newsDetails?.title}
                  </h2>

                  {/* Fixed: process oembed tags into real iframes before injecting */}
                  <div
                    className="news-content mt-4 text-sm text-gray-600 leading-6"
                    dangerouslySetInnerHTML={{
                      __html: processEmbeds(newsDetails?.content),
                    }}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-[#f8f8f8] p-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Recent Posts
                  </h3>
                  <ul className="space-y-4">
                    {sidebar.recent_posts.map((post, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3"
                      >
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <Link to={`/news/${post.slug}`} className="hover:text-green-600">
                          <span>
                            <span className="text-[12px] block text text-gray-900">
                              {post.published_at}
                            </span>
                            {post.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f8f8f8] p-4 md:p-6 mt-4 md:mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Categories
                  </h3>
                  <ul className="space-y-4">
                    {sidebar.news_categories.map((category, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3"
                      >
                        <Link
                          to={`/news/category/${category.slug}`}
                          className="text-sm text-gray-500 hover:text-green-600 flex items-center gap-3"
                        >
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                          </span>
                          {category.name}
                          <span className="text-xs text-green-600">
                            ({category.post_count})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f8f8f8] p-4 md:p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Newsletter
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Subscribe to our newsletter to receive updates and news.
                  </p>
                  <div className="flex">
                    {/* <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    /> */}
                     <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    {/* <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition duration-300">
                      Subscribe
                    </button> */}
                    <button
                      type="button"
                      onClick={handleSubscribe}
                      disabled={loading}
                      className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition duration-300 disabled:opacity-60" >
                      {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                </div>
                <div className="bg-[#f8f8f8] p-4 md:p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Tags
                  </h3>
                  {newsDetails?.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {newsDetails.tags.map((tag, index) => (
                        <Link
                          key={index}
                          to={`/news/tag/${tag}`}
                          className="text-sm text-gray-500 hover:text-green-600 flex items-center gap-3"
                        >
                          <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition cursor-pointer">
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default NewsDetails;