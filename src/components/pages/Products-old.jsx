import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import broilerproduct from "../../assets/images/broiler-starter-product.png";
import pigproduct from "../../assets/images/pig-starter-product.png";
import fishproduct from "../../assets/images/floating-fish-product.png";
import cattleproduct from "../../assets/images/cattle-feed-product.png";
import specialproduct from "../../assets/images/special-product.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCartShopping } from "@fortawesome/free-solid-svg-icons";


const products = [
  {
    id: 1,
    name: "Cattle Feeds",
    price: 749,
    oldPrice: 1338,
    category: "Cattle Feed",
    image: cattleproduct,
  },
  {
    id: 2,
    name: "Poultry Feeds",
    price: 2999,
    oldPrice: 3999,
    category: "Poultry Feed",
    image: broilerproduct,
  },
  {
    id: 3,
    name: "Pig Nutration",
    price: 1890,
    oldPrice: 2022,
    category: "Pig Feed",
    image: pigproduct,
  },
  {
    id: 4,
    name: "Fish Feeds",
    price: 490,
    oldPrice: 628,
    category: "Fish Feed",
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
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000); 

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchPrice = product.price <= maxPrice;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <>
      <Header />
      <main className="pt-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-[24px] md:text-5xl font-semibold text-gray-800 text-center mb-10">
            Our <span className="text-[#ffa800]">Products</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 text-gray-800">
                Price Filter
              </h3>

              <div className="bg-white shadow-md rounded-lg py-4 px-4">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#ffa800] cursor-pointer"
                />

                <p className="mt-2 text-gray-700 text-[16px] md:text-[18px]">
                  Price: <span className="font-semibold">$0 - ${maxPrice}</span>
                </p>
              </div>

              <h3 className="text-[20px] md:text-[24px] font-semibold  text-gray-800 mt-8 mb-4">
                Categories
              </h3>
              <div className="bg-white shadow-md rounded-lg py-4 px-4">
                <ul className="space-y-2  cursor-pointer">
                  {[
                    "All",
                    "Cattle Feed",
                    "Poultry Feed",
                    "Pig Feed",
                    "Fish Feed",
                    "Specialty Feed",
                  ].map((category) => (
                    <li
                      key={category}
                      onClick={() => setActiveCategory(category)}
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
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="flex justify-end mb-6 md:mb-12 ">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ffa800]"
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
                      <span className="mx-auto w-[140px]   bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full rounded-lg object-cover h-[140px]"
                        />
                      </span>
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2 text-center">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-[16px] text-center mb-2 font-bold">
                        ${product.price}{" "}
                        <span className="line-through text-sm text-gray-400 ml-2">
                          ${product.oldPrice}{" "}
                        </span>
                      </p>
                      <button
                        type="button"
                        className="mt-4 w-full bg-[#ffa800] text-white
                               py-2 rounded-lg font-medium cursor-pointer hover:bg-yellow-400"
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
