import { useEffect, useState } from "react";
import ModalUsage from "../ModalUsage";
import OrchidItem from "../OrchidItem";
import "./style.css"
import { Grid } from "@mui/material";

function Orchid() {

    const [orchid, setOrchid] = useState(null);
    const [listOfOrchids, setListOfOrchids] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://6a169f001b90031f81b140d7.mockapi.io/orchids");
            const data = await response.json();
            setListOfOrchids(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Grid container className="container" spacing={2} sx={{ marginTop: "30px" }}>
                {listOfOrchids.map((orchid) => (
                    <OrchidItem key={orchid.id} orchid={orchid} setOrchid={setOrchid} />
                ))}
            </Grid>
            <ModalUsage orchid={orchid} onClose={() => { setOrchid(null) }} />
        </>
    )
}

export default Orchid;