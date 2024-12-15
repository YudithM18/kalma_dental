import React from 'react'
import '../../Styles/FormHeaderDonaciones.css';
import logo from '../../Img/Logo_secundario.jpg';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

function HeaderDonaciones() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (

    <header className="donation-header">
        <div>
            <Link to="/Login" className="logo-btn">
            <img className="logoprincipal" src={logo} alt="Decoracion" />
            </Link>
        </div> 
      <div className="header-content">
        <h1>{t('titulo_headerDonar')}</h1>
       
      </div>
      <Link to="/">
       <button className='cerrar-donar'>{t('btn_regresoDonar')}</button>
      </Link>
     
    </header>

  );
};

export default HeaderDonaciones