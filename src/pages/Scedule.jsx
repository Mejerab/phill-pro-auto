import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";

const Scedule = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        if (!isNaN((parseInt(phone)))) {
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
                text: 'Phone number should be given in number format.',
                icon: 'error',
                confirmButtonText: 'Return',
                background: '#2C6F89',
                color: '#fff',
                confirmButtonColor: '#F4B519'
            })
        }
    }
    return (
        <div className="max-w-[1170px] mx-auto px-4 py-24">
            <div className="w-full bg-[#F9F7F2] rounded-[12px]">
                <form onSubmit={handleSubmit} className="py-14 px-4 lg:px-12">
                    <h4 className="lg:text-[24px] leading-[24px] mb-4 font-bold text-[#2C3C3B]">Do you wish to leave your vehicle or wait during the repair?</h4>
                    <FormControl className="w-full">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio"
                            defaultValue={'I will wait for my vehicle'}
                        >
                            <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5">
                                <div className="w-full bg-white h-[60px] flex lg:flex-row flex-col gap-y-4 items-center pl-5 rounded-[5px]">
                                    <FormControlLabel value="I will wait for my vehicle" className="text-[#646464]" control={<Radio />} label="I will wait for my vehicle" />
                                </div>
                                <div className="w-full bg-white h-[60px] flex lg:flex-row flex-col gap-y-4 items-center pl-5 rounded-[5px]">
                                    <FormControlLabel value="I will drop off my vehicle" className="text-[#646464]" control={<Radio />} label="I will drop off my vehicle" />
                                </div>
                            </div>
                        </RadioGroup>
                    </FormControl>
                    <h4 className="uppercase lg:text-[24px] mt-7 leading-[24px] font-bold text-[#2c3c3b]">select appointment date and time</h4>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5 mt-4 mb-9 relative">
                        <input required name="date" type="date" className="w-full bg-white rounded-[5px] h-[60px] input focus:border-0 text-[#646464]" />
                        <MdOutlineCalendarMonth className="absolute left-[29.5rem] text-[#646464] text-lg top-5" />
                        <input required name="time" type="time" className="w-full bg-white rounded-[5px] h-[60px] input focus:border-0 text-[#646464]" />
                        <LuClock8 className="absolute right-5 text-[#646464] text-lg top-5" />
                    </div>
                    <h4 className="uppercase lg:text-[24px] leading-[24px] font-bold text-[#2c3c3b]">select your vehicle</h4>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between  gap-x-5 text-[15px] mt-4 mb-9">
                        <select required name="year" className="select h-[40px] w-full inter focus:border-0 text-[#646464]">
                            <option disabled selected className="">Year:</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>Previous</option>
                        </select>
                        <select required name="make" className="select h-[40px] w-full inter focus:border-0 text-[#646464]">
                            <option disabled selected className="">Make:</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>Previous</option>
                        </select>
                        <select required name="v" className="select h-[40px] w-full inter focus:border-0 text-[#646464]">
                            <option disabled selected className="">Model:</option>
                            <option>V12</option>
                            <option>V11</option>
                            <option>V10</option>
                            <option>V9</option>
                            <option>V8</option>
                            <option>V7</option>
                            <option>V6</option>
                            <option>Previous</option>
                        </select>
                    </div>
                    <h4 className="uppercase lg:text-[24px] leading-[24px] font-bold text-[#2c3c3b]">select service(s)</h4>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5 text-[15px] mt-4 mb-9">
                        <select required name="ac" className="select h-[60px] w-full text-[15px] inter focus:border-0 text-[#646464]">
                            <option disabled selected className=""><span className="">AC and Heating Repair:</span></option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <input name="comment" required type="text" className="w-full inter h-[60px] input text-[#646464] placeholder:text-[#646464] text-[15px]" placeholder="Comments:" />
                    </div>
                    <h4 className="uppercase lg:text-[24px] leading-[24px] font-bold text-[#2c3c3b]">provide your contact information</h4>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5 text-[15px] mt-4 mb-9">
                        <input required type="text" className="w-full inter h-[60px] input text-[#646464] placeholder:text-[#646464] text-[15px]" placeholder="First Name:" />
                        <input required type="text" className="w-full inter h-[60px] input text-[#646464] placeholder:text-[#646464] text-[15px]" placeholder="Last Name:" />
                    </div>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5 text-[15px] mt-4 mb-9">
                        <input required type="email" className="w-full inter h-[60px] input text-[#646464] placeholder:text-[#646464] text-[15px]" placeholder="Email" />
                        <input required name="phone" type="tel" className="w-full inter h-[60px] input text-[#646464] placeholder:text-[#646464] text-[15px]" placeholder="Mobile Number:" />
                    </div>
                    <div className="flex lg:flex-row flex-col gap-y-4 justify-between gap-x-5 text-[15px] mt-4 mb-9">
                        <textarea required rows={7} className="textarea w-full focus:border-0 text-[15px] placeholder:text-[#646464] text-[#646464] inter" placeholder="Additional Comments (Optional)"></textarea>
                    </div>
                    <div className="text-center">
                        <button to='/' className="btn uppercase z-[70] border-0 hover:border hover:bg-transparent rounded-[5px] w-[273px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">make an appointment</span></button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Scedule;