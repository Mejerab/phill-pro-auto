import PropTypes from 'prop-types';
const PointHook = ({ text, head, white, center }) => {
    const two = head.slice(0, 2);
    const left = head.slice(2, 50);

    return (
        <div className={`flex flex-col ${center &&'items-center'}`}>
            <p className={`inter text-[13px] tracking-widest font-bold uppercase ${white?'text-white':'text-[#2C6F89]'}`}><span className={`bg-[#F4B519] p-1 ${white?'-mr-[0.2rem]':'-mr-[0.2rem]'} pt-1`}>{two}</span>{left}</p>
            <h3 className={`uppercase font-bold font text-[30px] lg:text-[45px] leading-[30px] lg:leading-[55px] ${white?'text-white':'text-[#2C3C3B]'} mt-5 w-full lg:w-[34.3rem] ${center&&'text-center'}`}>{text=='Connect with us in Greeley, CO'?<span>Connect with us in <br /> Greeley, CO</span>:text}</h3>
        </div>
    );
};
PointHook.propTypes = {
    text: PropTypes.string,
    head: PropTypes.string,
    white: PropTypes.bool,
    center: PropTypes.bool,
}

export default PointHook;