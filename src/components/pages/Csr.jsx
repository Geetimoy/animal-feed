import Footer from "../Footer";
import Header from "../Header";

import csrBanner from '../../assets/images/about-banner.jpg';

function Csr(){
  return(
    <>
    <Header></Header>
      <main className="pt-16">
      <section className="relative z-0">
        <div className="relative">
          <img
            src={csrBanner}
            alt="CSR Banner"
            className="w-full md:h-auto h-[450px]  object-cover"
          />  
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
            <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
              Corporate Social <span className="text-[#ffa800]">Responsibility</span>
            </h1>
            <p className="text-white text-[16px] md:text-xl text-center">
              Our commitment to making a positive impact on society and the environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-gray-100 scroll-mt-[100px]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
            Our <span className="text-[#ffa800]">CSR Initiatives</span>
          </h2>
          <p className="text-gray-600 text-md mb-6 text-center">
            Coming Soon!!!
          </p>
         
            </div>
      </section>
      </main>
    <Footer></Footer>
    </>
  );
}

export default Csr;