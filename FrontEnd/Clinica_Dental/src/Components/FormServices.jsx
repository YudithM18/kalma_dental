import React, { useState, useEffect } from 'react';
import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetServicios from '../Service/Servicios/GetServicios'


function FormServices() {

  const [dataService, setdataService] = useState([]);
  const [dataSpecialists, setdataEspecialistas] = useState([]);

    // hook para evitar renderizado
    useEffect(() => {
      const fetchServicios = async () => {
        const dataServi = await GetServicios();
        setdataService(dataServi);
      };
      fetchServicios();
    }, []);
  
      // hook para evitar renderizado
      useEffect(() => {
        const fetchSpecialits = async () => {
          const dataS = await GetSpecialists();
          setdataEspecialistas(dataS);
        };
        fetchSpecialits();
      }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
  
      <h1 className='historial'>Servicios Disponibles:</h1>
      <div className='servicios-conteiner'>
        <ul className='ul'>
          {dataService.map((Servicio) => {
            // Buscar el especialista correspondiente para el servicio
            const Specialist = dataSpecialists.find(specialist => specialist.id === Servicio.id);
  
            // Depuración para ver los valores
            console.log(Servicio);
            console.log(Specialist);
            return (
              <li className='li' key={Servicio.id}>
                <br />
                <img className='imgRecid' src={Servicio.services_url} />
                <br />
                {Servicio.services_name} 
                {Specialist ? (
                  <span>{Specialist.full_name}</span> // Muestra el nombre del especialista
                ) : (
                  <span>Sin especialista</span> // Si no hay especialista
                )}
                <br />
                {Servicio.description}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default FormServices