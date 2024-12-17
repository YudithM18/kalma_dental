import React, { useState, useEffect } from 'react';
import GetTestimonios from '../../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios
import PostTestimonios from '../../Service/testimonios/PostTestimonios'; // Importa función para agregar testimonios
import DeleteTestimonios from '../../Service/testimonios/DeleteTestimonios';
import UpdateTestimonios from '../../Service/testimonios/UpdateTestimonios';
import '../../Styles/FormAdminTestimonios.css'
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'


function FormAdminTestimonios() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

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

  // Función para cargar el testimonio
  const cargar = async () => {
    // Validar que los campos no estén vacíos
    if (!fullname || !date || !testimony) {
      // Si algún campo está vacío, muestra un mensaje de error
      Swal.fire({
        title: 'Error',
        text: t('alertaT1'), // Usar la traducción para el texto
        icon: 'error',
        confirmButtonText: t('alertaT2') // Usar la traducción para el botón
      });
      return;  // Detiene la ejecución de la función
    }

    try {
      // Llama a PostTestimonios y espera la respuesta
      await PostTestimonios(fullname, date, testimony);
      
      // Muestra la alerta de éxito si todo está bien
      Swal.fire({
        title: t('alertaT3'), // Usar la traducción para el título
        text: t('alertaT4'), // Usar la traducción para el texto
        icon: 'success',
        confirmButtonText: t('alertaT2') // Usar la traducción para el botón
      });

      // Limpiar los campos
      setFullname('');
      setDate('');
      setTestimony('');
    } catch (error) {
      // Si hay un error, muestra la alerta de error
      Swal.fire({
        title: 'Error',
        text: t('alertaT5'), // Usar la traducción para el texto de error
        icon: 'error',
        confirmButtonText: t('alertaT2') // Usar la traducción para el botón
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
      title: t('alertaT6'), // Traducción para el título
      text: t('alertaT7'), // Traducción para el texto
      icon: 'success',
      confirmButtonText: t('alertaT2') // Traducción para el texto del botón
    });

  } catch (error) {
    // Si hay un error, muestra este Swal.fire
    Swal.fire({
      title: 'Error', // Título de error (puedes traducirlo también)
      text: t('alertaT8'), // Traducción para el texto del error
      icon: 'error',
      confirmButtonText: t('alertaT2') // Traducción para el texto del botón
    });
  }
};

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

       // Mostrar alerta de éxito
       Swal.fire({
        title: t('alertaT9'), // Título traducido
        text: t('alertaT0'),  // Texto traducido
        icon: 'success',
        confirmButtonText: t('alertaT2') // Texto del botón traducido
      });

      // Limpiar los campos después de la actualización exitosa
      setNamedit('');
      setDatedit('');
      setTestimoniodit('');

    } catch (error) {
      // Si ocurre un error, muestra la alerta de error
      Swal.fire({
        title: 'Error',
        text: t('alertaT11'), // Texto de error traducido
        icon: 'error',
        confirmButtonText: t('alertaT2') // Texto del botón traducido
      });
    }
  };

  const colors = ['#B28292', '#C98989', '#EE828C']; // Lista de colores     
  
  return (
    <div>
      <div className='Testimonios'>
        <div className='Añadir'>
          <h2 className='Title'>{t('titulo_AdminT')}</h2>
          <br />
          <label htmlFor="nameT" className='subTitle'>{t('inputT1')}</label>
          <input type="text" placeholder='Ingrese el nombre' value={fullname} onChange={cargarName} />
          <br />
          <label htmlFor="date" className='subTitle'>{t('inputT2')}</label>
          <input type="date" id="date" name="date" value={date} onChange={cargarDate} />
          <br />
          <label htmlFor='Testimonio' className='subTitle'>{t('inputT3')}</label>
          <input type="text" placeholder='Añada el Testimonio' value={testimony} onChange={cargarTestimonials} />
          <br />
          <br />
          <button className='btnagregar' onClick={cargar}>{t('btnTesti')}</button>

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

        <h1 className='historialT'>{t('registrosT')}</h1>
          <div>
            <ul className='mapTestimonios'>
              {dataTestimonials.map((testimonio, index) => (
                <li 
                  key={testimonio.id} 
                  className='testimonios' 
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {/* Columna de datos (nombre, fecha y testimonio) */}
                  <div className='data-column'>
                    <br />
                    <div>{testimonio.fullname}</div>
                    <br />
                    <div>{testimonio.date}</div>
                    <br />
                    <div>{testimonio.testimony}</div>
                    <br />
                  </div>

                  {/* Columna de inputs para edición */}
                  <div className='edit-column'>
                    <input 
                      onChange={cargaNameEdit} 
                      type="text" 
                      className='editInp' 
                      placeholder="Editar nombre" 
                    />
                    <input 
                      className='editInp' 
                      type="date" 
                      onChange={cargaDaTeEdit} 
                      placeholder="Editar fecha" 
                    />
                    <input 
                      className='editInp' 
                      type="text" 
                      onChange={cargaTestimonyEdit} 
                      placeholder="Editar testimonio" 
                    />
                    <button 
                      className='botonHisT' 
                      onClick={() => cargaEdicion(testimonio.id)}
                    >
                      {t('btnActualizar')}
                    </button>
                    <button 
                      className='botonHisT' 
                      onClick={() => cargarDelete(testimonio.id)}
                    >
                      {t('btnEliminar')}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

    </div>
  )
}

export default FormAdminTestimonios