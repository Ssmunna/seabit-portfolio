import Header from "@/Layouts/Frontend/Header.jsx";
import Footer from "@/Layouts/Frontend/Footer.jsx";
import '@/../css/client.css';

const Main = ({children}) => {
    setTimeout(() => window.HSStaticMethods.autoInit(), 100)
    return (
        <div className="overflow-hidden bg-[#FFFFFF]">
            <div>
                <Header />
            </div>
            <div className="">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main
