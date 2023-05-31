import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"

const Home = () =>{
    return(
        <div className="principal">
            <main className="container-home-page">
                <Slider></Slider>
                <section className=""></section>
                <section className=""></section>
            </main>
            <div className="bar-nav">
                <Header></Header>
            </div>
        </div>
    )
}

export default Home