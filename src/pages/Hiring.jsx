import { MdOutlineFileUpload } from "react-icons/md";
import BannerHook from "../hook/BannerHook";
import Swal from "sweetalert2";

const Hiring = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const city = e.target.city.value;
        const state = e.target.state.value;
        if (!isNaN(parseInt(phone)) && city != 'City:' && !state != 'State:') {
            Swal.fire({
                title: 'Success!',
                text: 'Press the button below to continue',
                icon: 'success',
                confirmButtonText: 'Continue',
                background: '#2C6F89',
                color: '#fff',
                confirmButtonColor: '#F4B519'
            })
            e.target.reset();
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Phone number should be given in number format & city and state should be selected.',
                icon: 'error',
                confirmButtonText: 'Return',
                background: '#2C6F89',
                color: '#fff',
                confirmButtonColor: '#F4B519'
            })
        }
    }
    return (
        <div>
            <BannerHook btn text={'we are hiring'} head2={'hiring'} link={'hiring'} />
            <div className="max-w-[1170px] mx-auto px-4 py-24">
                <h4 className="font-bold text-[25px] text-[#2c3c3b] uppercase text-center">Open Positions Include:</h4>
                <div className="grid gap-y-6 lg:grid-cols-3 justify-between text-[#2c3c3b] py-12">
                    <div data-aos='fade-right' className="flex gap-x-6 items-center">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                            <img src="https://i.imgur.com/1kV5K0l.png" alt="" />
                        </div>
                        <h4 className="font-bold text-[45px]">mechanics</h4>
                    </div>
                    <div data-aos='fade-down' className="flex gap-x-6 items-center">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#F4B519] flex justify-center items-center">
                            <img src="https://i.imgur.com/KjTYd0b.png" alt="" />
                        </div>
                        <h4 className="font-bold text-[45px]">shop foreman</h4>
                    </div>
                    <div data-aos='fade-left' className="flex gap-x-6 items-center">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                            <img src="https://i.imgur.com/8EqW5Wa.png" alt="" />
                        </div>
                        <h4 className="font-bold text-[45px]">service advisors</h4>
                    </div>
                </div>
                <div data-aos='expand-width' className="divi h-[3px] bg-[#EFEEEA]"></div>
                <div className="py-20 space-y-20">
                    <div data-aos='fade-up'>
                        <h4 className="text-[45px] font-bold text-[#2C3C3B] text-center">Looking for a great place to start or continue your career?</h4>
                        <p className="inter text-[16px] leading-[30px] text-[#646464] text-center">We are always looking for qualified personnel to join our team!</p>
                    </div>
                    <div className="items-center flex lg:flex-row flex-col justify-between gap-12">
                        <div>
                            <h4 className="text-[45px] pb-5 font-bold text-[#2c3c3b]">Who We Are</h4>
                            <p className="inter text-[16px] leading-[30px] text-[#646464]">We’re proud of our highly-trained and friendly team. Our techs have more than 37 years of professional experience you can rely on. We ensure each tech stays informed on the cutting edge of automotive technology by providing ongoing training. professional development never stops at Phil’s Pro Auto Service. We care about each of our employees and seek to support the development and growth of their professional talent. We provide our team with the latest equipment and software to best serve our customers. See us today at 707 12th Street, Greeley, CO 80631 to meet our friendly and helpful team.</p>
                        </div>
                        <img src="https://i.imgur.com/VeJwccN.png" alt="" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[45px] text-[#2C3C3B]">Benefits</h4>
                        <p className="text-[#646464] text-[16px] leading-[30px] inter">Family means a lot more to us then most, you tend to be at work more often the at home, for that reason we strive to be a close knit family away from your family at home.</p>
                        <div className="mt-7 flex lg;flex-row flex-col gap-7 justify-between">
                            <div className="lg:mx-0 mx-auto w-[270px] h-[270px] hover:-translate-y-2 transition-transform flex flex-col gap-y-6 justify-center items-center bg-[#F9F7F2] rounded-[8px]">
                                <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                                    <img src="https://i.imgur.com/RuxsHST.png" alt="" />
                                </div>
                                <h4 className="font-bold text-center text-[25px] text-[#2C3C3B]">Comprehensive <br />Bonus Plan</h4>
                            </div>
                            <div className="lg:mx-0 mx-auto w-[270px] h-[270px] hover:-translate-y-2 transition-transform flex flex-col gap-y-6 justify-center items-center bg-[#F9F7F2] rounded-[8px]">
                                <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                                    <img src="https://i.imgur.com/TSNzN6W.png" alt="" />
                                </div>
                                <h4 className="font-bold text-center text-[25px] text-[#2C3C3B]">Retirement <br />
                                    Plan</h4>
                            </div>
                            <div className="lg:mx-0 mx-auto w-[270px] h-[270px] hover:-translate-y-2 transition-transform flex flex-col gap-y-6 justify-center items-center bg-[#F9F7F2] rounded-[8px]">
                                <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                                    <img src="https://i.imgur.com/5iHz3K8.png" alt="" />
                                </div>
                                <h4 className="font-bold text-center text-[25px] text-[#2C3C3B]">Holiday Paid <br />
                                    Time Off</h4>
                            </div>
                            <div className="lg:mx-0 mx-auto w-[270px] h-[270px] hover:-translate-y-2 transition-transform flex flex-col gap-y-6 justify-center items-center bg-[#F9F7F2] rounded-[8px]">
                                <div className="w-[100px] h-[100px] rounded-full bg-[#2C6F89] flex justify-center items-center">
                                    <img src="https://i.imgur.com/63y93qK.png" alt="" />
                                </div>
                                <h4 className="font-bold text-center text-[25px] text-[#2C3C3B]">Vacation <br />
                                    Pay</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-[45px] text-[#2c3c3b]">Why us?</h4>
                        <ul className="text-[16px] leading-[30px] inter text-[#646464] list-disc pl-4">
                            <li>We pride ourselves on not working weekends so we can spend the necessary time with our families and get the well deserved rest.</li>
                            <li> Our shop is equipped with the latest and greatest equipment, our showroom is like none other with a current remodel and we take a lot of pride in</li>
                            <li>working in a very clean and organized work area.</li>
                            <li>Our shop area is equipped with air conditioning for those days that are less than ideal and most importantly keeps our technicians comfortable and happy.</li>
                            <li>We have an aggressive marketing campaign that captures an awesome car count, there is plenty of work to go around for everyone.</li>
                            <li>We function on a mentality that some have forgotten, we are a team driven organization. It is important that all staff feel the support from the General
                                service tech to the store manager and even from the business owner.</li>
                            <li>We offer the best and very aggressive compensation package to all employees
                                We offer some of the best benefits package available in our industry;</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[45px] font-bold text-[#2c3c3b]">Positions Available</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-4 mt-3">
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Store Manager/Writer</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Service Advisor</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Parts Manager</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Book Keeper</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Shop Foreman</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Lead Technician</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Quality Control Technician</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Auto Technician</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">Lube Technician</button>
                            <button className="font-bold hover:text-[#2C3C3B] tra text-white h-[60px] w-full text-[19px] hover:bg-[#F4B519] bg-[#2C3C3B] btn">General Service Technician</button>
                        </div>
                    </div>
                    <div className="bg-[#F9F7F2] rounded-lg w-full py-12 text-[15px]">
                        <h4 className="font-bold text-[45px] text-[#2C3C3B] text-center">APPLY NOW</h4>
                        <p className="text-[#2C3C3B] inter text-[17px] leading-[30px] text-center">If you’re interested in joining our team, fill out the form below and upload your resume.</p>
                        <form onSubmit={handleSubmit} className="pt-12 px-4 lg:px-14 space-y-5">
                            <div className="flex gap-x-5">
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="First Name:" />
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Last Name:" />
                            </div>
                            <div className="flex gap-x-5">
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Street Address:" />
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Address Line-2:" />
                            </div>
                            <div className="flex gap-x-5">
                                <select name="city" className="select h-[60px] w-full inter text-[#646464]">
                                    <option disabled selected>City:</option>
                                    <option>Dhaka</option>
                                    <option>Narayanganj</option>
                                    <option>Other</option>
                                </select>
                                <select name="state" className="select h-[60px] w-full inter text-[#646464]">
                                    <option disabled selected>State:</option>
                                    <option>Dhaka</option>
                                    <option>Other</option>
                                </select>
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Zip Code:" />
                            </div>
                            <div className="flex gap-x-5">
                                <input required name="phone" type="tel" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Phone:" />
                                <input required type="email" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Email Address:" />
                            </div>
                            <div className="flex gap-x-5">
                                <input required type="text" className="input h-[60px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Positions(s) you’re interested in:" />
                            </div>
                            <div className="flex gap-x-5">
                                <textarea required type="text" rows={6} className="textarea text-[15px] w-full placeholder:text-[#646464] text-[#646464] inter focus:border-0" placeholder="Tell us about yourself:" />
                            </div>
                            <div className="w-full bg-white h-[190px] relative rounded-[5px] flex flex-col items-center justify-center gap-y-1">
                                <input required type="file" className="absolute opacity-0 h-full w-full" id="nothing" />
                                <p className="inter text-[16px] font-bold text-[#2C3C3B]">Upload Resume</p>
                                <MdOutlineFileUpload className="text-5xl text-[#2C3C3B]" />
                                <p className="text-[16px] inter text-[#646464]">Select a file or drop file here</p>
                                <p className="inter text-[14px] text-[#9C9C9C]">Max. file size: 2 GB.</p>
                            </div>
                            <div className="text-center pt-4">
                                <button className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[253px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">submit application</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hiring;