import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faIndianRupeeSign,
  faChevronDown,
  faArrowLeft,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../config/api";

// ============================================
// 📦 Sub-Components for better organization
// ============================================

const BackButton = () => (
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
);

const SearchInput = ({ value, onChange }) => (
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
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-400
          text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-600"
      />
    </div>
  </div>
);

const PriceFilter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const MAX_PRICE = 5000;

  const handlePriceReset = () => {
    setMinPrice(0);
    setMaxPrice(MAX_PRICE);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Price Filter</h3>
        <button
          onClick={handlePriceReset}
          className="text-sm px-3 py-1 bg-green-100 hover:bg-green-200 rounded-md text-gray-700 transition cursor-pointer"
        >
          Reset
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg py-4 px-4 mb-4">
        <div className="flex gap-3 mb-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500">Min (₹)</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              min={0}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500">Max (₹)</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              min={0}
            />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#009a62] cursor-pointer"
        />
        <p className="mt-2 text-gray-700 text-[16px] md:text-[18px]">
          Price:{" "}
          <span className="font-semibold">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {minPrice} –{" "}
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {maxPrice}
          </span>
        </p>
      </div>
    </div>
  );
};

const DistributorFilter = ({ distributors, selectedDistributors, onChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-900 mt-4">
      Search by Distributor
    </h3>
    <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
      {distributors?.length > 0 ? (
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
              onChange={() => onChange(dist.id)}
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
);

// ============================================
// 🎯 Main Component
// ============================================

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
}) {
  const location = useLocation();
  const { categorySlug: activeCategorySlug, subCategorySlug: activeSubCategorySlug } = useParams();

  // ===== State Management =====
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  // Combined state for sub-categories: { [categorySlug]: { data: [], loading: false, error: null } }
  const [subCategoryState, setSubCategoryState] = useState({});
  const [openCategory, setOpenCategory] = useState(activeCategorySlug || null);

  // ===== Fetch Categories =====
  useEffect(() => {
    const fetchCategories = async () => {
      setCategoriesLoading(true);
      setCategoriesError(null);
      try {
        const res = await axios.get(`${API_URL}/categories`);
        setCategories(res.data.data || []);
      } catch (err) {
        setCategoriesError(err.message || "Failed to load categories");
        console.error("Failed to fetch categories:", err);
      } finally {
        setCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // ===== Lazy Load Sub-Categories =====
  const fetchSubCategories = useCallback(async (categorySlug) => {
    // Skip if already loaded or currently loading
    const existing = subCategoryState[categorySlug];
    if (existing?.data || existing?.loading) return;

    // Set loading state
    setSubCategoryState((prev) => ({
      ...prev,
      [categorySlug]: { data: [], loading: true, error: null },
    }));

    try {
      const res = await axios.get(
        `${API_URL}/categories/${categorySlug}/sub-categories`
      );
      setSubCategoryState((prev) => ({
        ...prev,
        [categorySlug]: {
          data: res.data.data || [],
          loading: false,
          error: null,
        },
      }));
    } catch (err) {
      setSubCategoryState((prev) => ({
        ...prev,
        [categorySlug]: {
          data: [],
          loading: false,
          error: err.message || "Failed to load sub-categories",
        },
      }));
      console.error(`Failed to fetch sub-categories for "${categorySlug}":`, err);
    }
  }, [subCategoryState]);

  // ===== Auto-open active category on mount =====
  useEffect(() => {
    if (activeCategorySlug) {
      fetchSubCategories(activeCategorySlug);
    }
  }, [activeCategorySlug, fetchSubCategories]);

  // ===== Accordion Toggle =====
  const handleAccordionToggle = useCallback((categorySlug) => {
    const next = openCategory === categorySlug ? null : categorySlug;
    setOpenCategory(next);
    if (next) fetchSubCategories(next);
  }, [openCategory, fetchSubCategories]);

  // ===== Memoized active category check =====
  const isSubCategoryActive = useMemo(() => {
    return (categorySlug, subSlug) =>
      activeCategorySlug === categorySlug && activeSubCategorySlug === subSlug;
  }, [activeCategorySlug, activeSubCategorySlug]);

  // ===== Render Helpers =====
  const renderCategoryItem = (category) => {
    const isOpen = openCategory === category.slug;
    const state = subCategoryState[category.slug] || { data: [], loading: false, error: null };
    const { data: subCategories, loading: isLoading, error: subError } = state;

    return (
      <div key={category.id} className="rounded-xl overflow-hidden shadow-sm">
        {/* Accordion Header */}
        <button
          onClick={() => handleAccordionToggle(category.slug)}
          className={`w-full flex items-center justify-between p-3 cursor-pointer transition-colors ${isOpen ? "bg-green-100" : "bg-gray-50 hover:bg-gray-100"
            }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={category.image_url}
              alt={category.name}
              className="w-9 h-9 rounded-md object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/36x36?text=?"; // fallback
              }}
            />
            <span className={`font-medium ${isOpen ? "text-green-700" : "text-gray-800"}`}>
              {category.name}
            </span>
          </div>
          <div
            className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${isOpen ? "bg-green-600 text-white" : "bg-gray-200 text-green-600"
              }`}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {/* Accordion Body */}
        {isOpen && (
          <div className="p-3 flex flex-col gap-2">
            {isLoading && (
              <div className="flex justify-center py-3">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-green-500" />
              </div>
            )}
            {subError && (
              <div className="flex items-center gap-2 text-red-500 text-sm px-3 py-2">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <span>{subError}</span>
              </div>
            )}
            {!isLoading && !subError && subCategories.length === 0 && (
              <p className="text-gray-400 text-sm px-3 py-2">No sub-categories available</p>
            )}
            {!isLoading && !subError && subCategories.map((sub) => (
              <Link
                key={sub.id}
                to={`/${category.slug}/${sub.slug}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isSubCategoryActive(category.slug, sub.slug)
                    ? "bg-green-50 text-green-700 font-medium"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ===== Render =====
  return (
    <aside className="bg-white p-4 rounded-xl shadow-md sticky top-20 h-fit">
      <BackButton />
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <PriceFilter
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* Categories Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>

        {categoriesLoading && (
          <div className="flex justify-center py-6">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-green-600 text-xl" />
          </div>
        )}

        {categoriesError && (
          <div className="flex items-center gap-2 text-red-500 text-sm py-4 px-3 bg-red-50 rounded-lg">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span>Failed to load categories. Please refresh.</span>
          </div>
        )}

        {!categoriesLoading && !categoriesError && (
          <div className="space-y-4">
            {categories.map(renderCategoryItem)}
          </div>
        )}
      </div>

      <DistributorFilter
        distributors={distributors}
        selectedDistributors={selectedDistributors}
        onChange={handleDistributorChange}
      />
    </aside>
  );
}