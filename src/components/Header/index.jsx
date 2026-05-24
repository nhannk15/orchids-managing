import "./style.css"

function Header() {
    return (
        <>  
            <div className="container--fluid">
                <div className="header">
                    <div className="header--main">
                        <div className="header--main__logo">
                            <img src="https://thumbs.dreamstime.com/b/orchid-flower-logo-template-phallocentrism-vector-design-flower-illustration-orchid-vector-flower-isolated-white-background-155456494.jpg?w=768" alt="" />
                        </div>
                        <div className="header--logo__name">
                            <h2 style={{margin: 0}}>Orchid</h2>
                        </div>
                    </div>
                    <div className="header--menu">
                        <ul className="header--menu__list">
                            <li className="header--menu__item">Home</li>
                            <li className="header--menu__item">About</li>
                            <li className="header--menu__item">Contact us</li>
                            <li className="header--menu__item">Home</li>
                        </ul>
                    </div>
                    <div className="header--info">
                        <div className="header--info__logo">
                            <img src="https://i.pinimg.com/736x/28/16/5a/28165aaca2ee560b4a6b760765efe976.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;