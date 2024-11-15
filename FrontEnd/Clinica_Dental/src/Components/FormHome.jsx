import React, { useState, useEffect } from 'react';
import '../Styles/FormHome.css';
import clinica4 from '../Img/clinica4.jpg';
import clinica_2 from '../Img/clinica_2.jpg';
import silla4 from '../Img/silla4.jpg';

const FormHome = () => {
  const slides = [
    clinica4,
    clinica_2,
    silla4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
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
  );
};

export default FormHome;
