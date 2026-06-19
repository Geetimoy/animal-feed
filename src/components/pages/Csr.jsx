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

function Csr(){
  const [banner, setBanner] = useState(null);
  const pageSlug = "csr";

  useEffect(() => {
        
    if (pageSlug) {
      fetchBanner();
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

  const bannerItem = banner?.data?.[0];

  return(
    <>
    <Helmet>
        <title>Corporate Social Responsibility -  Animal Feed</title>
    </Helmet>
    <Header></Header>
      <main className="pt-16">
        {bannerItem?.image_url && (
        <section className="relative z-0">
          <div className="relative">
            <img
              src={bannerItem?.image_url}
              alt={bannerItem?.title}
              className="w-full md:h-auto h-[450px]  object-cover"
            />  
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                {bannerItem?.title_white} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                {banner?.data[0].subtitle}
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
    </>
  );
}

export default Csr;