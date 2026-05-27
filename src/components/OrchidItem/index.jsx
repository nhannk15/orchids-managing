import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function OrchidItem({ orchid, setOrchid }) {

    const [view, setView] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(orchid.numberOfLike);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setNumberOfLikes(numberOfLikes - 1);
        } else {
            setNumberOfLikes(numberOfLikes + 1);
        }
        setIsLiked(!isLiked);
    }

    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card>
                    <CardHeader
                        sx={{ textAlign: "left" }}
                        avatar={<Avatar>N</Avatar>}
                        action={<IconButton><MoreVertIcon /></IconButton>}
                        title={orchid.name}
                        subheader={"Origin: " + orchid.origin}
                    />

                    <CardMedia
                        component={"img"}
                        height={"300"}
                        image={orchid.image}
                    />

                    <CardContent sx={{ textAlign: "left" }}>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {orchid.desc}
                        </Typography>
                        <Rating name="read-only" value={orchid.rating} readOnly />
                    </CardContent>

                    <CardActions>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <IconButton onClick={handleLike}>
                                {isLiked == true ? (
                                    <FavoriteIcon color="error" />
                                ) : (
                                    <FavoriteIcon />
                                )}
                            </IconButton>

                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                                {numberOfLikes}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <IconButton >
                                <ShareIcon />
                            </IconButton>

                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                                Share
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Link to={"/orchid/" + orchid.id}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Link>

                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                                Info
                            </Typography>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default OrchidItem;