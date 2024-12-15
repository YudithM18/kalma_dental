import React, { useState, useEffect } from 'react';
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

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearch(query);

    if (query.length > 0) {
      try {
        const response = await fetch(`/buscar/?q=${query}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error al buscar:", error);
      }
    } else {
      setResults([]);
    }
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(`/buscar/?q=${search}`);
      const data = await response.json();
      setResults(data);
      console.log("Resultados de la búsqueda:", data);
    } catch (error) {
      console.error("Error al buscar:", error);
    }
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
      
      <div className="search-container">
        
        <input
          type="search"
          className="search-bar"
          placeholder="¿Qué necesitas hoy?"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="search-results">
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.nombre || result.titulo || result.comentario || result.consejo || result.username}</li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
