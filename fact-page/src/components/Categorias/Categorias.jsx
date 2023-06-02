import './Categorias.css'
import axios from "axios";
import React, {useState, useEffect} from "react";

const Categorias = () =>{

    const [userList, setUserList] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowInformation')
            setUserList(data)
        };
            // then call it here
        getUsers();
    }, []);


    return(
        <div className="principal">
            <div className="box-text-category">
                <h2>Categorias preferidas </h2>
            </div>
            <div className="principal-container-category">
                <div className="box-container-category box1">
                    <img src="../../Public/Imgs/aventura.png" alt="" />
                    <h2>Aventura</h2>
                </div>
                <div className="box-container-category box2">
                    <img src="../../Public/Imgs/accion.png" alt="" />
                    <h2>Accion</h2>
                </div>
                <div className="box-container-category box3">
                    <img src="../../Public/Imgs/ficcion.png" alt="" />
                    <h2>Ficcion</h2>
                </div>
                <div className="box-container-category box4">
                    <img src="../../Public/Imgs/terror.png" alt="" />
                    <h2>Terror</h2>
                </div>
                <div className="box-container-category box5">
                    <img src="../../Public/Imgs/romance.png" alt="" />
                    <h2>Romance</h2>
                </div>
            </div>
        </div>
    )
}

export default Categorias