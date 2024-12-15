import React from 'react'
import '../Styles/FormAboutUs.css'

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

function FormAboutUs() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };


  return (
    <div className="info">
      <div className="mision">
      <h3>{t('misión')}</h3>
      <h4>{t('textoM')}</h4>
      </div>
      <div className="vision">
        <h3>{t('visión')}</h3>
        <h4>{t('textoV')}</h4> 
      </div>
      <div className="colaboradores">
        <h3>{t('colaboradores')}</h3>
        <h4>{t('textoC')}</h4>
      </div>
    </div>
  )
}

export default FormAboutUs