import Header from "../Header";
import Footer from "../Footer";
import contactBaner from "../../assets/images/contact-banner.jpg";
import { useNavigate } from "react-router-dom";

export default function MyOrders(){
  const navigate = useNavigate();
      return(
        <>
        <Header showLogout={true} />
        <main className="pt-16 overflow-x-hidden">
          <section className="relative z-0">
              <div className="relative">
                <img
                  src={contactBaner}
                  alt="Contact Us Banner"
                  className="w-full md:h-auto h-[250px] object-cover"
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <h1 className="text-white text-4xl md:text-6xl font-bold">
                    My Orders
                  </h1>
                </div>
              </div>
            </section>
            <div className="md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 ">
              <h2
              className="text-2xl font-semibold text-center">
                Thank you for your order! Your order has been successfully placed.<br />We appreciate your business and look forward to serving you again in the future.
              </h2>
              <div className="mt-8  text-center">
                <button
                  onClick={() => navigate("/my-orders")}
                  className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                >
                  Go to My Orders
                </button>
              </div>
            </div>
        </main>
        <Footer />
        </>
      )
}