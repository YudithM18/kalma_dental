import React, { useState, useEffect } from 'react';
import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetServicios from '../Service/Servicios/GetServicios';

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n';

import '../Styles/FormServices.css';

function FormServices() {
  const [visibleDescription, setVisibleDescription] = useState({});
  const [dataService, setDataService] = useState([]);
  const [dataSpecialists, setDataSpecialists] = useState([]);
  const [search, setSearch] = useState(''); // Estado para el texto de búsqueda
  const [filteredServices, setFilteredServices] = useState([]); // Estado para los servicios filtrados

  const { t, i18n } = useTranslation();

  const toggleServiceDescription = (serviceId) => {
    setVisibleDescription((prevState) => ({
      ...prevState,
      [serviceId]: !prevState[serviceId],
    }));
  };

  const isDescriptionVisible = (serviceId) => {
    return visibleDescription[serviceId] || false;
  };

  // hook para obtener los servicios
  useEffect(() => {
    const fetchServicios = async () => {
      const dataServi = await GetServicios();
      setDataService(dataServi);
      setFilteredServices(dataServi); // Inicializa los servicios filtrados con todos los servicios
    };
    fetchServicios();
  }, []);

  // hook para obtener los especialistas
  useEffect(() => {
    const fetchSpecialists = async () => {
      const dataS = await GetSpecialists();
      setDataSpecialists(dataS);
    };
    fetchSpecialists();
  }, []);

  // Función para manejar el cambio de búsqueda
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);

    // Filtra los servicios que contienen la búsqueda en su nombre o descripción
    const filtered = dataService.filter(
      (service) =>
        service.services_name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredServices(filtered); // Actualiza los servicios filtrados
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Campo de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder={t('Busqueda')}
          value={search} // Vincula el valor de la búsqueda al estado
          onChange={handleSearchChange} // Llama a la función handleSearchChange cuando el texto cambia
        />
      </div>

      <h1 className="titulo-servicios">{t('tituloPagS')}</h1>
      <div className="contenedor-servicios">
        <ul className="lista-servicios">
          {filteredServices.length > 0 ? (
            filteredServices.map((Servicio) => {
              // Buscar el especialista correspondiente para el servicio
              const Specialist = dataSpecialists.find(
                (specialist) => specialist.id === Servicio.id_specialists
              );

              return (
                <li className="item-servicio" key={Servicio.id}>
                  <div className="contenido-servicio">
                    <img
                      className="img-servicio"
                      src={Servicio.services_url}
                      alt={Servicio.services_name}
                    />
                    <div className="informacion-servicio">
                      <h3 className="nombre-servicio">{Servicio.services_name}</h3>
                      <div className="especialista">
                        {Specialist ? (
                          <span className="nombre-especialista">{Specialist.full_name}</span>
                        ) : (
                          <span className="sin-especialista">Sin especialista</span>
                        )}
                      </div>
                      <button
                        className="boton-expandir"
                        onClick={() => toggleServiceDescription(Servicio.id)}
                      >
                        {isDescriptionVisible(Servicio.id)
                          ? 'Ocultar tratamiento'
                          : 'Ver tratamiento'}
                      </button>
                      {isDescriptionVisible(Servicio.id) && (
                        <div className="detalle-servicio">
                          <p>{Servicio.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p className='resultado-busqueda'>No se encontraron resultados.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FormServices;
