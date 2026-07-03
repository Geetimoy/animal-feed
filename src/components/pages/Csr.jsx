import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect } from "react";

import csrBanner from '../../assets/images/csr-banner.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import { useBanner } from "../../hooks/useBanner";
import HeroBanner from "../HeroBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

function Csr() {
  const pageSlug = "csr";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);
  const { seo } = usePageSEO("static/csr");


  return (
    <div className="overflow-x-hidden">
      {/* <Helmet>
        <title>Corporate Social Responsibility -  Animal Feed</title>
      </Helmet> */}
      <SEO seo={seo} />
      <Header></Header>
      <main className="pt-16">
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
        <section className="py-10 md:py-12 bg-gray-100 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Our <span className="text-[#ffa800]">CSR Initiatives</span>
            </h2>
            <p className="text-gray-600 text-md mb-6 text-center">
              Coming Soon!!!
            </p>

          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Csr;