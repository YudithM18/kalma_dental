// src/components/Navbar.js
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos el hook useTranslation
import '../../Styles/FormNavbar.css'; // Asegúrate de crear este archivo con los estilos
import '../../i18n'

const Navbar = () => {

  useEffect(() => {
    // Asegurarse de que los elementos están disponibles antes de añadir el event listener
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle && navbarMenu) {
      navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
      });
    }

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      if (navbarToggle && navbarMenu) {
        navbarToggle.removeEventListener('click', () => {
          navbarMenu.classList.toggle('active');
        });
      }
    };
  }, []); // El hook solo se ejecuta una vez, cuando el componente se monta


  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  
  const { i18n } = useTranslation(); // Inicializamos el hook de traducción


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {t('bienvenida')}
        </Link>
        <div className="navbar-toggle">
          <i className="fas fa-bars">Menú</i> {/* Ícono de hamburguesa */}
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">{t('inicio')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">{t('servicios')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">{t('contacto')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/WorkTeams" className="navbar-link">{t('equipo_de_trabajo')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link">{t('nosotros')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Blog" className="navbar-link">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/TerminosCondiciones" className="navbar-link">{t('terminosYcondiciones')}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/PoliticasPrivacidad" className="navbar-link">{t('politicas')}</Link>
          </li>
        </ul>

  
        <button  className="nav-btnEnglish" onClick={() => changeLanguage('en')}>en</button>
        <button  className="nav-btnEspañol" onClick={() => changeLanguage('es')}>es</button>
      </div>
    </nav>
  );
}

export default Navbar;
