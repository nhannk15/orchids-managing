import { useCallback, useEffect, useState } from "react";
import OrchidItem from "../OrchidItem";
import "./style.css"
import { Box, Button, Checkbox, CircularProgress, Fab, Grid, Modal, Rating, Skeleton, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import { doGet, doPost } from "../../service/orchidService";
import AddFlowerModal from "../AddFlowerModal";
import UpdateFlowerModal from "../UpdateFlowerModal";

function Orchid() {

    const [loading, setLoading] = useState(true);
    const [listOfOrchids, setListOfOrchids] = useState([]);
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await doGet("");
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
                            setLoading={setLoading}
                        />
                    ))
                }
            </Grid>

            <Fab aria-label="add"
                sx={{ position: "sticky", bottom: "5%", left: "95%" }}
                onClick={handleOpen}
                color="secondary"
            >
                <AddIcon />
            </Fab>
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