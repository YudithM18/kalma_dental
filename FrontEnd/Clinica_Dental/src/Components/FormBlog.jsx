import React, {useEffect, useState} from 'react'
import GetTips from '../Service/Consejos/GetTips';
import GetVideoBlog from '../Service/VideoBlog/GetVideoBlog';

function FormBlog() {
  const [consejos, setConsejos] = useState([])
  const [videoBlog, setVideoBlog] = useState([]);


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

        <h1 className='historial'>Recomendaciones para tu cuidado bocal:</h1>
        <div className='conteiner-datos'>
        <ul className='ul'>
          {consejos.map((consejitos) => (
            <li className='li' key={consejitos.id}>
              <h2>{consejitos.tips_title}</h2>
              <br />
              <img src={consejitos.recommendations_url} alt="Consejo"className='imagenC'/>
              {consejitos.tips_title}
               <br /> {consejitos.tips_description}
              </li>
          ))}
        </ul>
        </div>
        <div >
        <ul className='ul'>
          {videoBlog.map((blogV) => (
            <li className='li' key={blogV.id}>
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