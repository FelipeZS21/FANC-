import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"
import Information from "../components/Information/information"

const Home = () =>{
    return(
        <div className="principal">
            <main className="container-home-page">
                <div className="slider-section">
                    <Slider></Slider>
                </div>
                <div className="information-section">
                    <Information></Information>
                </div>
            </main>
            <div className="bar-nav">
                <Header></Header>
            </div>
        </div>
    )
}

export default Home