import React from 'react'
import '../Styles/FormPoliticasPrivacidad.css'

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

function FormPoliticasPrivacidad() {


    const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  
  return (
    <div className='conteiner'>
        <div className='card-1'>
            <div className='card-header-1'>
                <h1>{t('tituloPP')}</h1>
                <h2>{t('textoPP')}</h2>
            </div>
        </div>    
        <br />
        <br />
        <div className='columna1'>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP1')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP1')}</h4>
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP2')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP2')}</h4>
                </div>    
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP3')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP3')}</h4>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className='columna2'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>{t('tituloPP4')}</h3>
                    </div>
                    <div className='card-body'>
                        <h4>{t('textoPP4')}</h4>
                    </div>
                </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP5')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP5')}</h4>
                </div>  
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP6')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP6')}</h4>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className='columna3'>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP7')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP7')}</h4>
                </div>  
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP8')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP8')}</h4>
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP9')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP9')}</h4>
                </div>
            </div>
        </div>   
            <br />
            <br />
        <div className='columna4'>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP0')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP0')}</h4>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP11')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP11')}</h4>
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h3>{t('tituloPP12')}</h3>
                </div>
                <div className='card-body'>
                    <h4>{t('textoPP12')}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormPoliticasPrivacidad