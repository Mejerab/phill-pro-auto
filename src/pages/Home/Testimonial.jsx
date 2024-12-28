import { Rating } from "@mui/material";
import PointHook from "../../hook/PointHook";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="bg-[#2d3d3c] py-24 bg-[url(https://i.imgur.com/1Lqs6eO.png)] bg-cover">
            <div className="max-w-[1170px] mx-auto px-4">
                <div className="flex lg:flex-row flex-col gap-y-5 lg:justify-between lg:items-center">
                    <div data-aos='fade-right'>
                        <PointHook head={'Testimonials'} text={'What people are saying about us'} white={true} />
                    </div>
                    <div data-aos='fade-left'>
                        <button to='/' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">leave a review</span></button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={window.innerWidth > 720 ? 2 : 1}
                    spaceBetween={25}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper mt-12 h-[550px] lg:h-[500px] w-full"
                >
                    <SwiperSlide className="pt-5"><div data-aos='fade-up' className="lg:w-[555px] lg:h-[365px] relative rounded-[12px] bg-[#394948] pl-5 lg:pl-12 pr-5 lg:pb-0 pb-5 lg:pr-12 text-white space-y-6">
                        <div className="w-[75px] flex justify-center items-center absolute -top-9 h-[75px] rounded-full bg-[#F4B519]"><RiDoubleQuotesL className="text-5xl" /></div>
                        <img className="absolute right-5 lg:right-16 pointer-events-none z-0 -top-0" src="https://i.imgur.com/CDpwnDZ.png" alt="" />
                        <div className="pt-16 z-20">
                            <h5 className="text-[27px] font-bold font">Brent Gregory</h5>
                            <p className="text-[15px] inter font-medium text-[#F4B519]">3 months ago</p>
                        </div>
                        <p className="text-[17px] z-20 leading-[32px] font-medium inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <Rating value={5} readOnly />
                    </div></SwiperSlide>
                    <SwiperSlide className="pt-5"><div data-aos='fade-up' className="lg:w-[555px] lg:h-[365px] relative rounded-[12px] bg-[#394948] pl-5 lg:pl-12 pr-5 lg:pb-0 pb-5 lg:pr-12 text-white space-y-6">
                        <div className="w-[75px] flex justify-center items-center absolute -top-9 h-[75px] rounded-full bg-[#F4B519]"><RiDoubleQuotesL className="text-5xl" /></div>
                        <img className="absolute right-5 lg:right-16 pointer-events-none z-0 -top-0" src="https://i.imgur.com/CDpwnDZ.png" alt="" />
                        <div className="pt-16 z-20">
                            <h5 className="text-[27px] font-bold font">Hector Goodwin</h5>
                            <p className="text-[15px] inter font-medium text-[#F4B519]">3 months ago</p>
                        </div>
                        <p className="text-[17px] leading-[32px] font-medium inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <Rating value={5} readOnly />
                    </div></SwiperSlide>
                    <SwiperSlide className="pt-5"><div data-aos='fade-up' className="lg:w-[555px] lg:h-[365px] relative rounded-[12px] bg-[#394948] pl-5 lg:pl-12 pr-5 lg:pb-0 pb-5 lg:pr-12 text-white space-y-6">
                        <div className="w-[75px] flex justify-center items-center absolute -top-9 h-[75px] rounded-full bg-[#F4B519]"><RiDoubleQuotesL className="text-5xl" /></div>
                        <img className="absolute right-5 lg:right-16 pointer-events-none z-0 -top-0" src="https://i.imgur.com/CDpwnDZ.png" alt="" />
                        <div className="pt-16 z-20">
                            <h5 className="text-[27px] font-bold font">Brent Gregory</h5>
                            <p className="text-[15px] inter font-medium text-[#F4B519]">3 months ago</p>
                        </div>
                        <p className="text-[17px] z-20 leading-[32px] font-medium inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <Rating value={5} readOnly />
                    </div></SwiperSlide>
                    <SwiperSlide className="pt-5"><div data-aos='fade-up' className="lg:w-[555px] lg:h-[365px] relative rounded-[12px] bg-[#394948] pl-5 lg:pl-12 pr-5 lg:pb-0 pb-5 lg:pr-12 text-white space-y-6">
                        <div className="w-[75px] flex justify-center items-center absolute -top-9 h-[75px] rounded-full bg-[#F4B519]"><RiDoubleQuotesL className="text-5xl" /></div>
                        <img className="absolute right-5 lg:right-16 pointer-events-none z-0 -top-0" src="https://i.imgur.com/CDpwnDZ.png" alt="" />
                        <div className="pt-16 z-20">
                            <h5 className="text-[27px] font-bold font">Hector Goodwin</h5>
                            <p className="text-[15px] inter font-medium text-[#F4B519]">3 months ago</p>
                        </div>
                        <p className="text-[17px] leading-[32px] font-medium inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <Rating value={5} readOnly />
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Testimonial;