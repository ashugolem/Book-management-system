import React from 'react'

export default function TopSearch() {
  return (
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
  )
}
