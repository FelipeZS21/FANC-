import { useState } from "react";
import "./AddBook.css";
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import axios from "axios";

const AddBook = () => {
  const [tituloLibro, actualizarName] = useState("");
  const [autorLibro, actualizarAuthor] = useState("");
  const [numeroPaginas, actualizarPages] = useState("");
  const [precio, actualizarPrecio] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [añoPublicacion, actualizarYearPublish] = useState("");
  const [generoLibro, actualizarGeneroLibro] = useState("");
  const [estadoLibro, actualizarEstado] = useState("");
  const [idLibro, actualizarId] = useState("");

  const SentBook = () => {
    const img = "../../Public/Imgs/" + imagen
    console.log(img)
    axios.post('http://localhost:3002/AddBook', {
        Id: idLibro,
        Titulo: tituloLibro,
        Autor: autorLibro,
        Publicacion: añoPublicacion,
        Genero: generoLibro,
        Npaginas: numeroPaginas,
        Estado: estadoLibro,
        Precio: precio,
        Imagen: img
      })
      
      navigateTo("./HomeAdmin");
  };

  return (
    <section className="admin-register-service">
      <h2>Nuevo Libro</h2>
      <form onSubmit={SentBook}>
        <section className="division-form">
          <div className="subdivision-form">
            <CodeText
              title="ID del Libro"
              required
              placeHolder=""
              valor={idLibro}
              actualizarValor={actualizarId}></CodeText>
            <CodeText
              title="Titulo del Libro"
              required
              placeHolder="Titulo"
              valor={tituloLibro}
              actualizarValor={actualizarName}></CodeText>
            <CodeText
              title="Autor del Libro"
              required
              placeHolder="Autor"
              valor={autorLibro}
              actualizarValor={actualizarAuthor}></CodeText>
            <CodeText
              title="Numero de Paginas"
              required
              placeHolder="Numero de Paginas"
              valor={numeroPaginas}
              actualizarValor={actualizarPages}></CodeText>
            <CodeText
              title="Precio"
              required
              placeHolder="Precio"
              valor={precio}
              actualizarValor={actualizarPrecio}></CodeText>
            <CodeText
              title="Imagen"
              required
              placeHolder="Imagen"
              valor={imagen}
              actualizarValor={actualizarImagen}></CodeText>
            <CodeText
              type="date"
              title="Año de Publicacion"
              required
              valor={añoPublicacion}
              actualizarValor={actualizarYearPublish}></CodeText>
            <CodeText
              title="Genero del Libro"
              required
              placeHolder="Genero"
              valor={generoLibro}
              actualizarValor={actualizarGeneroLibro}></CodeText>
            <CodeText
              title="Estado del Libro"
              required
              placeHolder="Estado"
              valor={estadoLibro}
              actualizarValor={actualizarEstado}></CodeText>
            <div className="button-division">
              <Button>Registrar</Button>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
};

export default AddBook;