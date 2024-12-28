import { useState } from "react";
import { HiMiniPause } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
    const [state, setState] = useState(true);
    return (
        <div>
            <div className="bg-[url(https://i.imgur.com/zqBb0xB.png)] bg-cover bg-no-repeat bg-center">
                <div className="max-w-[1170px] mx-auto px-4 py-12">
                    <div data-aso='fade' style={{animation: 'roll 1s ease-out'}} className="relative w-[320px] lg:w-[618px] h-[320px] lg:h-[618px] rounded-full bg-[#F4B519] bg-[url(https://i.ibb.co.com/XbGFjhQ/Mask-group-1.png)]">
                        <div data-aos='fade-left' data-aos-delay={1000} className="flex flex-col justify-center lg:ml-36 ml-16 h-full space-y-1 lg:space-y-4 text-[#2C3C3B]">
                            <h5 className="uppercase text-[16px] lg:text-[22px] font-bold py-1 px-4 rounded-[5px] bg-white w-fit">Since 1985</h5>
                            <h2 className="text-[45px] lg:text-[97px] leading-[45px] lg:leading-[97px] w-48 lg:w-96">FAMILY OWNED AND OPERATED</h2>
                            <Link to='/scedule' className="btn uppercase z-[40] bg-transparent border-0 hover:border hover:bg-transparent rounded-[5px] w-fit lg:w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] font-bold overflow-hidden button-whi relative"><span className="z-40">Schedule Service</span></Link>
                        </div>
                        <div onClick={() => setState(!state)} className="hover:cursor-pointer absolute top-32 lg:top-64 -right-8 lg:-right-12 flex justify-center items-center w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] rounded-full bg-white">
                            {state ? <IoMdPlay className="text-[#2C6F89] w-[20px] h-[20px]" /> : <HiMiniPause className="text-[#2C6F89] w-[20px] h-[20px]" />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F7F2] p-16 relative ml-auto leftt lg:block hidden">
                <div className="flex justify-between gap-x-12 2xl:ml-11 xl:-ml-8 2xl:w-[73rem] w-[71rem] 2xl:mx-0 mx-auto ww">
                    <div data-aos='fade-right' className="bg-white p-8 px-12 rounded-[10px] border w-fit border-[#2C3C3B1A]">
                        <img src="https://i.ibb.co.com/H4WQFHv/Logo-1.png" alt="" />
                    </div>
                    <div data-aos='fade-right' data-aos-delay={400} className="bg-white p-8 px-12 rounded-[10px] border w-fit border-[#2C3C3B1A]">
                        <img src="https://i.ibb.co.com/H4WQFHv/Logo-1.png" alt="" />
                    </div>
                    <div data-aos='fade-right' data-aos-delay={600} className="bg-white p-8 px-12 rounded-[10px] border w-fit border-[#2C3C3B1A]">
                        <img src="https://i.ibb.co.com/H4WQFHv/Logo-1.png" alt="" />
                    </div>
                    <div data-aos='fade-right' data-aos-delay={800} className="bg-white p-8 px-12 rounded-[10px] border w-fit border-[#2C3C3B1A]">
                        <img src="https://i.ibb.co.com/H4WQFHv/Logo-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;