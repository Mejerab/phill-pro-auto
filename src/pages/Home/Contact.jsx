import Swal from "sweetalert2";
import PointHook from "../../hook/PointHook";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        if (!isNaN(parseInt(phone))) {
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
        <div className="max-w-[1170px] mx-auto px-4 font flex lg:flex-row flex-col gap-y-8">
            <div data-aos='fade-right'>
                <PointHook text={`Connect with us in Greeley, CO`} head={'CONACT US'} />
                <div className="space-y-5">
                    <div data-aos='fade-right' data-aos-delay={300} className="w-full lg:w-[400px] h-[100px] rounded-[8px] border border-[#2C3C3B1A] mt-[3.3rem] flex gap-x-5 items-center py-5 pl-8">
                        <img src="https://i.ibb.co.com/VCGmsFp/phone-call.png" alt="" />
                        <div>
                            <h4 className="text-[20px] font font-bold uppercase text-[#2C3C3B]">Call Us:</h4>
                            <p className="inter font-medium text-[16px text-[#646464]">(970) 591-9041</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-delay={400} className="w-full lg:w-[400px] h-[100px] rounded-[8px] border border-[#2C3C3B1A] flex gap-x-5 items-center py-5 pl-8">
                        <img src="https://i.ibb.co.com/zfVmZ1f/Lock.png" alt="" />
                        <div>
                            <h4 className="text-[20px] font-bold uppercase text-[#2C3C3B]">Hours:</h4>
                            <p className="inter font-medium text-[16px text-[#646464]">Mon-Fri: 7:30am-5:30pm</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-delay={500} className="w-full lg:w-[400px] h-[100px] rounded-[8px] border border-[#2C3C3B1A] flex gap-x-5 items-center py-5 pl-8">
                        <img src="https://i.ibb.co.com/gg4WP0F/location-1-1.png" alt="" />
                        <div>
                            <h4 className="text-[20px] font-bold uppercase text-[#2C3C3B]">Our Location:</h4>
                            <p className="inter font-medium text-[16px text-[#646464]">707 12th Street, Greeley, CO 80631</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos='fade-left' className="lg:w-[700px] lg:py-0 py-6 bg-[#F9F7F2] rounded-xl">
                <form onSubmit={handleSubmit} className="w-full px-4 lg:px-12 inter text-[15px] space-y-5 h-full flex flex-col justify-center">
                    <div className="flex gap-x-6">
                        <input required type="text" placeholder="Name:" className="w-full h-[56px] bg-white text-[#646464] placeholder:text-[#646464] input border-0 focus:boder-0" />
                        <input required type="email" placeholder="Email:" className="w-full h-[56px] bg-white text-[#646464] placeholder:text-[#646464] input border-0 focus:boder-0" />
                    </div>
                    <div className="flex gap-x-6">
                        <input required name="phone" type="tel" placeholder="Phone:" className="w-full h-[56px] bg-white text-[#646464] placeholder:text-[#646464] input border-0 focus:boder-0" />
                        <input required type="text" placeholder="Subject:" className="w-full h-[56px] bg-white text-[#646464] placeholder:text-[#646464] input border-0 focus:boder-0" />
                    </div>
                    <textarea required rows={7} placeholder="Message here..." className="textarea w-full bg-white text-[#646464] placeholder:text-[#646464] border-0 focus:boder-0"></textarea>
                    <div className="pt-5 text-center">
                        <button className="btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[311px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">send message</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;