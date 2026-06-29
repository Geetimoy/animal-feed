import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect } from "react";

import teamsBaner from '../../assets/images/teams-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import officeMan from '../../assets/images/office-man.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";


function OurTeams() {
  const [aboutSettings, setAboutSettings] = useState({});
  const pageSlug = "our-teams";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);
  const { seo } = usePageSEO("static/our-teams");

  useEffect(() => {
    if (pageSlug) {
      fetchAboutSettings();
    }
  }, [pageSlug]);



  const fetchAboutSettings = async () => {
    try {
      const res = await axios.get(`${API_URL}/about-settings`);
      setAboutSettings(res.data?.data || {});
    } catch (err) {
      console.log("About Settings API error:", err);
    }
  };


  // Extract data from aboutSettings
  const leadership = aboutSettings?.leadership || {};
  const directors = leadership?.board_directors || [];
  const team = leadership?.team || {};
  const members = team?.members || [];

  // Get only first 2 directors
  const firstTwoDirectors = directors.slice(0, 2);

  return (
    <>
      {/* <Helmet>
        <title>Our Teams -  Animal Feed</title>
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
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {leadership.heading || "Board of"} <span className="text-[#ffa800]">{leadership.heading_highlight || "Directors"}</span>
            </h2>
            <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
              {leadership.description || "Guiding Green Gold with vision, expertise, and commitment to excellence"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-20">
              {firstTwoDirectors.map((director, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <img
                    src={director.image_url || officeMan}
                    alt={director.name}
                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {director.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{director.title}</p>
                  {director.bio_paragraphs?.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 text-left mb-3">{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team details */}
        <section className="pt-10 md:pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {team.heading || "Our Team"} <span className="text-[#ffa800]">{team.highlight || "Details"}</span>
            </h2>
            <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
              {team.description || "Guiding Green Gold with vision, expertise, and commitment to excellence"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 md:mt-20">
              {members.map((member, index) => (
                <div key={index} className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
                  <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                    <img src={member.image_url || officeMan} alt={member.name} className="w-full" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm text-center mb-2">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default OurTeams;