import "./style.css"

function OrchidItem({ orchid }) {
    return (
        <>
            <div className="orchid--list__item">
                <div className="orchid--list__image">
                    <img src={orchid.url} alt="" />
                </div>
                <div className="orchid--list__content">
                    <h2 className="orchid--list__name">
                        {orchid.name}
                    </h2>
                    <p className="orchid--list__desc">
                        {orchid.desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default OrchidItem;