import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/'>Home</Link></li>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/about-us'>About us</Link></li>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/services'>Services</Link></li>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/specials'>Specials</Link></li>
        <li className="leading-[20px] h-[30px] lg:h-[35px] group relative lg:p-0 pt-1 pl-4 hover:cursor-pointer lg:flex">Pages <IoIosArrowDown />
            <ul className="opacity-0 invisible group-hover:visible top-12 z-[100] absolute left-0 bg-white w-36 p-5 group-hover:opacity-100  group-hover:top-8 tra space-y-2 lg:space-y-5">
                <li className="hover:text-[#F4B519] transition-colors"><Link to='/blogs'>Blogs</Link></li>
                <li className="hover:text-[#F4B519] transition-colors"><Link to='/warranty'>warranty</Link></li>
                <li className="hover:text-[#F4B519] transition-colors"><Link to='/auto-radiator-repair'>Auto Radiator Repair</Link></li>
                <li className="hover:text-[#F4B519] transition-colors"><Link to='/hiring'>We Are Hiring</Link></li>
                <li className="hover:text-[#F4B519] transition-colors"><Link to='/emergency'>Emergency Vehicles Repair</Link></li>
            </ul>
        </li>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/reviews'>Reviews</Link></li>
        <li className="leading-[20px] hover:text-[#F4B519] transition-colors"><Link to='/contact-us'>Contact us</Link></li>
    </>
    return (
        <>
            <div className="grid lg:grid-cols-3 max-w-[1170px] mx-auto px-4">
                <div className="flex gap-x-5 items-center py-5 border-r border-[#EDEAE1]">
                    <img src="https://i.ibb.co.com/VCGmsFp/phone-call.png" alt="" />
                    <div>
                        <h4 className="text-[20px] font-bold uppercase text-[#2C3C3B]">Call Us:</h4>
                        <p className="inter font-medium text-[16px text-[#646464]">(970) 591-9041</p>
                    </div>
                </div>
                <div className="flex gap-x-5 items-center py-5 border-r lg:justify-center border-[#EDEAE1]">
                    <img src="https://i.ibb.co.com/zfVmZ1f/Lock.png" alt="" />
                    <div>
                        <h4 className="text-[20px] font-bold uppercase text-[#2C3C3B]">Hours:</h4>
                        <p className="inter font-medium text-[16px text-[#646464]">Mon-Fri: 7:30am-5:30pm</p>
                    </div>
                </div>
                <div className="flex gap-x-5 items-center py-5 lg:justify-end">
                    <img src="https://i.ibb.co.com/gg4WP0F/location-1-1.png" alt="" />
                    <div>
                        <h4 className="text-[20px] font-bold uppercase text-[#2C3C3B]">Our Location:</h4>
                        <p className="inter font-medium text-[16px text-[#646464]">707 12th Street, Greeley, CO 80631</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F7F2] relative">
                <div className="navbar max-w-[1170px] mx-auto px-4 items-center">
                    <div className="navbar-start w-[35%]">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-white text-[20px] mt-4 font-bold text-[#2C3C3B] z-[60] px-1 w-44">
                                {links}
                                <Link to='/scedule' className="btn uppercase z-[70] border-0 hover:border hover:bg-transparent rounded-[5px] w-full mt-5 h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                            </ul>
                        </div>
                        <Link to='/' className="btn h-fit text-xl"><img src="https://i.ibb.co.com/D1DBCZD/Logo.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex space-x-10 text-[20px] mt-4 font-bold text-[#2C3C3B] px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end endd">
                        <Link to='/scedule' className="lg:inline-flex hidden btn uppercase z-[70]  border-0 hover:border hover:bg-transparent rounded-[5px] w-[204px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">Schedule Service</span></Link>
                    </div>
                </div>
                <div className="h-[97px] imgg absolute top-0 right-0 bg-[url(https://i.ibb.co.com/gZHhWyG/Mask-group.png)]" />
            </div>
        </>
    );
};

export default Navbar;