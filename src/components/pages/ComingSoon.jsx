import Footer from "../Footer";
import Header from "../Header";

const ComingSoon = () => {
    return (

        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#00a63e] mb-4">
                        Coming Soon
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        We're working on this page. It will be available soon.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ComingSoon;