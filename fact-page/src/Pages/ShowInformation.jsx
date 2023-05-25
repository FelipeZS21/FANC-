import React, {useState, useEffect} from "react";
import '../assets/css/ShowInformation.css'
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import axios from "axios";
import {Typography, TableBody , Table, TableContainer, TableHead, TableRow, TableCell, Paper, IconButton} from '@mui/material'
import EditOutlined from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const ShowInformation = () =>{

    const [userList, setUserList] = useState([])

    const [books, setBooks] = useState([])
    const [tableBooks, setTableBooks] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowInformation')
            setUserList(data)
            setBooks(data)
            setTableBooks(data)
        };
        // then call it here
        getUsers();
    }, []);
    

    return <div className="principal">
        <HeaderAdmin></HeaderAdmin>
        <div className="container-information">
            <div className="container-information text">
                <h2>Administracion de libros</h2>
            </div>
            <div className="container-input">
                <input 
                    className="form-control inputSearch"
                    value={search} 
                    placeholder="Busca tu libro o autor favorito"
                />
                <button className="btn btn-sourcess">
                    <img src="../../../Public/Imgs/search.png" alt="" />
                </button>
            </div>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Autor</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.ID}</TableCell>
                            <TableCell>{user.TITULO}</TableCell>
                            <TableCell>{user.AUTOR}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <EditOutlined></EditOutlined>
                                </IconButton>
                                <IconButton>
                                    <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    </div>
}

export default ShowInformation