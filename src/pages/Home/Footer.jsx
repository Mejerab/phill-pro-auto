import { FaFacebookF, FaLinkedin, FaSkype } from "react-icons/fa";
import { IoIosArrowForward, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className="bg-[#F9F7F2] foot py-24 lg:relative">
                <div className="lg;block hidden bg-[url(https://i.imgur.com/2OQJ1F0.png)] bg-left bg-cover 2xl:w-1/2 w-[44%] h-full top-0 left-0 absolute z-50"></div>
                <div className="lg:triangle absolute z-50 left-[43%] top-56"></div>
                <div className="max-w-[1170px] mx-auto px-4 text-[#2c3c3b] lg:text-white relative z-50 flex lg:flex-row flex-col gap-y-8 h-full">
                    <div data-aos='fade-left' className="space-y-5 col-span-2">
                        <a className="btn h-fit text-xl bg-transparent border-0 hover:bg-transparent hover:backdrop-blur-lg"><img src="https://i.ibb.co.com/D1DBCZD/Logo.png" alt="" /></a>
                        <p className="inter text-[16px] lg:w-[25rem] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="flex gap-x-3">
                            <FaFacebookF className="text-[16px] p-[0.8rem] hover:bg-[#F4B519] hover:cursor-pointer tra w-[44px] h-[44px] bg-white text-[#2C3C3B] rounded-full" />
                            <IoLogoTwitter className="text-[16px] p-[0.8rem] hover:bg-[#F4B519] hover:cursor-pointer tra w-[44px] h-[44px] bg-white text-[#2C3C3B] rounded-full" />
                            <FaSkype className="text-[16px] p-[0.8rem] hover:bg-[#F4B519] hover:cursor-pointer tra w-[44px] h-[44px] bg-white text-[#2C3C3B] rounded-full" />
                            <FaLinkedin className="text-[16px] p-[0.8rem] hover:bg-[#F4B519] hover:cursor-pointer tra w-[44px] h-[44px] bg-white text-[#2C3C3B] rounded-full" />
                        </div>
                    </div>
                    <div data-aos='fade-right' className="w-fit lg:mx-auto">
                        <h4 className="uppercase text-[27px] font font-bold text-[#2C3C3B]">Quick Links:</h4>
                        <ul className="inter mt-[1.3rem] space-y-[0.8rem]">
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Careers</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Cookie Policy</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Terms & Conditions</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />All Services</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Privacy & Policy</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Blog Post</button></li>
                        </ul>
                    </div>
                    <div data-aos='fade-right' className="w-fit lg:ml-auto">
                        <h4 className="uppercase text-[27px] font font-bold text-[#2C3C3B]">our services:</h4>
                        <ul className="inter mt-[1.3rem] space-y-[0.8rem]">
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Oil Change</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Fuel System Repair</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Belt & Hose Replacement</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Filter Replacements</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Heating and AC Repairs</button></li>
                            <li className="text-[#646464] text-[15px] hover:text-[#F4B519] tra"><button><IoIosArrowForward className="inline" />Inspections</button></li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="bg-[#E9E5DA] w-full py-4">
                <div className="max-w-[1170px] mx-auto inter text-[#646464] flex lg:flex-row flex-col gap-y-4 justify-between text-[15px]">
                    <p>Copyright © 2023 All Rights Reserved || Privacy Policy.</p>
                    <p>Site managed by LIFT Automotive Repair Marketing </p>
                </div>
            </div>
        </>
    );
};

export default Footer;