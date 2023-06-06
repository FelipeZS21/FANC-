import '../assets/css/CatalogoHome.css'
import React, {useState, useEffect} from "react";
import axios from "axios";
import Catalogo from '../components/Catalogo/Catalogo';
import Header from '../components/Header/Header';


const CatalogoHome = () =>{

    return(
        <div className="principal-box-Catalogo">
            <div className="container-catalogo-home">
                {/* <div className="container-catalogo-home-visual"> */}
                    <Catalogo></Catalogo>
                {/* </div> */}
                <div className="container-selection-catalogo">
                    <h2>Ordenar por</h2>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="container-header-home">
                <Header></Header>
            </div>
        </div>  
    )
}

export default CatalogoHome