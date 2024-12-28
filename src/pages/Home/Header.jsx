import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="font">
            <div className="">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
};

export default Header;