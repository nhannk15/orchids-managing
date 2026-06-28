import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Grid, IconButton, Menu, MenuItem, Modal, Rating, Skeleton, Stack, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { doDelete } from "../../service/orchidService";
import UpdateFlowerModal from "../UpdateFlowerModal";
import useUserStore from '../../store/useUserStore';


function OrchidItem({ setLoading, orchid, setOpenUpdateModal, setOrchid }) {

    const user = useUserStore((state) => state.user);

    const [view, setView] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(orchid.numberOfLike);
    const [isLiked, setIsLiked] = useState(false);
    const [newFlower, setNewFlower] = useState(orchid);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const deleteData = async () => {
        await doDelete(`/${orchid.id}`);
        handleMenuClose();
        setLoading(true);
    }

    const handleLike = () => {
        if (isLiked) {
            setNumberOfLikes(numberOfLikes - 1);
        } else {
            setNumberOfLikes(numberOfLikes + 1);
        }
        setIsLiked(!isLiked);
    }

    const handleMenuOpen = (event) => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(false);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card>
                    <CardHeader
                        sx={{ textAlign: "left" }}
                        avatar={<Avatar src="https://yt3.googleusercontent.com/ytc/AIdro_lphR7IgKMrsh-RwEVXL2XEvnQ8rb9Qb-a04v-yZJtM_ZQ=s160-c-k-c0x00ffffff-no-rj"></Avatar>}
                        action={(user != null && user.role == "ADMIN") && (<IconButton onClick={handleMenuOpen}><MoreVertIcon /></IconButton>)}
                        title={orchid.name}
                        subheader={"Origin: " + orchid.origin}
                    />
                    {(user != null && user.role == "ADMIN") && (
                        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
                            <MenuItem onClick={deleteData}>
                                Delete
                            </MenuItem>
                            <MenuItem onClick={handleOpenModal}>
                                Update
                            </MenuItem>
                        </Menu>
                    )}


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

            <UpdateFlowerModal
                open={openModal}
                handleClose={handleCloseModal}
                setLoading={setLoading}
                submitting={submitting}
                setSubmitting={setSubmitting}
                orchid={orchid}
            />
        </>
    )
}

export default OrchidItem;