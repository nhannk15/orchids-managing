import { useParams } from "react-router-dom";
import { listOfOrchids } from "../../shares/listOfOrchids"
import "./style.css"
function OrchidDetail() {

    const { id } = useParams();
    const orchid = listOfOrchids.find((item) => item.id === id);
    console.log(orchid);
    return (
        <>
            <div className="container">
                <div className="orchid--detail">
                    <div className="orchid--detail__image">
                        <img src={orchid.image} alt="" />
                    </div>
                    <div className="orchid--detail__content">
                        <h2 className="orchid--detail__name">
                            {orchid.name}
                        </h2>
                        <p className="orchid--detail__desc">
                            {orchid.desc}
                        </p>
                        {orchid.isNatural &&
                            <p className="orchid--detail__natural">
                                Natural
                            </p>}
                        {orchid.isSpecial &&
                            <p className="orchid--detail__special">
                                Special
                            </p>}
                        <p className="orchid--detail__like">
                            {orchid.numberOfLike}
                        </p>
                        <p className="orchid--detail__origin">
                            {orchid.origin}
                        </p>
                        <p className="orchid--detail__rating">
                            {orchid.rating}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrchidDetail;