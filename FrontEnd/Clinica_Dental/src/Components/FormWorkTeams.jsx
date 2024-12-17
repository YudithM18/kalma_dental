import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';  // Importa SweetAlert2
import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
import especialista from '../Img/Nuestros-doctores.png'
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

import '../Styles/FormWorkTeam.css'

function FormWorkTeams() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  ///SETEO DE REGISTROS EN LA BASE DE DATOS
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
      <h1 className='historial'>{t('TituloPagWT')}</h1>
      <img src={especialista} alt="Medico dental" />
      <br />
      <div className='especialistas-conteiner'>
  <ul className='lista-especialistas'>
    {dataSpecialists.map((especialista) => {
      const Qualification = dataQualification.find(qualification => qualification.id === especialista.id_qualification);
      const Speciality = dataSpeciality.find(specialty => specialty.id === especialista.id_speciality);

      return (
        <li className='card-especialista' key={especialista.id}>
          <img className='imagen-especialista' src={especialista.specialists_url} alt={especialista.full_name} />
          <h3 className='nombre-especialista'>{especialista.full_name}</h3>
          <div className='info-especialista'>
            {Speciality ? (
              <span className='especialidad-especialista'>{Speciality.speciality_name}</span>
            ) : (
              <span className='sin-especialidad'>Sin especialidad</span>
            )}
            <br />
            {Qualification ? (
              <span className='titulacion-especialista'>{Qualification.qualification_name}</span>
            ) : (
              <span className='sin-titulacion'>Sin Titulación</span>
            )}
          </div>
        </li>
      );
    })}
  </ul>
</div>

    </div>
  );
}

export default FormWorkTeams;
