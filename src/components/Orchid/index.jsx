import { useEffect, useState } from "react";
import OrchidItem from "../OrchidItem";
import "./style.css"
import { Box, Button, Checkbox, Fab, Grid, Modal, Rating, Skeleton, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { CheckBox } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    padding: "40px"
};

function Orchid() {

    const [newFlower, setNewFlower] = useState({});
    const [loading, setLoading] = useState(true);
    const [orchid, setOrchid] = useState(null);
    const [listOfOrchids, setListOfOrchids] = useState([]);
    const [open, setOpen] = useState(false);

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

    const postData = async () => {
        const response = await fetch("https://6a169f001b90031f81b140d7.mockapi.io/orchids", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFlower)
        });
        const data = await response.json();
        console.log(data);
        handleClose();
        setLoading(true);
    }

    console.log(newFlower);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://6a169f001b90031f81b140d7.mockapi.io/orchids");
            const data = await response.json();
            setListOfOrchids(data);
            setLoading(false);
        }
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, [loading]);

    return (
        <>
            <Grid container className="container" spacing={2} sx={{ marginTop: "30px" }} >
                {loading ?
                    Array.from(new Array(6)).map((item, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 12, md: 6, lg: 4 }} sx={{ marginTop: "20px" }}>
                            <Skeleton variant="circular" width="40px" height="40px" sx={{ marginLeft: "10px", marginBottom: "10px" }} />
                            <Skeleton variant="rectangular" height={"300px"} />
                            <Skeleton width="60%" />
                            <Skeleton width="40%" />
                        </Grid>
                    )) : listOfOrchids.map((orchid) => (
                        <OrchidItem
                            key={orchid.id}
                            orchid={orchid}
                            setOrchid={setOrchid} 
                            setLoading={setLoading}
                        />
                    ))
                }
            </Grid>

            <Fab color="primary"
                aria-label="add"
                sx={{ position: "sticky", bottom: "5%", left: "95%" }}
                onClick={handleOpen}
                color="secondary"
            >
                <AddIcon />
            </Fab>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component={"form"} sx={{ ...style, width: 400, display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                    <h2>Add a new flower</h2>
                    <TextField
                        size="small"
                        label="Flower's name"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleNameChange(event) }} />

                    <TextField
                        size="small"
                        label="Description"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleDescChange(event) }} />

                    <TextField
                        size="small"
                        label="Image url"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleImageChange(event) }} />

                    <TextField
                        size="small"
                        label="Color"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleColorChange(event) }} />

                    <TextField
                        size="small"
                        label="Origin"
                        variant="standard"
                        fullWidth
                        onChange={(event) => { handleOriginChange(event) }} />

                    <TextField
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
                            defaultValue={0}
                            precision={0.5}
                            onChange={(event) => {
                                handleRatingChange(event);
                            }}
                        />
                    </Stack>

                    <TextField
                        label="Number of likes"
                        type="number"
                        size="small"
                        variant="outlined"
                        onChange={(event) => handleLikesChange(event)}
                    />

                    <Stack sx={{ textAlign: "left", display: "flex", alignItems: "center" }} direction={"row"}>
                        <Typography color="textSecondary">Special: </Typography>
                        <Checkbox label="Check" onChange={(event) => { handleSpecialChange(event) }} />
                    </Stack>

                    <Stack sx={{ textAlign: "left", display: "flex", alignItems: "center" }} direction={"row"}>
                        <Typography color="textSecondary">Natural: </Typography>
                        <Checkbox label="Check" onChange={(event) => {handleNaturalChange(event)}}/>
                    </Stack>

                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <Button variant="contained" color="secondary" onClick={postData}>Add flower</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Orchid;