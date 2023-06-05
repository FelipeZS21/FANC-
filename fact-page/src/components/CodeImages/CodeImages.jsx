import { useState } from "react"
import "./CodeImages.css"

const CodeImages = (props) => {
    const placeHolderMod = `${props.placeHolder}...`

    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value)
    } 

    return <div className="campo-texto">
        <label htmlFor="">{props.title}</label>
        <input 
            className={props.name}
            placeholder={placeHolderMod} 
            required = {props.required}
            type="file"
            value = {props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CodeImages
