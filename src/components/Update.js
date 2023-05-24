import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
      localStorage.getItem("id","title","author","isbn","year");
      setId(localStorage.getItem("id"));
      setTitle(localStorage.getItem("title"));
      setAuthor(localStorage.getItem("author"));
      setIsbn(localStorage.getItem("isbn"));
      setYear(localStorage.getItem("year"));
    }, [])
    
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://646c629d7b42c06c3b2b10ae.mockapi.io/book-manager/${id}`,{
            title: title,
            author: author,
            isbn: isbn,
            year: year
        }).then(()=>{
            navigate("/");
        });

    }

  return (
    <>
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
              <h2 className="text-center">Update</h2>
              <form action="">
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                    value={title}
                  />
                  <span>Title</span>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                    value={author}
                  />
                  <span>Author</span>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    onChange={(e) => {
                    setIsbn(e.target.value);
                  }}
                    value={isbn}
                  />
                  <span>ISBN</span>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    onChange={(e) => {
                    setYear(e.target.value);
                  }}
                    value={year}
                  />
                  <span>Published Year</span>
                  <i className="fas fa-user-circle"></i>
                </div>

                <div className="inputBx">
                  <input type="submit" onClick={handleUpdate} value="Update" />
                  <Link to="/">
                    <input type="submit" value="Back" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Update;
