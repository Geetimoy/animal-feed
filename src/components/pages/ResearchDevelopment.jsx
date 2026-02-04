import Header from "../Header";
import Footer from "../Footer";

import researchBanner from '../../assets/images/research-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.png';
import commitment from '../../assets/images/our-commitment.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faArrowRight, faLightbulb, faMedal, faLeaf, faCheck, faCalculator, faEnvelope, faSeedling, faShield, faChartSimple, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";
import { faFedora } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function ResearchDevelopment() {
  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={researchBanner}
              alt="Research & Development Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />
            <img
              src={aboutBanerMob}
              alt="Research & Development Banner Mobile"
              className="w-full md:h-auto h-[450px] block md:hidden object-cover"
            />
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Research & <span className="text-[#ffa800]">Development</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                At Green Gold Animal Feed, innovation begins in our in-house Research & Development laboratory, where science meets practical farming needs to deliver superior animal nutrition.
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

        <section className="py-10 md:py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              In-House Laboratory <span className="text-[#ffa800]">Excellence</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">At Green Gold Animal Feed (GGAF), innovation begins in our in-house Research & Development laboratory, where science meets practical farming needs. Our R&D team continuously works to improve feed quality, efficiency, and animal performance through research, testing, and data-driven formulation.</p>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Our fully equipped in-house lab enables us to:</p>
            <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <FontAwesomeIcon icon={faRecycle} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Raw Materials</h3>
                <p className="text-gray-600">Test raw materials for protein, moisture, fat, fiber, ash, and energy values</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <FontAwesomeIcon icon={faChartSimple} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                <p className="text-gray-600">Analyze finished feed for nutrient accuracy and consistency</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                
                <FontAwesomeIcon icon={faShield} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                <p className="text-gray-600">Monitor microbial safety and contamination</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <FontAwesomeIcon icon={faMedal} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Ensure compliance</h3>
                <p className="text-gray-600">Ensure compliance with quality and safety standards</p>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">This allows us to maintain complete control over feed quality from raw material selection to final dispatch.</p>
          </div>
        </section>

        {/* Science-Based Feed Formulation */}
        <section>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20"> 
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Science-Based Feed <span className="text-[#ffa800]">Formulation</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Our science-based feed formulation is designed to meet the specific nutritional needs of different animals, ensuring optimal health and productivity.</p>
            <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <FontAwesomeIcon icon={faResearchgate} className="text-4xl text-[#009a62] mb-4" />
                {/* <FontAwesomeIcon icon={faCalculator} className="text-4xl text-[#009a62] mb-4" /> */}
                <h5 className="text-lg font-semibold mb-2">Using nutritional research and performance data, our R&D team:</h5>
                <ul className="text-gray-600">
                  <li className="mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Designs species- and stage-specific feed formulations</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Optimizes Feed Conversion Ratio (FCR) and digestibility</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Balances nutrients to support growth, immunity, reproduction, and productivity</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Continuously refines formulations based on field feedback</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Quality Testing & Continuous Improvement</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                
                <FontAwesomeIcon icon={faCalculator} className="text-4xl text-[#009a62] mb-4" />
                <h5 className="text-lg font-semibold mb-2">Every batch produced at GGAF undergoes:</h5>
                <ul className="text-gray-600">
                  <li className="mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Routine laboratory testing</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Ingredient validation before use</li>
                  <li className="mb-2 flex items-center gap-2"><span className="flex items-center justify-center 
                  w-[18px] h-[18px] bg-green-600 rounded-full">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                    </span>Performance evaluation under practical farm conditions</li>
                  
                </ul>
              </div>
              
            </div>
          </div>
        </section>

        {/* Innovation for Sustainable Nutrition */}
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 "> 
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Innovation for <span className="text-[#ffa800]">Sustainable Nutrition</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Our R&D focus goes beyond performance:</p>
            <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <FontAwesomeIcon icon={faLeaf} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Use of locally sourced and alternative ingredients</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                {/* <FontAwesomeIcon icon={faCheck} className="text-4xl text-[#009a62] mb-4 mx-auto" /> */}
                <FontAwesomeIcon icon={faSeedling} className="text-4xl text-[#009a62] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Reduction of environmental impact</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <FontAwesomeIcon icon={faFedora} className="text-4xl text-[#009a62] mb-4 mx-auto"/>
                <h3 className="text-xl font-semibold mb-2">Development of cost-effective and sustainable feed solutions</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our R&D Commitment */}
        <section className="relative w-full overflow-hidden  gsap-fade-in">
          <img src={commitment} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 ">
            <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
              Our R&D <span className="text-yellow-400">Commitment</span>
            </h2>
            <p className="mt-4 md:mt-6 text-white leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Through continuous research, advanced laboratory testing, and collaboration with farmers, GGAF remains committed to delivering reliable, scientifically proven, and future-ready animal nutrition solutions.</p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default ResearchDevelopment;