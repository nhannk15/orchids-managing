import { useCallback, useEffect, useState } from "react";
import OrchidItem from "../OrchidItem";
import "./style.css"
import { Box, Button, Checkbox, CircularProgress, Fab, FormControl, Grid, InputLabel, MenuItem, Modal, Rating, Select, Skeleton, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import { doGet, doPost } from "../../service/orchidService";
import AddFlowerModal from "../AddFlowerModal";
import UpdateFlowerModal from "../UpdateFlowerModal";
import useUserStore from "../../store/useUserStore";

const categories = [
    "Phalaenopsis",
    "Dendrobium",
    "Oncidium",
    "Cattleya",
    "Vanda",
    "Cymbidium",
    "Paphiopedilum",
    "Miltonia",
]

function Orchid() {

    const [loading, setLoading] = useState(true);
    const [listOfOrchids, setListOfOrchids] = useState([]);
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const user = useUserStore((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await doGet("");
                responseData.sort((a, b) => {
                    return Number(b.id) - Number(a.id);
                });
                console.log(responseData);
                setListOfOrchids(responseData);
            } catch (error) {
                console.log("Error occur " + error);
            } finally {
                setLoading(false);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 300);
    }, [loading]);

    const handleOpen = () => {
        setOpen(true);
        setFormError(null);
    }

    const handleClose = () => {
        setOpen(false);
        setFormError(null);
    }

    const handleSearch = useCallback(
        debounce(async (value) => {
            try {
                const responseData = await doGet("?search=" + value);
                responseData.sort((a, b) => {
                    return Number(b.id) - Number(a.id);
                });
                setListOfOrchids(responseData);
            } catch (error) {
                console.log("Error occured: " + error);
                setListOfOrchids([]);
            }
        }, 500), []
    );

    return (
        <>
            <Box sx={{ paddingRight: "12.5%", paddingLeft: "12.5%", textAlign: "left" }}>
                <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 0, textAlign: "center" }}>
                    Collections
                </Typography>
                <Typography variant="h3" sx={{ marginTop: 0, marginBottom: 2, textAlign: "center" }}>
                    Discovering the beauty of orchids
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Search by orchid's name"
                    variant="outlined"
                    size="small"
                    onChange={(event) => handleSearch(event.target.value)}
                    sx={{
                        width: "50%",
                        '& .MuiInputBase-root': {
                            color: 'var(--text)',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'var(--text)',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--border)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--accent)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--accent)',
                            },
                        },
                    }}
                />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">
                        All Categories
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        size="small"
                        label="Category"
                        value={selectedCategory}
                        sx={{
                            width: "170px",
                            color: 'var(--text)', // Màu chữ của select
                            '& .MuiOutlinedInput-root': {
                                color: 'var(--text)',
                                '& fieldset': {
                                    borderColor: 'var(--border)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--accent)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--accent)',
                                },
                            },
                            '& .MuiSelect-select': {
                                color: 'var(--text)',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'var(--text)', // Màu icon dropdown
                            },
                            '& .MuiInputLabel-root': {
                                color: 'var(--text)',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'var(--accent)',
                            },
                        }}
                        onChange={(event) => {
                            const value = event.target.value;
                            setSelectedCategory(value);
                            handleSearch(event.target.value)
                        }}
                        MenuProps={{
                            sx: {
                                '& .MuiPaper-root': {
                                    backgroundColor: 'var(--bg)',
                                    color: 'var(--text)',
                                },
                                '& .MuiMenuItem-root': {
                                    color: 'var(--text)',
                                    backgroundColor: 'var(--bg)',
                                    '&:hover': {
                                        backgroundColor: 'var(--code-bg)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'var(--accent-bg)',
                                        '&:hover': {
                                            backgroundColor: 'var(--accent-bg)',
                                        }
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem value={""}>All Categories</MenuItem>
                        {categories.map((category) => (
                            <MenuItem value={category} >{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Box>

            <Grid container className="container" spacing={2} sx={{ marginTop: "30px" }} >
                {loading ?
                    Array.from(new Array(6)).map((item, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 12, md: 6, lg: 4 }} sx={{ marginTop: "20px" }}>
                            <Skeleton variant="circular" width="40px" height="40px" sx={{ marginLeft: "10px", marginBottom: "10px" }} />
                            <Skeleton variant="rectangular" height={"300px"} />
                            <Skeleton width="60%" />
                            <Skeleton width="40%" />
                        </Grid>
                    )) : (
                        (listOfOrchids.length == 0) ? (
                            <>
                                Your keyword doesn't match any orchids' name...
                            </>
                        ) : (
                            listOfOrchids.map((orchid) => (
                                <OrchidItem
                                    key={orchid.id}
                                    orchid={orchid}
                                    setLoading={setLoading}
                                />)

                            )))
                }
            </Grid>
            {(user != null && user.role == "ADMIN") && (
                <Fab aria-label="add"
                sx={{ position: "sticky", bottom: "5%", left: "95%" }}
                onClick={handleOpen}
                color="secondary"
            >
                <AddIcon />
            </Fab>
            )}
            
            <AddFlowerModal
                open={open}
                handleClose={() => setOpen(false)}
                setLoading={setLoading}
                submitting={submitting}
                setSubmitting={setSubmitting} />


        </>
    )
}

export default Orchid;