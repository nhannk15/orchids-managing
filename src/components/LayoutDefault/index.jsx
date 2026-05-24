import { Outlet } from "react-router-dom";
import Header from "../Header";
import MainContent from "../MainContent";

function LayoutDefault() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayoutDefault;