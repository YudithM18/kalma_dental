import React, { useState, useEffect } from 'react';
import GetTestimonios from '../../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios
import PostTestimonios from '../../Service/testimonios/PostTestimonios'; // Importa función para agregar testimonios
import DeleteTestimonios from '../../Service/testimonios/DeleteTestimonios';
import UpdateTestimonios from '../../Service/testimonios/UpdateTestimonios';
import '../../Styles/FormAdminTestimonios.css'
import Swal from 'sweetalert2';


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

  const cargar = async () => {
    // Validar que los campos no estén vacíos
    if (!fullname || !date || !testimony) {
      // Si algún campo está vacío, muestra un mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos antes de enviar.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;  // Detiene la ejecución de la función
    }
  
    try {
      // Llama a PostTestimonios y espera la respuesta
      await PostTestimonios(fullname, date, testimony);
      
      // Muestra la alerta de éxito si todo está bien
      Swal.fire({
        title: '¡Testimonio agregado!',
        text: 'El testimonio se ha agregado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
  
      // Limpiar los campos
      setName('');
      setDate('');
      setTestimonials('');
    } catch (error) {
      // Si hay un error, muestra la alerta de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al agregar el testimonio. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
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
    try {
      await DeleteTestimonios(id);
      const valorEncontrar = dataTestimonials.filter(data => data.id !== id);
      setData(valorEncontrar);
      
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El testimonio ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al eliminar el testimonio. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  }


  const cargaEdicion = async (id) => {
    const testimonialsOriginal = dataTestimonials.find(testimonio => testimonio.id === id);
    if (!testimonialsOriginal) return;

    const nuevosDatos = {
      fullname: namedit || testimonialsOriginal.fullname,
      date: datedit || testimonialsOriginal.date,
      testimony: testimoniodit || testimonialsOriginal.testimony,
    };

    try {
      await UpdateTestimonios(id, nuevosDatos.fullname, nuevosDatos.date, nuevosDatos.testimony);
      const testimoniosactualizados = dataTestimonials.map(testimonio => 
        testimonio.id === id ? { ...testimonio, ...nuevosDatos } : testimonio
      );
      setData(testimoniosactualizados);

      Swal.fire({
        title: '¡Actualizado!',
        text: 'El testimonio se ha actualizado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });

      setNamedit('');
      setDatedit('');
      setTestimoniodit('');
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al actualizar el testimonio. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

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