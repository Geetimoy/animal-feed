import Header from "../Header";
import Footer from "../Footer";

import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../config/api";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faDrumstickBite,
  faFish,
  faCow,
  faPiggyBank,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";


function Distributor() {

  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store full objects (with id + state_id) so we can filter cities by state
  const [stateOptions, setStateOptions] = useState([]); // [{ id, name }]
  const [allCityOptions, setAllCityOptions] = useState([]); // [{ id, state_id, name }]
  const [filteredCities, setFilteredCities] = useState([]); // subset shown in dropdown

  const [categoriesList, setCategoriesList] = useState([]);
  const [typesList, setTypesList] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [filteredDistributors, setFilteredDistributors] = useState([]);

  const pageSlug = "distributor";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);

  useEffect(() => {
    fetchDistributors();
    fetchFilters();
  }, []);

  // Whenever the selected state changes, update the city dropdown
  useEffect(() => {
    if (!selectedState) {
      // No state selected → show all cities
      setFilteredCities(allCityOptions);
    } else {
      // Find the state object whose name matches, then keep only its cities
      const stateObj = stateOptions.find(
        (s) => s.name === selectedState
      );
      if (stateObj) {
        setFilteredCities(
          allCityOptions.filter((c) => c.state_id === stateObj.id)
        );
      } else {
        setFilteredCities([]);
      }
    }
    // Reset region whenever state changes
    setSelectedRegion("");
  }, [selectedState, allCityOptions, stateOptions]);

  const fetchDistributors = async () => {
    try {
      const response = await axios.get(`${API_URL}/distributors`);
      setDistributors(response.data.data);
      setFilteredDistributors(response.data.data);
    } catch (error) {
      console.error("Error fetching distributors:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTagData = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case "poultry feed":
        return { icon: faDrumstickBite, className: "bg-green-100 text-green-700" };
      case "fish feed":
        return { icon: faFish, className: "bg-blue-100 text-blue-700" };
      case "cattle feed":
        return { icon: faCow, className: "bg-yellow-100 text-yellow-700" };
      case "pig feed":
        return { icon: faPiggyBank, className: "bg-pink-100 text-pink-700" };
      case "layer feed":
        return { icon: faEgg, className: "bg-green-50 text-green-600" };
      default:
        return { icon: faDrumstickBite, className: "bg-gray-100 text-gray-700" };
    }
  };

  const fetchFilters = async () => {
    try {
      const response = await axios.get(`${API_URL}/distributor-filters`);

      // Use the richer options arrays (contain id + state_id) instead of flat name arrays
      setStateOptions(response.data.state_options || []);
      setAllCityOptions(response.data.city_options || []);
      setFilteredCities(response.data.city_options || []); // show all on load

      setCategoriesList(response.data.categories || []);
      setTypesList(response.data.types || []);
    } catch (error) {
      console.error("Filter API Error:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = distributors.filter((item) => {
      return (
        (!selectedState || item.state === selectedState) &&
        (!selectedRegion || item.region === selectedRegion) &&
        (!selectedType || item.distributor_type === selectedType) &&
        (!selectedCategory || item.categories?.some((cat) => cat.slug === selectedCategory))
      );
    });

    setFilteredDistributors(filtered);
  };

  // useEffect(() => {
  //   if (pageSlug) fetchBanner();
  // }, [pageSlug]);

  // const fetchBanner = async () => {
  //   try {
  //     const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
  //     setBanner(res.data);
  //   } catch (err) {
  //     console.log("Banner API error:", err);
  //   }
  // };

  // const bannerItem = banner?.data?.[0];

  return (
    <>
      <Helmet>
        <title>Distributor - Animal Feed</title>
      </Helmet>
      <Header />
      <main className="pt-16 overflow-hidden">
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


        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl text-gray-800 font-semibold mb-4 text-center">
              Our Distributor <span className="text-[#ffa800]">Network</span>
            </h2>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow mt-4 md:mt-8">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                  {/* State dropdown */}
                  <div>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Select State</option>
                      {stateOptions.map((state) => (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Region/City dropdown — filtered by selected state */}
                  <div>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                      disabled={filteredCities.length === 0}
                    >
                      <option value="">
                        {selectedState && filteredCities.length === 0
                          ? "No cities found"
                          : "Select Region"}
                      </option>
                      {filteredCities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Category dropdown */}
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Category</option>
                      {categoriesList.map((category) => (
                        <option key={category.id} value={category.slug}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Distributor type dropdown */}
                  <div>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Distributor Type</option>
                      {typesList.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search button */}
                  <div>
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-4 py-2 rounded hover:opacity-90 w-full cursor-pointer text-center"
                    >
                      Search
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <p>Loading...</p>
              ) : (
                filteredDistributors.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                    <div className="text-gray-600 text-sm">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        <Link to={`/distributors/${item.slug}`}>{item.name}</Link>
                      </h3>
                      <p className="mb-1">{item.company_name}</p>
                      <div className="mt-4">
                        <div className="grid grid-cols-3 gap-2">
                          {item.categories?.map((category) => {
                            const { icon, className } = getTagData(category.name);
                            return (
                              <span
                                key={category.id}
                                className={`flex items-center gap-2 px-2 py-1 text-sm rounded-md justify-center ${className}`}
                              >
                                <FontAwesomeIcon icon={icon} className="text-[14px]" />
                                {category.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Distributor;