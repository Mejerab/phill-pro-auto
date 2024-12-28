import BannerHook from "../hook/BannerHook";
import PointHook from "../hook/PointHook";
import About from "./Home/About";

const AboutUs = () => {
    return (
        <div className="space-y-24 pb-24">
            <BannerHook link={'about-us'} head2={'about us'} text={'about us'} />
            <About />
            <div className="bg-[#F9F7F2] py-24">
                <div data-aos='fade-up' className="max-w-[1170px] mx-auto px-4">
                    <h4 className="uppercase text-[45px] leading-[55px] font-bold pb-3">Our Team of ASE-Certified Professionals Are Here To Help</h4>
                    <p className="inter text-[16px] leading-[30px] text-[#646464] w-fit lg:w-[99%]">We’re proud of our highly-trained and friendly team. Our techs have more than 37 years of professional experience you can rely on. We ensure each tech stays informed on the cutting edge of automotive technology by providing ongoing training. professional development never stops at Phil’s Pro Auto Service. We care about each of our employees and seek to support the development and growth of their professional talent. We provide our team with the latest equipment and software to best serve our customers. See us today at 707 12th Street, Greeley, CO 80631 to meet our friendly and helpful team.</p>
                    <h4 className="uppercase pt-9 text-[45px] leading-[55px] font-bold pb-3">Giving Back to Our Customers</h4>
                    <p className="inter text-[16px] leading-[30px] text-[#646464] w-fit lg:w-[99%]">We prioritize building a unique relationship with every customer that walks through our doors. For more than two decades, we’ve taken the time to know the community we serve. We pride ourselves on our commitment to customer satisfaction. We put in the extra effort to build lasting relationships with every customer that comes through our doors. Since 1985 we’ve been giving our customers individualized care and attention. We want you to feel as confident in our parts, equipment, and team as we do. That’s why we offer a 36-month/26,000-mile warranty on every repair. Enjoy our comfortable waiting area and free Wi-Fi. Complimentary shuttle service to minimize the inconvenience of being without your vehicle. To accommodate every schedule, we offer after-hours pick-up and drop-off. Making time for automotive service can be stressful. Let us make it easier with our dedication to customer satisfaction. Call us today at (970) 699-4036 to schedule your next automotive service with a team that cares.</p>
                    <h4 className="uppercase pt-9 text-[45px] leading-[55px] font-bold pb-3">Giving Back to Our Community</h4>
                    <p className="inter text-[16px] leading-[30px] text-[#646464] w-fit lg:w-[99%]">Here, we believe in giving back to our community. We’ve been proudly serving our friends and neighbors in Greeley for more than three decades. In that time, it’s been our pleasure to serve our community in various ways. Phil’s Pro Auto Service supports organizations that champion the empowerment and development of local women and children. We partner with Women2Women each year by sponsoring their annual Circle of Sisters luncheon. We also help program participants stretch their repair dollars by reducing our rates for their auto repair. This ensures every penny spent does the most good. Our owner Phil White is active in the Aims Community College Automotive program, helping prepare the next generation of techs year after year. Phil is also involved in The Boys and Girls Clubs of America. This national program empowers young people through positive role models and mentor relationships with caring adults. The Greeley Luncheon Optimist Club is a community service organization that aims to improve the lives of children and promote the philosophy of optimism. Phil is active in The Colorado Model Railroad Museum community, bringing fun and education to train enthusiasts of all ages.</p>
                </div>
            </div>
            <div className="max-w-[1170px] mx-auto px-4">
                <PointHook head={'team members'} text={'our team members'} center />
                <div data-aos='fade-up' className="mt-36 flex lg:flex-row flex-col gap-y-32 justify-between">
                    <div className="lg:mx-0 mx-auto w-[270px] h-[250px] text-center flex flex-col justify-end pb-8 rounded-[8px] border border-[#2C3C3B1A]">
                        <img className="w-[215px] h-[215px] mx-auto mb-5" src="https://i.imgur.com/WunWv2J.png" alt="" />
                        <h5 className="text-[25px] font-bold text-[#2C3C3B] uppercase">Bradley Burns</h5>
                        <p className="text-[#646464] inter text-[15px]">Engineer</p>
                    </div>
                    <div className="lg:mx-0 mx-auto w-[270px] h-[250px] text-center flex flex-col justify-end pb-8 rounded-[8px] border border-[#2C3C3B1A]">
                        <img className="w-[215px] h-[215px] mx-auto mb-5" src="https://i.imgur.com/3pb4VHn.png" alt="" />
                        <h5 className="text-[25px] font-bold text-[#2C3C3B] uppercase">Cedric Larson</h5>
                        <p className="text-[#646464] inter text-[15px]">Engineer</p>
                    </div>
                    <div className="lg:mx-0 mx-auto w-[270px] h-[250px] text-center flex flex-col justify-end pb-8 rounded-[8px] border border-[#2C3C3B1A]">
                        <img className="w-[215px] h-[215px] mx-auto mb-5" src="https://i.imgur.com/gpMN7ev.png" alt="" />
                        <h5 className="text-[25px] font-bold text-[#2C3C3B] uppercase">Keith Williamson</h5>
                        <p className="text-[#646464] inter text-[15px]">Engineer</p>
                    </div>
                    <div className="lg:mx-0 mx-auto w-[270px] h-[250px] text-center flex flex-col justify-end pb-8 rounded-[8px] border border-[#2C3C3B1A]">
                        <img className="w-[215px] h-[215px] mx-auto mb-5" src="https://i.imgur.com/HAy2mmo.png" alt="" />
                        <h5 className="text-[25px] font-bold text-[#2C3C3B] uppercase">Tasha Newman</h5>
                        <p className="text-[#646464] inter text-[15px]">Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;