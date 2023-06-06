import './ShowAdmins.css'
import React, {useState, useEffect} from "react";
import HeaderRoot from '../HeaderRoot/HeaderRoot';
import axios from "axios";
import {TableBody , Table, TableContainer, TableHead, TableRow, TableCell, Paper, IconButton} from '@mui/material'
import EditOutlined from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import Button from '../Button/Button'; 


const ShowAdmins = () =>{

    const [userList, setUserList] = useState([])
    const space = " "


    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowAdmins')
            setUserList(data)
        };
        // then call it here
        getUsers();
    }, []);


    return <div className="principal-info-admins">
        <div className="container-information-admins">
            <div className="container-information text">
                <h2>Administradores Registrados</h2>
            </div>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Contraseña</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.ID}</TableCell>
                            <TableCell>
                                <p>
                                    {user.primerNombre}{space}
                                    {user.segundoNombre}{space}
                                    {user.primerApellido}{space}
                                    {user.segundoApellido}{space}
                                </p>
                            </TableCell>
                            <TableCell>{user.usuario}</TableCell>
                            <TableCell>{user.contraseña}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    </div>
}

export default ShowAdmins