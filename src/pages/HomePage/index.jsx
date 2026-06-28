import { Box, Button, Grid } from "@mui/material";
import "../../components/Header"
import "./style.css"
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { doGetUser, doPostUser } from "../../service/userService";
import Login from "../../components/Login";
import useUserStore from "../../store/useUserStore";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useNavigate } from "react-router-dom";
function HomePage() {

    const user = useUserStore((state) => state.user);
    const logout = useUserStore((state) => state.logout);

    return (
        <>
            <div className="section--one">
                <Grid container className="section--one__content">
                    <Grid size={{ xs: 10, sm: 10, md: 8, lg: 8, xl: 8, }}>
                        <h5 className="section--one__smalltitle" style={{color: "black"}}>WITH OUR MOST SINCERE</h5>
                        <h1 style={{color: "black"}}>UPGRADE YOUR GARDEN</h1>
                        <p style={{color: "black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit reiciendis itaque! Error excepturi laboriosam hic, ipsum, provident aperiam, deleniti officia saepe enim sed cumque quasi a ducimus dolorem incidunt.</p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HomePage;