import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

import aboutBaner from '../../assets/images/about-banner.jpg';
import visionMission from '../../assets/images/cattle1.png'; 
import officeMan from '../../assets/images/office-man.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faHandshake, faLightbulb, faMedal, faLeaf, faCheck, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




function AboutUs() {

  const [activeTab, setActiveTab] = useState("tab1");

  return(
    <>
      <Header></Header>
      <main className="pt-16">
        <section className="relative z-0">
          <div className="relative">
            <img src={aboutBaner} alt="About Us Banner" className="w-full h-auto"/>
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[#009a62] text-4xl md:text-6xl font-bold text-center mb-6">About Us</h1>
              <p className="text-black text-xl text-center">For over 25 years, we've been at the forefront of animal nutrition, blending scientific expertise with agricultural wisdom to empower farmers and enhance livestock productivity across India</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/distributor" className="mt-6 w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2">
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Find Distributor
                  </span>
                </Link>
                <Link to="/contact-us" className="mt-6 w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2">
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
              <div className="w-full">
                <img src={visionMission} alt="" className="w-full" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">Vision <span className="text-[#ffa800]">& Mission</span></h2>
                <div className="w-full max-w-xl mt-10">
                  {/* <!-- Tabs --> */}
                  <div className="flex">
                    <button id="vision" onClick={() => setActiveTab("tab1")}
                      className="tab-btn bg-white px-12 py-4 text-lg font-semibold text-gray-900 rounded-t-xl text-left">
                      Our Vision
                    </button>

                    <button id="mission" onClick={() => setActiveTab("tab2")}
                      className="tab-btn bg-yellow-200 px-12 py-4 text-lg font-semibold text-gray-700 rounded-t-xl text-left">
                      Our Mission
                    </button>
                  </div>

                  {/* <!-- Card --> */}
                  <div className="bg-white rounded-b-3xl rounded-tr-3xl p-8 shadow-2xl">
                    {/* <!-- QUALITY --> */}
                    {activeTab === "tab1" &&
                    <div id="vision">
                      <h4 className="text-green-600 font-semibold text-lg mb-4">
                        Our Vision
                      </h4>

                      <p className="text-md text-gray-700 mb-4">To emerge as a leading animal nutrition enterprise recognized for scientific excellence, uncompromising quality, and meaningful contribution to sustainable livestock development.</p>
                      <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[10px] h-[10px] bg-green-600 rounded-full">
                            <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                          </span>
                          Scientific Excellence
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[10px] h-[10px] bg-green-600 rounded-full">
                            <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                          </span>
                          Uncompromising Quality
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[10px] h-[10px] bg-green-600 rounded-full">
                            <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                          </span>
                          Sustainable Development
                        </li>
                      </ul>
                    </div>
                    }
                    {/* <!-- CERT --> */}
                    {activeTab === "tab2" &&
                    <div id="mission">
                      <h4 className="text-green-600 font-semibold text-lg mb-4">
                        Our Mission
                      </h4>

                      <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3"> <span
                            className="flex items-center justify-center w-[14px] h-[10px] bg-green-600 rounded-full">
                            
                          </span>To deliver advanced, science-led animal nutrition solutions that enhance livestock health, productivity, and farm profitability.</li>
                        <li className="flex items-center gap-3"> <span
                            className="flex items-center justify-center w-[14px] h-[10px] bg-green-600 rounded-full">
                            
                          </span>To uphold world-class quality and safety standards through rigorous testing, in-house research, and process excellence.</li>
                        <li className="flex items-center gap-3"> <span
                            className="flex items-center justify-center w-[14px] h-[10px] bg-green-600 rounded-full">
                            
                          </span>To create long-term value for farmers by providing consistent, reliable, and cost-effective feed solutions.</li>
                          <li className="flex items-center gap-3"> <span
                            className="flex items-center justify-center w-[14px] h-[10px] bg-green-600 rounded-full">
                            
                          </span>To operate responsibly by promoting sustainable sourcing, environmental stewardship, and community development.</li>
                          <li className="flex items-center gap-3"> <span
                            className="flex items-center justify-center w-[14px] h-[10px] bg-green-600 rounded-full">
                            
                          </span>To drive continuous improvement through innovation, research, and professional leadership in animal nutrition.</li>
                      </ul>
                    </div>
      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animal Feed Story Section */}
        <section className="">
          <div className="max-w-7xl mx-auto px-8 py-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">Our Animal <span className="text-[#ffa800]">Feed Story</span></h2>
            <div className="max-w-5xl mx-auto">
              <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center"> Green Gold Animal Feed was founded on a simple yet powerful belief — the well-being of animals is the cornerstone of a successful and sustainable farming community. </p>
              <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center"> Rooted in regions where hard work meets agriculture, Green Gold began with a clear purpose: to deliver high-quality, dependable, and cost-effective animal feed that farmers can rely on with confidence. We recognize that livestock represents more than income—it is a way of life, a commitment, and a heritage carried forward through generations. </p>
              {/* <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center"> Through the integration of scientific innovation, premium raw materials, and advanced feed manufacturing technology, Green Gold produces feed that promotes healthy development, stronger immunity, and enhanced productivity. Each formulation is thoughtfully crafted to provide balanced nutrition across every stage of an animal's life cycle. </p> */}
              <div className="grid grid-cols-4 gap-6 mt-10">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-6"><FontAwesomeIcon icon={faHandshake} /></span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Farmer Partnership</h4>
                  <p className="text-gray-600 text-sm text-center mb-0">Way of life commitment</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-6"><FontAwesomeIcon icon={faLightbulb} /></span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Scientific Innovation</h4>
                  <p className="text-gray-600 text-sm text-center mb-0">Balanced nutrition</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-6"><FontAwesomeIcon icon={faMedal} /></span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm text-center mb-0">Strict measures</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-6"><FontAwesomeIcon icon={faLeaf} /></span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Sustainability</h4>
                  <p className="text-gray-600 text-sm text-center mb-0">Locally sourced</p>
                </div>
              </div>
            </div>
            <div className="max-w-5xl grid grid-cols-2 gap-12 mt-10 mx-auto">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">Sustainability & <span className="text-[#ffa800]">Community</span></h3>
                <p className="text-gray-600 mx-auto lg:mx-0 text-[18px] text-center">At Green Gold Animal Feed, sustainability goes beyond words. We emphasize locally sourced ingredients, actively support regional farmers, and follow responsible production practices that protect the environment while contributing to rural economic growth.</p>
                <div className="flex justify-center mt-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mr-6 w-[160px]">  
                    <h4 className="text-xl font-bold text-[#009a62] mb-2 text-center">Local</h4>
                    <p className="text-gray-600 text-sm text-center mb-0">Ingredients</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm w-[160px]">  
                    <h4 className="text-xl font-bold text-[#009a62] mb-2 text-center">Rural</h4>
                    <p className="text-gray-600 text-sm text-center mb-0">Economic Growth</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">Comprehensive <span className="text-[#ffa800]">Livestock Solutions</span></h3>
                <p className="text-gray-600 mx-auto lg:mx-0 text-[18px] text-center">Serving a wide range of livestock—including cattle, goats, pigs, poultry, and yaks—Green Gold Animal Feed offers customized feed solutions designed to meet species-specific and growth-stage nutritional requirements.</p>
                <div className="grid grid-cols-3 mt-6 place-items-center">
                  <div className="bg-white flex flex-col items-center justify-center text-center rounded-full p-4 border border-yellow-400 shadow-md w-[130px] h-[130px] ring-2 ring-white">  
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">25+</h4>
                    <p className="text-gray-600 text-sm text-center mb-0">Years Legacy</p>
                  </div>
                  <div className="bg-white flex flex-col items-center justify-center text-center rounded-full p-4 border border-yellow-400 shadow-md w-[130px] h-[130px] ring-2 ring-white">  
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">100%</h4>
                    <p className="text-gray-600 text-sm text-center mb-0">Quality Focus</p>
                  </div>
                  <div className="bg-white flex flex-col items-center justify-center text-center rounded-full p-4 border border-yellow-400 shadow-md w-[130px] h-[130px] ring-2 ring-white">  
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">Custom</h4>
                    <p className="text-gray-600 text-sm text-center mb-0">Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">Leadership  & <span className="text-[#ffa800]">Governance</span></h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center">Guiding Green Gold with vision, expertise, and commitment to excellence</p>
            <div className="grid grid-cols-4 gap-8 mt-20">
              <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm">
                <span className="mx-auto w-24 bg-[#fff] block p-2 rounded-2xl shadow-xl -mt-[60px] mb-4"><img src={officeMan} alt="" className="w-full" /></span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">Shri Likha Maaj</h4>
                <p className="text-gray-600 text-sm text-center mb-2">Chairman</p>
                <ul className="mt-4">
                  <li className="text-gray-600 text-sm mb-2"> <FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Visionary Leadership</li>
                  <li className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Ethical Governance</li>
                </ul>
              </div>
              <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm">
                <span className="mx-auto w-24 bg-[#fff] block p-2 rounded-2xl shadow-xl -mt-[60px] mb-4"><img src={officeMan} alt="" className="w-full" /></span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">Dr. Hemant Kr. Gogoi</h4>
                <p className="text-gray-600 text-sm text-center mb-2">Managing Director</p>
                <ul className="mt-4">
                  <li className="text-gray-600 text-sm mb-2"> <FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Veterinary Excellence</li>
                  <li className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Scientific Leadership</li>
                </ul>
              </div>
              <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm">
                <span className="mx-auto w-24 bg-[#fff] block p-2 rounded-2xl shadow-xl -mt-[60px] mb-4"><img src={officeMan} alt="" className="w-full" /></span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">Er. Tana Tullo</h4>
                <p className="text-gray-600 text-sm text-center mb-2">General Manager</p>
                <ul className="mt-4">
                  <li className="text-gray-600 text-sm mb-2"> <FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Visionary Leadership</li>
                  <li className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Ethical Governance</li>
                </ul>
              </div>
              <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm">
                <span className="mx-auto w-24 bg-[#fff] block p-2 rounded-2xl shadow-xl -mt-[60px] mb-4"><img src={officeMan} alt="" className="w-full" /></span>
                <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">Shri. Vikrajit Das</h4>
                <p className="text-gray-600 text-sm text-center mb-2">General Manager</p>
                <ul className="mt-4">
                  <li className="text-gray-600 text-sm mb-2"> <FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Visionary Leadership</li>
                  <li className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#00a34a] mr-2" /> Ethical Governance</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 text-center"><button className="bg-[#f1c40f] px-6 py-4 rounded-md text-[16px] font-medium cursor-pointer">Meet Our Complete Team</button></div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">Our <span className="text-[#ffa800]">Commitments</span></h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center"> At Green Gold Animal Feed (GGAF), our commitments are more than promises—they are the values that shape our products, our relationships, and our responsibility toward farmers and the environment. </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Uncompromising Quality</h4>
                <p className="text-gray-600 text-sm mb-3">We ensure consistent quality in every bag through strict quality control, premium ingredients, and advanced manufacturing practices you can rely on.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> 50+ Quality Checks</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Science-Driven Nutrition</h4>
                <p className="text-gray-600 text-sm mb-3">Our feeds are carefully formulated using scientific research to deliver balanced nutrition that supports healthy growth, strong immunity, and higher productivity.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> Research-Backed</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Farmers at the Heart</h4>
                <p className="text-gray-600 text-sm mb-3">We exist to serve farmers. Our solutions are designed to be reliable, affordable, and effective—helping farmers achieve better results and long-term success.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> Farmer-Centric</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Sustainability in Action</h4>
                <p className="text-gray-600 text-sm mb-3">From responsible sourcing to eco-friendly production, we are committed to practices that protect nature and strengthen rural communities.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> Eco-Friendly</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Consistency You Can Trust</h4>
                <p className="text-gray-600 text-sm mb-3">Every product reflects our dedication to transparency, safety, and performance—building trust with every customer, every time.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> 100% Consistent</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Innovation</h4>
                <p className="text-gray-600 text-sm mb-3">We continuously improve through technology, research, and learning to meet evolving livestock nutrition needs.</p>
                <ul>
                  <li className="text-gray-600"><span className="text-[#00a34a] mr-2 "><FontAwesomeIcon icon={faCheck} /></span> Always Improving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Units */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">Our <span className="text-[#ffa800]">Units</span></h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-[18px] text-center"> Strategically located manufacturing unit ensuring quality and efficiency </p>
            <div className="flex flex-wrap gap-12 mt-12 items-center justify-center">
              <div className="flex-1">  
                <h4 className="text-2xl font-bold text-gray-900">Rongoge Mega Food Park</h4>
                <h5 className="text-sm text-gray-900 mb-2">Manufacturing & Processing Unit</h5>
                <p className="text-gray-900 text-md mb-3"><span className="text-[#00a34a] mr-2"><FontAwesomeIcon icon={faLocationDot} /></span>Dolikoto, Banderdewa, Arunachal Pradesh – 791123</p>
                <p className="text-gray-900 text-md mb-3"><span className="text-[#00a34a] mr-2"><FontAwesomeIcon icon={faPhone} /></span>+91 9999999999</p>
                <p className="text-gray-900 text-md"><span className="text-[#00a34a] mr-2"><FontAwesomeIcon icon={faEnvelope} /></span>info@greengold.com</p>
              </div>
              <div className="flex-1"><iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dolikoto Location"
        /></div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;
