import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';  // Importa SweetAlert2
import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
import especialista from '../Img/Nuestros-doctores.png'
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

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
      try {
        const Especialistas = await GetSpecialists();
        setSpecialists(Especialistas);
        Swal.fire({
          icon: 'success',
          title: t('Alert_E'),
          text: t('Alert_EText'),
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: t('Alert_ErrorE'),
        });
      }
    };
    fetchEspecialista();
  }, []);

  // Hook para obtener los datos de especialidades
  useEffect(() => {
    const fetchEspecialidad = async () => {
      try {
        const Especialidades = await GetSpeciality();
        setDataEspecialidad(Especialidades);
        Swal.fire({
          icon: 'success',
          title: 'Especialidades Cargadas',
          text: 'Las especialidades se han cargado correctamente.',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar las especialidades.',
        });
      }
    };
    fetchEspecialidad();
  }, []);

  // Hook para obtener los datos de titulaciones
  useEffect(() => {
    const fetchTitulaciones = async () => {
      try {
        const Titulaciones = await GetQualification();
        setDatatitulacion(Titulaciones);
        Swal.fire({
          icon: 'success',
          title: 'Titulaciones Cargadas',
          text: 'Las titulaciones se han cargado correctamente.',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar las titulaciones.',
        });
      }
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
  );
}

export default FormWorkTeams;
