import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import Navbar from "../pages/Home/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Layout = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 600,
            easing: "ease-in-out",
            useClassNames: true,
            animatedClassName: "aos-animate",
            once: true 
        })
    }, [])
    return (
        <div className="overflow-hidden font">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;