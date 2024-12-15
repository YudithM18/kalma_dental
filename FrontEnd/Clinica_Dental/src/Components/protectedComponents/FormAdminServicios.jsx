import React, { useState, useEffect } from 'react';
import '../../Styles/FormAdminServicios.css'
import GetServicios from '../../Service/Servicios/GetServicios'
import PostServicios from '../../Service/Servicios/PostServicios';
import DeleteServicios from '../../Service/Servicios/DeleteServicios';
import UpdateServicios from '../../Service/Servicios/UpdateServicios';
import GetSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import Swal from 'sweetalert2';  // Importar SweetAlert2
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

function FormAdminServicios() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  const [services_url, setImage] = useState('');
  const [service_name, setNameS] = useState(''); 
  const [specialists, setSpecialists] = useState('');
  const [description, setTreatment] = useState('');


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


  //SERVICIOS
  function ImageLoad(event) {
      setImage(event.target.files[0]);
  }

  function cargarNameService(event) {
      setNameS(event.target.value);
  }

  function cargarSpecialists(event) {
    setSpecialists(event.target.value);
  }

  function cargarTreatment(event) {
      setTreatment(event.target.value);
  }


  function carga_service_title_edit(event) {
    setNameS(event.target.value); 
  }
  
  function carga_servicedescription_edit(event) {
    setTreatment(event.target.value); 
  }
  
  function carga_ImageEdit(event) {
    setImage(event.target.value); 
  }

  // Función para agregar un nuevo servicio
  const cargarServicio = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Verificar que todos los campos estén llenos
    if (services_url === '' || service_name === '' || description === '' || specialists === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('alertS0'),
      });
      return;
    }

    // Crear el objeto JSON con los datos
    const newServices = {
      image: services_url ,  // URL de la imagen (puedes subirla si es necesario)
      Name: service_name,
      Treatment: description,
      Specialist: specialists
    };
    
    console.log('Nuevo servicio:', newServices);

    try {
      const savedService = await PostServicios.PostServices(newServices);

      // Agregar el nuevo consejo al estado
      setdataService([...dataService, savedService]);

      Swal.fire({
        icon: 'success',
        title: t('alertS1'),
        text: t('alertS2'),
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: t('alertS3'),
      });
    }
  };

  // Eliminar un servicio
  async function cargarDelete(id) {
    const confirmDelete = await Swal.fire({
      title: t('alertS4'),
      text: t('alertS5'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('alertS6'),
      cancelButtonText: t('alertS7'),
    });

    if (confirmDelete.isConfirmed) {
      await DeleteServicios(id);

      const valorEncontrar = dataService.filter(newServices => newServices.id !== id);
      setdataService([...valorEncontrar]);

      Swal.fire(
        t('alertS8'),
        t('alertS9'),
        'success'
      );
    }
  }

  // Editar un servicio
  const cargaEdicion = async (id) => {

    const serviceOriginal = dataService.find(newServices => newServices.id === id);

    if (!serviceOriginal) return;

    const nuevosDatos = {
      imagen: imagen || serviceOriginal.services_url, 
      name: servicEdit || serviceOriginal.service_name,  
      descripcion: descripEdit || serviceOriginal.descripcion, 
    };

    try {
      await UpdateServicios(id, nuevosDatos.imagen, nuevosDatos.servicEdit, nuevosDatos.descripcion);

      const ServiciosActualizado = dataService.map(newServices => 
        newServices.id === id ? { ...newServices, ...nuevosDatos } : newServices
      );

      setdataService(ServiciosActualizado);

      // Resetea los campos de entrada
      setImage('');
      setNameS('');
      setTreatment('');

      Swal.fire({
        icon: 'success',
        title: t('alertS10'),
        text: t('alertS11'),
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: t('alertS12'),
      });
    }
  }


  console.log(dataSpecialists);

  
  
  return (
    <div>
      <div className='Servicios'>
        <div className='add'>
          <h2 className='TitleS'>{t('tituloAdminS')}</h2>
          <br />
          <label htmlFor="image" className='subTitleS'>{t('inputS1')}</label>
          <input type="file" onChange={ImageLoad} className='IMGFILE' />
          <br />
          <label htmlFor="nameS" className='subTitleS'>{t('inputS2')}</label>
          <input type="text" placeholder='Ingrese el Servicio' value={service_name} onChange={cargarNameService} className='IMGFILE' />
          <br />
          <label htmlFor='Treatment' className='subTitleS'>{t('inputS3')}</label>
          <select 
            value={specialists} 
            onChange={cargarSpecialists} 
            className='IMGFILE' 
            id='Treatment'
          >
            <option value="">{t('inputS4')}</option>
            {dataSpecialists.map((specialist) => (
              <option key={specialist.id} value={specialist.id}>
                {specialist.full_name} {/* Mostrar el nombre del especialista */}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor='Treatment' className='subTitleS'>{t('inputS5')}</label>
          <input type="text" placeholder='Añada el Tratamiento Vinculado' value={description} onChange={cargarTreatment} className='IMGFILE' />
          <br />
          <br />
          <button className='btnadd' onClick={cargarServicio}>{t('btnAgregar')}</button>
          <br />
        </div>
      </div>
  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
  
      <h1 className='historial'>{t('registrosS')}</h1>
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
                <input onChange={carga_ImageEdit} type="file" />
                
                <br />
                {Servicio.services_name} 
                {Specialist ? (
                  <span>{Specialist.full_name}</span> // Muestra el nombre del especialista
                ) : (
                  <span>Sin especialista</span> // Si no hay especialista
                )}
                <input className='editInp1' type="text" onChange={carga_service_title_edit} />
                <br />
                {Servicio.description}
                <input className='editInp' type="text" onChange={carga_servicedescription_edit} />
                <br />
                <button className='botonHis' onClick={e => cargaEdicion(Servicio.id)}>{t('btnActualizar')}</button>
                <button className='botonHis' onClick={e => cargarDelete(Servicio.id)}>{t('btnEliminar')}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
  
}

export default FormAdminServicios;