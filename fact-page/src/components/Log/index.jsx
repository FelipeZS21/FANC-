import { useState } from "react" 
import "./Log.css"
import CodeText from "../CodeText/CodeText"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import axios from 'axios'

const Log = () =>{

    const [name, actualizarName] = useState("")
    const [password, actualizarPass] = useState("")

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3002/LoginUsers',{ 
            LoginPassword: password, 
            LoginUserName: name 
        }).then((response)=> {
            console.log(response)
        })
    } 

    return <section className="login-service">
        <h2>Iniciar sesion</h2>
        <form onSubmit={loginUser}>
            <CodeText 
                title = "Nombre de usuario"
                required
                placeHolder="Usuario"
                valor={name} 
                actualizarValor={actualizarName}
            ></CodeText>
            <CodeText
                type="password"
                title = "Contraseña"
                required
                placeHolder="Contraseña"
                valor={password} 
                actualizarValor={actualizarPass}
            ></CodeText>
            <div className="button-division">
                <div className="help-container">
                    <Link to="/"><p> Has olvidado tu contraseña?</p></Link>
                    <Link to="/"><p> Has olvidado tu nombre de usuario?</p></Link>
                </div>
                <Button>Iniciar sesion</Button>
            </div>
        </form>
    </section>
}

export default Log