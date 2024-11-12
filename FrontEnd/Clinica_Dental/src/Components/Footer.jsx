// src/components/Footer.js
import React from 'react';
import '../Styles/FormFooter.css' ; // Estilos css
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y descripción de la clínica */}
        <div className="footer-logo">
          <h2 className="footer-logo-text">Kalma Dental</h2>
          <p className="footer-description">Cuidando tu sonrisa, siempre.</p>
        </div>
        
        {/* Redes sociales */}
        <div className="footer-socials">
          <h3 className="footer-title">Síguenos</h3>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/KalmaDental" target="_blank" rel="noopener noreferrer" className="footer-social-icon instagram">
             <FaInstagram />
            </a>
            
            <a href="https://www.facebook.com/KalmaDental" target="_blank" rel="noopener noreferrer" className="footer-social-icon facebook">
              <CiFacebook />
            </a>
          </div>

        </div>

        {/* Contacto para reservar cita */}
        <div className="footer-contact">
          <h3 className="footer-title">Reserva tu cita</h3>
          <ul className="footer-contact-list">
          <li>
            <span className="footer-contact-link whatsapp">WhatsApp</span>
          </li>
          <li>
            <span className="footer-contact-link email">contacto@dentalcare.com</span>
          </li>
          </ul>
        </div>

        {/* Horarios de atención */}
        <div className="footer-hours">
          <h3 className="footer-title">Horarios de Atención</h3>
          <ul className="footer-hours-list">
            <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
            <li>Sábado: 10:00 AM - 2:00 PM</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
