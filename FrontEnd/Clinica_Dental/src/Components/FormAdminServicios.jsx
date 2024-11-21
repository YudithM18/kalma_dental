import React, { useState, useEffect } from 'react';
import '../Styles/FormAdminServicios.css'
import GetServicios from '../Service/Servicios/GetServicios'
import PostServicios from '../Service/Servicios/PostServicios';
import DeleteServicios from '../Service/Servicios/DeleteServicios';
import UpdateServicios from '../Service/Servicios/UpdateServicios';

function FormAdminServicios() {

  const [services_url, setImage] = useState('');
  const [service_name, setNameS] = useState(''); 
  const [description, setTreatment] = useState('');
  
  const [dataService, setdataService] = useState([])



  // hook para evitar renderizado
  useEffect(() => {
    const fetchServicios = async () => {
      const data = await GetServicios();
      setdataService(data);
    };
    fetchServicios();
  }, []);

  //SERVICIOS

  function ImageLoad(event) {
      setImage(event.target.files[0]);
  }

  function cargarNameService(event) {
      setNameS(event.target.value);
  }

  function cargarTreatment(event) {
      setTreatment(event.target.value);
  }

  // Función para agregar un nuevo consejo
  const cargarServicio = async (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Verificar que todos los campos estén llenos
  if (services_url === '' || service_name === '' || description === '') {
    console.log('Por favor, ingrese todos los datos');
    return;
  }

  // Crear el objeto JSON con los datos
  const newServices = {
    image: services_url ,  // URL de la imagen (puedes subirla si es necesario)
    Name: service_name,
    Treatment: description
  };


  console.log('Nuevo servicio:', newServices);


  const savedService = await PostServicios.PostServices(newServices);

  // Agregar el nuevo consejo al estado
  setdataService([...dataService, savedService]);
  };

  async function cargarDelete(id) {
    await DeleteServicios(id)
    const valorEncontrar = dataService.filter(newServices => newServices.id !== id)
    setdataService([...valorEncontrar])
  }


  const cargaEdicion = async (id) => {

    const serviceOriginal = dataService.find(newServices => newServices.id === id);

    if (!serviceOriginal) return;


    const nuevosDatos = {
      imagen: imagen || serviceOriginal.services_url, 
      precioP: servicEdit || serviceOriginal.service_name,  
      descripcion: descripEdit || serviceOriginal.descripcion, 
    };


    await UpdateServicios(id, nuevosDatos.imagen, nuevosDatos.servicEdit, nuevosDatos.descripcion);
    

    const ServiciosActualizado = dataService.map(newServices => 
      newServices.id === id ? { ...newServices, ...nuevosDatos } : newServices
    );

    setProducto(ServiciosActualizado);
    
    // Resetea los campos de entrada
    setImage('');
    setNameS('');
    setTreatment('');
  }

  return (
    <div>
      <div className='Servicios'>
        <div className='add'>
          <h2 className='TitleS'>Add Services</h2>
            <br />
            <label htmlFor="image" className='subTitleS'>Imagen</label>
            <input type="file" onChange={ImageLoad} className='IMGFILE' />
            <br />
            <label htmlFor="nameS" className='subTitleS'>Servicio</label>
            <input type="text" placeholder='Ingrese el Servicio' value={service_name} onChange={cargarNameService} className='IMGFILE' />
            <br />
            <label htmlFor='Treatment' className='subTitleS'>Tratamientos Vinculados</label>
            <input type="text" placeholder='Añada el Tratamiento Vinculado' value={description} onChange={cargarTreatment} className='IMGFILE' />
            <br />
            <br />
            <button className='btnadd' onClick={cargarServicio}>Add Service</button>

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

        <h1 className='historial'>WORK TEAM</h1>
        <div >
        <ul className='ul'>
          {dataService.map((Servicio) => (
            <li className='li' key={Servicio.id}>
              <br />
              <img className='imgRecid' src={Servicio.services_url}  /> <input onChange={cargaFotoEdit} type="file"  /> <br />
              {Servicio.service_name}<input  className='editInp1' type="text" onChange={cargaTitleEdit} /> 
               <br /> {Servicio.description} <input className='editInp' type="text" onChange={cargaDescripEdit} />
              <br />
              <button className='botonHis' onClick={e=>cargaEdicion(Servicio.id)}>Guardar</button>
              <button className='botonHis' onClick={e => cargarDelete(Servicio.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormAdminServicios