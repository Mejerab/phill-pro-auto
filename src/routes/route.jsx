import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import SingleBlog from "../pages/SingleBlog";
import Warranty from "../pages/Warranty";
import ServicesPage from "../pages/ServicesPage";
import AutoRepair from "../pages/AutoRepair";
import Specials from "../pages/Specials";
import Reviews from "../pages/Reviews";
import Scedule from "../pages/Scedule";
import Hiring from "../pages/Hiring";
import Emergency from "../pages/Emergency";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blog/:id',
                element: <SingleBlog />
            },
            {
                path: '/warranty',
                element: <Warranty />
            },
            {
                path: '/services',
                element: <ServicesPage />
            },
            {
                path: '/auto-radiator-repair',
                element: <AutoRepair />
            },
            {
                path: '/specials',
                element: <Specials />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/scedule',
                element: <Scedule />
            },
            {
                path: '/hiring',
                element: <Hiring />
            },
            {
                path: '/emergency',
                element: <Emergency />
            },
        ]
    },
]);
export default router;