import "./style.css"
import { useTheme } from "../../context/ThemeContext";

function Header() {

    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <div className="container--fluid">
                <div className="header">
                    <div className="header--main">
                        <div className="header--main__logo">
                            <img src="https://thumbs.dreamstime.com/b/orchid-flower-logo-template-phallocentrism-vector-design-flower-illustration-orchid-vector-flower-isolated-white-background-155456494.jpg?w=768" alt="" />
                        </div>
                        <div className="header--logo__name">
                            <h2 style={{ margin: 0 }}>Orchid</h2>
                        </div>
                    </div>
                    <div className="header--menu">
                        <ul className="header--menu__list">
                            <li className="header--menu__item">
                                <a href="/home">Home</a>
                            </li>
                            <li className="header--menu__item">
                                <a href="/about">About</a>
                            </li>
                            <li className="header--menu__item">
                                <a href="contact">Contact</a>
                            </li>
                            <li className="header--menu__item">
                                <a href="/orchid">Orchid</a>
                            </li>
                            <li className="header--menu__item"><button onClick={toggleTheme}>Change theme</button></li>
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