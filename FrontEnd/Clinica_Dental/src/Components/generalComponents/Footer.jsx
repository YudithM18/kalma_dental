// src/components/Footer.js
import React from 'react';
import '../../Styles/FormFooter.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from '../../Img/Logo_principal.jpg'
import espejo from '../../Img/espejo3.jpg'
import escritorio from '../../Img/escritorio.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'




const Footer = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  return (
    <footer className="footer">
      <div className="footer-container">
      
        {/* Logo y descripción de la clínica */}
        <div className="footer-logo">
          <img className="Logo_principal" src= {logo} alt="Decoracion" />
          <h2 className="footer-logo-text">{t('footer_TT1')}</h2>
          <p className="footer-description">{t('texto_1')}</p>
        </div>
        
        {/* Redes sociales */}
        <div className="footer-socials">
          <h3 className="footer-title">{t('footerTT2')}</h3>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/kalmadentalcr/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon instagram">
             <FaInstagram size="3em" />
            </a>
            
            <a href="https://www.facebook.com/profile.php?id=100092274373155&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer-social-icon facebook">
              <CiFacebook size="3em"/>
            </a>
            
          </div>
          <img className="espejo" src= {espejo} alt="Decoracion" />
        </div>

        {/* Contacto para reservar cita */}
        <div className="footer-contact">
          <h3 className="footer-title-cita">{t('footerTT3')}</h3>
          <div className="footer-contact-link">
          <a href="https://wa.me/c/50688208742" target="_blank" rel="noopener noreferrer" className="footer-social-icon instagram">
             <FaWhatsapp size="3em" />
            </a>
            <p>Whatsapp</p>
           </div> 
           <div className="footer-contact-link-email">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@kalmadentalcr.com&su=Consulta%20de%20información&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="footer-social-icon facebook">
              <MdEmail size="3em"/>
            </a> 
            <p>Email</p>
           </div>
        </div>

        {/* Horarios de atención */}
        <div className="footer-hours">
        <img className="escritorio" src= {escritorio} alt="Decoracion" />
          <h3 className="footer-title-horario">{t('Horario')}</h3>
          <ul className="footer-hours-list">
            <li>{t('fecha1')}</li>
            <li>{t('fecha2')}</li>
            <li>{t('fecha3')}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
