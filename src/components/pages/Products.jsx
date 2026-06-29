import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faIndianRupeeSign,

  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";

import { Link } from "react-router-dom";
// images

// import layer from "../../assets/images/broiler-starter-product.png";
// import fish from "../../assets/images/floating-fish-product.png";

// import pig from "../../assets/images/pig-starter-product.png";
// import special from "../../assets/images/special-product.jpeg";
import banner from "../../assets/images/product-banner.jpeg";
import { Fancybox } from "@fancyapps/ui";
import productbanner from "../../assets/images/product-banner.jpeg";

import cattle from "../../assets/images/cattle1.png";
import cattleProduct from "../../assets/images/cattle-feed-product.png";
import cattleProduct1 from "../../assets/images/cattle-feed-product.png";
import pig from "../../assets/images/pig2.png";
import broiler from "../../assets/images/poultry2.png";
import broilerProduct from "../../assets/images/broiler-starter-product.png";
import fish from "../../assets/images/fish2.png";
import all from "../../assets/images/poultry-feed4.jpg";
import layer from "../../assets/images/poultry-feed1.jpg";
import special from "../../assets/images/poultry-feed2.jpg";
import { icon } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";


// PRODUCTS
// const products = [
//   {
//     id: 1,
//     name: "Calf Feed",
//     category: "Cattle Feed",
//     type: "Calf Feed",
//     image: cattleProduct,
//     icon: cattle,
//     link: "/calf-products",
//   },
//   {
//     id: 2,
//     name: "Cattle Adult Feed",
//     category: "Cattle Feed",
//     type: "Adult Feed",
//     image: cattleProduct1,
//     icon: cattle,
//     link: "/adult-products",
//   },
//   {
//     id: 3,
//     name: "Goat Feed",
//     category: "Cattle Feed",
//     type: "Goat Feed",
//     image: cattleProduct,
//     icon: cattle,
//     link: "/goat-products",
//   },
//   {
//     id: 4,
//     name: "Yak Feed",
//     category: "Cattle Feed",
//     type: "Yak Feed",
//     image: cattleProduct,
//     icon: cattle,
//     link: "/yak-products",
//   },

//   {
//     id: 5,
//     name: "Poultry Pre-Starter",
//     category: "Poultry Feed",
//     type: "Pre-Starter",
//     image: broilerProduct,
//     icon: broiler,
//     link: "/poultryprestarter-products",
//   },
//   {
//     id: 6,
//     name: "Poultry Starter",
//     category: "Poultry Feed",
//     type: "Starter",
//     image: broilerProduct,
//     icon: broiler,
//     link: "/poultrystarter-products",
//   },
//   {
//     id: 7,
//     name: "Poultry Grower",
//     category: "Poultry Feed",
//     type: "Grower",
//     image: broilerProduct,
//     icon: broiler,

//     link: "/poultrygrower-products",
//   },
//   {
//     id: 8,
//     name: "Poultry Finisher",
//     category: "Poultry Feed",
//     type: "Finisher",
//     image: broilerProduct,
//     icon: broiler,
//     link: "/poultryfinisher-products",
//   },
//   {
//     id: 9,
//     name: "Layer Pre-Starter",
//     category: "Layer Poultry Feed",
//     type: "Pre-Starter",
//     image: broilerProduct,
//     icon: layer,
//     link: "/layerorestarter-products",
//   },

//   {
//     id: 10,
//     name: "Layer Poultry Starter",
//     category: "Layer Poultry Feed",
//     type: "Starter",
//     image: broilerProduct,
//     icon: layer,
//     link: "/layerstarter-products",
//   },
//   {
//     id: 11,
//     name: "Layer Poultry Finisher",
//     category: "Layer Poultry Feed",
//     type: "Finisher",
//     image: broilerProduct,
//     image: layer,
//     link: "/layerfinisher-products",
//   },
//   {
//     id: 12,
//     name: "Pig Feed",
//     category: "Pig Feed",
//     type: "Finisher",
//     image: broilerProduct,
//     icon: pig,
//     link: "/pigfinisher-products",
//   },

//   {
//     id: 13,
//     name: "Jubenile",
//     category: "Fish Feed",
//     type: "Jubenile",
//     image: broilerProduct,
//     icon: fish,
//     link: "/juvenilefish-products",
//   },
//   {
//     id: 14,
//     name: "Fish Starter",
//     category: "Fish Feed",
//     type: "Starter",
//     image: broilerProduct,
//     icon: fish,
//     link: "/starterfish-products",
//   },
//   {
//     id: 15,
//     name: "Fish Grower",
//     category: "Fish Feed",
//     type: "Grower",
//     image: broilerProduct,
//     icon: fish,
//     link: "/growerfish-products",
//   },
//   {
//     id: 16,
//     name: "Fish Finisher",
//     category: "Fish Feed",
//     type: "Finisher",
//     image: broilerProduct,
//     icon: fish,
//     link: "/finisherfish-products",
//   },
//   {
//     id: 17,
//     name: "Fish Maintenance",
//     category: "Fish Feed",
//     type: "Maintenance",
//     image: broilerProduct,
//     icon: fish,
//     link: "/maintenancefish-products",
//   },
//   {
//     id: 17,
//     // name: "Specialty Feed",
//     // category: "Specialty Feed",
//     // type: "Special",
//     // image: broilerProduct,
//     icon: special,
//   },
// ];

// CATEGORY
// const categories = [
//   // { name: "All", icon: all },
//   { name: "Cattle Feed", icon: cattle },
//   { name: "Poultry Feed", icon: broiler },
//   { name: "Layer Poultry Feed", icon: layer },
//   { name: "Pig Feed", icon: pig },
//   { name: "Fish Feed", icon: fish },
//   { name: "Specialty Feed", icon: special },
// ];

import { API_URL } from "../../config/api";
import { useBanner } from "../../hooks/useBanner";
import HeroBanner from "../HeroBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

export default function Products() {
  const [search, setSearch] = useState("");
  // const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeType, setActiveType] = useState("");

  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeCategorySlug, setActiveCategorySlug] = useState("");


  const pageSlug = "products";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);

  const { seo } = usePageSEO("products");


  useEffect(() => {
    Fancybox.bind("[data-fancybox='product-gallery']", {
      Image: {
        zoom: true,
        click: "zoom",
        wheel: "slide",
      },
      Carousel: {
        infinite: true,
      },
      //   caption: (fancybox, slide) => `
      //     <div>
      //       <h3>${slide.title}</h3>

      //     </div>
      //   `,
    });

    return () => Fancybox.destroy();
  }, []);

  // CATEGORY FILTER
  // const categoryProducts =
  //   activeCategory === "All"
  //     ? products
  //     : products.filter((p) => p.category === activeCategory);

  // const categoryProducts = products.filter(
  //   (p) => p.category === activeCategory,
  // );

  // TYPES
  //const typeCards = [ ...new Set(categoryProducts.map((p) => p.type))];
  const typeCards = [
    ...new Set(filteredProducts.map((p) => p.type)),
  ];
  // FINAL FILTER
  //   const filteredProducts = categoryProducts.filter(
  //     (p) =>
  //       (activeType === "All" || p.type === activeType) &&
  //       p.name.toLowerCase().includes(search.toLowerCase()),
  //   );
  // const filteredProducts = categoryProducts.filter((p) => {
  //   const text = search.trim().toLowerCase();

  //   const matchSearch =
  //     p.name.toLowerCase().includes(text) ||
  //     p.category.toLowerCase().includes(text) ||
  //     p.type.toLowerCase().includes(text);

  //   // const matchType = activeType === "All" || p.type === activeType;
  //   const matchType = activeType ? p.type === activeType : true;

  //   return matchSearch && matchType;
  // });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/categories`
      );

      const data = response.data.data;

      setCategories(data);

      // auto select first category
      if (data.length > 0) {
        handleCategoryClick(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = async (category) => {
    try {
      setActiveCategory(category.id);
      setActiveCategorySlug(category.slug);

      const response = await axios.get(
        `${API_URL}/categories/${category.slug}/sub-categories`
      );

      console.log(response.data);

      setFilteredProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      {/* <Helmet>
        <title>Products</title>
      </Helmet> */}
      <SEO seo={seo} />
      <Header />

      <main className="pt-16 bg-gray-50">
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

        {/* <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6"> */}
        <div className="max-w-7xl mx-auto px-8 py-10 ">
          {/* SEARCH */}
          {/* <aside className="bg-white p-5 rounded-xl shadow-sm h-fit">
            <h3 className="mb-3 font-semibold">Search</h3>

        

            <div className="relative   ">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009a62]"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full    pl-11 pr-4 py-3
                            rounded-xl
                            bg-white
                            border border-gray-400
                            text-gray-700
                            placeholder-gray-400
                            focus:outline-none
                            focus:border-green-600"
              />
            </div>
            <h3 className="text-xl font-semibold  text-gray-900 mt-8 mb-4">
              Categories
            </h3>
            <div className="bg-white shadow-md rounded-lg py-4 px-4">
         
              <div className="block md:hidden">
                <select
                  value={activeCategory}
                  onChange={(e) => {
                    setActiveCategory(e.target.value);
                    setActiveTab("All");
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:border-[#009a62]"
                >
                  {[
                    "All",
                    "Cattle Feed",
                    "Poultry Feed",
                    "Layer Poultry Feed",
                    "Pig Feed",
                    "Fish Feed",
                    "Specialty Feed",
                  ].map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
       

              <ul className="space-y-2 cursor-pointer hidden md:block">
                {[
                  "All",
                  "Cattle Feed",
                  "Poultry Feed",
                  "Layer Poultry Feed",
                  "Pig Feed",
                  "Fish Feed",
                  "Specialty Feed",
                ].map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveTab("All");
                    }}
                    className={`text-[16px] cursor-pointer ${
                      activeCategory === category
                        ? "text-[#ffa800] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </aside> */}

          {/* MAIN */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-10">
              Product <span className="text-[#ffa800]">Category</span>
            </h2>
            {/* CATEGORY SLIDER */}
            <div className="relative mb-6 ">
              <button className="cat-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow cursor-pointer">
                ‹
              </button>
              <button className="cat-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow cursor-pointer">
                ›
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".cat-next",
                  prevEl: ".cat-prev",
                }}
                spaceBetween={20}

                slidesPerView={1}

                breakpoints={{
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat.id}>
                    <div
                      onClick={() => handleCategoryClick(cat)}
                      className="flex flex-col items-center cursor-pointer pt-6"
                    >
                      <div
                        className={`w-[180px] h-[180px] rounded-full overflow-hidden transition-all duration-200 ${activeCategory === cat.id
                          ? "border-[4px] border-green-600 shadow-md scale-105"
                          : "border border-gray-300"
                          }`}
                      >
                        <img
                          src={cat.image_url} alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p
                        className={`text-md mt-2 ${activeCategory === cat.id
                          ? "text-green-600 font-semibold"
                          : "text-gray-700"
                          }`}
                      >
                        {cat.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* TYPE FILTER */}

            {/* <div className="bg-gray-100 rounded-full px-4 py-2 flex gap-3 overflow-x-auto">
              {typeCards.map((type) => (
                <div
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm ${
                    activeType === type ? "bg-green-600 text-white" : "bg-white"
                  }`}
                >
                  {type}
                </div>
              ))}
            </div> */}

            {/* {activeCategory !== "All" && (
              <div className="bg-gray-100 rounded-full px-4 py-2 flex gap-3 overflow-x-auto">
                {typeCards.map((type) => (
                  <div
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 rounded-full cursor-pointer text-sm ${
                      activeType === type
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )} */}

            {/* {activeCategory !== "All" && (
              <div className="flex justify-center">
                <div className="bg-gray-100 rounded-full px-4 py-2 flex gap-3 overflow-x-auto w-max shadow-inner">
                  {typeCards.map((type) => (
                    <div
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`px-4 py-2 rounded-full cursor-pointer text-sm ${
                        activeType === type
                          ? "bg-green-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* PRODUCT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 md:py-6 py-4 mt-4 md:mt-12">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#efefef] rounded-lg p-6 shadow-sm"
                >
                  <span className="mx-auto w-[200px]   bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4">
                    <a href={p.image_url} data-fancybox="product-gallery">
                      <img
                        src={p.image_url}
                        alt={p.name}
                        className="w-full rounded-lg object-cover h-[180px]"
                      />
                    </a>
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2 text-center">
                    {p.name}
                  </h3>

                  <Link to={`/${activeCategorySlug}/${p.slug}`}>
                    <button
                      type="button"
                      className="mt-4 w-full bg-yellow-500 text-white
                                           py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px]"
                    >
                      View Products
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
