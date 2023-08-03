import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-white pt-2">
        <div className="container-fluid shadow-sm">
          <NavLink to="/" className="nav-link">
            <p id="title" className="navbar-brand ms-5">
            Kalori Hesabı
          </p>
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              <NavLink to="/gunlukkaloriihtiyaci"  style={{ textDecoration: 'none' }}>
                <p className="nav-link">Günlük Kalori İhtiyacı Hesapla</p>
              </NavLink>
              
              <NavLink to="/aldigimkaloriler" style={{ textDecoration: 'none' }}>
                <p className="nav-link">Aldığım Kaloriler</p>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
