import React, { useState } from 'react';
import '../Styles/FormHeader.css';
import logo from '../Img/Logo_secundario.jpg'
import { Link } from 'react-router-dom';


const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Aquí podrías hacer lo que necesites con el término de búsqueda.
    console.log("Buscando:", search);
  };

  return (
    <header className="header">
      <div>
      <Link to="/Login" className="logo-btn">
        <img className="logoprincipal" src= {logo} alt="Decoracion" />
      </Link>

        
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="¿Qué necesitas hoy?"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="search-btn" onClick={handleSearchSubmit}>
          <i className="fa fa-search"></i>
          Buscar
        </button>
      </div>

    </header>
  );
};

export default Header;
