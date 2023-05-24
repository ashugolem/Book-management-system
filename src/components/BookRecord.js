import React, { useEffect, useState } from "react";
import BookData from "./BookData";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const BookRecord = () => {
  const [data, setData] = useState([]);

  const [word_typing] = useTypewriter({
    words: ['Create', 'Read','Update', 'Delete'],
    loop: {},
    autoStart: true,
    typeSpeed: 150,
  });
  function getData() {


    axios
      .get("https://646c629d7b42c06c3b2b10ae.mockapi.io/book-manager")
      .then((res) => {
        console.log(res)
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <NavBar/>
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <div className="container-fluid" style={{ marginTop: "3rem" }}>
          <h2 className="text-dark mb-1 text-center" style={{letterSpacing:"3px"}}>
            CRUD - <span style={{color:"blue",fontWeight:"800", textDecoration:"underline", textDecorationColor:"yellow",letterSpacing:"1px"}}>
                      {word_typing}
                    </span><Cursor/> Operation
            
          </h2>
        </div>
        <div
          className="col-md-12 search-table-col"
          style={{ paddingLeft: "15px", paddingRight: "20px" }}
        >
          <span className="counter pull-right"></span>
          <div className="table-responsive table table-hover table-bordered results">
            <table className="table table-hover table-bordered">
              <thead className="bill-header cs">
                <tr style={{fontSize:"1rem"}}>
                  <th id="trs-hd-1" className="col-lg-1">
                    SL. No.
                  </th>
                  <th id="trs-hd-2" className="col-lg-2">
                    Title
                  </th>
                  <th id="trs-hd-3" className="col-lg-3">
                    Author
                  </th>
                  <th id="trs-hd-4" className="col-lg-2">
                    ISBN
                  </th>
                  <th id="trs-hd-5" className="col-lg-2">
                    Published in
                  </th>
                  <th id="trs-hd-6" className="col-lg-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="warning no-result">
                  <td colSpan="12">
                    <i className="fa fa-warning"></i>&nbsp; No Result !!!
                  </td>
                </tr>
                {
                  data.map((eachData)=>{
                    return (
                      <BookData getData={getData} id={eachData.id} title={eachData.title} author={eachData.author} isbn={eachData.isbn} year={eachData.year} />
                    );
                  })
                }
                
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <Link to={"/entry"} style={{background:"#4e73df", borderRadius:"10px"}}>
                <button className="btn rounded-circle border-0" style={{padding:"0px 20px", color:"white", fontSize:"1.5rem"}} type="button">+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
    </>
  );
};

export default BookRecord;
