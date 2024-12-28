import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BannerHook = ({ text, head2, link, btn }) => {
    return (
        <div className="bg-[url(https://i.imgur.com/mveJGva.png)] bg-cover bg-no-repeat h-[326px] uppercase">
            <div className="flex flex-col h-full justify-center gap-y-4 items-center">
                <p className="py-1 pt-[0.4rem] px-3 bg-[#F4B519] rounded-[5px] font-bold text-[#2C3C3B] text-[17px]"><Link to='/'>Home</Link><span className='px-2'>-</span><Link to={`/${link}`}>{head2}</Link></p>
                <h3 className="font text-center font-bold text-[50px] lg:text-[80px] leading-[80px] text-white">{text}</h3>
                {
                    btn && <button className="btn uppercase z-[40] border-0 hover:border hover:bg-transparent rounded-[5px] w-[180px] h-[57px] inter text-[#2C3C3B] text-[14px] bg-transparent font-bold hover:text-[#F4B519] overflow-hidden button relative"><span className="z-40">apply now</span></button>
                }
            </div>
        </div>
    );
};
BannerHook.propTypes = {
    text: PropTypes.string,
    head2: PropTypes.string,
    link: PropTypes.string,
    btn: PropTypes.bool,
}

export default BannerHook;