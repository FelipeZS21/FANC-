import "../assets/css/AddBook.css";
import AddBook from "../components/AddBook/AddBook";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin"

const BookAdd = () => {
  return (
    <section className="principal-book-add">
      <div className="header-section">
        <HeaderAdmin></HeaderAdmin>
      </div>
      <div className="add-book-section">
      <AddBook></AddBook>
      </div>
    </section>
  );
};

export default BookAdd;
