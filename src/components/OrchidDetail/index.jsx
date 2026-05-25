import { useParams } from "react-router-dom";

function OrchidDetail() {

    const { id } = useParams();

    return (
        <>
            {id}
        </>
    )
}

export default OrchidDetail;