import PointHook from "../../hook/PointHook";
import PropTypes from 'prop-types';

const About = ({home}) => {
    return (
        <div className={`flex lg:flex-row flex-col h-[950px] lg:h-[650px] relative ${home &&'about'} bg-[#F9F7F2]`}>
            {home&&<div className="bg-[url(https://i.imgur.com/t2sO7dt.png)] bg-right absolute h-full w-full z-30">
            </div>}
            <div className="z-50 max-w-[1170px] mx-auto px-4">
                <div className="flex lg:flex-row flex-col justify-between lg:gap-x-14 mt-12 items-center h-full">
                    <div data-aos='fade-right' className="-ml-1 grid grid-cols-2">
                        <div className="w-fit space-y-7">
                            <img src="https://i.imgur.com/zc0agmv.png" alt="" />
                            <img src="https://i.imgur.com/mdKS2lu.png" alt="" />
                        </div>
                        <img data-aos='fade-down' data-aos-delay={550} className="ml-1 w-fit lg:w-[500px] h-full" src="https://i.imgur.com/kt5DeDD.png" alt="" />
                    </div>
                    <div data-aos='fade-left' className="lg:-mr-7">
                        <PointHook head={'ABOUT US'} text={'Building Customer Relationships for More Than 37 Years'}/>
                        <p className="inter text-[16px] pt-6 leading-[30px] text-[#646464] w-full lg:w-[33rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <p className="inter text-[16px] pt-3 pb-8 leading-[30px] lg:w-[33rem] w-full text-[#646464]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <button to='/' className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">LEARN MORE</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
About.propTypes = {
    home: PropTypes.bool
}

export default About;