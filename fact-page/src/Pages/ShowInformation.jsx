import React, {useState, useEffect} from "react";
import '../assets/css/ShowInformation.css'
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import axios from "axios";
import {Typography, TableBody , Table, TableContainer, TableHead, TableRow, TableCell, Paper, IconButton} from '@mui/material'
import EditOutlined from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ShowInformation = () =>{

    const [userList, setUserList] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowInformation')
            setUserList(data)
        };
        // then call it here
        getUsers();
    }, []);
    

    return <div className="principal">
        <HeaderAdmin></HeaderAdmin>
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
}

export default ShowInformation