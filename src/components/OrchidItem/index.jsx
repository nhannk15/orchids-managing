import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share"

function OrchidItem({ orchid, setOrchid }) {

    const [view, setView] = useState(true);
    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card>
                    <CardHeader 
                        sx={{textAlign: "left"}}
                        avatar={<Avatar>R</Avatar>}
                        action={<IconButton><MoreVertIcon /></IconButton>}
                        title={orchid.name}
                        subheader={"Origin: " + orchid.origin}
                    />

                    <CardMedia
                        component={"img"}
                        height={"300"}
                        image={orchid.image}
                    />

                    <CardContent sx={{textAlign: "left"}}>
                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                            {orchid.desc}
                        </Typography>
                        <Rating name="read-only" value={orchid.rating} readOnly />
                    </CardContent>

                    <CardActions>
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default OrchidItem;