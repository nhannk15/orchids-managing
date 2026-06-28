import { useEffect, useState } from "react";
import OrchidItem from "../OrchidItem";
import { doGet } from "../../service/orchidService";
import { Box, Grid, Typography } from "@mui/material";

function NaturalOrchid() {

    const [listOfOrchids, setListOfOrchids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openUpdateModal, setOpenUpdateModal] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log("useEffect triggered!");
            try {
                const responseData = await doGet("");
                console.log(responseData);
                setListOfOrchids(responseData);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [loading]);

    console.log("Ok")

    const specialList = listOfOrchids.filter((item) => item.isNatural === true);
    return (
        <>
            <Box sx={{ textAlign: "left", paddingLeft: "12.5%", paddingRight: "12.5%" }}>
                <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 0 }}>
                    Collections
                </Typography>
                <Typography variant="h3" sx={{ marginTop: 0, marginBottom: 2 }}>
                    Discovering the natural orchids
                </Typography>
            </Box>
            <Grid container className="container" spacing={2} sx={{ marginTop: "30px" }} >
                {specialList.map((orchid) => (
                    <OrchidItem
                        key={orchid.id}
                        orchid={orchid}
                        loading={loading}
                        setLoading={setLoading}
                        openUpdateModal={openUpdateModal}
                        setOpenUpdateModal={setOpenUpdateModal}
                    />
                ))}
            </Grid>
        </>
    )
}

export default NaturalOrchid;