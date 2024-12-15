import React from 'react'
import '../../Styles/FormDonaciones.css'
import teleton from '../../Img/Teletón.jpg';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

function Donaciones() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  return (
    <div className='donaciones-container'>
      <div>
        <img className="img-teleton" src={teleton} alt="Decoracion" />
        <br />
        <br />
        <br />
        <br />
        <h2 className='donacion'>{t('titulo_donacion')}</h2>
      </div>
      <br />
      <br />
      <div className='card-content'>
        <div className='card-content-donacion'>
          <h4>{t('carta_1')}</h4>
          <h4>{t('carta_2')}</h4>
          <h4>{t('carta_3')}</h4> 
          <h4>{t('carta_4')}</h4>
        </div>
      </div>
    </div>
  )
}

export default Donaciones