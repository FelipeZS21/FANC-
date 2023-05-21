import { useState } from "react" 
import "./RegAdmins.css"
import CodeText from "../CodeText/CodeText"
import Button from "../Button/Button"
import OptionsList from "../OptionsList/OptionList"
import Location from "../Location/Location"
// import { Link } from "react-router-dom"

const RegAdmins = () =>{

    const [firstName, actualizarfirstName] = useState("")
    const [secondName, actualizarSecondName] = useState("")
    const [firstLastName, actualizarFirstLastName] = useState("")
    const [secondLastName, actualizarSecondLastName] = useState("")
    const [gender, actualizarGender] = useState("")
    const [birthday, actualizarBirthday] = useState("")
    const [Id, actualizarId] = useState("")
    const [email, actualizarEmail] = useState("")
    const [country, actualizarCountry] = useState("")
    const [department, actualizarDepartment] = useState("")
    const [city, actualizarCity] = useState("")
    const [userName, actualizarUserName] = useState("")
    const [password, actualizarPassword] = useState("")
    const [confirmPassword, actualizarConfirmPassword] = useState("")

    const optionsGender = ["Masculino","Femenino","No especificar"]
    const optionsCountry = ["Colombia","Argentina","Chile","Uruguay","Brasil","Ecuador"]
    const optionsDepartment = ["Risaralda"]
    const optionsCity = ["Pereira","Dosquebradas"]

    const sendInfo = (event) => {
        event.preventDefault()
        let datosAEnviar = {
            firstName,
            secondName,
            firstLastName,
            secondLastName,
            gender,
            birthday,
            email, 
            country,
            department,
            city, 
            userName, 
            password, 
            confirmPassword
        }
        console.log(datosAEnviar)
    }

    return <section className="admin-register-service">
        <h2>Nuevo Administrador</h2>
        <form onSubmit={sendInfo}>
            <section className="division-form">
                <div className="subdivision-form">
                    <CodeText
                        title = "Primer nombre"
                        required
                        placeHolder="Nombre"
                        valor={firstName} 
                        actualizarValor={actualizarfirstName}
                    ></CodeText>
                    <CodeText
                        title = "Segundo nombre"
                        placeHolder="Nombre"
                        valor={secondName} 
                        actualizarValor={actualizarSecondName}
                    ></CodeText>
                    <CodeText
                        title = "Primer apellido"
                        required
                        placeHolder="Insert"
                        valor={firstLastName} 
                        actualizarValor={actualizarFirstLastName}
                    ></CodeText>
                    <CodeText
                        title = "Segundo apellido"
                        required
                        placeHolder="Insert"
                        valor={secondLastName} 
                        actualizarValor={actualizarSecondLastName}
                    ></CodeText>
                    <OptionsList 
                        listOptions={optionsGender}
                        name="Genero"
                        placeHolder="Seleccionar genero"
                        valor={gender}
                        actualizarValor={actualizarGender}
                    />
                    </div>
                    <div className="subdivision-form">
                    <CodeText
                        type="date"
                        title = "Fecha de nacimiento"
                        placeHolder="Insert"
                        valor={birthday} 
                        actualizarValor={actualizarBirthday}
                    ></CodeText>
                    <CodeText
                        title = "Documento de identidad"
                        placeHolder="C.C"
                        valor={Id} 
                        actualizarValor={actualizarId}
                    ></CodeText>
                    <CodeText
                        type="email"
                        title = "Correo electronico"
                        placeHolder="Email@extension.com"
                        valor={email} 
                        actualizarValor={actualizarEmail}
                    ></CodeText>
                    <OptionsList 
                        listOptions={optionsCountry}
                        name="Lugar de nacimiento"
                        placeHolder="Pais"
                        valor={country}
                        actualizarValor={actualizarCountry}
                    />
                    <Location 
                        listOptions={optionsDepartment}
                        placeHolder="Departamento"
                        valor={department}
                        actualizarValor={actualizarDepartment}
                    />
                    <Location 
                        listOptions={optionsCity}
                        placeHolder="Ciudad"
                        valor={city}
                        actualizarValor={actualizarCity}
                    />
                    </div>
                    <div className="subdivision-form">
                    <CodeText
                        title = "Nombre de usuario"
                        placeHolder="Ej: userName1234"
                        valor={userName} 
                        actualizarValor={actualizarUserName}
                    ></CodeText>
                    <CodeText
                        type="password"
                        title = "Contraseña"
                        placeHolder="XXXX-XXXX"
                        valor={password} 
                        actualizarValor={actualizarPassword}
                    ></CodeText>
                    <CodeText
                        title = "Confirmar contraseña"
                        placeHolder="XXXX-XXXX"
                        valor={confirmPassword} 
                        actualizarValor={actualizarConfirmPassword}
                    ></CodeText>
                    <div className="button-division">
                        <Button>Registrar</Button>
                    </div>
                </div>
            </section>
        </form>
    </section>
}

export default RegAdmins