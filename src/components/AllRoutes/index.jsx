import { useRoutes } from "react-router-dom";
import { allRoutes } from "../../app/index";

function AllRoutes() {
    
    const elements = useRoutes(allRoutes);
    
    return (
        <>
            {elements}
        </>
    )
}

export default AllRoutes;