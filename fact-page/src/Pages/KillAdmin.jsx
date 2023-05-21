import CodeText from "../components/CodeText/CodeText"
import "../assets/css/KillAdmin.css"
import { useState } from "react" 
import Button from "../components/Button/Button"

const KillAdmin = () =>{

    const [user, actualizarUser] = useState("")
    const [password, actualizarPassword] = useState("")
    const [confirmPassword, actualizarConfirmPassword] = useState("")

    const sendInfo = (event) => {
        event.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            user, password, confirmPassword
        }
        console.log(datosAEnviar)
    }

    return <section className="kill-admin-container">
        <h2>Eliminar administrador</h2>
        <p>
            Este usuario sera eliminado de la base de datos FANC, por favor
            ingrese los siguientes campos y confirme de que los datos sean
            correctos.
        </p>
        <form onSubmit={sendInfo}>
        <CodeText 
            title = "Nombre de usuario"
            required
            placeHolder="Usuario"
            valor={user} 
            actualizarValor={actualizarUser}
        ></CodeText>
        <CodeText 
            type ="password"
            title = "contraseña"
            required
            placeHolder="********"
            valor={password} 
            actualizarValor={actualizarPassword}
        ></CodeText>
        <CodeText 
            type ="password"
            title = "confirmar contraseña"
            required
            placeHolder="********"
            valor={confirmPassword} 
            actualizarValor={actualizarConfirmPassword}
        ></CodeText>
        <div className="button-division">
            <Button>Eliminar</Button>
        </div>
        </form>
    </section>
}

export default KillAdmin