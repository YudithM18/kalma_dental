import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../Styles/FormGeneralAdministration.css'
import GetWorkTeam from '../Service/WorkTeam/GetWorkTeam'
/*import UpdateTestimonios from '../Service/testimonios/UpdateTestimonios'; // Importa función para actualizar testimonios
import DeleteTestimonios from '../Service/testimonios/DeleteTestimonios'; // Importa función para eliminar testimonios*/


function FormAdministracion() {
  // Define estados para manejar los datos del formulario

  const [ImageW, setImageW] = useState('');
  const [FullName, setfullName] = useState(''); 
  const [Speciality, setSpeciality] = useState(''); 
  const [Qualification, setQualification] = useState(''); 


  //useEffec para cargar Work Staff al montar el componente

  useEffect(() => {
    const fetchWorkTeam = async () => {
      const data = await GetWorkTeam(); 
      setData(data);
    };
    fetchWorkTeam(); // Ejecuta la función
  }, []);


  //WORK TEAM

  function ImageLoad(event) {
    setImageW(event.target.value);
  }


  function cargarDate(event) {
    setDate(event.target.value);
  } 

  function cargarDate(event) {
    setDate(event.target.value);
  }

  const cargarWork = () => {
    console.log(Speciality); 
    PostServicios(ImageW, FullName, Speciality, Qualification,); // Llama a la función para agregar un Servicio
  };


    
  // Renderiza el formulario
  return (
    <div>
      <div className='WorkTeam'>
        <div className='Añadir'>
          <h2 className='Title'>Add Work Staff</h2>
          <br />
          <label htmlFor="image">Imagen</label>
          <input type="file" onChange={ImageLoad} />
          <br />
          <label htmlFor="Fname" className='subTitle'>Nombre Completo</label>
          <input type="text" placeholder='Ingrese el Nombre Completo' value={Name} onChange={cargarName} />
          <br />
          <label htmlFor="Speciality" className='subTitle'>Especialidad</label>
          <input type="text" placeholder='Ingrese la Especialidad' value={Name} onChange={cargarName} />
          <br />
          <label htmlFor='Qualification' className='subTitle'>Titulación</label>
          <input type="text" placeholder='Añada la Titulación' value={Testimonials} onChange={cargarTestimonials} />
          <br />
          <br />
          <button className='btnagregar' onClick={cargar}>Agregar</button>

          <br />
        </div>
      </div>
    </div>
    
  );
}



export default FormAdministracion