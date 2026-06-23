import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faIndianRupeeSign,
  faChevronDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductSidebar({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  distributors,
  selectedDistributors,
  handleDistributorChange,
  openCategory,
  setOpenCategory,
  cattle,
  broiler,
  layer,
  pig,
  fish,
  categorySlug,
}) {
  const location = useLocation();

  // Dynamic URL generator function
  const getCategoryUrl = (subCategorySlug) => {
    // Check if current URL has /products/ prefix
    if (location.pathname.includes('/products/')) {
      return `/products/${categorySlug || 'cattle-feed'}/${subCategorySlug}`;
    }
    // Default: without /products/ prefix
    return `/${categorySlug || 'cattle-feed'}/${subCategorySlug}`;
  };

  return (
    <aside className="bg-white p-4 rounded-xl shadow-md">
      {/* Back */}
      <div className="mb-4 w-full">
        <Link
          to="/products"
          className="w-full flex items-center justify-center gap-2 px-5 py-3
          bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px]
          shadow-md font-medium hover:shadow-lg hover:-translate-y-[2px]
          active:scale-95 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
          Back
        </Link>
      </div>

      {/* Search */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Search</h3>
        <div className="relative w-full mb-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009a62]"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-400 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-600"
          />
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Price Filter
        </h3>
        <div className="bg-white shadow-md rounded-lg py-4 px-4 mb-4">
          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500">Min (₹)</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                min="0"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500">Max (₹)</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                min="0"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#009a62] cursor-pointer"
          />
          <p className="mt-2 text-gray-700 text-[16px] md:text-[18px]">
            Price:{" "}
            <span className="font-semibold">
              <FontAwesomeIcon icon={faIndianRupeeSign} />{minPrice} -{" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {maxPrice}
            </span>
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>
        <div className="space-y-4">
          {/* CATTLE */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "cattle" ? null : "cattle")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${openCategory === "cattle"
                ? "bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <img src={cattle} className="w-9 h-9 rounded-md" alt="cattle" />
                <span
                  className={`font-medium ${openCategory === "cattle"
                    ? "text-green-700"
                    : "text-gray-800"
                    }`}
                >
                  Cattle Feed
                </span>
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${openCategory === "cattle"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-green-600"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${openCategory === "cattle" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>
            {openCategory === "cattle" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to={getCategoryUrl("calf-feed")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${location.pathname.includes("calf-feed")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  Calf Feed
                </Link>
                <Link
                  to={getCategoryUrl("cattle-love")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${location.pathname.includes("cattle-love")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  Adult Feed
                </Link>
                <Link
                  to={getCategoryUrl("protien-rich-feed")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${location.pathname.includes("protien-rich-feed")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  Protein Rich Feed
                </Link>
              </div>
            )}
          </div>

          {/* POULTRY */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "poultry" ? null : "poultry")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${openCategory === "poultry"
                ? "bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <img src={broiler} className="w-9 h-9 rounded-md" alt="broiler" />
                <span
                  className={`font-medium ${openCategory === "poultry"
                    ? "text-green-700"
                    : "text-gray-800"
                    }`}
                >
                  Poultry Feed
                </span>
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${openCategory === "poultry"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-green-600"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${openCategory === "poultry" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>
            {openCategory === "poultry" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to={getCategoryUrl("poultry-pre-starter")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${location.pathname.includes("poultry-pre-starter")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  Pre Starter
                </Link>
              </div>
            )}
          </div>

          {/* LAYER */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "layer" ? null : "layer")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${openCategory === "layer"
                ? "bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <img src={layer} className="w-9 h-9 rounded-md" alt="layer" />
                <span
                  className={`font-medium ${openCategory === "layer"
                    ? "text-green-700"
                    : "text-gray-800"
                    }`}
                >
                  Layer Poultry
                </span>
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${openCategory === "layer"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-green-600"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${openCategory === "layer" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>
            {openCategory === "layer" && (
              <div className="p-3 flex flex-col gap-2">
                <p className="text-gray-400 text-sm px-3 py-2">No sub-categories available</p>
              </div>
            )}
          </div>

          {/* PIG */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "pig" ? null : "pig")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${openCategory === "pig"
                ? "bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <img src={pig} className="w-9 h-9 rounded-md" alt="pig" />
                <span
                  className={`font-medium ${openCategory === "pig" ? "text-green-700" : "text-gray-800"
                    }`}
                >
                  Pig Feed
                </span>
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${openCategory === "pig"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-green-600"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${openCategory === "pig" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>
            {openCategory === "pig" && (
              <div className="p-3 flex flex-col gap-2">
                <p className="text-gray-400 text-sm px-3 py-2">No sub-categories available</p>
              </div>
            )}
          </div>

          {/* FISH */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "fish" ? null : "fish")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${openCategory === "fish"
                ? "bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <img src={fish} className="w-9 h-9 rounded-md" alt="fish" />
                <span
                  className={`font-medium ${openCategory === "fish" ? "text-green-700" : "text-gray-800"
                    }`}
                >
                  Fish Feed
                </span>
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${openCategory === "fish"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-green-600"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${openCategory === "fish" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>
            {openCategory === "fish" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to={getCategoryUrl("fish-starter")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${location.pathname.includes("fish-starter")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  Fish Starter
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Distributor Filter */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 mt-4">
          Search by Distributor
        </h3>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-3 cursor-pointer">
          {distributors && distributors.length > 0 ? (
            distributors.map((dist) => (
              <label
                key={dist.id ?? "all"}
                className="flex items-center gap-3 cursor-pointer hover:text-green-600 transition"
              >
                <input
                  type="checkbox"
                  checked={
                    dist.id === null
                      ? selectedDistributors.length === 0
                      : selectedDistributors.includes(dist.id)
                  }
                  onChange={() => handleDistributorChange(dist.id)}
                  className="accent-[#009a62] w-4 h-4"
                />
                <span className="text-gray-700">{dist.name}</span>
              </label>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No distributors available</p>
          )}
        </div>
      </div>
    </aside>
  );
}