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

function NewsDetails() {

  const [banner, setBanner] = useState(null);
  // const pageSlug = "news-details";

  const { slug } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [loading, setLoading] = useState(true);

   const { seo } = usePageSEO(
    slug ? `news/${slug}` : null
  );

  const pageSlug = `news/${slug}`;
  const {
  bannerItem,
  isLoading: bannerLoading,
} = useBanner(pageSlug);

  const [sidebar, setSidebar] = useState({
    recent_posts: [],
    news_categories: [],
    product_categories: [],
  });

  // useEffect(() => {
        
  //   if (pageSlug) {
  //     fetchBanner();
  //   }
  // }, [pageSlug]);

  // const fetchBanner = async () => {
  //   try {
  //       const res = await axios.get(
  //         `${API_URL}/banners/${pageSlug}`
  //       );
        
  //       setBanner(res.data);
  //     } catch (err) {
  //       console.log("Banner API error:", err);
  //     }
  //   };

  // const bannerItem = banner?.data?.[0];

  useEffect(() => {
  fetchNewsDetails();
  }, [slug]);

  const fetchNewsDetails = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/news/${slug}`
      );

      console.log("News Details:", res.data);

      setNewsDetails(res.data?.data);
      setSidebar(res.data.sidebar);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>News Details -  Animal Feed</title>
      </Helmet> */}
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
        {/* {bannerItem?.image_url && (
        <section className="relative z-0">
          <div className="relative">
            <img
              src={bannerItem?.image_url}
              alt={bannerItem?.title}
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />
            <img
              src={bannerItem?.image_url}
              alt={bannerItem?.title}
              className="w-full md:h-auto h-[400px] block md:hidden object-cover"
            />
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                {bannerItem?.title_white} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                 Stay updated with the latest developments and activities at
                Green Gold Animal Feed. 
                {bannerItem?.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to={bannerItem?.cta_primary_url || "/distributor"}
                  className="mt-4 md:mt-6 w-full  md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {bannerItem?.cta_primary_label || "Find Distributor"}
                  </span>
                </Link>
                <Link
                  to={bannerItem?.cta_secondary_url || "/contact-us"}
                  className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faLocationDot} /> {bannerItem?.cta_secondary_label || "Contact Us"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        )} */}
        <section>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-8 md:flex-row flex-col">
              <div className="w-full md:w-3/4">
                <div className="bg-white p-4 md:p-8 shadow-xl">
                  <div className="relative">
                    <img
                      src={newsDetails?.image_url} alt={newsDetails?.title}
                      
                      className="w-full h-auto"
                    />
                    <div className="absolute -bottom-5 left-15 bg-[#ffa800] rounded-full px-4 py-2">
                      {/* 22nd Jan 2026 */}
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

                  {/* {newsDetails?.content} */}
                  <div dangerouslySetInnerHTML={{ __html: newsDetails?.content }} />
                  {/* <p className="mt-4 text-sm text-gray-500 leading-6">
                    Green Gold Animal Feed is proud to announce the launch of
                    our new advanced cattle feed formula. This innovative
                    product is designed to enhance the health and productivity
                    of cattle while maintaining the highest standards of quality
                    and safety.
                    
                  </p> */}
                  {/* <p className="mt-4 text-sm text-gray-500 leading-6">
                    This innovative product is designed to enhance the health
                    and productivity of cattle while maintaining the highest
                    standards of quality and safety. Green Gold Animal Feed is
                    proud to announce the launch of our new advanced cattle feed
                    formula. This innovative product is designed to enhance the
                    health and productivity of cattle while maintaining the
                    highest standards of quality and safety. Green Gold Animal
                    Feed is proud to announce the launch of our new advanced
                    cattle feed formula.
                  </p> */}
                  {/* <div className="flex flex-col">
                    <div className="w-full md:w-1/2">
                      <img
                        src={newsslider2}
                        alt="News Details"
                        className="w-full h-auto mt-4"
                      />
                    </div>
                    <div className="ml-1 md:ml-4 w-full md:w-1/2">
                      <p className="mt-4 text-sm text-gray-500 leading-6">
                        Green Gold Animal Feed is proud to announce the launch
                        of our new advanced cattle feed formula. This innovative
                        product is designed to enhance the health and
                        productivity of cattle while maintaining the highest
                        standards of quality and safety.
                      </p>
                      <ul className="space-y-2 text-[16px] text-gray-700 mt-8">
                        <li className="text-sm text-gray-500 flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Enhanced nutritional value for better cattle health
                        </li>
                        <li className="text-sm text-gray-500 flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>{" "}
                          Improved feed conversion ratio
                        </li>
                        <li className="text-sm text-gray-500 flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>{" "}
                          Sustainable and eco-friendly production process
                        </li>
                        <li className="text-sm text-gray-500 flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>{" "}
                          Productivity of cattle{" "}
                        </li>
                        <li className="text-sm text-gray-500 flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>{" "}
                          This innovative product is designed to enhance
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="relative bg-[#f5f5f5] p-[25px] md:p-[35px] italic mt-4 md:mt-8 text-[17px] md:text-lg text-[#746a6f] text-center md:text-left">
                    "At Green Gold, we are committed to advancing animal
                    nutrition through innovation and quality. Our new cattle
                    feed formula reflects our dedication to supporting farmers
                    and promoting sustainable agriculture."
                    <span className="block uppercase mt-4 not-italic text-[#222] text-[18px] md:text-xl">
                      Green Gold
                    </span>
                    <span className="absolute top-4 left-4 text-5xl text-[#ffa800] opacity-20">
                      &#10077;
                    </span>
                  </div> */}
                  {/* <p className="mt-4 text-sm text-gray-500 leading-6">
                    This innovative product is designed to enhance the health
                    and productivity of cattle while maintaining the highest
                    standards of quality and safety. Green Gold Animal Feed is
                    proud to announce the launch of our new advanced cattle feed
                    formula. This innovative product is designed to enhance the
                    health and productivity of cattle while maintaining the
                    highest standards of quality and safety. Green Gold Animal
                    Feed is proud to announce the launch of our new advanced
                    cattle feed formula.
                  </p> */}
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
                      <li key={index} className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
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
                    {/* <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <img
                        src={newsslider2}
                        alt="Recent Post"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>
                        <span className="text-[12px] block text text-gray-900">
                          18 July, 2026
                        </span>
                        Sustainable Farming Practices by Green Gold
                      </span>
                    </li>
                    <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <img
                        src={newsslider}
                        alt="Recent Post"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>
                        <span className="text-[12px] block text text-gray-900">
                          18 July, 2026
                        </span>
                        Innovations in Animal Nutrition 2026
                      </span>
                    </li>
                    <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <img
                        src={newsslider2}
                        alt="Recent Post"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>
                        <span className="text-[12px] block text text-gray-900">
                          18 July, 2026
                        </span>
                        Green Gold's Commitment to Quality
                      </span>
                    </li> */}
                  </ul>
                </div>
                <div className="bg-[#f8f8f8] p-4 md:p-6 mt-4 md:mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Categories
                  </h3>
                  <ul className="space-y-4">
                    {sidebar.news_categories.map((category, index) => (
                    <li key={index} className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      {category}
                    </li>
                     ))}
                    {/* <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Product Launches
                    </li>
                    <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Sustainability
                    </li>
                    <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Events
                    </li>
                    <li className="text-sm text-gray-500 hover:text-green-600 cursor-pointer flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Company News
                    </li> */}
                   
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
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="bg-[#f8f8f8] p-4 md:p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sidebar.product_categories.map((item) => (
                    <span key={item.id} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                       {item.name}
                    </span>
                     ))}
                    {/* <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                      Sustainability
                    </span>
                    <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                      Innovation
                    </span>
                    <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                      Cattle Feed
                    </span>
                    <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                      Farming
                    </span>
                    <span className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
                      Animal Health
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default NewsDetails;
