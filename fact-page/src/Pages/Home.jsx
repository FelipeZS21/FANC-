import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"
import Information from "../components/Information/information"
import { Link } from "react-router-dom"
import Categorias from "../components/Categorias/Categorias"
import Footer from "../components/Footer/Footer"

const Home = () =>{
    return(
        <div className="principal">
            <main className="container-home-page">
                <div className="slider-section">
                    <Slider></Slider>
                </div>
                <div className="categories-section" id="Categorias"> 
                    <Categorias></Categorias>
                </div>
                <div className="information-section" id="About-us"> 
                    <Information></Information>
                </div>
                <div className="footer-section"> 
                    <Footer></Footer>
                </div>
            </main>
            <div className="bar-nav">
                <Header></Header>
            </div>
        </div>
    )
}

export default Home