import Header from "../Header";
import Footer from "../Footer";

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

function Distributor() {
  return (
    <>
      <Helmet>
        <title>Distributor - Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={distributorBanner}
              alt="Distributor Banner"
              className="w-full md:h-auto h-[450px]  object-cover"
            />

            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Distributor
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                Building Strong Distribution Partnerships Across Regions
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to="/distributor"
                  className="mt-4 md:mt-6 w-full  md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
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
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl text-gray-800 font-semibold mb-4 text-center">
              Our Distributor <span className="text-[#ffa800]">Network</span>
            </h2>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow mt-4 md:mt-8">
              <form action="" className="">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                  <div>
                    <select
                      name="state"
                      id="state"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select State</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="region"
                      id="region"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select Region</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name="category"
                      id="category"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Category</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="distributor"
                      id="distributor"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Distributor Type</option>
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
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <Link to="/distributor-details">
                      Kalabari Livestock Supply
                    </Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md text-center justify-center">
                        <FontAwesomeIcon
                          icon={faDrumstickBite}
                          className="text-[14px]"
                        />
                        Poultry
                      </span>


                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md justify-center">
                        <FontAwesomeIcon icon={faCow} className="text-[14px]" />
                        Cattle
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-50 text-green-600 rounded-md justify-center">
                        <FontAwesomeIcon icon={faEgg} className="text-[14px]" />
                        Layer
                      </span>

                
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-[#009a62]">
                    <Link to="/distributor-details">Agartala Feed Center</Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>
                  {/* <p className="mb-3">Poultry • Cattle</p> */}
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md text-center justify-center">
                        <FontAwesomeIcon
                          icon={faDrumstickBite}
                          className="text-[14px]"
                        />
                        Poultry
                      </span>

                      <span className="flex items-center  gap-2 px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-md justify-center">
                        <FontAwesomeIcon
                          icon={faFish}
                          className="text-[14px]"
                        />
                        Fish
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-50 text-green-600 rounded-md justify-center">
                        <FontAwesomeIcon icon={faEgg} className="text-[14px]" />
                        Layer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <Link to="/distributor-details">Guwahati Agro Supply</Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>
                  {/* <p className="mb-3">Fish • Cattle</p> */}{" "}
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md text-center justify-center">
                        <FontAwesomeIcon
                          icon={faDrumstickBite}
                          className="text-[14px]"
                        />
                        Poultry
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md justify-center">
                        <FontAwesomeIcon icon={faCow} className="text-[14px]" />
                        Cattle
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-md justify-center">
                        <FontAwesomeIcon
                          icon={faPiggyBank}
                          className="text-[14px]"
                        />
                        Pig
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-[#009a62]">
                    <Link to="/distributor-details">Siliguri Feed Hub</Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>
                  {/* <p className="mb-3">Poultry • Fish • Cattle</p>
                   */}
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md text-center justify-center">
                        <FontAwesomeIcon
                          icon={faDrumstickBite}
                          className="text-[14px]"
                        />
                        Poultry
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-50 text-green-600 rounded-md justify-center">
                        <FontAwesomeIcon icon={faEgg} className="text-[14px]" />
                        Layer
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-md justify-center">
                        <FontAwesomeIcon
                          icon={faPiggyBank}
                          className="text-[14px]"
                        />
                        Pig
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <Link to="/distributor-details">Ranchi Animal Feed</Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>
                  {/* <p className="mb-3">Poultry</p> */}
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md justify-center">
                        <FontAwesomeIcon icon={faCow} className="text-[14px]" />
                        Cattle
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-50 text-green-600 rounded-md justify-center">
                        <FontAwesomeIcon icon={faEgg} className="text-[14px]" />
                        Layer
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-md justify-center">
                        <FontAwesomeIcon
                          icon={faPiggyBank}
                          className="text-[14px]"
                        />
                        Pig
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-gray-600 text-sm">
                  <h3 className="text-xl font-bold mb-2 text-[#009a62]">
                    <Link to="/distributor-details">
                      Patna Feed Distributor
                    </Link>
                  </h3>
                  <p className="mb-1">Green Gold Animal Feed Pvt Ltd.</p>

                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md text-center justify-center">
                        <FontAwesomeIcon
                          icon={faDrumstickBite}
                          className="text-[14px]"
                        />
                        Poultry
                      </span>

                      <span className="flex items-center  gap-2 px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-md justify-center">
                        <FontAwesomeIcon
                          icon={faFish}
                          className="text-[14px]"
                        />
                        Fish
                      </span>

                      <span className="flex items-center gap-2 px-2 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md justify-center">
                        <FontAwesomeIcon icon={faCow} className="text-[14px]" />
                        Cattle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Distributor;
