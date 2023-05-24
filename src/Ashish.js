import React from 'react';

const Ashish = () => {
  return (
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
          <div className="container-fluid">
            <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
              <i className="fas fa-bars"></i>
            </button>
            <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input className="bg-light form-control border-0 small" type="text" placeholder="Search Books" />
                <button className="btn btn-primary py-0" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </nav>
        <div className="container-fluid" style={{ marginTop: '3rem' }}>
          <h3 className="text-dark mb-1 text-center">BMS - Book Management System on clouds</h3>
        </div>
        <div className="col-md-12 search-table-col" style={{ paddingLeft: '15px', paddingRight: '20px' }}>
          <span className="counter pull-right"></span>
          <div className="table-responsive table table-hover table-bordered results">
            <table className="table table-hover table-bordered">
              <thead className="bill-header cs">
                <tr>
                  <th id="trs-hd-1" className="col-lg-1">SL. No.</th>
                  <th id="trs-hd-2" className="col-lg-2">Area</th>
                  <th id="trs-hd-3" className="col-lg-3">Customer Name</th>
                  <th id="trs-hd-4" className="col-lg-2">Company Name</th>
                  <th id="trs-hd-5" className="col-lg-2">Member Since</th>
                  <th id="trs-hd-6" className="col-lg-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="warning no-result">
                  <td colSpan="12">
                    <i className="fa fa-warning"></i>&nbsp; No Result !!!
                  </td>
                </tr>
                <tr>
                  <td data-aos="slide-right">01</td>
                  <td data-aos="slide-up">India</td>
                  <td data-aos="slide-up">Souvik Kundu</td>
                  <td data-aos="slide-up">Bootstrap Stuido</td>
                  <td data-aos="slide-up">2014</td>
                  <td>
                    <button className="btn btn-success" data-aos="slide-up" style={{ marginLeft: '5px' }} type="submit">
                      <i className="fa fa-check" style={{ fontSize: '15px' }}></i>
                    </button>
                    <button className="btn btn-danger" style={{ marginLeft: '5px' }} type="submit">
                      <i className="fa fa-trash" data-aos="slide-left" style={{ fontSize: '15px' }}></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Ashish;
