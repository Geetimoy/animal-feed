import Header from "../Header";
import Footer from "../Footer";

import banner1 from '../../assets/images/Layer35-cattle.png';
import banner2 from '../../assets/images/Layer37-fish.png';
import banner3 from '../../assets/images/Layer38-poultry.png';
import banner4 from '../../assets/images/Layer39-pig.png';
import contactBaner from '../../assets/images/contact-banner.jpg';
import animal1 from "../../assets/images/cattle1.png";
import animal2 from "../../assets/images/pig2.png";
import animal3 from "../../assets/images/poultry2.png";
import animal4 from "../../assets/images/fish2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCow,
  faChartLine,
  faDumbbell,
  faSeedling,
  faShieldHalved,
  faLeaf,
  faEgg,
  faShieldVirus,
  faArrowTrendUp,
  faGaugeHigh,
  faBolt,
  faDrumstickBite,
  faPiggyBank,
  faFish,
  faWater,
  faFlask,
  faRecycle,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import nutritionHero from "../../assets/images/nutrition-banner.png";

function Nutrition(){
  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative z-0">
          <div className="relative">
            <img
              src={nutritionHero}
              alt="Contact Us Banner"
              className="w-full md:h-auto h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
            <div className="absolute inset-0  flex items-center justify-center flex-col ">
              <h1 className="text-white text-4xl md:text-6xl font-bold max-w-6xl px-4">
                Nutrition
              </h1>

              <p className="text-gray-200 text-[16px] md:text-xl text-center max-w-6xl mt-6">
                At Green Gold Animal Feed, our nutrition programs are designed
                using scientific nutrient requirements, feed conversion ratios
                (FCR), and performance calculations to deliver measurable
                results for farmers.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CATTLE ================= */}

        <section className="bg-white py-2  md:py-12  gsap-fade-in">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              {" "}
              <img
                src={animal1}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover "
              />
            </div>
            <div>
              <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                {" "}
                Cattle <span className="text-[#ffa800]">Nutrition</span>{" "}
              </h2>


               <ul className="space-y-2 text-[16px] text-gray-700 mt-4 text-center md:text-left">
                    
                    <li className="flex gap-2">
                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                         Average milk yield increase: 10–15%
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                         Improved digestion efficiency Better fertility and body
                    condition
                      </li>
                    </ul>

              {/* <div className="space-y-2 mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="text-green-600 mt-1"
                  />
                  <p className="text-gray-700">
                    Average milk yield increase: 10–15%
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faShieldVirus}
                    className="text-green-600 mt-1"
                  />
                  <p className="text-gray-700">
                    Improved digestion efficiency Better fertility and body
                    condition
                  </p>
                </div>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mt-6 ">
                <div className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faCow} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    16–18%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 ">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Total Digestible Nutrients
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    65–70%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Calcium
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    0.6–0.8%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 md:mb-6">
                    <FontAwesomeIcon icon={faLeaf} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Phosphorus
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    0.4–0.6%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Poultry ================= */}

        <section className="bg-white py-2  md:py-12  gsap-fade-in">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                {" "}
                Poultry <span className="text-[#ffa800]">Nutrition</span>{" "}
              </h2>

              <p className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-3 mb-4">
                Balanced calcium ensures strong eggshells and reduced breaka
              </p>
              <div
                className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm 
                transition-transform duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-2">
                  
                  Broiler Feed Standards
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-green-600 rounded-xl overflow-hidden">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          Phase
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          CP %
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          Energy (Kcal/kg)
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          FCR
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700">
                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Starter
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          22–23%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3000
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          1.4
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Grower
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          20–21%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3100
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          1.6
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Finisher
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          18–19%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3200
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          1.8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mt-6 mb-4">
              
                Layer Nutrition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-6 ">
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 ">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    16–18%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Calcium
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    3.5–4%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 ">
                    <FontAwesomeIcon icon={faEgg} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Egg Production
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    90–95% peak
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {" "}
              <img
                src={animal3}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover "
              />
            </div>
          </div>
        </section>

        {/* ================= PIG ================= */}

        <section className="bg-white py-2  md:py-12  gsap-fade-in">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              {" "}
              <img
                src={animal2}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover "
              />
            </div>
            <div>
              <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                {" "}
                Pig <span className="text-[#ffa800]">Nutrition</span>{" "}
              </h2>

              {/* <p className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-3 mb-4">
                Balanced calcium ensures strong eggshells and reduced breaka
              </p> */}
              <div
                className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm 
                transition-transform duration-300 hover:scale-[1.02]  mt-4"
              >
                {/* <h3 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-2">
                  <FontAwesomeIcon
                    icon={faDrumstickBite}
                    className="text-green-600    text-[18px] md:text-[22px]"
                  />
                  Broiler Feed Standards
                </h3> */}
                <div className="overflow-x-auto">
                  <table className="w-full border border-green-600 rounded-xl overflow-hidden">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          Phase
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          CP %
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold border-r border-green-200">
                          Energy (Kcal/kg)
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          FCR
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700">
                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Starter
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          20–22%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3200
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          1.6
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Grower
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          18–20%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3300
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          2.2
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center border border-green-100 font-medium">
                          Finisher
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          16-18%
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          3400
                        </td>
                        <td className="px-4 py-3 text-center border border-green-100">
                          2.8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
       

        {/* ================= FISH ================= */}
 <section className="bg-white py-2  md:py-12  gsap-fade-in">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                {" "}
                Fish  <span className="text-[#ffa800]">Nutrition</span>{" "}
              </h2>

              <p className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-3 mb-4">
              Reduce feed wastage improves water quality and survival rate.
              </p>

             
            

              <h3 className=" text-[18px] md:text-[22px] font-bold text-gray-800 leading-normal text-center md:text-left mt-6 mb-4">
                
                Feed Composition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-6 ">
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 ">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    28-32%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Fat
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    4-6%
                  </p>
                </div>
                <div className="bg-white rounded-2xl  p-2 md:p-4 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px]  mb-4 ">
                    <FontAwesomeIcon icon={faEgg} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    FCR
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    1.2-1.5
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {" "}
              <img
                src={animal4}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover "
              />
            </div>
          </div>
        </section>


     

        <section className="w-full bg-[#f8f8f8] py-6 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-[24px] md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-8">
              Why GGAF <span className="text-[#ffa800]">Nutrition Works</span>
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Scientifically Balanced
                </h3>
                <p className="text-gray-600 ">
                  Precise nutrient formulations based on species-specific
                  requirements.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Optimized FCR</h3>
                <p className="text-gray-600 ">
                  Improved feed conversion ratios for better efficiency.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Reduced Waste</h3>
                <p className="text-gray-600 ">
                  Minimized feed wastage for economic and environmental
                  benefits.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Faster Growth</h3>
                <p className="text-gray-600 ">
                  Accelerated development and better animal health.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-4xl text-[#009a62] mb-4 mx-auto "
                />
                <h3 className="text-xl font-semibold mb-2">
                  Measurable Results
                </h3>
                <p className="text-gray-600 ">
                  Visible improvements in farm productivity and economics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Nutrition;