import LayoutDefault from "../components/LayoutDefault";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import OrchidPage from "../pages/OrchidPage";

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
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/orchid",
                element: <OrchidPage />
            }
        ]
    }
]