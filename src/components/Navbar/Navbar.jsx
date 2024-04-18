import React from 'react';

export default function Navbar({ toggleLanguage, isEnglish }) {
  return (
    <nav className='navbar bg-transparent navbar-expand-lg navbar-dark bg-body-tertiary fixed-top bg-transparent'>
      <div className="container">
        <a className="navbar-brand fs-4" href="#"><b>FRANCOJUSTOWEB</b></a>
        
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FRANCOJUSTOWEB</h5>
            <button type="button" className="btn-close btn-close-white  shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="languageSwitch"
            onChange={toggleLanguage}
            checked={!isEnglish}
          />
          <label className="form-check-label text-white" htmlFor="languageSwitch">
  {isEnglish ? 'English' : 'Español'}
</label>
        </div>
          </div>
        </div>
      </div>
    </nav>
  );
}