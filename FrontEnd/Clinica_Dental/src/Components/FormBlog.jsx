import React, {useEffect, useState} from 'react'
import GetTips from '../Service/Consejos/GetTips';
import GetVideoBlog from '../Service/VideoBlog/GetVideoBlog';

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'

import '../Styles/FormBlog.css'

function FormBlog() {
  const [consejos, setConsejos] = useState([])
  const [videoBlog, setVideoBlog] = useState([]);


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };



  // useEffect para cargar Testimonios al montar el componente
 useEffect(() => {
    const fetchVideoBlog = async () => {
      const dataBlogV = await GetVideoBlog(); 
      setVideoBlog(dataBlogV);
    };
    fetchVideoBlog(); // Ejecuta la función
  }, []);


  useEffect(() => {
    const fetchConsejos = async () => {
      const dataConsejo = await GetTips(); 
      setConsejos(dataConsejo);
    };
    fetchConsejos(); // Ejecuta la función
  }, []);


  return (
    <div>
        <br />
        <br />
        <br />
        <br />

        <h1 className='TituloReenderizado'>{t('tituloBlog1')}</h1>
          <div className='conteiner-reenderizado-Tip'>
            <ul className='mapTipsReenderizado'>
              {consejos.map((consejitos) => (
                <li className='listaTipsExists' key={consejitos.id}>
                  <img src={consejitos.recommendations_url} alt="Consejo" className="imagenC" />
                  <div className="textoContenido">
                    <h2>{consejitos.tips_title}</h2>
                    <div className="tip-description">{consejitos.tips_description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>


        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>{t('tituloBlog2')}</h1>
        <div className='conteiner-reenderizado-video'>
        <ul className='mapVideoReenderizado'>
          {videoBlog.map((blogV) => (
            <li className='listaVideosExists' key={blogV.id}>
              <br />
              {blogV.video_url}<br />
              {blogV.title} 
              <br />
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormBlog