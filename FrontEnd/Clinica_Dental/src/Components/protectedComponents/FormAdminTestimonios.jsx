import React, { useState, useEffect } from 'react';
import GetTestimonios from '../../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios
import PostTestimonios from '../../Service/testimonios/PostTestimonios'; // Importa función para agregar testimonios
import DeleteTestimonios from '../../Service/testimonios/DeleteTestimonios';
import UpdateTestimonios from '../../Service/testimonios/UpdateTestimonios';
import '../../Styles/FormAdminTestimonios.css'

function FormAdminTestimonios() {

  const [fullname, setName] = useState(''); 
  const [date, setDate] = useState(''); 
  const [testimony, setTestimonials] = useState('');
  
  const [namedit, setNamedit] = useState('');
  const [datedit, setDatedit] = useState('');
  const [testimoniodit, setTestimoniodit] = useState('');

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
    setNamedit(event.target.value); 
  }

  function cargaDaTeEdit(event) {
    setDatedit(event.target.value); 
  }

  function cargaTestimonyEdit(event) {
    setTestimoniodit(event.target.value); 
  }

  async function cargarDelete(id) {
    await DeleteTestimonios(id)
    const valorEncontrar = dataTestimonials.filter(dataTestimonials => dataTestimonials.id !== id);
    setData([...valorEncontrar])
  }


  const cargaEdicion = async (id) => {

    const testimonialsOriginal = dataTestimonials.find(dataTestimonials => dataTestimonials.id === id);

    if (!testimonialsOriginal) return;


    const nuevosDatos = {
      fullname: namedit || testimonialsOriginal.fullname, 
      date: datedit || testimonialsOriginal.date,  
      testimony: testimoniodit || testimonialsOriginal.testimony, 
    };


    console.log(id, nuevosDatos.fullname, nuevosDatos.date, nuevosDatos.testimony);
    

    await UpdateTestimonios(id, nuevosDatos.fullname, nuevosDatos.date, nuevosDatos.testimony);
    

    const testimoniosactualizados = dataTestimonials.map(dataTestimonials => 
      dataTestimonials.id === id ? { ...dataTestimonials, ...nuevosDatos } : dataTestimonials
    );

    setData(testimoniosactualizados);
    
    // Resetea los campos de entrada
    setName('');
    setDate('');
    setTestimonials('');
  }

  const colors = ['#B28292', '#C98989', '#EE828C']; // Lista de colores
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

        <h1 className='historialT'>Registros</h1>
        <div >
        <ul className='mapTestimonios'>
          {dataTestimonials.map((testimonio, index) => (
            <li className='testimonios' style={{ backgroundColor: colors[index % colors.length] }}
            key={testimonio.id}>
              <br />
              {testimonio.fullname} <input onChange={cargaNameEdit} type="text" className='editInp' /> <br />
              {testimonio.date} <input className='editInp' type="date" onChange={cargaDaTeEdit} /> 
               <br /> {testimonio.testimony} <input className='editInp' type="text" onChange={cargaTestimonyEdit} />
              <br />
              <button className='botonHisT' onClick={e=>cargaEdicion(testimonio.id)}>Actualizar</button>
              <button className='botonHisT' onClick={e => cargarDelete(testimonio.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormAdminTestimonios