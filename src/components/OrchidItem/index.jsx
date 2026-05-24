import { useState } from "react";
import "./style.css"

function OrchidItem({ orchid, setOrchid }) {

    const [view, setView] = useState(true);
    return (
        <>
            <div className="orchid--list__item">
                <div className="orchid--list__image">
                    <img src={orchid.image} alt="" />
                </div>
                <div className="orchid--list__content">
                    <h2 className="orchid--list__name">
                        {orchid.name}
                    </h2>
                    <p className={`orchid--list__desc ${view ? "hidden" : ""}`}>
                        {orchid.desc}
                    </p>
                    <button onClick={() => {setOrchid(orchid)}}>
                        {view == true ? "View Details": "Close details"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrchidItem;