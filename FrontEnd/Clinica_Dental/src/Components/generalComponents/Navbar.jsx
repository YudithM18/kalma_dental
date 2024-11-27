// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/FormNavbar.css' ; // Asegúrate de crear este archivo con los estilos


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
      ¡¡BIENVENIDOS!!
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/WorkTeams" className="navbar-link">Work Team</Link>
          </li>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Blog" className="navbar-link">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/TerminosCondiciones" className="navbar-link">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;