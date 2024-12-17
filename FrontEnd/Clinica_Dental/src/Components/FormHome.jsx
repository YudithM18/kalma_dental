import React, { useState, useEffect } from 'react';
import '../Styles/FormHome.css';
import clinica4 from '../Img/clinica4.jpg';
import clinica_2 from '../Img/clinica_2.jpg';
import silla4 from '../Img/silla4.jpg';

// MÉTODOS GET
import GetSpecialists from '../Service/WorkTeam/ESPECIALISTAS/GetSpecialists';
import GetQualification from '../Service/WorkTeam/TITULACION/GetQualification';
import GetSpeciality from '../Service/WorkTeam/ESPECIALIDAD/GetSpeciality';
import GetTestimonios from '../Service/testimonios/GetTestimonios'; // Importa función para obtener testimonios


import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

const FormHome = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };



  const slides = [
    clinica4,
    clinica_2,
    silla4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0); // Índice del testimonio actual

  ///SETEO DE REGISTROS EN LA BASE DE DATOS
  const [dataSpecialists, setSpecialists] = useState([]);
  const [dataQualification, setDatatitulacion] = useState([]);
  const [dataSpeciality, setDataEspecialidad] = useState([]);
  const [dataTestimonials, setData] = useState([]); 

  

  // Cambiar automáticamente de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

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

  // useEffect para cargar Testimonios al montar el componente
  useEffect(() => {
    const fetchTestimonios = async () => {
      const data = await GetTestimonios(); 
      setData(data);
    };
    fetchTestimonios(); // Ejecuta la función
  }, []);

   // useEffect para manejar el desplazamiento automático cada 3 segundos
   useEffect(() => {
    if (dataTestimonials.length > 0) {
      const interval = setInterval(() => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % dataTestimonials.length);
      }, 3000); // Cambia el índice cada 3 segundos

      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(interval);
    }
  }, [dataTestimonials]); // Se vuelve a ejecutar si los datos de los testimonios cambian

  // Función para el siguiente testimonio
  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % dataTestimonials.length);
  };

  // Función para el testimonio anterior
  const prevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + dataTestimonials.length) % dataTestimonials.length);
  };

  const colors = ['#B28292', '#C98989', '#EE828C']; // Lista de colores  
  

  


  return (
    <div>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <img src={slide} alt={`Slide ${index + 1}`} className="carousel-image" key={index} />
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <br />
      <h1 className="reenderizados-Especialistas">{t('tituloInicio')}</h1>
<div className="workTeam-conteiner-especialistas">
  <ul className="mapEspecialistasReenderizados">
    {dataSpecialists.map((especialista) => {
      const Qualification = dataQualification.find(qualification => qualification.id === especialista.id_qualification);
      const Speciality = dataSpeciality.find(specialty => specialty.id === especialista.id_speciality);

      return (
        <li className="listas-de-especialistas" key={especialista.id}>
          <div className="especialista-card">
            <img className="imgRecidReendEspecialis" src={especialista.specialists_url} alt={especialista.full_name} />
            <h3 className="especialista-name">{especialista.full_name}</h3>
            <div className="especialista-info">
              <div className="especialidad">
                {Speciality ? (
                  <span className="especialidad-name">{Speciality.speciality_name}</span>  // Muestra el nombre de la especialidad
                ) : (
                  <span>Sin especialidad</span>  // Si no tiene especialidad
                )}
              </div>
              <div className="titulation">
                {Qualification ? (
                  <span className="qualification-name">{Qualification.qualification_name}</span>  // Muestra la titulación
                ) : (
                  <span>Sin Titulación</span>  // Si no tiene titulación
                )}
              </div>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
</div>


      <br />
      <br />
      <h1 className="historialT">{t('tituloInicio2')}</h1>
      {/* Carrusel para los testimonios */}
      <div className="testimonial-carousel">
        {/* Flecha izquierda */}
        <button className="testimonial-btn prev" onClick={prevTestimonial}>
          &#10094;
        </button>

        {/* Slides de testimonios */}
        <div className="testimonial-slides" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
          {dataTestimonials.map((testimonio, index) => (
            <div className="testimonial-item" key={testimonio.id} style={{ backgroundColor: colors[index % colors.length] }}>
              <p><strong>{testimonio.fullname}</strong></p>
              <p>{testimonio.date}</p>
              <p>"{testimonio.testimony}"</p>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button className="testimonial-btn next" onClick={nextTestimonial}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FormHome;
