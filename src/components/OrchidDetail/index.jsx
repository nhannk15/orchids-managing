import { useParams } from "react-router-dom";
import "./style.scss"
import { doGet } from "../../service/orchidService";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from "@mui/material/Typography";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SpaIcon from '@mui/icons-material/Spa';
import StarsIcon from '@mui/icons-material/Stars';

function OrchidDetail() {

    const [orchid, setOrchid] = useState({});
    const [liked, setLiked] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await doGet(`/${id}`);
            setOrchid(responseData);
        }
        fetchData();
    }, []);

    const handleChangeLiked = () => {
        setLiked(!liked);
    }

    const handleChangeAddedToCart = () => {
        setAddedToCart(!addedToCart);
    }

    return (
        <>
            <div className="container">
                <div className="orchid--detail">
                    <div className="orchid--detail__image">
                        <img src={orchid.image} alt="" />
                    </div>
                    <div className="orchid--detail__content">
                        <h4 className="orchid--detail__orchid">
                            Hoa Lan
                        </h4>
                        <h2 className="orchid--detail__name">
                            {orchid.name}
                        </h2>
                        <Rating name="half-rating-read" precision={0.5} readOnly value={Number(orchid.rating)}/>
                        <p className="orchid--detail__desc">
                            {orchid.desc}
                        </p>
                        <Divider sx={{ marginBottom: "10px", marginTop: "10px" }} />
                        <div className="orchid--detail__row">
                            <div className="orchid--detail__col">
                                <LocationOnIcon />
                                <p>Origin</p>
                            </div>
                            <p>{orchid.origin}</p>
                        </div>

                        <div className="orchid--detail__row">
                            <div className="orchid--detail__col">
                                <ColorLensIcon />
                                <p>Color</p>
                            </div>
                            <CircleIcon sx={{ color: orchid.color }} />
                            <p style={{ marginLeft: 7 }}>{orchid.color}</p>
                        </div>

                        <div className="orchid--detail__row">
                            <div className="orchid--detail__col">
                                <FavoriteBorderIcon />
                                <p>Number of likes</p>
                            </div>
                            <p>{orchid.numberOfLike}</p>
                        </div>

                        {orchid.isNatural && (
                            <div className="orchid--detail__row">
                                <div className="orchid--detail__col">
                                    <SpaIcon />
                                    <p>Natural</p>
                                </div>
                            </div>
                        )}

                        {orchid.isSpecial && (
                            <div className="orchid--detail__row">
                                <div className="orchid--detail__col">
                                    <StarsIcon />
                                    <p>Special</p>
                                </div>
                            </div>
                        )}

                        <div className="orchid--detail__buttons" >
                            <Button
                                variant={liked ? "contained" : "outlined"}
                                startIcon={<FavoriteBorderIcon />}
                                color="error"
                                sx={{ width: "35%" }}
                                onClick={handleChangeLiked}
                            >
                                {liked ? "LIKED" : "LIKE"}
                            </Button>

                            <Button
                                variant={addedToCart ? "contained" : "outlined"}
                                startIcon={<AddShoppingCartIcon />}
                                color="primary"
                                sx={{ width: "60%" }}
                                onClick={handleChangeAddedToCart}
                            >
                                {addedToCart ? "ADDED" : "ADD TO CART"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrchidDetail;