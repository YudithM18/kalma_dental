import React, { useState, useEffect } from 'react';
import GetTestimonios from '../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios
import PostTestimonios from '../Service/testimonios/PostTestimonios'; // Importa función para agregar testimonios
import '../Styles/FormAdminTestimonios.css'

function FormAdminTestimonios() {

  const [fullname, setName] = useState(''); 
  const [date, setDate] = useState(''); 
  const [testimony, setTestimonials] = useState(''); 
  const [dataTestimonials, setData] = useState([]); 
  const [editestimonials, setvalorTestimonials] = useState('');
  const [editname, setvalorName] = useState('');


  // useEffect para cargar Testimonios al montar el componente
  useEffect(() => {
    const fetchTestimonios = async () => {
      const data = await GetTestimonios(); 
      setData(data);
    };
    fetchTestimonios(); // Ejecuta la función
  }, []);


  // Funciones para manejar cambios en los inputs
  function cargarName(event) {
    setName(event.target.value); // Actualiza el estado del nombre del testimonio
  }

  function cargarTestimonials(event) {
    setTestimonials(event.target.value); // Actualiza el testimonio
  }

  function cargarDate(event) {
    setDate(event.target.value); // Actualiza la fecha
  }

  const cargar = () => {
    PostTestimonios(fullname, date, testimony); // Llama a la función para agregar un testimonio
  };


  return (
    <div>
      <div className='Testimonios'>
        <div className='Añadir'>
          <h2 className='Title'>Add Testimonials</h2>
          <br />
          <label htmlFor="nameT" className='subTitle'>Nombre</label>
          <input type="text" placeholder='Ingrese el nombre' value={fullname} onChange={cargarName} />
          <br />
          <label htmlFor="date" className='subTitle'>Fecha del Testimonio:</label>
          <input type="date" id="date" name="date" value={date} onChange={cargarDate} />
          <br />
          <label htmlFor='Testimonio' className='subTitle'>Testimonio</label>
          <input type="text" placeholder='Añada el Testimonio' value={testimony} onChange={cargarTestimonials} />
          <br />
          <br />
          <button className='btnagregar' onClick={cargar}>Agregar Testimonio</button>

          <br />
        </div>
      </div>
    </div>
  )
}

export default FormAdminTestimonios