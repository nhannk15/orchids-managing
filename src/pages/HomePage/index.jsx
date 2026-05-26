import "../../components/Header"
import "./style.css"
function HomePage() {
    return (
        <>
            <div className="section--one">
                <div className="container">
                    <div className="section--one__content">
                        <h6 className="section--one__smalltitle">
                            INNOVATIVE DIGITAL STRATEGY
                        </h6>
                        <h1 className="section--one__title">
                            ELEVATE YOUR GARDEN THROUGH OUR ORCHIDS
                        </h1>
                        <p className="section--one__desc">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                        </p>
                        <div className="section--one__buttons">
                            <button className="section--one__buttonOne">
                                Explore now
                            </button>
                            <button className="section--one__buttonTwo">
                                View showreel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>
        </>
    )
}

export default HomePage;