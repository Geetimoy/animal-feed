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
}) {
  const location = useLocation();

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
        <div className="relative w-full  mb-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009a62]"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full  pl-11 pr-4 py-3
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

      {/* Filter Product */}

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Price Filter
        </h3>

        <div className="bg-white shadow-md rounded-lg py-4 px-4 mb-4">
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
      </div>

      {/* Categories */}

      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>

        <div className="space-y-4">
          {/* ================= CATTLE ================= */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "cattle" ? null : "cattle")
              }
              className={`w-full flex items-center justify-between p-3  cursor-pointer ${
                openCategory === "cattle"
                  ? "bg-green-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3  cursor-pointer">
                <img src={cattle} className="w-9 h-9 rounded-md" />
                <span
                  className={`font-medium ${
                    openCategory === "cattle"
                      ? "text-green-700"
                      : "text-gray-800"
                  }`}
                >
                  Cattle Feed
                </span>
              </div>

              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full  ${
                  openCategory === "cattle"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    openCategory === "cattle" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openCategory === "cattle" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to="/calf-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("calf")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={cattleproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Calf Feed
                </Link>

                <Link
                  to="/adult-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("adult")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={cattleproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Adult Feed
                </Link>

                <Link
                  to="/goat-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("goat")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={cattleproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Goat Feed
                </Link>
                <Link
                  to="/yak-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("yak")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={cattleproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Yak Feed
                </Link>
              </div>
            )}
          </div>

          {/* ================= POULTRY ================= */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "poultry" ? null : "poultry")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${
                openCategory === "poultry"
                  ? "bg-green-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={broiler} className="w-9 h-9 rounded-md" />
                <span
                  className={`font-medium ${
                    openCategory === "poultry"
                      ? "text-green-700"
                      : "text-gray-800"
                  }`}
                >
                  Poultry Feed
                </span>
              </div>

              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  openCategory === "poultry"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${openCategory === "poultry" ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            {openCategory === "poultry" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to="/poultryprestarter-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("poultryprestarter")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Pre Starter
                </Link>

                <Link
                  to="/poultrystarter-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("poultrystarter")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Starter
                </Link>

                <Link
                  to="/poultrygrower-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("poultyrgrower")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Grower
                </Link>

                <Link
                  to="/poultryfinisher-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("poultyrfinisher")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Finisher
                </Link>
              </div>
            )}
          </div>

          {/* ================= LAYER POULTRY ================= */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "layer" ? null : "layer")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${
                openCategory === "layer"
                  ? "bg-green-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={layer} className="w-9 h-9 rounded-md" />
                <span
                  className={`font-medium ${
                    openCategory === "layer"
                      ? "text-green-700"
                      : "text-gray-800"
                  }`}
                >
                  Layer Poultry
                </span>
              </div>

              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  openCategory === "layer"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    openCategory === "layer" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openCategory === "layer" && (
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to="/layerorestarter-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("layerorestarter")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerProduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Pre Starter
                </Link>

                <Link
                  to="/layerstarter-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("layerstarter")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerProduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Starter
                </Link>
                <Link
                  to="/layerfinisher-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("layerfinisher")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={broilerProduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Finisher
                </Link>
              </div>
            )}
          </div>

          {/* ================= PIG ================= */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "pig" ? null : "pig")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${
                openCategory === "pig"
                  ? "bg-green-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={pig} className="w-9 h-9 rounded-md" />
                <span
                  className={`font-medium ${
                    openCategory === "pig" ? "text-green-700" : "text-gray-800"
                  }`}
                >
                  Pig Feed
                </span>
              </div>

              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  openCategory === "pig"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    openCategory === "pig" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openCategory === "pig" && (
              <div className="p-3 flex flex-col gap-2">
                {/* <Link
                  to="/starterpig-product"
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600"
                >
                
                  Starter
                </Link> */}
                <Link
                  to="/pigfinisher-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("pigfinisher")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={pigproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Finisher
                </Link>
              </div>
            )}
          </div>

          {/* ================= FISH ================= */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "fish" ? null : "fish")
              }
              className={`w-full flex items-center justify-between p-3 cursor-pointer ${
                openCategory === "fish"
                  ? "bg-green-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={fish} className="w-9 h-9 rounded-md" />
                <span
                  className={`font-medium ${
                    openCategory === "fish" ? "text-green-700" : "text-gray-800"
                  }`}
                >
                  Fish Feed
                </span>
              </div>

              <div
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  openCategory === "fish"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    openCategory === "fish" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openCategory === "fish" && (
              <div className="p-3 flex flex-col gap-2">
                {/* <Link
                             to="/jubenilefish-product"
                             className="px-3 py-2 bg-gray-50 rounded-md"
                           >
                             Jubenile
                           </Link> */}
                <Link
                  to="/juvenilefish-products"
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600"
                >
                  {/* <img
                               src={fishproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Juvenile
                </Link>
                <Link
                  to="/starterfish-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("starterfish")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={fishproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Starter
                </Link>

                <Link
                  to="/growerfish-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("growerfish")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={fishproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Grower
                </Link>

                <Link
                  to="/finisherfish-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("finisherfish")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={fishproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Finisher
                </Link>

                <Link
                  to="/maintenancefish-products"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    location.pathname.includes("maintenancefish")
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {/* <img
                               src={fishproduct}
                               className="w-7 h-7 rounded-md"
                             /> */}
                  Maintenance
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Distributor Filter */}
      {/* Search by Distributor */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 mt-4">
          Search by Distributor
        </h3>

        <div className="bg-white shadow-md rounded-lg p-4 space-y-3 cursor-pointer">
          {distributors.map((dist, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={
                  dist === "All"
                    ? selectedDistributors.length === 0
                    : selectedDistributors.includes(dist)
                }
                onChange={() => handleDistributorChange(dist)}
                className="accent-[#009a62] w-4 h-4"
              />
              <span className="text-gray-700">{dist}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
