import { Link } from "react-router-dom";
import BannerHook from "../hook/BannerHook";

const Warranty = () => {
    return (
        <div>
            <BannerHook link={'warranty'} head2={'warranty'} text={'warranty'} />
            <div className="max-w-[1170px] mx-auto px-4 flex lg:flex-row flex-col justify-between py-24 gap-y-8">
                <div className="bg-[#F9F7F2] p-10 rounded-[10px] lg:w-1/2">
                    <p className="text-[#646464] inter text-[16px] leading-[30px]">We have the longest standard warranty in town. As a NAPA AutoCare center, we are part of the NAPA AutoCare Peace of Mind warranty that covers parts and labor on qualifying repairs and services for 36 months/36,000 miles. This warranty is honored at more than 14,000 locations nationwide-more than any other automotive repair brand. We are confident our repairs will be done correctly and last. If for some reason there is an install or part failure, you’ll have the peace of mind that you and your family are supported by NAPA. So no matter where your travels take you, if you ever experience a problem with a repair, you can count on an AutoCare center being nearby.</p>
                    <div className="mt-7 space-y-6 lg:space-x-5 pb-3">
                        <Link to='/services' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-white text-[14px] bg-transparent font-bold hover:text-[#2C6F89] overflow-hidden button-blue relative"><span className="z-40">view all services</span></Link>
                        <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                    </div>
                </div>
                <div data-aos='fade-left' className="bg-[#f9f7f2] rounded-[10px] lg:w-[500px] flex justify-evenly flex-col lg:py-0 py-6 gap-y-8">
                    <div className="relative">
                        <div className="rounded-full w-[280px] h-[280px] spin bg-white mx-auto border-[4px] border-dotted border-[#2C6F898C]">
                        </div>
                        <img className="absolute top-[1.3rem] right-[3.3rem] lg:right-[8.2rem]" src="https://i.imgur.com/M1FZAwR.png" alt="" />
                    </div>
                    <h3 className="uppercase text-center lg:w-96 text-[45px] mx-auto leading-[55px] font-bold font text-[##2C3C3B]"><span className="text-[#F4B519]">36k</span> mile/<span className="text-[#F4B519]">36</span> month nationwide warranty</h3>
                </div>
            </div>
        </div>
    );
};

export default Warranty;