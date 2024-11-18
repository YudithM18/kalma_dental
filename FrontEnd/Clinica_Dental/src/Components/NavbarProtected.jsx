// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavbarProtected.css' ; // Asegúrate de crear este archivo con los estilos
import { useNavigate } from "react-router-dom";




const Navbar = () => {
const navigate = useNavigate();


// Función para cerrar sesión
const cargaCierre = () =>{
  localStorage.clear();
  navigate("/Login")
 }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className='btn_Cierre' onClick={cargaCierre}>Cerrar Sesión</button>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/GeneralAdministration" className="navbar-link">Administracion General</Link>
          </li>
          <li className="navbar-item">
            <Link to="/UsersAdministration" className="navbar-link">Administracion De Usuarios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/BlogEditor" className="navbar-link">Editor De Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;