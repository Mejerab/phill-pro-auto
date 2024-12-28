import { useParams } from "react-router-dom";
import BannerHook from "../hook/BannerHook";
import { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Swal from "sweetalert2";

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                const newData = data.find(one => one.id === parseInt(id))
                setBlog(newData)
            })
    }, [id]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const site = e.target.site.value;
        const message = e.target.message.value;
        if (name&&email&&site&&message) {
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
    }

    return (
        <div>
            <BannerHook link={'blogs'} head2={'Blog'} text={'single blog'} />
            <div className="max-w-[1170px] mx-auto px-4 py-24 space-y-28">
                <div className="space-y-8">
                    <img className="w-full" src={blog.image} alt="" />
                    <div className="space-y-3">
                        <h4 className="text-[#2C3C3B] font-bold text-[45px] leading-[55px]">{blog.title}</h4>
                        <p className="inter text-[15px] text-[#646464]">Posted on <span>{blog.date}</span> by Phil&apos;s Pro Auto Service in <span className="text-[#2C6F89]">{blog.problem}</span></p>
                        <p className="inter text-[16px] text-[#646464]">Hybrid cars are an eco-friendly compromise between the gas-powered combustion engine most people drive and the electric motor of a full-electric car. This combination of motors is not only more fuel economical, the process creates less CO2 emissions.</p>
                        <p className="inter text-[16px] text-[#646464]">But with multiple engines, how does it work?</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[#2C3C3B] font-bold text-[28px] leading-[32px]">Look, Ma! No Plug!</h4>
                        <p className="inter text-[16px] text-[#646464]">Unlike a fully electric vehicle, you do not plug in a hybrid to charge the electric motor. Instead, it’s charged through regenerative braking and the combustion engine. The regenerative braking transforms kinetic energy produced by the movement of the car into electrical energy that is stored in the traction battery via the electric generator.</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[#2C3C3B] font-bold text-[28px] leading-[32px]">Together & Separately: How the Motors Work</h4>
                        <p className="inter text-[16px] text-[#646464]">One of the coolest parts of a hybrid car is that the separate motors can work together or independently (for the most part). For example:
                            When you go forward from a stop, the electric motor engages until the vehicle reaches about 15mph. It pulls electricity from the battery to move the vehicle. <br /><br />
                            After 15 mph, it changes over to the combustion engine, since that is more efficient for cruising speeds. This is also how electricity is converted to charge the battery. <br /><br />
                            When acceleration is necessary, the engines work together and the power-split transmission combines the torque generated by both the engine and the motor, and the engine powers the generator. The motor can use electricity from either the battery or generator as necessary. <br /><br />
                            When the brakes are used, and they release the pressure from the pedal, regenerative braking comes into play. Since the vehicle is decelerating, there is no need to run the engine or the motor, so the wheels power the generator, which in turn produces the electricity that is stored in the battery. <br /><br />
                            A complete stop means that both the engine and motor turn off, leaving the auxiliary systems–lights, radio, heating/cooling, etc.--to be run solely on the power stored in the battery.</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[#2C3C3B] font-bold text-[28px] leading-[32px]">Eco-Friendly Wave of the Future?</h4>
                        <p className="inter text-[16px] text-[#646464]">With better gas mileage, and significant fuel cost savings, it’s no surprise that these models are growing more popular as fuel prices continue to rise in the US. The significantly lower CO2 emissions are a wonderful bonus. <br /><br />
                            Do you have a hybrid? Do you want one?</p>
                    </div>
                </div>
                <div className="h-[625px] bg-[#F9F7F2] rounded-xl w-full py-12">
                    <div className="text-center">
                        <h4 className="uppercase text-[45px] leading-[55px] pb-1 font-bold">leave a comment</h4>
                        <p className="inter text-[16px] text-[#646464]">Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <form onSubmit={handleSubmit} className="pt-8 w-[1030px] mx-auto space-y-7">
                        <div className="grid grid-cols-3 gap-x-6">
                            <input required name="name" type="text" className="input rounded-[5px] w-full h-[56px] text-[#646464] text-[15px] inter placeholder:text-[#646464]" placeholder="Name:" />
                            <input required name="email" type="email" className="input rounded-[5px] w-full h-[56px] text-[#646464] text-[15px] inter placeholder:text-[#646464]" placeholder="Email:" />
                            <input required name="site" type="text" className="input rounded-[5px] w-full h-[56px] text-[#646464] text-[15px] inter placeholder:text-[#646464]" placeholder="Website:" />
                        </div>
                        <textarea required name="message" rows={7} className="textarea rounded-[5px] w-full text-[#646464] text-[15px] inter placeholder:text-[#646464]" placeholder="Message here..."></textarea>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center -ml-3">
                                <Checkbox {...label} />
                                <p className="inter text-[16px] text-[#646464]">Save my name, email, and website in this browser for the next time I comment.</p>
                            </div>
                            <button className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[254px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">submit comment</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;