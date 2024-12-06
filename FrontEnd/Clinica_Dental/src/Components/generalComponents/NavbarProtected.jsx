// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavbarProtected.css' ; // Asegúrate de crear este archivo con los estilos
import { useNavigate } from "react-router-dom";




const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

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
        <li className="dropdown">
          <li className="dropbtn" onClick={toggleDropdown}>
            <Link to="/GeneralAdministration"  className='link'>GeneralAdministration</Link>
          </li>
          {dropdown && (
            <ul className="dropdown-content">
              <li><Link to="/AdminWorkTeam" className='link'>Work Services</Link></li>
              <li><Link to="/AdminServicios" className='link'>Servicios</Link></li>
              <li><Link to="/AdminTestimonios" className='link'>Testimonios</Link></li>
            </ul>
          )}
        </li>
          
          <li className="navbar-item">
            <Link to="/UsersAdministration" className="link">Administracion De Usuarios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/BlogEditor" className="link">Editor De Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;