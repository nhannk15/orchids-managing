import LayoutDefault from "../components/LayoutDefault";
import OrchidDetail from "../components/OrchidDetail";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import OrchidPage from "../pages/OrchidPage";
import Page404 from "../pages/Page404";

export const allRoutes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/orchid",
                element: <OrchidPage />
            },
            {
                path: "/orchid/:id",
                element: <OrchidDetail />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    },
    {
        path: "*",
        element: <Page404 />
    }
]