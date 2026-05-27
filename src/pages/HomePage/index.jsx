import { Button, Grid } from "@mui/material";
import "../../components/Header"
import "./style.css"
function HomePage() {
    return (
        <>
            <div className="section--one">
                <Grid container className="section--one__content">
                    <Grid size={{xs: 10, sm: 10, md: 8, lg: 8, xl: 8}}>
                        <h5 className="section--one__smalltitle">WITH OUR MOST SINCERE</h5>
                        <h1>UPGRADE YOUR GARDEN</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit reiciendis itaque! Error excepturi laboriosam hic, ipsum, provident aperiam, deleniti officia saepe enim sed cumque quasi a ducimus dolorem incidunt.</p>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

export default HomePage;