import "../assets/css/UsersReg.css";
import RegUsuarios from "../components/RegUsuarios/RegUsuarios";
import Header from "../components/Header/Header";

const UsersReg = () => {
  return (
    <div className="principal-users-register">
      <Header></Header>
      <section className="login-container-user-register">
        <RegUsuarios></RegUsuarios>
      </section>
    </div>
    )
};

export default UsersReg;
