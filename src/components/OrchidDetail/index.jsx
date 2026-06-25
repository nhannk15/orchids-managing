import { useParams } from "react-router-dom";
import "./style.css"
import { doGet } from "../../service/orchidService";
import { useEffect, useState } from "react";
function OrchidDetail() {

    const [orchid, setOrchid] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await doGet(`/${id}`);
            setOrchid(responseData);
        }
        fetchData();
    }, []);

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