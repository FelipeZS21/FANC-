import image from "../../public/Imgs/Trabajando-en-ello.png";
import "../assets/css/HomeRoot.css";
import HeaderUser from "../components/HeaderUser/HeaderUser";

const HomeUser = () => {
  return (
    <div className="principal">
      <HeaderUser></HeaderUser>
      <main className="container-home-page">
        <img src={image} alt="working-in-that" />
        <p>Bienvenido Usuario</p>
      </main>
    </div>
  );
};

export default HomeUser;
