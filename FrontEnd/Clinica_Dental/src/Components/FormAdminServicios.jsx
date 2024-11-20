import React, { useState } from 'react';
import '../Styles/FormAdminServicios.css'
import GetServicios from '../Service/Servicios/GetServicios'
import PostServicios from '../Service/Servicios/PostServicios';


function FormAdminServicios() {

  const [services_URL, setImage] = useState('');
  const [service_name, setNameS] = useState(''); 
  const [description, setTreatment] = useState('');
  const [dataService, setdataService] = useState([])

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
if (services_URL === '' || service_name === '' || description === '') {
  console.log('Por favor, ingrese todos los datos');
  return;
}

// Crear el objeto JSON con los datos
const newServices = {
  image: services_URL ,  // URL de la imagen (puedes subirla si es necesario)
  Name: service_name,
  Treatment: description
};


console.log('Nuevo servicio:', newServices);


const savedService = await PostServicios.PostServices(newServices);

// Agregar el nuevo consejo al estado
setdataService([...dataService, savedService]);
};



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
    </div>
  )
}

export default FormAdminServicios