import { useState } from "react";
import { listOfOrchids } from "../../shares/listOfOrchids";
import ModalUsage from "../ModalUsage";
import OrchidItem from "../OrchidItem";
import "./style.css"
import { Grid } from "@mui/material";

function Orchid() {

    const [orchid, setOrchid] = useState(null);

    return (
        <>  
            <Grid container className="container" spacing={2} sx={{marginTop: "30px"}}>
                {listOfOrchids.map((orchid) => (
                    <OrchidItem key={orchid.id} orchid={orchid} setOrchid={setOrchid} />
                ))}
            </Grid>
            <ModalUsage orchid={orchid} onClose={() => { setOrchid(null) }} />
        </>
    )
}

export default Orchid;