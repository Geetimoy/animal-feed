import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faIndianRupeeSign,

  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import productbanner from "../../assets/images/product-banner.jpeg";
import cattle from "../../assets/images/cattle1.png";
import broiler from "../../assets/images/poultry2.png";
import layer from "../../assets/images/poultry-feed1.jpg";
import pig from "../../assets/images/pig2.png";
import fish from "../../assets/images/fish2.png";
import ProductSidebar from "./ProductSidebar";

export default function ProductDetails() {
   const { categorySlug, subCategorySlug } = useParams();

   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");
   const [maxPrice, setMaxPrice] = useState(3000); 
  const [selectedDistributors, setSelectedDistributors] = useState([]);

  const handleDistributorChange = (name) => {
    if (name === "All") {
      setSelectedDistributors([]); 
      return;
    }

    setSelectedDistributors(
      (prev) =>
        prev.includes(name)
          ? prev.filter((d) => d !== name) 
          : [...prev, name], 
    );
  };
  
  const distributors = ["All", ...new Set(products.map((p) => p.distributor))];

  const [openCategory, setOpenCategory] = useState(() => {
      if (
        location.pathname.includes("calf") ||
        location.pathname.includes("cattle")
      )
        return "cattle";
    
      if (
        location.pathname.includes("poultryprestarter") ||
        location.pathname.includes("starter") ||
        location.pathname.includes("grower")
      )
        return "poultry";
    
      if (location.pathname.includes("layer")) return "layer"; 
    
      if (location.pathname.includes("pig")) return "pig";
      if (location.pathname.includes("fish")) return "fish";
    
      return null;
    });

  const formatTitle = (slug) => {
  return slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };

  const formattedTitle = formatTitle(subCategorySlug) || "";
  const words = formattedTitle.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");
  return(
    <>
    <Header />
    <main className="pt-16 overflow-x-hidden">
      <section className="relative z-0">
        <div className="relative">
          <img
            src={productbanner}
            alt="Contact Us Banner"
            className="w-full md:h-[500px] h-[500px] object-cover object-top"
          />
          {/* Overlay Layer (81%) */}
          <div className="absolute inset-0 bg-black/[0.60]"></div>
          {/* <div className="absolute inset-0  flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Quality Feed Solution
            </h1>

          </div> */}
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
            <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
               {firstPart} <span className="text-[#ffa800]">{lastWord} </span>
            </h1>
            <p className="text-white text-[16px] md:text-xl text-center">
              Empowering livestock productivity with scientifically balanced
              nutrition for healthier animals and better returns.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              <Link
                to="/distributor"
                className="mt-4 md:mt-6 w-full  md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Find
                  Distributor
                </span>
              </Link>
              <Link
                to="/contact-us"
                className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProductSidebar
                      search={search}
                      setSearch={setSearch}
                      maxPrice={maxPrice}
                      setMaxPrice={setMaxPrice}
                      distributors={distributors}
                      selectedDistributors={selectedDistributors}
                      handleDistributorChange={handleDistributorChange}
                      openCategory={openCategory}
                      setOpenCategory={setOpenCategory}
                      cattle={cattle}
                      broiler={broiler}
                      layer={layer}
                      pig={pig}
                      fish={fish}
                    />
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

