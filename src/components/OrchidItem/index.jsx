import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Grid, IconButton, Menu, MenuItem, Modal, Rating, Skeleton, Stack, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { doDelete, doPatch } from "../../service/orchidService";

const style = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    padding: "40px 40px",
    maxHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'none',
    boxSizing: 'border-box',
};

function OrchidItem({ orchid, setOrchid, setLoading }) {

    const [view, setView] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(orchid.numberOfLike);
    const [isLiked, setIsLiked] = useState(false);
    const [newFlower, setNewFlower] = useState(orchid);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const deleteData = async () => {
        await doDelete(`/${orchid.id}`);
        handleClose();
        setLoading(true);
    }

    const patchData = async () => {
        await doPatch(`/${orchid.id}`, newFlower);
        handleClose();
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

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNameChange = (event) => {
        const comingFlower = {
            ...newFlower,
            name: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleDescChange = (event) => {
        const comingFlower = {
            ...newFlower,
            desc: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleImageChange = (event) => {
        const comingFlower = {
            ...newFlower,
            image: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleColorChange = (event) => {
        const comingFlower = {
            ...newFlower,
            color: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleOriginChange = (event) => {
        const comingFlower = {
            ...newFlower,
            origin: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleCategoryChange = (event) => {
        const comingFlower = {
            ...newFlower,
            category: event.target.value
        }
        setNewFlower(comingFlower);
    }

    const handleRatingChange = (event) => {
        const comingFlower = {
            ...newFlower,
            rating: parseInt(event.target.value)
        }
        setNewFlower(comingFlower);
    }

    const handleLikesChange = (event) => {
        const comingFlower = {
            ...newFlower,
            numberOfLike: parseInt(event.target.value)
        }
        setNewFlower(comingFlower);
    }

    const handleSpecialChange = (event) => {
        const comingFlower = {
            ...newFlower,
            isSpecial: event.target.checked
        }
        setNewFlower(comingFlower);
    }

    const handleNaturalChange = (event) => {
        const comingFlower = {
            ...newFlower,
            isNatural: event.target.checked
        }
        setNewFlower(comingFlower);
    }

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = (event) => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
        setAnchorEl(null);
    };
    
    const handleUpdateOrchid = () => {
        handleMenuClose();
        setOpen(true);
    }

    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card>
                    <CardHeader
                        sx={{ textAlign: "left" }}
                        avatar={<Avatar>N</Avatar>}
                        action={<IconButton onClick={handleMenuOpen}><MoreVertIcon /></IconButton>}
                        title={orchid.name}
                        subheader={"Origin: " + orchid.origin}
                    />

                    <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
                        <MenuItem onClick={deleteData}>
                            Delete
                        </MenuItem>
                        <MenuItem onClick={handleUpdateOrchid}>
                            Update
                        </MenuItem>
                    </Menu>

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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component={"form"} sx={{ ...style, marginTop: "20px" }}>
                    <h2>Add a new flower</h2>
                    <TextField
                        defaultValue={orchid.name}
                        size="small"
                        label="Flower's name"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleNameChange(event) }} />

                    <TextField
                        defaultValue={orchid.desc}
                        size="small"
                        label="Description"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleDescChange(event) }} />

                    <TextField
                        defaultValue={orchid.image}
                        size="small"
                        label="Image url"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleImageChange(event) }} />

                    <TextField
                        defaultValue={orchid.color}
                        size="small"
                        label="Color"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleColorChange(event) }} />

                    <TextField
                        defaultValue={orchid.origin}
                        size="small"
                        label="Origin"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleOriginChange(event) }} />

                    <TextField
                        defaultValue={orchid.category}
                        size="small"
                        label="Category"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleCategoryChange(event) }} />

                    <Stack direction={"row"} spacing={10} sx={{ marginTop: "10px", marginBottom: "10px" }}>
                        <Typography color="textSecondary">
                            Rating:
                        </Typography>
                        <Rating
                            name="half-rating"
                            defaultValue={orchid.rating}
                            precision={0.5}
                            onChange={(event) => {
                                handleRatingChange(event);
                            }}
                        />
                    </Stack>

                    <TextField
                        defaultValue={orchid.numberOfLike}
                        label="Number of likes"
                        type="number"
                        size="small"
                        variant="outlined"
                        onChange={(event) => handleLikesChange(event)}
                    />

                    <Stack sx={{ textAlign: "left", display: "flex", alignItems: "center" }} direction={"row"}>
                        <Typography color="textSecondary">Special: </Typography>
                        <Checkbox
                            checked={orchid.isSpecial}
                            label="Check"
                            onChange={(event) => { handleSpecialChange(event) }} />
                    </Stack>

                    <Stack sx={{ textAlign: "left", display: "flex", alignItems: "center" }} direction={"row"}>
                        <Typography color="textSecondary">Natural: </Typography>
                        <Checkbox
                            checked={orchid.isNatural}
                            label="Check"
                            onChange={(event) => { handleNaturalChange(event) }} />
                    </Stack>

                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <Button variant="contained" color="secondary" onClick={patchData}>Update flower</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default OrchidItem;