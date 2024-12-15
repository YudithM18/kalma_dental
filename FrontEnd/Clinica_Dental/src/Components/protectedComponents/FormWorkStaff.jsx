import React, { useState, useEffect }  from 'react'
import Swal from 'sweetalert2';
import '../../Styles/FormWorkStaff.css' ;
//MÉTODOS POST 
import PostSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/PostSpeciality';
import PostQualification from '../../Service/WorkTeam/TITULACION/PostQualification';
//MÉTODOS GET
import GetQualification from '../../Service/WorkTeam/TITULACION/GetQualification';  
import GetSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
//MÉTODOS PUT
import UpdateSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/UpdateSpeciality';
import UpdateQualification from '../../Service/WorkTeam/TITULACION/UpdateQualification';
//MÉTODOS DELETE 
import DeleteSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/DeleteSpeciality';
import DeleteQualification from '../../Service/WorkTeam/TITULACION/DeleteQualification';


import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

function FormWorkStaff() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  const [speciality_name, setSpeciality] = useState('');
  const [qualification_name, setQualification] = useState('');

  const [dataQualification, setDatatitulacion] = useState([]);
  const [dataSpeciality, setDataEspecialidad] = useState([]);

  const [name_specality_edit, setName_specality_edit ] = useState('');
  const [name_qualification_edit, setName_qualification_edit ] = useState('');
  
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

    // Función para manejar la especialidad
    function cargarEspecialidad(event) {
        setSpeciality(event.target.value);
    }
    
      // Función para manejar la titulación
      function cargarTitulacion(event) {
        setQualification(event.target.value);
    }

    // Función para manejar la especialidad
    function cargarSpeciality_edit(event) {
        setName_specality_edit(event.target.value);
    }
    
      // Función para manejar la titulación
      function cargarQualification_edit(event) {
        setName_qualification_edit(event.target.value);
    }

const uploadNewRecordS = async (event) => {
    event.preventDefault();

    try {
        const response = await PostSpeciality(speciality_name);
        console.log(response);
  
        if (response) {
          Swal.fire({
            icon: 'success',
            title:t('alertaS'),
            text:t('alertaS1'),
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text:t('alertaS2'),
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text:t('alertaS3'),
        });
      }
    };


    const uploadNewRecordQ = async (event) => {
        event.preventDefault();
    
        try {
            const response = await PostQualification(qualification_name);
            console.log(response);
      
            if (response) {
              Swal.fire({
                icon: 'success',
                title:t('alertaQ'),
                text:t('alertaQ1'),
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text:t('alertaQ2'),
              });
            }
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: t('alertaQ3'),
            });
          }
        };


        ////// CONFIGURACIONES DEL MAP SPECIALITY

        // Función para eliminar un especialista
  async function cargarDeleteS(id) {
    const confirmDelete = await Swal.fire({
      title:t('alertaS4'),
      text:t('alertaS5'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:t('alertaS6'),
      cancelButtonText:t('alertaS7'),
    });

    if (confirmDelete.isConfirmed) {
      await DeleteSpeciality(id);
      const valorEncontrar = dataSpeciality.filter(especialidad => especialidad.id !== id);
      setDataEspecialidad([...valorEncontrar]);

      Swal.fire(t('alertaS8'), t('alertaS9'), 'success');
    }
  }

  // Función para editar un especialista
  const cargaEdicionS = async (id) => {
    const specialitytOriginal = dataSpeciality.find(especialidad => especialidad.id === id);

    if (!specialitytOriginal) return;

    const nuevosDatos = {
        speciality_name: name_specality_edit || specialitytOriginal.speciality_name,
    };

    try {
      await UpdateSpeciality(id, nuevosDatos.speciality_name);

      const SpecialityUpdated = dataSpeciality.map(especialidad =>
        especialidad.id === id ? { ...especialidad, ...nuevosDatos } : especialidad
      );

      setDataEspecialidad(SpecialityUpdated);

      // Resetea los campos de entrada
      setSpeciality('');

      Swal.fire({
        icon: 'success',
        title:t('alertaS0'),
        text:t('alertaS11'),
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text:t('alertaS12'),
      });
    }
  }


  ///// CONFIGURACION DEL MAP QUALIFICATION 
  async function cargarDeleteQ(id) {
    const confirmDelete = await Swal.fire({
      title:t('alertaQ4'),
      text: t('alertaQ5'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:t('alertaQ6'),
      cancelButtonText:t('alertaQ7'),
    });

    if (confirmDelete.isConfirmed) {
      await DeleteQualification(id);
      const valorEncontrar = dataQualification.filter(titulacion => titulacion.id !== id);
      setDataEspecialidad([...valorEncontrar]);

      Swal.fire(t('alertaQ8'), t('alertaQ9'), 'success');
    }
  }

  // Función para editar un especialista
  const cargaEdicionQ = async (id) => {
    const QualificationOriginal = dataQualification.find(titulacion => titulacion.id === id);

    if (!specialitytOriginal) return;

    const nuevosDatos = {
        qualification_name: name_qualification_edit || QualificationOriginal.qualification_name,
    };

    try {
      await UpdateQualification(id, nuevosDatos.qualification_name);

      const QualificationUpdated = dataQualification.map(titulacion =>
        titulacion.id === id ? { ...titulacion, ...nuevosDatos } : titulacion
      );

      setDatatitulacion(QualificationUpdated);

      // Resetea los campos de entrada
      setQualification('');

      Swal.fire({
        icon: 'success',
        title:t('alertaQ0'),
        text:t('alertaQ11'),
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text:t('alertaQ12'),
      });
    }
  }

  return (
    <div>
        <br />
        <br />
        <br />
        
        <div className='workTeamAdmin'>
            <h1 className='Title-Admin'>{t('tituloAdminSp')}</h1>
            <label htmlFor="Fname" className='subTitle-especialidad'>{t('especialidad')}</label>
            <input className='inptWorkStaff' type="text" 
            placeholder='Ingrese la especialidad deseada:' 
            value={speciality_name} onChange={cargarEspecialidad} />
            <br />
            <br />
            <button className='buttonWork' onClick={uploadNewRecordS}>{t('btnS')}</button>
        </div>
        <br />
        <br />
        <br />
        <div className='workTeamAdmin'>
            <h1 className='Title-Admin'>{t('tituloAdminQ')}</h1>
            <label htmlFor="Fname" className='subTitle-titulaciones'>{t('titulacion')}</label>
            <input className='inptWorkStaff' type="text" 
            placeholder='Ingrese la titulacion deseada:' 
            value={qualification_name} onChange={cargarTitulacion} />
            <br />
            <br />
            <button className='buttonWork' onClick={uploadNewRecordQ}>{t('btnQ')}</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historialWTS'>{t('registroSpeciality')}</h1>
        <div >
        <ul className='mapEspecialidades'>
          {dataSpeciality.map((especialidad) => (
            <li className='especialidad'
            key={especialidad.id}>
              <br />
              {especialidad.speciality_name} <input onChange={cargarSpeciality_edit} type="text" className='editInp' />
              <br />
              <button className='botonHisTorial' onClick={e=>cargaEdicionS(especialidad.id)}>{t('btnActualizar')}</button>
              <button className='botonHisTorial' onClick={e => cargarDeleteS(especialidad.id)}>{t('btnEliminar')}</button>
              </li>
          ))}
        </ul>
        </div>

        <br />
        <br />
        <br />
        <br />

        <h1 className='historialWTS'>{t('registroQualf')}</h1>
        <div >
        <ul className='mapTitulaciones'>
          {dataQualification.map((titulaciones) => (
            <li className='titulaciones' 
            key={titulaciones.id}>
              <br />
              {titulaciones.qualification_name} <input onChange={cargarQualification_edit} type="text" className='editInp' /> 
              <br />
              <button className='botonHisTorial' onClick={e=>cargaEdicionQ(titulaciones.id)}>{t('btnActualizar')}</button>
              <button className='botonHisTorial' onClick={e => cargarDeleteQ(titulaciones.id)}>{t('btnEliminar')}</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormWorkStaff