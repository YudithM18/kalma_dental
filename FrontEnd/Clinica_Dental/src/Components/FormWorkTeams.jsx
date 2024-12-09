import React, { useState, useEffect } from 'react';

import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';

import especialista from '../Img/Nuestros-doctores.png'

function FormWorkTeams() {

  ///SETE0 DE REGISTROS EN LA BASE DE DATOS
  const [dataSpecialists, setSpecialists] = useState([]);
  const [dataQualification, setDatatitulacion] = useState([]);
  const [dataSpeciality, setDataEspecialidad] = useState([]);

     // Hook para obtener los datos de especialistas
     useEffect(() => {
      const fetchEspecialista = async () => {
        const Especialistas = await GetSpecialists();
        setSpecialists(Especialistas);
      };
      fetchEspecialista();
    }, []);
  
    // Hook para obtener los datos de especialidades
    useEffect(() => {
      const fetchEspecialidad = async () => {
        const Especialidades = await GetSpeciality();
        setDataEspecialidad(Especialidades);
      };
      fetchEspecialidad();
    }, []);
  
    // Hook para obtener los datos de titulaciones
    useEffect(() => {
      const fetchTitulaciones = async () => {
        const Titulaciones = await GetQualification();
        setDatatitulacion(Titulaciones);
      };
      fetchTitulaciones();
    }, []);


  return (
    <div>
       <br />
      <br />
      <br />
      <br />
      <h1 className='historial'>Nuestro Equipo de Especialistas.</h1>
      <img src={especialista} alt="Medico dental" />
      <br />
      <div className='workTeam-conteiner'>
        <ul className='ul'>
          {dataSpecialists.map((especialista) => {
            const Qualification = dataQualification.find(qualification => qualification.id === especialista.id);
            const Speciality = dataSpeciality.find(specialty => specialty.id === especialista.id);

            return (
              <li className='li' key={especialista.id}>
                <br />
                <img className='imgRecid' src={especialista.specialists_url} />
                <br />
                {especialista.full_name}
                <br />
                {Speciality ? (
                  <span>{Speciality.speciality_name}</span> // Muestra el nombre de la especialidad
                ) : (
                  <span>Sin especialidad</span>
                )}
                <br />
                {Qualification ? (
                  <span>{Qualification.qualification_name}</span> // Muestra la titulación
                ) : (
                  <span>Sin Titulación</span>
                )}
                
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default FormWorkTeams