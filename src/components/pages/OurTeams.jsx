import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect } from "react";

import teamsBaner from '../../assets/images/teams-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import officeMan from '../../assets/images/office-man.png';
import surajMahato from '../../assets/images/suraj-mahato.jpg';
import bikash from '../../assets/images/bikash.jpg';
import drHemant from '../../assets/images/dr-hemant.jpg';
import likhaMaaj from '../../assets/images/likha-maaj.jpg';
import okumLikha from '../../assets/images/okum-likha.jpg';
import tannaTullo from '../../assets/images/tana-tullo.jpg';
import vikramjit from '../../assets/images/vikramjit.jpg';

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
  const footerNote = team?.footer_note || "";

  // Get only first 2 directors
  const firstTwoDirectors = directors.slice(0, 2);

  const groups = team?.groups || [];

  const operationGroup = groups.find(
    (group) => group.title === "Operation"
  );

  const qualityGroup = groups.find(
    (group) => group.title === "Quality Assurance & Quality Control"
  );

  const productionGroup = groups.find(
    (group) => group.title === "Production Team"
  );

  const salesMarketingGroup = groups.find(
    (group) => group.title === "Sales & Marketing Team"
  );

  const adminGroup = groups.find(
    (group) => group.title === "DA to Admin"
  );

  const logisticsGroup = groups.find(
    (group) => group.title === "Logistics & Customer Support"
  );

  

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
              {leadership.heading} 
            </h2>
            {/* <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
              {leadership.description || "Guiding Green Gold with vision, expertise, and commitment to excellence"}
            </p> */}
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
                  <p className="text-[#056839] text-md mb-4">{director.title}</p>
                  {director.bio_paragraphs?.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 text-left mb-3">{paragraph}</p>
                  ))}
                </div>
              ))}

              {operationGroup && (
              <div className="md:col-span-2 md:justify-self-center md:w-[50%] mt-0 md:mt-8">
                <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
                  {operationGroup.title}
                </h2>
                {operationGroup.members.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center mt-8 md:mt-16">
                  
                      <img src={member.image_url || officeMan} alt={member.name} className="w-36 h-36 rounded-full mx-auto mb-4 object-cover" />
                      <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                      {member.name}
                      </h4>
                      <p className="text-[#056839] text-md text-center mb-2">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
                ))}
              </div>
              )}
            </div>
           
          </div>
        </section>

        {/* Our Team details */}
        {/* <section className="pt-10 md:pt-12 pb-8">
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
        </section> */}

        {/* Quality Assurance */}
        <section className="pt-10 md:pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {/* Quality Assurance & Quality Control */}
              {qualityGroup?.title}
            </h2>
            {/* <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
              {team.description || "Guiding Green Gold with vision, expertise, and commitment to excellence"}
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-20">
             {qualityGroup?.members?.map((member, index) => (
                <div key={index} className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
                  <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                    <img src={member.image_url || officeMan} alt={member.name} className="w-full" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                   {member.name}
                  </h4>
                  <p className="text-[#056839] text-md text-center mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
                
               ))}
            </div>
          </div>
        </section>

        {/* Production Team */}
        <section className="pt-10 md:pt-12 pb-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
             {productionGroup?.title}
            </h2>
            {/* <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
              {team.description || "Guiding Green Gold with vision, expertise, and commitment to excellence"}
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-20">
              {productionGroup?.members?.map((member, index) => (
              <div key={index} className={`bg-[#fbfbfb] rounded-2xl p-6 shadow-sm mb-12 ${
            productionGroup.members.length === 4 && index === 3
              ? "md:col-start-2"
              : ""
          }`}>
                <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                  <img src={member.image_url || officeMan} alt={member.name} className="w-full" />
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                {member.name}
                </h4>
                <p className="text-[#056839] text-md text-center mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales & Marketing */}
        <section className="pt-10 md:pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {salesMarketingGroup?.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-20">
             {salesMarketingGroup?.members?.map((member, index) => (
              <div key={index} className={`bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12 ${
            salesMarketingGroup.members.length === 4 && index === 3
              ? "md:col-start-2"
              : ""
          }`}>
                <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                  <img src={member.image_url || officeMan}  alt={member.name} className="w-full" />
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                  {member.name}
                </h4>
                <p className="text-[#056839] text-md text-center mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </div>
              ))}
              
            </div>
          </div>
        </section>

        {/* DA to Admin */}
        <section className="pt-10 md:pt-12 pb-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {adminGroup?.title}
            </h2>
            <div className={`grid gap-8 mt-8 md:mt-20 ${
        adminGroup?.members?.length === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-3"
      }`}>
             {adminGroup?.members?.map((member, index) => (
                <div key={index} className="bg-[#fbfbfb] rounded-2xl p-6 shadow-sm mb-12">
                  <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                    <img src={member.image_url || officeMan} alt={member.name} className="w-full" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                  {member.name}
                  </h4>
                  <p className="text-[#056839] text-md text-center mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
                
                
              ))}
            </div>
          </div>
        </section>

        {/* Logistics & Customer Support */}
        <section className="pt-10 md:pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              {logisticsGroup?.title}
            </h2>
            
            <div className={`grid gap-8 mt-8 md:mt-20 ${
        logisticsGroup?.members?.length === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-3"
      }`}>
             {logisticsGroup?.members?.map((member, index) => (
                <div key={index} className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
                  <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                    <img src={member.image_url || officeMan} alt={member.name} className="w-full" />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                    {member.name}
                  </h4>
                  <p className="text-[#056839] text-md text-center mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
                
                ))}
                
              
            </div>
          </div>
        </section>

        <section className="pt-4 md:pt-6 pb-6 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <p className="text-gray-600 text-sm mb-2"> {footerNote}</p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default OurTeams;
