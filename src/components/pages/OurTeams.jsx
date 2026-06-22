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


function OurTeams() {
  const [banner, setBanner] = useState(null);
  const [aboutSettings, setAboutSettings] = useState({});
  const pageSlug = "our-teams";

  useEffect(() => {
    if (pageSlug) {
      fetchBanner();
      fetchAboutSettings();
    }
  }, [pageSlug]);

  const fetchBanner = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/banners/${pageSlug}`
      );
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  const fetchAboutSettings = async () => {
    try {
      const res = await axios.get(`${API_URL}/about-settings`);
      setAboutSettings(res.data?.data || {});
    } catch (err) {
      console.log("About Settings API error:", err);
    }
  };

  const bannerItem = banner?.data?.[0];

  // Extract data from aboutSettings
  const leadership = aboutSettings?.leadership || {};
  const directors = leadership?.board_directors || [];
  const team = leadership?.team || {};
  const members = team?.members || [];

  // Get only first 2 directors
  const firstTwoDirectors = directors.slice(0, 2);

  return (
    <>
      <Helmet>
        <title>Our Teams -  Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        {bannerItem?.image_url && (
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
                className="w-full md:h-auto h-[450px] block md:hidden object-cover"
              />
              <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
                <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                  {bannerItem?.title_white} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
                </h1>
                <p className="text-white text-[16px] md:text-xl text-center">
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
        )}
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