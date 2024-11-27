import React from 'react'
import '../../Styles/FormHeaderDonaciones.css';
import logo from '../../Img/Logo_secundario.jpg';
import { Link } from 'react-router-dom';

function HeaderDonaciones() {

  return (

    <header className="donation-header">
        <div>
            <Link to="/Login" className="logo-btn">
            <img className="logoprincipal" src={logo} alt="Decoracion" />
            </Link>
        </div> 
      <div className="header-content">
        <h1>¡ÚNETE A NOSOTROS Y AYUDA A LOS NIÑOS DE TELETÓN!</h1>
       
      </div>
      <Link to="/">
       <button className='cerrar-donar'>Go Home</button>
      </Link>
     
    </header>

  );
};

export default HeaderDonaciones