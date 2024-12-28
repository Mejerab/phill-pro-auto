import Footer from "./Home/Footer";
import Navbar from "./Home/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BannerHook from "../hook/BannerHook";
import { Link } from "react-router-dom";

const ErrorPage = () => {
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
        <div className="min-h-screen font overflow-hidden">
            <Navbar />
            <BannerHook text={'404 page'} head2={'404 page'} />
            <div className="py-24 flex flex-col justify-center gap-y-8 items-center">
                <img src="https://i.imgur.com/UOQ5ZpC.png" alt="" />
                <p className="font-bold text-[75px] leading-[75px] text-[#2C3C3B]"><span className="text-[#2C6F89] text-[97px] leading-[97px]">sorry,</span> this page is not found.</p>
                <p className="text-[#646464] text-center text-[16px] inter leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry&apos;s standard dummy text ever since</p>
                <Link to='/' className="btn uppercase z-[70] border-0 hover:border hover:bg-transparent rounded-[5px] w-[209px] h-[57px] inter text-white text-[14px] bg-transparent font-bold hover:text-[#2C6F89] overflow-hidden button-blue relative"><span className="z-40">back to home</span></Link>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;