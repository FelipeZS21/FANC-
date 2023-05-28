import { useState } from "react";
import "./AddBook.css";
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import axios from "axios";

const AddBook = () => {
  const [book, actualizarBook] = useState("");
  const [tituloLibro, actualizarName] = useState("");
  const [autorLibro, actualizarAuthor] = useState("");
  const [numeroPaginas, actualizarPages] = useState("");
  const [editorial, actualizarEditorial] = useState("");
  const [cantidadLibro, actualizarAmount] = useState("");
  const [añoPublicacion, actualizarYearPublish] = useState("");
  const [generoLibro, actualizarGeneroLibro] = useState("");
  const [estadoLibro, actualizarEstado] = useState("");
  const [idLibro, actualizarId] = useState("");

  const SentBook = () => {
    axios
      .post("http://localhost:3002/BookAdd", {
        IdLibro: idLibro,
        TituloLibro: tituloLibro,
        AuthorLibro: autorLibro,
        NumeroPaginas: numeroPaginas,
        Editorial: editorial,
        CantidadLibro: cantidadLibro,
        AñoPublicacion: añoPublicacion,
        GeneroLibro: generoLibro,
        EstadoLibro: estadoLibro,
      })
      .then(() => {});
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
              title="Editorial"
              required
              placeHolder="Editorial"
              valor={editorial}
              actualizarValor={actualizarEditorial}></CodeText>
            <CodeText
              title="Cantidad de Libros"
              required
              placeHolder="Cantidad"
              valor={cantidadLibro}
              actualizarValor={actualizarAmount}></CodeText>
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
