// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavbarProtected.css' ; // Asegúrate de crear este archivo con los estilos
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'



const Navbar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

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
        <button className='btn_Cierre' onClick={cargaCierre}>{t('cierreSesion')}</button>
        <ul className="navbar-menu">
        <li className="dropdown">
          <li className="dropbtn" onClick={toggleDropdown}>
            <Link to="/GeneralAdministration"  className='link'>{t('admin1')}</Link>
          </li>
          {dropdown && (
            <ul className="dropdown-content">
              <li><Link to="/AdminWorkTeam" className='link'>{t('admin2')}</Link></li>
              <li><Link to="/AdminServicios" className='link'>{t('admin3')}</Link></li>
              <li><Link to="/AdminTestimonios" className='link'>{t('admin4')}</Link></li>
            </ul>
          )}
        </li>
          
          <li className="navbar-item">
            <Link to="/UsersAdministration" className="link">{t('admin5')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/BlogEditor" className="link">{t('admin6')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;