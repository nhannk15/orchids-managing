import { listOfOrchirds } from "../../shares/listOfOrchids";
import OrchidItem from "../OrchidItem";
import "./style.css"

function Orchid() {
    return (
        <>  
            <div className="container">
                <div className="orchid--list">
                    {listOfOrchirds.map((orchid) => (
                        <OrchidItem key={orchid.id} orchid={orchid}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Orchid;