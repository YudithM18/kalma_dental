import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../../Styles/FormGeneralAdministration.css'
import PostSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/PostSpecialists';
import PostQualification from '../../Service/WorkTeam/TITULACION/PostQualification';
import PostSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/PostSpeciality';
import Swal from 'sweetalert2';




function FormAdministracion() {
  // Define estados para manejar los datos del formulario

  const [specialists_url, setImageW] = useState('');
  const [full_name, setfullName] = useState(''); 
  const [Speciality, setSpeciality] = useState(''); 
  const [Qualification, setQualification] = useState(''); 

  const [dataSpecialists, setSpecialists] = useState([]);



  //WORK TEAM

  function ImageLoad(event) {
    setImageW(event.target.files[0]);
}

  function cargarFullName(event) {
    setfullName(event.target.value);
  } 

  function cargarSpeciality(event) {
    setSpeciality(event.target.value);
  }

  function cargarQualification(event) {
    setQualification(event.target.value);
  }

  const cargarNewEspecilista = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      // Aquí va tu lógica para agregar un especialista 
      
       // Crear el objeto JSON con los datos
  const newSpecialists = {
    foto: specialists_url ,  // URL de la imagen (puedes subirla si es necesario)
    Fullname: full_name,
  };

      const responseQ = await PostQualification(Qualification)
      const responseS = await PostSpeciality(Speciality)
      const response = await PostSpecialists(newSpecialists);

       // Agregar el nuevo consejo al estado
  setSpecialists([...dataSpecialists, responseQ, responseS, response]);

      // Si la respuesta es exitosa, mostrar alerta de éxito
      if (response.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro Agregado',
          text: 'El nuevo Registro se ha añadido correctamente.',
        });
      } else {
        // Si la respuesta no es exitosa, mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al agregar el Registro. Intente nuevamente.',
        });
      }
    } catch (error) {
      // Manejo de error si ocurre un fallo en la petición
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar nuevo Registro. Por favor, intente nuevamente.',
      });
    }
  };
  


    
  // Renderiza el formulario
  return (
    <div>
      <div className='WorkTeam'>
        <div className='Añadir'>
          <h2 className='Title'>Add Work Staff</h2>
          <br />
          <label htmlFor="image" className='subTitle'>Imagen</label>
          <input className='inptWorkTeam' type="file" onChange={ImageLoad} />
          <br />
          <label htmlFor="Fname" className='subTitle'>Nombre Completo</label>
          <input className='inptWorkTeam'  type="text" placeholder='Ingrese el Nombre Completo' value={full_name} onChange={cargarFullName} />
          <br />
          <label  htmlFor="Speciality" className='subTitle'>Especialidad</label>
          <input className='inptWorkTeam' type="text" placeholder='Ingrese la Especialidad' value={Speciality} onChange={cargarSpeciality} />
          <br />
          <label htmlFor='Qualification' className='subTitle'>Titulación</label>
          <input className='inptWorkTeam' type="text" placeholder='Añada la Titulación' value={Qualification} onChange={cargarQualification} />
          <br />
          <br />
          <button className='btnagregarW' onClick={cargarNewEspecilista}>Agregar</button>

          <br />
        </div>
      </div>
    </div>
    
  );
}



export default FormAdministracion