import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataEntryForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    if (!title || !author || !isbn || !year) {
        alert("Please fill in all fields");
        return;
    }
    e.preventDefault();
    axios
      .post("https://646c629d7b42c06c3b2b10ae.mockapi.io/book-manager", {
        title: title,
        author: author,
        isbn: isbn,
        year: year,
      })
      .then(() => {
        history("/");
      });
  };
  return (
    <section>
      <div className="box">
        <div className="square" style={{ "--i": 0 }}></div>
        <div className="square" style={{ "--i": 1 }}></div>
        <div className="square" style={{ "--i": 2 }}></div>
        <div className="square" style={{ "--i": 3 }}></div>
        <div className="square" style={{ "--i": 4 }}></div>
        <div className="square" style={{ "--i": 5 }}></div>

        <div className="container d-flex justify-content-center">
          <div className="form ">
            <h2 className="text-center">Enter Data</h2>
            <form action="">
              <div className="inputBx">
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
                <span>Title</span>
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="inputBx">
                <input
                  type="text"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  required
                />
                <span>Author</span>
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="inputBx">
                <input
                  type="text"
                  onChange={(e) => {
                    setIsbn(e.target.value);
                  }}
                  required
                />
                <span>ISBN</span>
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="inputBx">
                <input
                  type="text"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  required
                />
                <span>Published Year</span>
                <i className="fas fa-user-circle"></i>
              </div>

              <div className="inputBx .btn-primary">
                <input type="submit" onClick={handleSubmit} value="Done" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEntryForm;
