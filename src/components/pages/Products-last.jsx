import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import broilerproduct from "../../assets/images/broiler-starter-product.png";
import pigproduct from "../../assets/images/pig-starter-product.png";
import fishproduct from "../../assets/images/floating-fish-product.png";
import cattleproduct from "../../assets/images/cattle-feed-product.png";
import specialproduct from "../../assets/images/special-product.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faIndianRupeeSign,
  faLocationDot,

} from "@fortawesome/free-solid-svg-icons";
import { Fancybox } from "@fancyapps/ui";
import productbanner  from "../../assets/images/product-banner.jpeg";
import { useNavigate } from "react-router-dom";
import Quality from "./Quality";

import { Helmet } from "react-helmet";


const products = [
  {
    id: 1,
    name: "Cattle Feeds",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    type: "Calf Feed",
    image: cattleproduct,
  },
  {
    id: 2,
    name: "Poultry Feeds",
    price: 2999,
    oldPrice: 3999,
    category: "Poultry Feed",
    type: "Pre-starter",
    image: broilerproduct,
  },
  {
    id: 3,
    name: "Pig Nutration",
    price: 1890,
    oldPrice: 2022,
    category: "Pig Feed",
    type: "Pig1",
    image: pigproduct,
  },
  {
    id: 4,
    name: "Fish Feeds",
    price: 490,
    oldPrice: 628,
    category: "Fish Feed",
    type: "Jubenile",
    image: fishproduct,
  },
  {
    id: 5,
    name: "Specialty Feeds",
    price: 1490,
    oldPrice: 1628,
    category: "Specialty Feed",
    image: specialproduct,
  },
  {
    id: 6,

    name: "Adult Feed",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    type: "Adult Feed",
    image: cattleproduct,
  },
  {
    id: 7,
    name: "Jubenile",
    price: 500,
    oldPrice: 650,
    category: "Fish Feed",
    type: "Jubenile",
    image: fishproduct,
  },
  {
    id: 8,
    name: "Starter",
    price: 550,
    oldPrice: 700,
    category: "Fish Feed",
    type: "Starter",
    image: fishproduct,
  },

  {
    id: 9,
    name: "Pig Product 1",
    price: 1800,
    oldPrice: 2000,
    category: "Pig Feed",
    type: "Pig2",
    image: pigproduct,
  },
  {
    id: 10,
    name: "Pig Product 2",
    price: 1900,
    oldPrice: 2100,
    category: "Pig Feed",
    type: "Pig2",
    image: pigproduct,
  },
  {
    id: 11,
    name: "Goat Feeds",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    type: "Goat Feed",
    image: cattleproduct,
  },
  {
    id: 12,
    name: "Yak Feeds",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    type: "Yak Feed",
    image: cattleproduct,
  },
  {
    id: 13,
    name: "Calf Feed",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    type: "Calf Feed",
    image: cattleproduct,
  },
  {
    id: 14,
    name: "Grower",
    price: 550,
    oldPrice: 700,
    category: "Fish Feed",
    type: "Grower",
    image: fishproduct,
  },
  {
    id: 15,
    name: "Finisher",
    price: 400,
    oldPrice: 728,
    category: "Fish Feed",
    type: "Finisher",
    image: fishproduct,
  },
  {
    id: 16,
    name: "Maintenance",
    price: 400,
    oldPrice: 728,
    category: "Fish Feed",
    type: "Maintenance",
    image: fishproduct,
  },
  {
    id: 17,
    name: "Starter",
    price: 2999,
    oldPrice: 3999,
    category: "Poultry Feed",
    type: "Starter",
    image: broilerproduct,
  },
  {
    id: 18,
    name: "Grower",
    price: 2999,
    oldPrice: 3999,
    category: "Poultry Feed",
    type: "Grower",
    image: broilerproduct,
  },
  {
    id: 19,
    name: "Finisher",
    price: 2999,
    oldPrice: 3999,
    category: "Poultry Feed",
    type: "Finisher",
    image: broilerproduct,
  },
  {
    id: 20,
    name: "Layer Poultry Feed Pre-starter",
    price: 999,
    oldPrice: 6999,
    category: "Layer Poultry Feed",
    type: "Pre-starter",
    image: broilerproduct,
  },
  {
    id: 17,
    name: "Layer Poultry Feed Starter",
    price: 299,
    oldPrice: 399,
    category: "Layer Poultry Feed",
    type: "Starter",
    image: broilerproduct,
  },

  {
    id: 19,
    name: "Layer Poultry Feed Finisher",
    price: 290,
    oldPrice: 999,
    category: "Layer Poultry Feed",
    type: "Finisher",
    image: broilerproduct,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000); 
  const [activeTab, setActiveTab] = useState("All");

 

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

  // const filteredProducts = products.filter((product) => {
  //   const matchSearch = product.name
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   const matchCategory =
  //     activeCategory === "All" || product.category === activeCategory;

  //   const matchPrice = product.price <= maxPrice;

  //   return matchSearch && matchCategory && matchPrice;
  // });

const filteredProducts = products.filter((product) => {
  const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
    activeCategory === "All" || product.category === activeCategory;

  const matchPrice = product.price <= maxPrice;

  const matchTab =
    activeCategory === "All"
      ? true
      : activeTab === "All"
      // : activeTab === ""
        ? true
        : product.type === activeTab;

  return matchSearch && matchCategory && matchPrice && matchTab;
});

  const categoryProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  const tabs =
    activeCategory === "All"
      ? []
      // : [...new Set(categoryProducts.map((p) => p.type).filter((type) => type))]
      : ["All", ...new Set(categoryProducts.map((p) => p.type))];

   const navigate = useNavigate();
   const handleAddtoCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = existingCart.find((item) => item.id === product.id )
    let updatedCart;

    if(productExists) {
      updatedCart = existingCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item  )
    } else {
      updatedCart = [
        ...existingCart, {...product, quantity: 1},
      ]
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart")

   }

  return (
    <>
      <Helmet>
        <title>Products - Animal Feed</title>
      </Helmet>
      <Header showLogout={true} />
      <main className="pt-16 overflow-x-hidden">
        {/* <section className="relative z-0">
          <div className="relative">
            <img
              src={productbanner}
              alt="About Us Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />

            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Quality <span className="text-[#ffa800]"> Feed Solution</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                For over 25 years, we've been at the forefront of animal
                nutrition, blending scientific expertise with agricultural
                wisdom to empower farmers and enhance livestock productivity
                across India
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
        </section> */}
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
                Quality Feed <span className="text-[#ffa800]"> Solution</span>
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
          {/* <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-10">
            Our <span className="text-[#ffa800]">Products</span>
          </h2> */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Price Filter
              </h3>

              <div className="bg-white shadow-md rounded-lg py-4 px-4">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#009a62] cursor-pointer"
                />

                <p className="mt-2 text-gray-700 text-[16px] md:text-[18px]">
                  Price:{" "}
                  <span className="font-semibold">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />0 -{" "}
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {maxPrice}
                  </span>
                </p>
              </div>

              <h3 className="text-xl font-semibold  text-gray-900 mt-8 mb-4">
                Categories
              </h3>
              {/* <div className="bg-white shadow-md rounded-lg py-4 px-4">
                <ul className="space-y-2  cursor-pointer">
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
              </div> */}

              <div className="bg-white shadow-md rounded-lg py-4 px-4">
                {/*  Mobile  Dropdown */}
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
{/* Desktop */}
              
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
            </aside>

            {/* Products Section */}
            <div className="lg:col-span-3 ">
              {/* Search */}

              <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-10">
                Our <span className="text-[#ffa800]">Products</span>
              </h2>

              <div className="flex justify-end mb-4 md:mb-8 ">
                <div className="relative w-full sm:w-72 ">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009a62]"
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-72   pl-11 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-700
                placeholder-gray-400
                focus:outline-none
                focus:border-green-600"
                  />
                </div>
              </div>

              <div className="flex justify-center  mb-4 md:mb-12 ">
                {activeCategory !== "All" && (
                  <div className="mb-4 overflow-x-auto">
                    <div className="flex gap-1 md:gap-6 bg-[#ececec] p-1 rounded-xl w-max shadow-inner">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 rounded-lg text-md font-medium whitespace-nowrap transition-all duration-200  cursor-pointer ${
                            activeTab === tab
                              ? "bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                              : "text-gray-600"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {/* {activeCategory !== "All" && (
                  <div className="mb-4 overflow-x-auto">
                    <div className="flex gap-1 md:gap-6 bg-[#ececec] p-1 rounded-xl w-max shadow-inner">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 rounded-lg text-md font-medium whitespace-nowrap transition-all duration-200  cursor-pointer ${
                            activeTab === tab
                              ? "bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                              : "text-gray-600"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>

              {/* Product Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-6">
                {filteredProducts.length === 0 ? (
                  <p className="text-gray-500 col-span-full text-center">
                    No products found
                  </p>
                ) : (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#efefef] rounded-lg p-6 shadow-sm"
                    >
                      <span className="mx-auto w-[200px]   bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4">
                        <a href={product.image} data-fancybox="product-gallery">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-lg object-cover h-[180px]"
                          />
                        </a>
                      </span>
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2 text-center">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-[16px] text-center mb-2 font-bold">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {product.price}{" "}
                        <span className="line-through text-sm text-gray-400 ml-2">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                          {product.oldPrice}{" "}
                        </span>
                      </p>
                      <button
                        onClick={() => handleAddtoCart(product)}
                        type="button"
                        className="mt-4 w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px]"
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="pr-2"
                        />
                        Add to Cart
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
