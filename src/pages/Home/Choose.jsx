import { IoMdCheckmark } from "react-icons/io";
import PointHook from "../../hook/PointHook";

const Choose = () => {
    return (
        <div className="max-w-[1170px] mx-auto px-4 flex lg:flex-row flex-col gap-y-8 justify-between">
            <div data-aos='fade-right' className="lg:w-1/2">
                <PointHook head={'WHY CHOOSE US?'} text={'Old-fashioned Service Meets Modern Repair and Maintenance'} />
                <div className="grid lg:grid-cols-2 gap-8 mt-12">
                    <div data-aos='fade-right' data-aos-delay={300} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1">CLEAN SHOP</h4>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={300} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1">complimentary drinks</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-delay={500} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1">early bird/night owl service</h4>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={500} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1 uppercase">expedited repairs</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-delay={700} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1 uppercase">shuttle service</h4>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={700} className="w-full lg:w-[275px] h-[90px] rounded-[8px] border flex items-center pl-6 gap-x-4">
                        <IoMdCheckmark className="text-4xl p-2 bg-[#F4B519] rounded-[5px]" />
                        <h4 className="font font-bold text-[23px] leading-[23px] mt-1 uppercase">loaner cars</h4>
                    </div>
                </div>
            </div>
            <div data-aos='fade-left' className="bg-[#f9f7f2] rounded-[10px] lg:py-0 py-4 lg:w-[500px] flex justify-evenly flex-col">
                <div className="relative">
                    <div className="rounded-full w-[280px] h-[280px] spin bg-white mx-auto border-[4px] border-dotted border-[#2C6F898C]">
                    </div>
                    <img className="absolute top-[1.3rem] right-[3.3rem] lg:right-[8.2rem]" src="https://i.imgur.com/M1FZAwR.png" alt="" />
                </div>
                <h3 className="uppercase text-center lg:w-96 text-[45px] mx-auto leading-[55px] font-bold font text-[##2C3C3B]"><span className="text-[#F4B519]">36k</span> mile/<span className="text-[#F4B519]">36</span> month nationwide warranty</h3>
            </div>
        </div>
    );
};

export default Choose;