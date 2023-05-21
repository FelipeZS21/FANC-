import { useState } from "react" 
import "./Log.css"
import CodeText from "../CodeText/CodeText"
import Button from "../Button/Button"
import { Link , useNavigate} from "react-router-dom"
import axios from 'axios'

const Log = () =>{

    const [name, actualizarName] = useState("")
    const [password, actualizarPass] = useState("")
    const navigateTo = useNavigate()

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3002/LoginUsers',{ 
            LoginPassword: password, 
            LoginUserName: name 
        }).then((response)=> {
            console.log(response)

            if(response.data.message){
                navigateTo('/LoginUsers')
            }
            else{
                navigateTo('/')
            }
        })
    } 

    return <section className="login-service">
        <h1>Bienvenido!</h1>
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