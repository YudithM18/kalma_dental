import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../Styles/FormGeneralAdministration.css'
import GetTestimonios from '../Service/testimonios/GetTestimonios'; // Importa función para obtener productos
import PostTestimonios from '../Service/testimonios/PostTestimonios'; // Importa función para agregar productos
import UpdateTestimonios from '../Service/testimonios/UpdateTestimonios'; // Importa función para actualizar productos
import DeleteTestimonios from '../Service/testimonios/DeleteTestimonios'; // Importa función para eliminar productos


function FormAdministracion() {
  // Define estados para manejar los datos del formulario
  const [Name, setName] = useState(''); // Estado para el nombre del producto
  const [Date, setDate] = useState(''); // Estado para el precio del producto
  const [Testimonials, setTestimonials] = useState(''); // Estado para la imagen del producto
  const [dataTestimonials, setData] = useState([]); // Estado para almacenar los productos obtenidos
  const [editestimonials, setvalorTestimonials] = useState(''); // Estado para el nombre del producto en edición
  const [editname, setvalorName] = useState(''); // Estado para el precio del producto en edición

  // useEffect para cargar productos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      const data = await GetTestimonios(); // Llama a la función para obtener productos
      setData(data); // Actualiza el estado con los productos obtenidos
    };
    fetchTestimonios(); // Ejecuta la función
  }, []);

  // Funciones para manejar cambios en los inputs
  function cargarName(event) {
    setName(event.target.value); // Actualiza el estado del nombre del producto
  }

  function cargarTestimonials(event) {
    set(event.target.value); // Actualiza el estado del precio del producto
  }

  // Funciones para manejar la edición
  function cargarName(event) {
    setvalorName(event.target.value); // Actualiza el nombre del producto en edición
  }

  function cargarEditTestimonials(e) {
    setvalorTestimonials(e.target.value); // Actualiza el precio del producto en edición
  }

  function cargarEliminar(id) {
    DeleteTestimonios(id); // Llama a la función para eliminar un producto
  }

  function guardarEdicion(id) {

    
    UpdateTestimonios(editname, editestimonials, id); // Llama a la función para actualizar el producto
  }

  // Renderiza el formulario y la lista de productos
  return (
    <div className='Testimonios'>
      <div className='Añadir'>
        <h2>Agregar Testimonios</h2>
        <br />
        <label htmlFor="nameT">Nombre</label>
        <input type="text" placeholder='Ingrese el nombre' value={Name} onChange={cargarName} /> {/* Input para el nombre del producto */}
        <br />
        <label htmlFor='Testimonio'>Testimonio</label>
        <input type="text" placeholder='Añada el Testimonio' value={Testimonials} onChange={cargarTestimonials} /> {/* Input para el precio del producto */}
        <br />
        <br />
        <button className='btnagregar' onClick={cargar}>Agregar Testimonio</button> {/* Botón para agregar el producto */}

        <br />
      </div>
    </div>
  );
}
export default FormGeneralAdministration