import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
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
import { API_URL } from "../../config/api";

export default function ProductListing() {
  const { categorySlug, subCategorySlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedDistributors, setSelectedDistributors] = useState([]);

  const handleDistributorChange = (id) => {
    if (id === null) {
      setSelectedDistributors([]);
      return;
    }

    setSelectedDistributors((prev) =>
      prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id]
    );
  };

  const distributors = [
    { id: null, name: "All" },
    ...Array.from(
      new Map(
        products.map((p) => [
          p.distributor?.id,
          {
            id: p.distributor?.id,
            name: p.distributor?.company_name || p.distributor?.name,
          },
        ])
      ).values()
    ),
  ];

  const [openCategory, setOpenCategory] = useState(() => {
    if (location.pathname.includes("calf") || location.pathname.includes("cattle"))
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

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams();

      if (minPrice) params.append("min_price", minPrice);
      if (maxPrice) params.append("max_price", maxPrice);

      selectedDistributors.forEach((id) => {
        params.append("distributor_ids[]", id);
      });

      const response = await axios.get(
        `${API_URL}/categories/${categorySlug}/sub-categories/${subCategorySlug}/products?${params.toString()}`
      );

      setProducts(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const formatTitle = (slug) => {
    return slug
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedTitle = formatTitle(subCategorySlug);
  const words = formattedTitle?.split(" ") || [];
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  const handleAddtoCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = existingCart.find((item) => item.id === product.id);
    let updatedCart;

    if (productExists) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  useEffect(() => {
    fetchProducts();
  }, [categorySlug, subCategorySlug, minPrice, maxPrice, selectedDistributors]);

  return (
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
            <div className="absolute inset-0 bg-black/[0.60]"></div>
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6 w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                {firstPart} <span className="text-[#ffa800]">{lastWord}</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                Empowering livestock productivity with scientifically balanced
                nutrition for healthier animals and better returns.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to="/distributor"
                  className="mt-4 md:mt-6 w-full md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Find Distributor
                  </span>
                </Link>
                <Link
                  to="/contact-us"
                  className="mt-3 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
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
              minPrice={minPrice}
              setMinPrice={setMinPrice}
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
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-10">
                {formatTitle(subCategorySlug)} <span className="text-[#ffa800]">Products</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 md:py-6 py-4 mt-4 md:mt-12">
                {products.map((product) => (
                  <div key={product.id} className="bg-[#efefef] rounded-lg p-4 shadow-sm">
                    <span className="mx-auto w-[200px] bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4">
                      <a href={product.image_url} data-fancybox="product-gallery">
                        <img src={product.image_url} alt={product.name} className="w-full rounded-lg object-cover h-[180px]" />
                      </a>
                    </span>
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2 text-center">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs text-center mb-1">
                      {product.distributor?.company_name || product.distributor?.name}
                    </p>
                    <p className="text-gray-600 text-[16px] text-center mb-2 font-bold">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                      {product.price}{" "}
                      <span className="line-through text-sm text-gray-400 ml-2">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {product.mrp}
                      </span>
                    </p>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => handleAddtoCart(product)}
                        type="button"
                        className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-xl font-medium cursor-pointer hover:bg-yellow-400 text-[14px]"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => navigate(`/product-details/${product.slug}`)}
                        type="button"
                        className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl font-medium cursor-pointer hover:bg-green-400 text-[14px]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}