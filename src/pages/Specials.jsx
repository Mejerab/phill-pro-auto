import { Link } from "react-router-dom";
import BannerHook from "../hook/BannerHook";

const Specials = () => {
    return (
        <div>
            <BannerHook text={'specials'} head2={'specials'} link={'specials'}/>
            <div className="max-w-[1170px] mx-auto px-4 py-24 grid lg:grid-cols-2 gap-7">
                <div data-aos='fade-right' className="bg-[url(https://i.imgur.com/q5Mqmbx.png)] lg:bg-cover text-white w-fit lg:w-full bg-[#2C3C3B] rounded-[8px] pl-6 lg:pl-12 py-6 lg:py-12">
                    <p className="uppercase p-0.5 px-2 rounded-[3px] tracking-widest inter text-[13px] font-bold w-fit bg-[#F4B519]">limited offer</p>
                    <h4 className="text-[35px] lg:text-[45px] leading-[35px] lg:leading-[55px] font-bold my-5"><span className="text-[45px] lg:text-[97px] pr-3 leading-[45px] lg:leading-[97px]">$60</span>off for all services</h4>
                    <p className="inter text-[16px] leading-[30px] lg:w-[30rem] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since</p>
                    <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                </div>
                <div data-aos='fade-left' className="bg-[url(https://i.imgur.com/q5Mqmbx.png)] lg:bg-cover text-white w-fit lg:w-full bg-[#2C6F89] rounded-[8px] pl-6 lg:pl-12 py-6 lg:py-12">
                    <p className="uppercase p-0.5 px-2 rounded-[3px] tracking-widest inter text-[13px] font-bold w-fit bg-[#F4B519]">limited offer</p>
                    <h4 className="text-[35px] lg:text-[45px] leading-[35px] lg:leading-[55px] font-bold my-5"><span className="text-[45px] lg:text-[97px] pr-3 leading-[45px] lg:leading-[97px]">$80</span>off for all services</h4>
                    <p className="inter text-[16px] leading-[30px] lg:w-[30rem] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since</p>
                    <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                </div>
                <div data-aos='fade-right' className="bg-[url(https://i.imgur.com/q5Mqmbx.png)] lg:bg-cover text-[#2C3C3B] w-fit lg:w-full bg-[#F4B519] rounded-[8px] pl-6 lg:pl-12 py-6 lg:py-12">
                    <p className="uppercase p-0.5 px-2 rounded-[3px] tracking-widest inter text-[13px] font-bold w-fit bg-[#2C3C3B] text-white">limited offer</p>
                    <h4 className="text-[35px] lg:text-[45px] leading-[35px] lg:leading-[55px] font-bold my-5"><span className="text-[45px] lg:text-[97px] pr-3 leading-[45px] lg:leading-[97px]">$50</span>off for all services</h4>
                    <p className="inter text-[16px] leading-[30px] lg:w-[30rem] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since</p>
                    <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-white text-[14px] bg-transparent font-bold hover:text-[#2C3C3B] overflow-hidden button-black relative"><span className="z-40">Schedule Service</span></Link>
                </div>
                <div data-aos='fade-left' className="bg-[url(https://i.imgur.com/q5Mqmbx.png)] lg:bg-cover text-[#2C3C3B] w-fit lg:w-full bg-[#F9F7F2] rounded-[8px] pl-6 lg:pl-12 py-6 lg:py-12">
                    <p className="uppercase p-0.5 px-2 rounded-[3px] tracking-widest inter text-[13px] font-bold w-fit bg-[#2C6F89] text-white">limited offer</p>
                    <h4 className="text-[35px] lg:text-[45px] leading-[35px] lg:leading-[55px] font-bold my-5"><span className="text-[45px] lg:text-[97px] pr-3 leading-[45px] lg:leading-[97px]">$60</span>off for all services</h4>
                    <p className="inter text-[16px] leading-[30px] lg:w-[30rem] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since</p>
                    <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-white text-[14px] bg-transparent font-bold hover:text-[#2C6F89] overflow-hidden button-blue relative"><span className="z-40">Schedule Service</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Specials;