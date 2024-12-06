import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../../Styles/FormGeneralAdministration.css';

// MÉTODOS POST 
import PostSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/PostSpecialists';
// MÉTODOS GET
import GetSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
// MÉTODO PUT
import UpdateSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/UpdateSpecialists';
// MÉTODOS DELETE 
import DeleteSpecialists from '../../Service/WorkTeam/ESPECIALISTAS/DeleteSpecialists';

// SweetAlert2
import Swal from 'sweetalert2';

function FormAdministracion() {
  // Define estados para manejar los datos del formulario
  const [specialists_url, setImageW] = useState('');
  const [full_name, setfullName] = useState('');
  const [Speciality, setSpeciality] = useState('');
  const [Qualification, setQualification] = useState('');

  const [dataSpecialists, setSpecialists] = useState([]);
  const [dataQualification, setDatatitulacion] = useState([]);
  const [dataSpeciality, setDataEspecialidad] = useState([]);

  // Hook para obtener los datos de especialistas
  useEffect(() => {
    const fetchEspecialista = async () => {
      const Especialistas = await GetSpecialists();
      setSpecialists(Especialistas);
    };
    fetchEspecialista();
  }, []);

  // Hook para obtener los datos de especialidades
  useEffect(() => {
    const fetchEspecialidad = async () => {
      const Especialidades = await GetSpeciality();
      setDataEspecialidad(Especialidades);
    };
    fetchEspecialidad();
  }, []);

  // Hook para obtener los datos de titulaciones
  useEffect(() => {
    const fetchTitulaciones = async () => {
      const Titulaciones = await GetQualification();
      setDatatitulacion(Titulaciones);
    };
    fetchTitulaciones();
  }, []);

  // Función para manejar la carga de la imagen
  function ImageLoad(event) {
    setImageW(event.target.files[0]);
  }

  // Función para manejar el nombre completo
  function cargarFullName(event) {
    setfullName(event.target.value);
  }

  // Función para manejar la especialidad
  function cargarSpeciality(event) {
    setSpeciality(event.target.value);
  }

  // Función para manejar la titulación
  function cargarQualification(event) {
    setQualification(event.target.value);
  }

  function ImageLoad_edit(event) {
    setImageW(event.target.files[0]);
  }

  function cargarFullName_edit(event) {
    setfullName(event.target.value); 
  }
  
  function cargarSpeciality_edit(event) {
    setSpeciality(event.target.value); 
  }
  
  function cargarQualification_edit(event) {
    setQualification(event.target.value); 
  }

  // Función para agregar un nuevo especialista
  const cargarNewEspecilista = async (event) => {
    event.preventDefault();

    try {
      const newSpecialists = {
        foto: specialists_url,  // URL de la imagen
        Fullname: full_name,
        IdQualification: Qualification,
        IdSpeciality: Speciality,
      };
      
      const response = await PostSpecialists(newSpecialists);
      console.log(response);

      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Registro Agregado',
          text: 'El nuevo Registro se ha añadido correctamente.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al agregar el Registro. Intente nuevamente.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar nuevo Registro. Por favor, intente nuevamente.',
      });
    }
  };

  // Función para eliminar un especialista
  async function cargarDelete(id) {
    const confirmDelete = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás recuperar este especialista después de eliminarlo.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (confirmDelete.isConfirmed) {
      await DeleteSpecialists(id);
      const valorEncontrar = dataSpecialists.filter(especialista => especialista.id !== id);
      setSpecialists([...valorEncontrar]);

      Swal.fire('Eliminado!', 'El especialista ha sido eliminado.', 'success');
    }
  }

  // Función para editar un especialista
  const cargaEdicion = async (id) => {
    const specialistOriginal = dataSpecialists.find(especialista => especialista.id === id);

    if (!specialistOriginal) return;

    const nuevosDatos = {
      imagen: specialists_url || specialistOriginal.specialists_url,
      name: full_name || specialistOriginal.full_name,
      speciality: Speciality || specialistOriginal.speciality,
      qualification: Qualification || specialistOriginal.qualification,
    };

    try {
      await UpdateSpecialists(id, nuevosDatos.imagen, nuevosDatos.name, nuevosDatos.speciality, nuevosDatos.qualification);

      const SpecialistsUpdated = dataSpecialists.map(especialista =>
        especialista.id === id ? { ...especialista, ...nuevosDatos } : especialista
      );

      setSpecialists(SpecialistsUpdated);

      // Resetea los campos de entrada
      setImageW('');
      setfullName('');
      setSpeciality('');
      setQualification('');

      Swal.fire({
        icon: 'success',
        title: 'Especialista Actualizado',
        text: 'Los cambios han sido guardados correctamente.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar el especialista.',
      });
    }
  }

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
          <input className='inptWorkTeam' type="text" placeholder='Ingrese el Nombre Completo' value={full_name} onChange={cargarFullName} />
          <br />
          <label htmlFor="Speciality" className='subTitle'>Especialidad</label>
          <select className='inptWorkTeam' value={Speciality} onChange={cargarSpeciality} id="Speciality">
            <option value="">Seleccionar especialidad</option>
            {dataSpeciality.map((speciality) => (
              <option key={speciality.id} value={speciality.id}>
                {speciality.speciality_name} {/* Mostrar el nombre de la especialidad */}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor='Qualification' className='subTitle'>Titulación</label>
          <select className='inptWorkTeam' value={Qualification} onChange={cargarQualification} id="Qualification">
            <option value="">Seleccione una titulación</option>
            {dataQualification.map((qualification) => (
              <option key={qualification.id} value={qualification.id}>
                {qualification.qualification_name} {/* Mostrar el nombre de la titulacion */}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button className='btnagregarW' onClick={cargarNewEspecilista}>Agregar</button>
          <br />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h1 className='historial'>Registros</h1>
      <div className='workTeam-conteiner'>
        <ul className='ul'>
          {dataSpecialists.map((especialista) => {
            const Qualification = dataQualification.find(qualification => qualification.id === especialista.id);
            const Speciality = dataSpeciality.find(specialty => specialty.id === especialista.id);

            return (
              <li className='li' key={especialista.id}>
                <br />
                <img className='imgRecid' src={especialista.specialists_url} />
                <input onChange={ImageLoad_edit} type="file" />
                <br />
                {especialista.full_name}
                <input type="text" value={full_name} onChange={cargarFullName_edit} />
                <br />
                {Speciality ? (
                  <span>{Speciality.speciality_name}</span> // Muestra el nombre de la especialidad
                ) : (
                  <span>Sin especialidad</span>
                )}
                <input type="text" onChange={cargarSpeciality_edit} />
                <br />
                {Qualification ? (
                  <span>{Qualification.qualification_name}</span> // Muestra la titulación
                ) : (
                  <span>Sin Titulación</span>
                )}
                <input type="text" onChange={cargarQualification_edit} />
                <br />
                <button className='botonHis' onClick={e => cargaEdicion(especialista.id)}>Guardar</button>
                <button className='botonHis' onClick={e => cargarDelete(especialista.id)}>Eliminar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FormAdministracion;