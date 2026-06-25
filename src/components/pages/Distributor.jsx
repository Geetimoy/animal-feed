import Header from "../Header";
import Footer from "../Footer";

import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../config/api";

import distributorBanner from "../../assets/images/distributor-banner.jpg";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faEnvelope,
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

  const [statesList, setStatesList] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
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

  const fetchDistributors = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/distributors`
      );

      console.log(response.data);

      setDistributors(response.data.data);
      setFilteredDistributors(response.data.data);
    } catch (error) {
      console.error("Error fetching distributors:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTagData = (categories) => {
    switch (categories.toLowerCase()) {
      case "poultry feed":
        return {
          icon: faDrumstickBite,
          className: "bg-green-100 text-green-700",
        };

      case "fish feed":
        return {
          icon: faFish,
          className: "bg-blue-100 text-blue-700",
        };

      case "cattle feed":
        return {
          icon: faCow,
          className: "bg-yellow-100 text-yellow-700",
        };

      case "pig feed":
        return {
          icon: faPiggyBank,
          className: "bg-pink-100 text-pink-700",
        };

      case "layer feed":
        return {
          icon: faEgg,
          className: "bg-green-50 text-green-600",
        };

      default:
        return {
          icon: faDrumstickBite,
          className: "bg-gray-100 text-gray-700",
        };
    }
  };

  const fetchFilters = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/distributor-filters`
      );

      setStatesList(response.data.states || []);
      setRegionsList(response.data.regions || []);
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
        (!selectedCategory ||
          item.categories?.some(
            (cat) => cat.slug === selectedCategory
          ))
      );
    });

    setFilteredDistributors(filtered);
  };





  return (
    <>
      <Helmet>
        <title>Distributor - Animal Feed</title>
      </Helmet>
      <Header></Header>
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
              <form action="" className="" onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                  <div>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Select State</option>

                      {statesList.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Select Region</option>

                      {regionsList.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Category</option>

                      {categoriesList.map((category) => (
                        <option
                          key={category.id}
                          value={category.slug}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
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
                  <div>
                    <button
                      type="submit"
                      className=" bg-yellow-500 hover:bg-yellow-400 transition text-black px-4 py-2 rounded hover:opacity-90 w-full cursor-pointer text-center"
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
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <div className="text-gray-600 text-sm">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        <Link to={`/distributors/${item.slug}`}>
                          {item.name}
                        </Link>
                      </h3>

                      <p className="mb-1">{item.company_name}</p>

                      {/* <div className="mt-2 space-y-1">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {item.region},{" "}
              {item.state}
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} /> {item.phone}
            </p>

            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {item.email}
            </p>
          </div> */}

                      {/* Tags */}
                      <div className="mt-4">
                        <div className="grid grid-cols-3 gap-2">
                          {item.categories?.map((categories) => {
                            const { icon, className } = getTagData(categories.name);

                            return (
                              <span
                                key={categories.id}
                                className={`flex items-center gap-2 px-2 py-1 text-sm rounded-md justify-center ${className}`}
                              >
                                <FontAwesomeIcon icon={icon} className="text-[14px]" />
                                {categories.name}
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
      <Footer></Footer>
    </>
  );
}

export default Distributor;
