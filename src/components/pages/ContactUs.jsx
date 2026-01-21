import Header from "../Header";
import Footer from "../Footer";

import contactBaner from '../../assets/images/contact-banner.jpg';

function ContactUs(){
  return(
    <>
    <Header></Header>
    <main className="pt-16">
      <section className="relative z-0">
        <div className="relative">
          <img src={contactBaner} alt="Contact Us Banner" className="w-full h-auto"/>
          <div className="absolute inset-0  flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>
      <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">We would love to hear from you! Whether you have questions about our products, need support, or want to provide feedback, our team is here to assist you.</p>
            
          </div>
          <div>
            <form className="space-y-6">  
              <div className="mb-4">
                <input type="text" placeholder="First Name *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last Name *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email Address *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <textarea rows="5" placeholder="Write your message..." required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none"></textarea>

                
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}

export default ContactUs;