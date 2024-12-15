import React from 'react'
import '../Styles/FormTerminosCondiciones.css'
import logo from '../Img/Logo_principal.jpg'

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

function FormTerminosCondiciones() {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };


  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className='contorno'>
        <br />
        <div className='Condiciones'>
          <br />
        <div className='titleSecundary'>  
          <h3>{t('tituloPrincipalTC')}</h3>
          <h4 className='text'>{t('textoTC')}</h4>
        </div> 
        <div className='titleSecundary'>  
          <h3>{t('tituloSecundary0')}</h3>
          <h4 className='text'>{t('textoPc0')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary1')}</h3>
          <h4 className='text'>{t('textoPc1')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary2')}</h3>
          <h4 className='text'>{t('textoPc2')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary3')}</h3>
          <h4 className='text'>{t('textoPc3')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary4')}</h3>
          <h4 className='text'>{t('textoPc4')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary5')}</h3>
          <h4 className='text'>{t('textoPc5')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary6')}</h3>
          <h4 className='text'>{t('textoPc6')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary7')}</h3>
          <h4 className='text'>{t('textoPc7')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary8')}</h3>
          <h4 className='text'>{t('textoPc8')}</h4>
        </div>
        <div className='titleSecundary'>
          <h3>{t('tituloSecundary9')}</h3>
          <h4 className='text'>{t('textoPc9')}</h4>
        </div>
        </div>
        <br />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <img className='logo' src= {logo} alt="Logo Kalma Dental" />
    </div>
  )
}

export default FormTerminosCondiciones