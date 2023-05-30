import Location from "../Location/Location"
import OptionsList from "../OptionsList/OptionList";
// import { Link } from "react-router-dom"
import { useState } from "react";
import "./RegUsuarios.css";
import { useNavigate } from "react-router-dom"
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import axios from 'axios'

const RegUsuarios = () =>{

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
    const [countryHome, actualizarCountryHome] = useState("")
    const [departmentHome, actualizarDepartmentHome] = useState("")
    const [cityHome, actualizarCityHome] = useState("")

    const optionsGender = ["Masculino","Femenino","No especificar"]
    const optionsCountry = ["Colombia","Argentina","Chile","Uruguay","Brasil","Ecuador"]
    const optionsDepartment = ["Risaralda"]
    const optionsCity = ["Pereira","Dosquebradas"]
    const navigateTo = useNavigate()

    const createUser = () =>{
        axios.post('http://localhost:3002/UsersReg',{
            FirstName: firstName,
            SecondName: secondName,
            FirstLastName: firstLastName,
            SecondLastName: secondLastName, 
            Country: country, 
            ID:Id,
            Birthday: birthday, 
            Email: email,           
            CountryHome: countryHome, 
            Password: password, 
            UserName: userName, 
            IdCargo: '1'
        })
        
        navigateTo('/')
    } 

    return <section className="user-register-service">
        <h2>Nuevo Usuario</h2>
        <form onSubmit={createUser}>
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
                    <OptionsList 
                        listOptions={optionsCountry}
                        name="Lugar de Residencia "
                        placeHolder="Pais"
                        valor={countryHome}
                        actualizarValor={actualizarCountryHome}
                    />
                    <Location 
                        listOptions={optionsDepartment}
                        placeHolder="Departamento"
                        valor={departmentHome}
                        actualizarValor={actualizarDepartmentHome}
                    />
                    <Location 
                        listOptions={optionsCity}
                        placeHolder="Ciudad"
                        valor={cityHome}
                        actualizarValor={actualizarCityHome}
                    />
                    <div className="button-division">
                        <Button>Registrar</Button>
                    </div>
                </div>
            </section>
        </form>
    </section>
}

export default RegUsuarios
