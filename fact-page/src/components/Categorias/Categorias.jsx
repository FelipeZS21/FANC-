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
        <div className="principal-container-category">
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
            <div className="box-container-category">
                <img src="../../Public/Imgs/psicologia.png" alt="" />
                <h2>Psicologia</h2>
            </div>
        </div>
    )
}

export default Categorias