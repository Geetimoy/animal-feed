import Footer from "../Footer";
import Header from "../Header";

import teamsBaner from '../../assets/images/teams-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import officeMan from '../../assets/images/office-man.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function OurTeams(){
  return(
    <>
    <Header></Header>
    <main className="pt-16 overflow-hidden">
      <section className="relative z-0">
          <div className="relative">
            <img
              src={teamsBaner}
              alt="Our Teams Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />
            <img
              src={aboutBanerMob}
              alt="Our Teams Banner Mobile"
              className="w-full md:h-auto h-[450px] block md:hidden object-cover"
            />
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Our <span className="text-[#ffa800]">Teams</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                Guiding Green Gold with vision, expertise, and commitment to excellence
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
          <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              Board of  <span className="text-[#ffa800]">Directors</span>
          </h2>
          <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
            Guiding Green Gold with vision, expertise, and commitment to
            excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-20">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Shri Likha Maaj
              </h3>
              <p className="text-gray-600 mb-4">Chairman</p>
              <p className="text-gray-600 text-left mb-3">Chairman of Green Gold Animal Feed (GGAF), provides visionary leadership and strategic guidance, driving sustainable growth, ethical governance.</p>
              <p className="text-gray-600 text-left mb-3">Shri Likha Maaj is a distinguished leader with a strong vision for sustainable industrial growth and quality-driven manufacturing. As Chairman of Green Gold Animal Feed (GGAF), he provides strategic leadership and governance, guiding the organization toward long-term stability and excellence.</p>
              <p className="text-gray-600 text-left">With a deep commitment to ethical practices, operational efficiency, and community development, Shri Likha Maaj plays a pivotal role in strengthening the company’s foundation and expanding its presence in the animal feed industry. His leadership continues to inspire innovation, responsibility, and trust across the organization.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Dr. Hemant Kr. Gogoi
              </h3>
              <p className="text-gray-600 mb-4">Managing Director </p>
              <p className="text-gray-600 text-left mb-3">At Green Gold Animal Feed (GGAF), strong leadership and technical expertise form the foundation of our growth and credibility. The Board of Directors takes pride in the guidance and vision of our Managing Director, a retired District Veterinary Officer (DVO) with decades of experience in animal health, livestock management, and rural development.</p>
              <p className="text-gray-600 text-left mb-3">With an in-depth understanding of animal nutrition, disease prevention, and field-level farming challenges, our Managing Director brings a unique blend of practical veterinary knowledge and administrative leadership to GGAF. This experience ensures that every decision—whether related to feed formulation, quality standards, or farmer engagement—is grounded in scientific accuracy and real-world applicability.</p>
              <p className="text-gray-600 text-left mb-3">Under his leadership, GGAF is committed to maintaining the highest standards of quality, safety, and nutritional integrity. His lifelong service to the livestock sector strengthens our focus on ethical practices, farmer education, and sustainable animal husbandry.</p>
              <p className="text-gray-600 text-left">The Board firmly believes that leadership rooted in veterinary science and public service enables GGAF to deliver feed solutions that genuinely improve animal health and farm productivity. Guided by this vision, GGAF continues to grow as a trusted partner to farmers and a responsible contributor to the livestock industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team details */}
      <section className="pt-10 md:pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center">
              Our Team  <span className="text-[#ffa800]">Details</span>
          </h2>
          <p className="mt-3 md:mt-6 text-gray-600 leading-relaxed  text-[16px] md:text-[18px] text-center">
            Guiding Green Gold with vision, expertise, and commitment to
            excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 md:mt-20">
            
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Er. Tana Tullo
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                General Manager GEIF Pvt.Ltd
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Vikramjit Das
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                General Manager (Operations& Marketing Head)
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Manoj Sonar
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Marketing Manager (All Arunachal)
              </p>
              
            </div>
            
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Suraj Mahato
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Marketing Manager (All Assam)
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Nikom Riba
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Marketing Manager 
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Nakibur Rehman
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Accountant 
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Shri. Anjon Sonowal
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Supervisor 
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Mr.Sikander Kumar
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Sr.Operator 
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Mr. Akash Pradhan
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Operator 
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Mr. Prem Bodala
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Store keeper  
              </p>
              
            </div>
            <div className="bg-[#efefef] rounded-2xl p-6 shadow-sm mb-12">
              <span className="mx-auto w-36 bg-[#fff] block p-2 rounded-2xl shadow-xl  mt-0 md:-mt-[60px] mb-4">
                <img src={officeMan} alt="" className="w-full" />
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-0 text-center">
                Mr. Ghanshyam Boruah
              </h4>
              <p className="text-gray-600 text-sm text-center mb-2">
                Electrician   
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


export default OurTeams;