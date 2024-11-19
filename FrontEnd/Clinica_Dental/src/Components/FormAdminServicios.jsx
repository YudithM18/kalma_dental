import React, { useState, useEffect } from 'react';
import '../Styles/FormAdminServicios.css'
import GetServicios from '../Service/Servicios/GetServicios'
import PostServicios from '../Service/Servicios/PostServicios';


function FormAdminServicios() {

  const [Image, setImage] = useState('');
  const [NameService, setNameS] = useState(''); 
  const [Treatment, setTreatment] = useState('');


  //useEffect de SERVICIOS
  useEffect(() => {
    const fetchServicios = async () => {
      const data = await GetServicios(); 
      setData(data);
    };
    fetchServicios(); // Ejecuta la función
  }, []);



   //SERVICIOS

  function ImageLoad(event) {
    setImage(event.target.value);
  }

  function cargarNameService(event) {
    setNameS(event.target.value); // Actualiza el nombre del servicio
  }

  function cargarTreatment(event) {
    setTreatment(event.target.value); // Actualiza el tratamiento
  }

  const cargarServicio = () => {
    console.log(Treatment); 
    PostServicios(Image, NameService, Treatment); // Llama a la función para agregar un Servicio
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
            <input type="text" placeholder='Ingrese el Servicio' value={NameService} onChange={cargarNameService} className='IMGFILE' />
            <br />
            <label htmlFor='Treatment' className='subTitleS'>Tratamientos Vinculados</label>
            <input type="text" placeholder='Añada el Tratamiento Vinculado' value={Treatment} onChange={cargarTreatment} className='IMGFILE' />
            <br />
            <br />
            <button className='btnadd' onClick={cargarServicio}>Agregar Servicio</button>

            <br />
        </div>
      </div>
    </div>
  )
}

export default FormAdminServicios