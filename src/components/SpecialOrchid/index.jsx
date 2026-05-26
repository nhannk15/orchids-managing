import { listOfOrchids } from "../../shares/listOfOrchids";
import OrchidItem from "../OrchidItem";

function SpecialOrchid() {

    const specialList = listOfOrchids.filter((item) => item.isSpecial === true);
    console.log(specialList);
    return (
        <>
            <div className="container">
                <div className="orchid--list">
                    {specialList.map((orchid) => (
                        <OrchidItem key={orchid.id} orchid={orchid} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SpecialOrchid;