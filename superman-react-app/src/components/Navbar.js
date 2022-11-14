import React from 'react';
import logo from '../assets/logos/logo_blanc.png';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img width="10%" src={logo} alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="home" className="nav-link" aria-current="page">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="eshop" className="nav-link">ESHOP</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="compte" className="nav-link">MON COMPTE</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;