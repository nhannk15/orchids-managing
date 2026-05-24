import "./style.css"
const image = "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*";
function ModalUsage( { orchid, onClose }) {
    
    if (orchid == null) return null;
    
    return (
        <>
            <div className="modal">
                <div className="modal--content">
                    <div className="modal--content__image">
                        <img src={orchid.image} alt="" />
                    </div>
                    <div className="modal--content__details">
                        <h2 className="modal--content__name">
                            {orchid.name}
                        </h2>
                        <p className="modal--content__desc">
                            {orchid.desc}
                        </p>
                        <p className="modal--content__like">
                            {orchid.numberOfLike}
                        </p>
                        <p className="modal--content__origin">
                            {orchid.origin}
                        </p>
                    </div>
                </div>
                <button className="modal--button" onClick={onClose}>
                    x
                </button>
            </div>
        </>
    )
}

export default ModalUsage;