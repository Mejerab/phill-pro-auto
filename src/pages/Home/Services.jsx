import PointHook from "../../hook/PointHook";

const Services = () => {
    return (
        <section className="max-w-[1170px] mx-auto px-4 lg:space-y-14">
            <div className="flex lg:flex-row gap-y-5 flex-col justify-between items-center ">
                <div data-aos='fade-right'>
                    <PointHook head={'OUR SERVICES'} text={'We offer the best auto repair services'} />
                </div>
                <p data-aos='fade-left' className="text-[#646464] text-[16px] lg:w-[37rem] leading-[30px] inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div data-aos='expand-width' className="divi h-[2px] lg:my-0 my-7 bg-[#F4B519]"></div>
            <div className="flex lg:flex-row flex-col gap-y-5 justify-between">
                <div data-aos='fade-left'>
                    <div className="lg:mx-0 mx-auto w-[270px] border border-[#2C3C3B1A] rounded-[8px] p-8 hover:cursor-pointer hover:bg-[#F9F7F2] tra hover:-translate-y-2">
                        <img src="https://i.imgur.com/9NdZFpg.png" alt="" />
                        <h5 className="text-[25px] py-6 font font-bold leading-[32px] text-[#2C3C3B]">Engine Repairs and Replacements</h5>
                        <p className="text-[#646464] inter text-[15px] leading-[27px] w-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
                <div data-aos='fade-up'>
                    <div className="lg:mx-0 mx-auto w-[270px] border border-[#2C3C3B1A] rounded-[8px] p-8 hover:cursor-pointer hover:bg-[#F9F7F2] tra hover:-translate-y-2">
                        <img src="https://i.imgur.com/CeFcgRr.png" alt="" />
                        <h5 className="text-[25px] py-6 font font-bold leading-[32px] text-[#2C3C3B]">Transmission Repairs & Replacements</h5>
                        <p className="text-[#646464] inter text-[15px] leading-[27px] w-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
                <div data-aos='fade-down'>
                    <div className="lg:mx-0 mx-auto w-[270px] border border-[#2C3C3B1A] rounded-[8px] p-8 hover:cursor-pointer hover:bg-[#F9F7F2] tra hover:-translate-y-2">
                        <img src="https://i.imgur.com/0POplPl.png" alt="" />
                        <h5 className="text-[25px] py-6 font font-bold leading-[32px] text-[#2C3C3B]">Brake Repairs and Replacements</h5>
                        <p className="text-[#646464] inter text-[15px] leading-[27px] w-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
                <div data-aos='fade-right'>
                    <div className="lg:mx-0 mx-auto w-[270px] border border-[#2C3C3B1A] rounded-[8px] p-8 hover:cursor-pointer hover:bg-[#F9F7F2] tra hover:-translate-y-2">
                        <img className="mt-2" src="https://i.imgur.com/dgyKYBJ.png" alt="" />
                        <h5 className="text-[25px] py-6 font w-44 font-bold leading-[32px] text-[#2C3C3B]">Battery Replacements</h5>
                        <p className="text-[#646464] inter text-[15px] leading-[27px] w-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
            <div data-aos='fade-down' className="w-fit mx-auto lg:mt-0 mt-8">
                <button to='/' className="btn uppercase z-[70] border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">More services</span></button>
            </div>
        </section>
    );
};

export default Services;