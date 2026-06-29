import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import MainContent from "../MainContent";

function LayoutDefault() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutDefault;