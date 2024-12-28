import { Link } from "react-router-dom";
import BannerHook from "../hook/BannerHook";

const Emergency = () => {
    return (
        <div>
            <BannerHook text={'Fleet & Emergency Vehicles Repair'} head2={'Emergency Repair'} link={'emergency'} />
            <div className="max-w-[1170px] mx-auto px-4 py-24 flex justify-between items-start">
                <div data-aos='fade-right' className="w-[800px] space-y-10">
                    <div className="grid grid-cols-3 gap-x-4">
                        <img src="https://i.imgur.com/LIpGgh6.png" alt="" />
                        <img src="https://i.imgur.com/ACj4QFX.png" alt="" />
                        <img src="https://i.imgur.com/BgixanT.png" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[32px] leading-[32px] font-bold text-[#2c3c3b]">Complete Fleet Services in Jackson MI</h4>
                        <p className="text-[#646464] inter text-[16px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="text-[#646464] inter text-[16px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[32px] leading-[32px] font-bold text-[#2c3c3b]">Emergency Vehicles Service & Repair</h4>
                        <p className="text-[#646464] inter text-[16px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="text-[#646464] inter text-[16px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="mt-7 space-x-5 pb-3">
                        <Link to='/services' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-white text-[14px] bg-transparent font-bold hover:text-[#2C6F89] overflow-hidden button-blue relative"><span className="z-40">view all services</span></Link>
                        <Link to='/scedule' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                    </div>
                </div>
                <div data-aos='fade-left' className="w-[300px] -mt-1.5">
                    <h4 className="uppercase font-bold text-[25px] text-[#2C3C3B] pb-4">our services</h4>
                    <div className="space-y-2.5 inter text-[15px] text-[#646464]">
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Air Conditioning</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Alignment</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Automotive News</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Automotive Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Cabin Air Filter</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Check Engine Light</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Keys To A Long Lasting Vehicle</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Monitoring System</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Oil Change</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Preventative Maintenance</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Suspension Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Transmission Service</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Tune Up</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Vehicle Inspection</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Wheel Alignment</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Engine Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Auto Radiator Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Car AC Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Tires And Wheels</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;