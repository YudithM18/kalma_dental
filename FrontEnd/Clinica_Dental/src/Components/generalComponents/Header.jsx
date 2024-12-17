import React from 'react';
import '../../Styles/FormHeader.css';
import logo from '../../Img/Logo_secundario.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <header className="header">
      <div>
        <Link to="/Login" className="logo-btn">
          <img className="logoprincipal" src={logo} alt="Decoracion" />
        </Link>
      </div>
      <Link to="/PaymentAmount">
       <button className='btndonar'>{t('btnDonar')}</button> 
      </Link>
    </header>
  );
};

export default Header;
