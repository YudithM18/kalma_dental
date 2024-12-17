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

  const [service_url_edit , setImage_Edit] = useState ('');
  const [servicedescription_edit , setDescrip_Edit] = useState ('');
  const [service_name_edit , setName_Edit] = useState ('');
  const [specialists_edit , setspecialistsEdit] = useState ('');


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
        setImage(nuevoArchivo);
      }
  }


  //SERVICIOS


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
    setName_Edit(event.target.value); 
  }
  
  function carga_servicedescription_edit(event) {
    setDescrip_Edit(event.target.value); 
  }
  
  function carga_ImageEdit(event) {
    setImage_Edit(event.target.value); 
  }

  function cargarSpecialistsEdit(event) {
    setspecialistsEdit(event.target.value); 
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

    const OriginalImage = serviceOriginal.services_url

    const parts = OriginalImage.split('/');

    const fileName = parts[parts.length - 1];

    console.log(fileName);
    console.log(serv);

  
  if (recommendations_url_edit) {
    try {
      const Archive = recommendations_url_edit;  // Este es el archivo que el usuario ha cargado
      const NewArchive = new File([Archive], fileName);
     // console.log(NewArchive);
      
      let NewImagenURL= " "

      const result = await uploadImageToS3(NewArchive);  // Subir la imagen con el nombre original
      NewImagenURL = result.Location;
      console.log('Nueva imagen subida a S3:', NewImagenURL);

    } catch (error) {
      console.error('Error al subir la nueva imagen:', error);
      
      Swal.fire('Error', 'No se pudo subir la nueva imagen.', 'error');
      return;
    }
  }


    const nuevosDatos = {
      imagen: service_url_edit || serviceOriginal.services_url, 
      name: service_name_edit || serviceOriginal.service_name,  
      descripcion: servicedescription_edit || serviceOriginal.descripcion, 
      IdSpecialists: specialists_edit || serviceOriginal.specialists
    };

    try {
      await UpdateServicios(id, nuevosDatos.imagen, nuevosDatos.name, nuevosDatos.descripcion, nuevosDatos.IdSpecialists);

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
  
      <h1 className='RegistroExistenteServicios'>{t('registrosS')}</h1>
<div className='serviciosProtegidos-conteiner'>
  <div className='columns-container'>
    {/* Columna de datos */}
    <div className='data-column'>
      <ul className='mapServiciosProtegidos'>
        {dataService.map((Servicio) => {
          const Specialist = dataSpecialists.find(specialist => specialist.id === Servicio.id_specialists);

          return (
            <li className='lsta-servicios-protegidos' key={Servicio.id}>
              <div className='service-data'>
                {/* Imagen reducida */}
                <img className='imagenServiciosProtegidos' src={Servicio.services_url} alt={Servicio.services_name} />
                <br />
                <h3>{Servicio.services_name}</h3>
                {/* Muestra el nombre del especialista solo si existe */}
                {Specialist && <span>{Specialist.full_name}</span>}
                <p>{Servicio.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
 
    {/* Columna de edición */}
    <div className='edit-column'>
      {dataService.map((Servicio) => (
        <div className='edit-service-container' key={Servicio.id}>
          <h4>{t('editarServicio')}</h4>
          {/* Campos de edición */}
          <input 
            type="file" 
            className="edit-file-input"
            onChange={(e) => carga_ImageEdit(e, Servicio.id)} 
          />
          <input 
            className='editInp1' 
            type="text" 
            defaultValue={Servicio.services_name} 
            onChange={e => carga_service_title_edit(e, Servicio.id)} 
          />
          <select 
            value={Servicio.id_specialists} 
            onChange={e => cargarSpecialistsEdit(e, Servicio.id)} 
            className='edit-specialist-select'
          >
            <option value="">{t('inputS4')}</option>
            {dataSpecialists.map((specialist) => (
              <option key={specialist.id} value={specialist.id}>
                {specialist.full_name}
              </option>
            ))}
          </select>
          <textarea 
          className='inputEditServices' 
          defaultValue={Servicio.description} 
          onChange={e => carga_servicedescription_edit(e, Servicio.id)} 
          required 
        />
          <div className='edit-buttons'>
            <button className='botonHis' onClick={() => cargaEdicion(Servicio.id)}>{t('btnActualizar')}</button>
            <button className='botonHis' onClick={() => cargarDelete(Servicio.id)}>{t('btnEliminar')}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  );
  
}

export default FormAdminServicios;