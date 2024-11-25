import React, { useState, useEffect } from 'react';
import GetTestimonios from '../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios
import PostTestimonios from '../Service/testimonios/PostTestimonios'; // Importa función para agregar testimonios
import DeleteTestimonios from '../Service/testimonios/DeleteTestimonios';
import UpdateTestimonios from '../Service/testimonios/UpdateTestimonios';
import '../Styles/FormAdminTestimonios.css'

function FormAdminTestimonios() {

  const [fullname, setName] = useState(''); 
  const [date, setDate] = useState(''); 
  const [testimony, setTestimonials] = useState(''); 
  const [dataTestimonials, setData] = useState([]); 
  
  


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
    console.log("se logro!!!");
    
  };

  function cargaNameEdit(event) {
    setName(event.target.value); 
  }

  function cargaDaTeEdit(event) {
    setDate(event.target.value); 
  }

  function cargaTestimonyEdit(event) {
    setTestimonials(event.target.value); 
  }

  async function cargarDelete(id) {
    await DeleteTestimonios(id)
    const valorEncontrar = dataTestimonials.filter(dataTestimonials=> dataTestimonials.id !== id)
    setData([...valorEncontrar])
  }


  const cargaEdicion = async (id) => {

    const testimonialsOriginal = dataTestimonials.find(dataTestimonials => dataTestimonials.id === id);

    if (!testimonialsOriginal) return;


    const nuevosDatos = {
      name: fullnamedit || testimonialsOriginal.fullname, 
      date: datedit || testimonialsOriginal.date,  
      testimony: testimonyedit || testimonialsOriginal.testimony, 
    };


    await UpdateServicios(id, nuevosDatos.name, nuevosDatos.date, nuevosDatos.testimony);
    

    const testimoniosactualizados = dataTestimonials.map(dataTestimonials => 
      dataTestimonials.id === id ? { ...dataTestimonials, ...nuevosDatos } : dataTestimonials
    );

    setData(testimoniosactualizados);
    
    // Resetea los campos de entrada
    setName('');
    setDate('');
    setTestimonials('');
  }


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


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>Registros</h1>
        <div >
        <ul className='ul'>
          {dataTestimonials.map((testimonio) => (
            <li className='li' key={testimonio.id}>
              <br />
              {testimonio.fullname} <input onChange={cargaNameEdit} type="text"  /> <br />
              {testimonio.date} <input  className='editInp1' type="text" onChange={cargaDaTeEdit} /> 
               <br /> {testimonio.testimony} <input className='editInp' type="text" onChange={cargaTestimonyEdit} />
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

export default FormAdminTestimonios