// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import BannerHook from "../hook/BannerHook";
import { createTheme, ThemeProvider } from "@mui/material";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#F4B519',
                background: '#fff'

            }
        }
    })
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
    return (
        <div>
            <BannerHook link={'blogs'} head2={'blog'} text={'blog archive'} />
            <div className="max-w-[1170px] mx-auto px-4 py-24 flex lg:flex-row flex-col gap-y-8 justify-between">
                <div className="w-full lg:w-[300px]">
                    <h4 className="uppercase font-bold text-[25px] pb-4">archive post:</h4>
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DateCalendar defaultValue={moment(Date())} />
                        </LocalizationProvider>
                    </ThemeProvider>
                    <h4 className="uppercase font-bold text-[25px] pb-4 mt-12">post category:</h4>
                    <div className="space-y-2 inter text-[15px] text-[#646464]">
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Air Conditioning</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Alignment</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Automotive News</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Automotive Repair</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Cabin Air Filter</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Check Engine Light</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Keys To A Long Lasting Vehicle</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Monitoring System</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Oil Change</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Older Vehicles</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Serpentine Belt</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Service Standards</button>
                        <button className="hover:text-white hover:bg-[#2C6F89] tra text-left pl-5 h-[48px] w-full rounded-[5px] border border-[#2C3C3B1A]">Tires And Wheels</button>
                    </div>
                </div>
                <div className="lg:w-[800px] space-y-10">
                    {
                    blogs?.map(blog=>
                        <div data-aos='fade-left' key={blog.id}>
                            <Link to={`/blog/${blog.id}`}><img src={blog.image} alt="" /></Link>
                            <h4 className="font-bold text-[28px] pt-7 pb-2">{blog.title}</h4>
                            <p className="inter text-[15px] text-[#646464]">Posted on <span>{blog.date}</span> by Phil&apos;s Pro Auto Service in <span className="text-[#2C6F89]">{blog.problem}</span></p>
                            <p className="text-[#646464] text-[16px] pt-3 inter leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...<Link to={`/blog/${blog.id}`} className="font-medium text-[#2C6F89]">Read More</Link></p>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;