import Header from "../Header";
import Footer from "../Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";

import newsEvents from '../../assets/images/news-banner.jpg';
import newsslider1 from '../../assets/images/newfish.jpeg';
import newsslider2 from '../../assets/images/pig2.png';
import newsslider3 from '../../assets/images/cattle1.png';
import newsslider4 from '../../assets/images/poultry2.png';
import newsslider5 from '../../assets/images/fish2.png';
import event1 from '../../assets/images/event1.jpg';
import event2 from '../../assets/images/event2.jpg';

import { Link } from 'react-router-dom';

function NewsEvents() {
  return (
    <>
    <Header></Header>
      <main className="pt-16 overflow-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={newsEvents}
              alt="News Events Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />
            <img
              src={newsEvents}
              alt="News Events Banner Mobile"
              className="w-full md:h-auto h-[450px] block md:hidden object-cover"
            />
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                News & <span className="text-[#ffa800]">Events</span>
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                Stay updated with the latest developments and activities at Green Gold Animal Feed.
              </p>
              
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Latest <span className="text-[#ffa800]">News</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Stay updated with the latest news, announcements, and upcoming events. From important milestones and achievements to programs and initiatives, this section keeps you informed about what’s happening in and around our organization. Check back regularly to never miss an update.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider1} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Fishery</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                        Green Gold Launches Advanced Cattle Feed
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product
                    launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider2} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Agriculture</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                    28 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                    Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider3} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Fishery</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                        Green Gold Launches Advanced Cattle Feed
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product
                    launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider4} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Fishery</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                        29 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                        Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product
                    launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider1} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Agriculture</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                        28 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                        Farmer Awareness Program Conducted in Odisha
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product
                    launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>
              <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={newsslider1} className="h-48 w-full object-cover rounded-b-2xl" />
                  <div className="absolute top-4 right-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-1 rounded-full">Fishery</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900">
                        Green Gold Launches Advanced Cattle Feed
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Stay updated with the latest happenings, product
                    launches, and events at Green Gold.
                  </p>
                  <Link to="/news-details" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                    View Details
                        <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                        </span>
                      </Link>
                </div>
                
              </div>

            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-10 md:py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Upcoming <span className="text-[#ffa800]">Events</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">Join us in our upcoming events and initiatives. From farmer training programs to community outreach activities, stay informed about opportunities to engage with us and contribute to the growth of the agricultural community. Mark your calendars and be a part of our journey towards sustainable farming.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
              <div className="flex gap-8 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-1/5 flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">28 Feb 2026</h2>
                  <h5 className="text-sm text-gray-800 mb-2">09 AM - 5 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">Street, Block 12 Sector 4, Kolkata City</p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-4/5 flex">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-1/5">
                      <img src={event1} alt="Event 1" className="w-full h-40 object-cover rounded-lg mt-2" />
                    </div>
                    <div className="w-4/5">
                      <span className="text-xs text-green-600 font-medium">Author</span>
                    <h3 className="mt-2 font-bold text-gray-900 text-2xl">
                      Farmer Training Program in West Bengal
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 flex-grow">
                      Join us for an informative training session aimed at empowering farmers with the latest techniques and knowledge in animal nutrition and care. This event will cover best practices for livestock management, feed optimization, and sustainable farming methods. Don’t miss this opportunity to enhance your skills and network with fellow farmers.
                    </p>
                    {/* <Link href="#" className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group" >
                      View Details
                          <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center  group-hover:border-green-600 transition-colors duration-300" >
                            <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-600 transition-colors duration-300" />
                          </span></Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-1/5 flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">3 Mar 2026</h2>
                  <h5 className="text-sm text-gray-800 mb-2">11 AM - 9 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">Street, Block 12 Sector 4, Kolkata City</p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-4/5 flex">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-1/5">
                      <img src={event2} alt="Event 1" className="w-full h-40 object-cover rounded-lg mt-2" />
                    </div>
                    <div className="w-4/5">
                      <span className="text-xs text-green-600 font-medium">Author</span>
                    <h3 className="mt-2 font-bold text-gray-900 text-2xl">
                      Welcome & Conference Opening
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 flex-grow">
                      Join us for an informative training session aimed at empowering farmers with the latest techniques and knowledge in animal nutrition and care. This event will cover best practices for livestock management, feed optimization, and sustainable farming methods. Don’t miss this opportunity to enhance your skills and network with fellow farmers.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mb-3">
                <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-1/5 flex flex-col items-center justify-center p-4">
                  <h2 className="text-xl font-bold text-green-600">21 Mar 2026</h2>
                  <h5 className="text-sm text-gray-800 mb-2">09 AM - 1 PM</h5>
                  <p className="text-sm text-gray-800 text-center font-medium">Gandhi Marg, Sector 5, Amarabati</p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden w-4/5 flex">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-1/5">
                      <img src={event1} alt="Event 1" className="w-full h-40 object-cover rounded-lg mt-2" />
                    </div>
                    <div className="w-4/5">
                      <span className="text-xs text-green-600 font-medium">Author</span>
                    <h3 className="mt-2 font-bold text-gray-900 text-2xl">
                      Farmer Training Program in Andhra Pradesh
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 flex-grow">
                      Join us for an informative training session aimed at empowering farmers with the latest techniques and knowledge in animal nutrition and care. This event will cover best practices for livestock management, feed optimization, and sustainable farming methods. Don’t miss this opportunity to enhance your skills and network with fellow farmers.
                    </p>
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


export default NewsEvents;