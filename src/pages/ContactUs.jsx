import { Map, Marker } from "pigeon-maps";
import BannerHook from "../hook/BannerHook";
import Contact from "./Home/Contact";

const ContactUs = () => {
    return (
        <div className="space-y-24 -mb-2">
            <BannerHook link={'contact-us'} head2={'contact'} text={'Contact us'} />
            <Contact />
            <Map height={480} defaultCenter={[41.881832, -87.623177]} defaultZoom={11}>
                <Marker width={50} anchor={[41.881832, -87.623177]} />
            </Map>
        </div>
    );
};

export default ContactUs;