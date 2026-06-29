import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import newsEvents from '../../assets/images/news-banner.jpg';
import newsslider1 from '../../assets/images/newfish.jpeg';
import newsslider2 from '../../assets/images/pig2.png';
import newsslider3 from '../../assets/images/cattle1.png';
import newsslider4 from '../../assets/images/poultry2.png';
import newsslider5 from '../../assets/images/fish2.png';
import event1 from '../../assets/images/event1.jpg';
import event2 from '../../assets/images/event2.jpg';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import { useBanner } from "../../hooks/useBanner";
import HeroBanner from "../HeroBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

function NewsEvents() {

  const [news, setNews] = useState([]); // All news
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState([]);

  const pageSlug = "news-events";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);

  const { seo } = usePageSEO("static/news-events");



  // useEffect(() => {
  //   // Replace with your API call
  //   setNews([
  //     { title: "News 1", description: "Description 1" },
  //     { title: "News 2", description: "Description 2" },
  //     { title: "News 3", description: "Description 3" },
  //     { title: "News 4", description: "Description 4" },
  //     { title: "News 5", description: "Description 5" },
  //     { title: "News 6", description: "Description 6" },
  //     { title: "News 7", description: "Description 7" },
  //   ]);
  // }, []);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/news`
      );

      setNews(res.data?.data || []);
    } catch (err) {
      console.log("News API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_URL}/events`);
      setEvents(res.data?.data || []);
    } catch (err) {
      console.log("Events API error:", err);
    }
  };



  return (
    <>
      {/* <Helmet>
        <title>News & Events -  Animal Feed</title>
      </Helmet> */}
      <SEO seo={seo} />
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        {/* Hero Section */}
        <HeroBanner
          imageUrl={bannerItem?.image_url}
          titleWhite={bannerItem?.title_white}
          titleGold={bannerItem?.title_gold}
          subtitle={bannerItem?.subtitle}
          ctaPrimaryLabel={bannerItem?.cta_primary_label}
          ctaPrimaryUrl={bannerItem?.cta_primary_url}
          ctaSecondaryLabel={bannerItem?.cta_secondary_label}
          ctaSecondaryUrl={bannerItem?.cta_secondary_url}
          height="h-[500px]"
          isLoading={isLoading}
        />

        {/* Events */}
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Upcoming <span className="text-[#ffa800]">Events</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              Join us in our upcoming events and initiatives. From farmer
              training programs to community outreach activities, stay informed
              about opportunities to engage with us and contribute to the growth
              of the agricultural community. Mark your calendars and be a part
              of our journey towards sustainable farming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 mt-8">
              {/* <div className="flex  flex-col md:flex-row  gap-8 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden md:w-1/5 w-full flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">
                    28 Feb 2026
                  </h2>
                  <h5 className="text-sm text-gray-800 mb-2">09 AM - 5 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">
                    Street, Block 12 Sector 4, Kolkata City
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-full md:w-4/5 flex ">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/5">
                      <img
                        src={event1}
                        alt="Event 1"
                        className="w-full h-40 object-cover rounded-lg mt-2"
                      />
                    </div>
                    <div className="w-full md:w-4/5 text-center md:text-left">
                      <span className="text-xs text-green-600 font-medium">
                        Author
                      </span>
                      <h3 className="mt-0 md:mt-2 font-bold text-gray-900 text-[22px] md:text-2xl">
                        Farmer Training Program in West Bengal
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Join us for an informative training session aimed at
                        empowering farmers with the latest techniques and
                        knowledge in animal nutrition and care. This event will
                        cover best practices for livestock management, feed
                        optimization, and sustainable farming methods. Don’t
                        miss this opportunity to enhance your skills and network
                        with fellow farmers.
                      </p>
                      {/* <Link href="#" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                      View Details
                          <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                            <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                          </span></Link> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col md:flex-row   gap-4 md:gap-6 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden md:w-1/5 w-full flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">
                    3 Mar 2026
                  </h2>
                  <h5 className="text-sm text-gray-800 mb-2">11 AM - 9 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">
                    Street, Block 12 Sector 4, Kolkata City
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-full md:w-4/5 flex">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/5">
                      <img
                        src={event2}
                        alt="Event 1"
                        className="w-full h-40 object-cover rounded-lg mt-2"
                      />
                    </div>
                    <div className=" w-full md:w-4/5 text-center md:text-left">
                      <span className="text-xs text-green-600 font-medium">
                        Author
                      </span>
                      <h3 className="mt-0 md:mt-2 font-bold text-gray-900 text-[22px] md:text-2xl">
                        Welcome & Conference Opening
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Join us for an informative training session aimed at
                        empowering farmers with the latest techniques and
                        knowledge in animal nutrition and care. This event will
                        cover best practices for livestock management, feed
                        optimization, and sustainable farming methods. Don’t
                        miss this opportunity to enhance your skills and network
                        with fellow farmers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   flex-col md:flex-row   gap-4 md:gap-6 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-full md:w-1/5 flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">
                    21 Mar 2026
                  </h2>
                  <h5 className="text-sm text-gray-800 mb-2">09 AM - 1 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">
                    Gandhi Marg, Sector 5, Amarabati
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-full md:w-4/5 flex">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/5">
                      <img
                        src={event1}
                        alt="Event 1"
                        className="w-full h-40 object-cover rounded-lg mt-2"
                      />
                    </div>
                    <div className="w-full md:w-4/5 text-center md:text-left">
                      <span className="text-xs text-green-600 font-medium">
                        Author
                      </span>
                      <h3 className="mt-0 md:mt-2 font-bold text-gray-900 text-[22px] md:text-2xl">
                        Farmer Training Program in Andhra Pradesh
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Join us for an informative training session aimed at
                        empowering farmers with the latest techniques and
                        knowledge in animal nutrition and care. This event will
                        cover best practices for livestock management, feed
                        optimization, and sustainable farming methods. Don’t
                        miss this opportunity to enhance your skills and network
                        with fellow farmers.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              {events.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 mb-3">

                  {/* LEFT BOX */}
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden md:w-1/5 w-full flex flex-col items-center justify-center p-4">
                    <h2 className="text-xl font-bold text-green-600 text-center">
                      {item.event_date}
                    </h2>

                    <h5 className="text-sm text-gray-800 mb-2">
                      {item.time_range}
                    </h5>

                    <p className="text-sm text-gray-800 text-center font-medium">
                      {item.location}
                    </p>
                  </div>

                  {/* RIGHT BOX */}
                  <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-full md:w-4/5 flex">
                    <div className="p-6 flex flex-col md:flex-row gap-6 w-full">

                      <div className="w-full md:w-1/5">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-40 object-cover rounded-lg mt-2"
                        />
                      </div>

                      <div className="w-full md:w-4/5 text-center md:text-left">
                        <span className="text-xs text-green-600 font-medium">
                          {item.category_tag || "Event"}
                        </span>

                        <h3 className="mt-0 md:mt-2 font-bold text-gray-900 text-[22px] md:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 flex-grow">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Latest <span className="text-[#ffa800]">News</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              Stay updated with the latest news, announcements, and upcoming
              events. From important milestones and achievements to programs and
              initiatives, this section keeps you informed about what’s
              happening in and around our organization. Check back regularly to
              never miss an update.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {news.slice(0, visibleCount).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.category_tag || "News"}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">

                    {/* DATE */}
                    <span className="text-xs text-green-600 font-medium">
                      {item.published_at}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-2 font-bold text-gray-900">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-sm text-gray-500 flex-grow">
                      {item.excerpt}
                    </p>

                    {/* LINK */}
                    <Link
                      to={`/news/${item.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                    >
                      View Details
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
              {/* <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsslider2}
                    className="h-48 w-full object-cover rounded-b-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Agriculture
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    28 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches,
                    and events at Green Gold.
                  </p>
                  <Link
                    to="/news-details"
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                  >
                    View Details
                    <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] group-hover:text-green-600 transition-colors duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsslider3}
                    className="h-48 w-full object-cover rounded-b-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Fishery
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    12 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Green Gold Launches Advanced Cattle Feed
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches,
                    and events at Green Gold.
                  </p>
                  <Link
                    to="/news-details"
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                  >
                    View Details
                    <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] group-hover:text-green-600 transition-colors duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsslider4}
                    className="h-48 w-full object-cover rounded-b-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Fishery
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    28 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches,
                    and events at Green Gold.
                  </p>
                  <Link
                    to="/news-details"
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                  >
                    View Details
                    <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] group-hover:text-green-600 transition-colors duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsslider1}
                    className="h-48 w-full object-cover rounded-b-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Agriculture
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    28 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches,
                    and events at Green Gold.
                  </p>
                  <Link
                    to="/news-details"
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                  >
                    View Details
                    <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] group-hover:text-green-600 transition-colors duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsslider1}
                    className="h-48 w-full object-cover rounded-b-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Fishery
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    12 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Green Gold Launches Advanced Cattle Feed
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches,
                    and events at Green Gold.
                  </p>
                  <Link
                    to="/news-details"
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                  >
                    View Details
                    <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] group-hover:text-green-600 transition-colors duration-300"
                      />
                    </span>
                  </Link>
                </div>
              </div> */}

            </div>

            {visibleCount < news.length && (
              <div className="text-center mt-6">
                <button onClick={() => setVisibleCount(prev => prev + 3)} className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 inline-block rounded-xl text-[16px] font-medium cursor-pointer w-full md:w-auto" > Load More </button>
              </div>
            )}
          </div>
        </section>


      </main>

      <Footer></Footer>
    </>
  );
}


export default NewsEvents;