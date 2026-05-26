import { useState } from "react";
import { listOfOrchids } from "../../shares/listOfOrchids";
import ModalUsage from "../ModalUsage";
import OrchidItem from "../OrchidItem";
import "./style.css"

function Orchid() {

    const [orchid, setOrchid] = useState(null);

    return (
        <>
            <div className="container">
                <div className="orchid--list">
                    {listOfOrchids.map((orchid) => (
                        <OrchidItem key={orchid.id} orchid={orchid} setOrchid={setOrchid}/>
                    ))}
                </div>
            </div>
            <ModalUsage orchid={orchid} onClose={() => {setOrchid(null)}}/>
        </>
    )
}

export default Orchid;