import About from "./About";
import Choose from "./Choose";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="pb-24 lg:pb-24 space-y-12 lg:space-y-24">
            <Hero />
            <Services />
            <About home/>
            <Choose />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;