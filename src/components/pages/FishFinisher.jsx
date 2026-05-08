import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  faArrowRight,
  faStar,
  faChevronDown,
  faArrowLeft,
  faDroplet,
  faDumbbell,
  faFire,
  faLeaf,
  faOilCan,
  faCube,
  faBone,
  faDna,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
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

import { Fancybox } from "@fancyapps/ui";
import productbanner from "../../assets/images/product-banner.jpeg";
import { useNavigate } from "react-router-dom";
import Quality from "./Quality";

import { Helmet } from "react-helmet";
import ProductSidebar from "./ProductSidebar";

const products = [
  {
    id: 1,
    name: "Fish Feed ",
    distributor: "Agro Farm India",
    price: 749,
    oldPrice: 1338,
    image: cattleproduct,
  },
  {
    id: 2,
    name: "Fish Feed ",
    distributor: "Agro Farm India",
    price: 799,
    oldPrice: 1200,
    image: cattleproduct,
  },
  {
    id: 3,
    name: "Fish Feed",
    distributor: "Himalaya Feeds",
    price: 950,
    oldPrice: 1400,
    image: cattleproduct,
  },
  {
    id: 4,
    name: "Fish Feed ",
    distributor: "Kolkata",
    price: 950,
    oldPrice: 1400,
    image: cattleproduct,
  },
];

export default function FishFinisher() {
  const [search, setSearch] = useState("");
  //   const [activeCategory, setActiveCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);
  //   const [activeTab, setActiveTab] = useState("All");
  const [activeTab, setActiveTab] = useState("additional");
  // const [openCategory, setOpenCategory] = useState(null)
  // ;
  const [selectedDistributors, setSelectedDistributors] = useState([]);

  const handleDistributorChange = (name) => {
    if (name === "All") {
      setSelectedDistributors([]);
      return;
    }

    setSelectedDistributors((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name],
    );
  };

  const distributors = ["All", ...new Set(products.map((p) => p.distributor))];

  const location = useLocation();

  const [openCategory, setOpenCategory] = useState(() => {
    if (
      location.pathname.includes("calf") ||
      location.pathname.includes("cattle")
    )
      return "cattle";

    if (
      location.pathname.includes("starter") ||
      location.pathname.includes("grower")
    )
      return "poultry";

    if (location.pathname.includes("layer")) return "layer";

    if (location.pathname.includes("pig")) return "pig";
    if (location.pathname.includes("fish")) return "fish";

    return null;
  });

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
    });

    return () => Fancybox.destroy();
  }, []);

  const filteredProducts = products.filter((product) => {
    const text = search.trim().toLowerCase();

    const name = product.name.toLowerCase();
    const distributor = product.distributor.toLowerCase().trim();

    const matchSearch = name.includes(text) || distributor.includes(text);

    const matchPrice = product.price <= maxPrice;

    const matchDistributor =
      selectedDistributors.length === 0 ||
      selectedDistributors.includes(product.distributor);

    return matchSearch && matchPrice && matchDistributor;
  });

  const navigate = useNavigate();
  const handleAddtoCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = existingCart.find((item) => item.id === product.id);
    let updatedCart;

    if (productExists) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart");
  };

  return (
    <>
      <Helmet>
        <title>Products - Animal Feed</title>
      </Helmet>
      <Header showLogout={true} />
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

            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Fish Finisher <span className="text-[#ffa800]"> Feed </span>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
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

            {/* Products Section */}
            <div className="lg:col-span-3 ">
              {/* Search */}

              <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-10">
                Fish Finisher Feed{" "}
                <span className="text-[#ffa800]">Products</span>
              </h2>

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

              <div>
                {/* ================= PRODUCT INFORMATION SECTION ================= */}

                <div className="py-8">
                  <div className="mt-6 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 px-6 py-6">
                    <div className=" text-center max-w-3xl mx-auto mb-8">
                      <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                        Balanced Nutrition for{" "}
                        <br className="hidden md:block" />{" "}
                        <span className="text-[#ffa800]">Healthy Growth</span>
                      </h2>
                      <p className="mt-2 md:mt-4 text-gray-600  text-center text-[16px] md:text-[18px]">
                        Fish Feed supports fast growth and strong development in
                        young fish, ensuring better immunity, efficient feed
                        utilization, and improved survival during the early
                        growth stage.
                      </p>
                    </div>
                    {/* ===== NUTRITION GRID ===== */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                      {/* Moisture */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faDroplet}
                          className="text-blue-500 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Moisture</p>
                          <p className="font-semibold text-gray-800 ">
                            MAX 12%
                          </p>
                        </div>
                      </div>

                      {/* Protein */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faDumbbell}
                          className="text-green-600 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Crude Protine</p>
                          <p className="font-semibold text-gray-800 ">
                            MIN 20%
                          </p>
                        </div>
                      </div>

                      {/* Energy */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faFire}
                          className="text-orange-500 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">
                            Crude Fat (EE)
                          </p>
                          <p className="font-semibold text-gray-800">MIN 3%</p>
                        </div>
                      </div>

                      {/* Fiber */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faLeaf}
                          className="text-green-500 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">
                            Crude Fiber (CF)
                          </p>
                          <p className="font-semibold text-gray-800">MAX 8%</p>
                        </div>
                      </div>

                      {/* Fat */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faCube}
                          className="text-gray-500 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Total Ash</p>
                          <p className="font-semibold text-gray-800">MIN 9%</p>
                        </div>
                      </div>

                      {/* Ash */}
                      <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-xl shadow-md">
                        <FontAwesomeIcon
                          icon={faOilCan}
                          className="text-yellow-500 text-2xl"
                        />
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">
                            Metabolic Energy (ME)
                          </p>
                          <p className="font-semibold text-gray-800">
                            2900 KCAL/KG
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
