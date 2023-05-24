import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'
import Header from "../components/Header/Header"

const Home = () =>{
    return(
        <main className="container-home-page">
            <Header></Header>
            <div className="home-page-principal">
                <img src={image} alt="working-in-that" />
                <p>
                    Estamos trabajando para crear una mejor pagina, nos vemos 
                    pronto!!
                </p>
            </div>
        </main>
    )
}

export default Home