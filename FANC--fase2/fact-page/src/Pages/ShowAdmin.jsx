import React, { useState, useEffect } from "react";
import "../assets/css/ShowAdmin.css";
import HeaderRoot from "../components/HeaderRoot/HeaderRoot";
import axios from "axios";
import {
  Typography,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ShowAdmin = () => {
  const [userList, setUserList] = useState([]);

  const [users, setUsers] = useState([]);
  const [tableBooks, setTableBooks] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("http://localhost:3002/ShowAdmin");
      setUserList(data);
    };
    // then call it here
    getUsers();
  }, []);

  // const peticionGet=async()=>{
  //     await axios.get("http://localhost:3002/ShowInformation")
  //     .then(response=>{
  //         setBooks(response.data);
  //         setTableBooks(response.data);
  //     }).catch(error=>{
  //         console.log(error);
  //     })
  // }

  const handleChange = (event) => {
    setSearch(event.target.value);
    filter("Busqueda: " + event.target.value);
  };

  // const filter = (TermOfSearch) =>{
  //     var resultSearch = tableBooks.filter((element)=>{
  //         if(element.TITULO.toString().toLowerCase().includes(TermOfSearch.toLowerCase())||element.AUTOR.toString().toLowerCase().includes(TermOfSearch.toLowerCase())){
  //             return element;
  //         }
  //     })
  //     setBooks(resultSearch);
  // }

  // useEffect(()=>{
  //     peticionGet();
  //     },[])

  return (
    <div className="principal">
      <HeaderRoot></HeaderRoot>
      <div className="container-information">
        <div className="container-information text">
          <h2>Control de Usuarios Administradores</h2>
        </div>
        <div className="container-input">
          <input
            className="form-control inputSearch"
            value={search}
            placeholder="Buscar Administrador"
            onChange={handleChange}
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
                <TableCell>Nombre de Usuario</TableCell>
                <TableCell>Correo Electronico</TableCell>
                <TableCell>Contraseña</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.ID}</TableCell>
                  <TableCell>{user.usuario}</TableCell>
                  <TableCell>{user.correoElectronico}</TableCell>
                  <TableCell>{user.contraseña}</TableCell>
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
  );
};

export default ShowAdmin;
