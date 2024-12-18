import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../../Styles/FormGeneralAdministration.css';

// MÉTODOS POST 
import PostSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/PostSpecialists';
// MÉTODOS GET
import GetSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
// MÉTODO PUT
import UpdateSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/UpdateSpecialists';
// MÉTODOS DELETE 
import DeleteSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/DeleteSpecialists';

// SweetAlert2
import Swal from 'sweetalert2';

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'


function FormAdministracion() {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  
  // Define estados para manejar los datos del formulario
  const [specialists_url, setImageW] = useState('');
  const [full_name, setfullName] = useState('');
  const [Speciality, setSpeciality] = useState('');
  const [Qualification, setQualification] = useState('');

  const [specialists_url_edit, setImageW_edit] = useState('');
  const [full_name_edit, setfullName_edit] = useState('');
  const [Speciality_edit, setSpeciality_edit] = useState('');
  const [Qualification_edit, setQualification_edit] = useState('');
  

  const [dataSpecialists, setSpecialists] = useState([]);
  const [dataQualification, setDatatitulacion] = useState([]);
  const [dataSpeciality, setDataEspecialidad] = useState([]);

  // Hook para obtener los datos de especialistas
  useEffect(() => {
    const fetchEspecialista = async () => {
      const Especialistas = await GetSpecialists();
      console.log(Especialistas);
      
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


  const ImageNameRandom = (longitud = 20) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let nombre = '';
    for (let i = 0; i < longitud; i++) {
      nombre += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return nombre;
  };

  
  function ImageLoad(event) {
    const NameRandom = ImageNameRandom();
    const archivo = event.target.files[0];

    
    if (archivo) {
      const nuevoArchivo = new File([archivo], `${NameRandom}.${archivo.name.split('.').pop()}`, { type: archivo.type });
      setImageW(nuevoArchivo);
    }
}



  // Función para manejar el nombre completo
  function cargarFullName(event) {
    setfullName(event.target.value);
  }

  // Función para manejar la especialidad
  function cargarSpeciality(event) {
    setSpeciality(event.target.value);
  }

  // Función para manejar la titulación
  function cargarQualification(event) {
    setQualification(event.target.value);
  }

  function ImageLoad_edit(event) {
    setImageW_edit(event.target.files[0]);
  }

  function cargarFullName_edit(event) {
    setfullName_edit(event.target.value); 
  }
  
  function cargarSpeciality_edit(event) {
    setSpeciality_edit(event.target.value); 
  }
  
  function cargarQualification_edit(event) {
    setQualification_edit(event.target.value); 
  }

  // Función para agregar un nuevo especialista
  const cargarNewEspecilista = async (event) => {
    event.preventDefault();
   
    try {
      const newSpecialists = {
        foto: specialists_url,  // URL de la imagen
        Fullname: full_name,
        IdQualification: Qualification,
        IdSpeciality: Speciality,
      };
      
    console.log(newSpecialists.IdQualification);
    console.log(newSpecialists.IdSpeciality);
    
    console.log(newSpecialists);
      const response = await PostSpecialists(newSpecialists);
   

      if (response) {
        Swal.fire({
          icon: 'success',
          title:t('alertaWT'),
          text: t('alertaWT1'),
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text:t('alertaWT2'),
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: t('alertaWT3'),
      });
    }
  };

  // Función para eliminar un especialista
  async function cargarDelete(id) {
    const confirmDelete = await Swal.fire({
      title: t('alertaWT4'),
      text: t('alertaWT5'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('alertaWT6'),
      cancelButtonText: t('alertaWT7'),
    });

    if (confirmDelete.isConfirmed) {
      await DeleteSpecialists(id);
      const valorEncontrar = dataSpecialists.filter(especialista => especialista.id !== id);
      setSpecialists([...valorEncontrar]);

      Swal.fire( t('alertaWT8'),  t('alertaWT9'), 'success');
    }
  }

  // Función para editar un especialista
  const cargaEdicion = async (id) => {
    const specialistOriginal = dataSpecialists.find(especialista => especialista.id === id);

    if (!specialistOriginal) return;

    const nuevosDatosWT = {
      imagen: specialists_url_edit || specialistOriginal.specialists_url,
      nombreCompleto: full_name_edit || specialistOriginal.full_name,
      Id_speciality: Speciality_edit || specialistOriginal.id_speciality,
      Id_qualification: Qualification_edit || specialistOriginal.id_qualification,
    };

    console.log(nuevosDatosWT);
    

    try {
      await UpdateSpecialists(id, nuevosDatosWT.imagen, nuevosDatosWT.nombreCompleto, nuevosDatosWT.Id_speciality, nuevosDatosWT.Id_qualification);

      const SpecialistsUpdated = dataSpecialists.map(especialista =>
        especialista.id === id ? { ...especialista, ...nuevosDatosWT } : especialista
      );

      setSpecialists(SpecialistsUpdated);

      // Resetea los campos de entrada
      setImageW('');
      setfullName('');
      setSpeciality('');
      setQualification('');

      Swal.fire({
        icon: 'success',
        title: t('alertaWT0'),
        text: t('alertaWT11'),
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: t('alertaWT12'),
      });
    }
  }

  console.log(dataSpecialists);
  
  console.log(dataQualification);
  console.log(dataSpeciality);


  
  

  return (
    <div>
      <div className='WorkTeam'>
        <div className='Añadir'>
          <h2 className='Title'>{t('tituloAdminWT')}</h2>
          <br />
          <label htmlFor="image" className='subTitle'>{t('inputfoto')}</label>
          <input className='inptWorkTeam' type="file" onChange={ImageLoad} />
          <br />
          <label htmlFor="Fname" className='subTitle'>{t('inputNombre')}</label>
          <input className='inptWorkTeam' type="text" placeholder='Ingrese el Nombre Completo' value={full_name} onChange={cargarFullName} />
          <br />
          <label htmlFor="Speciality" className='subTitle'>{t('inputE')}</label>
          <select className='inptWorkTeam' value={Speciality} onChange={cargarSpeciality} id="Speciality">
            <option value="">{t('selectE')}</option>
            {dataSpeciality.map((speciality) => (
              <option key={speciality.id} value={speciality.id}>
                {speciality.speciality_name} {/* Mostrar el nombre de la especialidad */}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor='Qualification' className='subTitle'>{t('inputTI')}</label>
          <select className='inptWorkTeam' value={Qualification} onChange={cargarQualification} id="Qualification">
            <option value="">{t('selectT')}</option>
            {dataQualification.map((qualification) => (
              <option key={qualification.id} value={qualification.id}>
                {qualification.qualification_name} {/* Mostrar el nombre de la titulacion */}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button className='btnagregarW' onClick={cargarNewEspecilista}>{t('btnWT')}</button>
          <br />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h1 className='historialEspecialistas'>{t('registrosWT')}</h1>
<div className='workTeam-conteiner'>
  <ul className='ul'>
    {dataSpecialists.map((especialista) => {
      const titulacion = dataQualification.find(qualification => qualification.id === especialista.id_qualification);
      const especialidad = dataSpeciality.find(especialidad => especialidad.id === especialista.id_speciality);
   
      return (
        <li className='lista-de-especialistas' key={especialista.id}>
          <div className="detailsContainer">
            {/* Columna de Datos Renderizados */}
            <div>
              <img className='imgRecidEspecialistas' src={especialista.specialists_url} alt="Especialista" />
              <span><strong>{especialista.full_name}</strong></span>
              <p>{especialidad ? especialidad.speciality_name : 'Sin especialidad'}</p>
              <p>{titulacion ? titulacion.qualification_name : 'Sin Titulación'}</p>
            </div>

            {/* Columna de Inputs de Edición */}
            <div>
              <input 
                className='inputField' 
                type="text" 
                onChange={cargarFullName_edit}
                placeholder='Ingresa nuevo dato' 
              />
              <select 
                className='inputField' 
                onChange={cargarSpeciality_edit} 
                id="Speciality"
              >
                <option value="">{t('selectE')}</option>
                {dataSpeciality.map((speciality) => (
                  <option key={speciality.id} value={speciality.id}>
                    {speciality.speciality_name}
                  </option>
                ))}
              </select>
              <select 
                className='inputField' 
                onChange={cargarQualification_edit} 
                id="Qualification"
              >
                <option value="">{t('selectT')}</option>
                {dataQualification.map((qualification) => (
                  <option key={qualification.id} value={qualification.id}>
                    {qualification.qualification_name}
                  </option>
                ))}
              </select>
              <input 
                className='inputField' 
                type="file" 
                onChange={ImageLoad_edit} 
              />
            </div>
          </div>

          <div className='buttonsContainer'>
            <button className='botonHisEspci' onClick={() => cargaEdicion(especialista.id)}>{t('btnActualizar')}</button>
            <button className='botonHisEspecialistrs' onClick={() => cargarDelete(especialista.id)}>{t('btnEliminar')}</button>
          </div>
        </li>
      );
    })}
  </ul>
</div>


    </div>
  );
}

export default FormAdministracion;