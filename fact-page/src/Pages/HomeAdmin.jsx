import '../assets/css/Home.css'
import Slider from "../components/Slider/Slider"
import Information from "../components/Information/information"
import { Link } from "react-router-dom"
import Categorias from "../components/Categorias/Categorias"
import Footer from "../components/Footer/Footer"
import '../assets/css/HomeRoot.css'
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin"
import ShowBooksHome from '../components/ShowBooksHome/ShowBooksHome'


const HomeAdmin = () =>{
    return(
        <div className="principal">
            <main className="container-home-page">
                <div className="slider-section">
                    <Slider></Slider>
                </div>
                <div className="categories-section" id="Categorias"> 
                    <Categorias></Categorias>
                </div>
                <div className="showBooks-section" id="show-books-section"> 
                    <ShowBooksHome></ShowBooksHome>
                </div>
                <div className="information-section" id="About-us"> 
                    <Information></Information>
                </div>
                <div className="footer-section"> 
                    <Footer></Footer>
                </div>
            </main>
            <div className="bar-nav">
                <HeaderAdmin></HeaderAdmin>
            </div>
        </div>
    )
}

export default HomeAdmin