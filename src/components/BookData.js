import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function BookData(props) {
  const setLocalStorage = (id, title, author, isbn, year) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("author", author);
    localStorage.setItem("isbn", isbn);
    localStorage.setItem("year", year);
  };
  function handleDelete(id) {
    if (window.confirm("Are you sure") === true) {
      axios
        .delete(
          `https://646c629d7b42c06c3b2b10ae.mockapi.io/book-manager/${id}`
        )
        .then(() => {
          props.getData();
        });
    }
  }
  return (
    <tr className="text-center">
      <td data-aos="slide-right">{props.id}</td>
      <td data-aos="slide-up">{props.title}</td>
      <td data-aos="slide-up">{props.author}</td>
      <td data-aos="slide-up">{props.isbn}</td>
      <td data-aos="slide-left">{props.year}</td>
      <td>
        <Link to="/update">
          <button
            className="btn btn-primary"
            data-aos="slide-up"
            style={{ marginLeft: "5px",padding:"2px 15px", marginTop:"3px" }}
            onClick={() =>
              setLocalStorage(
                props.id,
                props.title,
                props.author,
                props.isbn,
                props.year
              )
            }
            type="submit"
          >
            Edit
          </button>
        </Link>
        <button
          className="btn btn-danger text-center"
          onClick={() => handleDelete(props.id)}
          style={{ marginLeft: "5px", padding:"2px 5px", marginTop:"3px" }}
          type="submit"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
