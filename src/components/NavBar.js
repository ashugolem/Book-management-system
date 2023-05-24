import { faBookJournalWhills} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
          <div className="sidebar-brand-icon rotate-n-15" style={{fontSize:"2rem"}}>
            <FontAwesomeIcon icon={faBookJournalWhills} />
          </div>
          <div className="sidebar-brand-text mx-3" style={{fontSize:"2rem"}}>
            <span>Bms</span>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-table"></i>
              <span>BMS - Record</span>
            </a>
          </li>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
