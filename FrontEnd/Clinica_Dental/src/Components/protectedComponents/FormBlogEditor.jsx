import React, { useState, useEffect } from 'react'
import '../../Styles/FormBlogEditor.css'
import Swal from 'sweetalert2';
import { uploadImageToS3 } from '../../Service/Consejos/PostTips'; 

import PostTips from '../../Service/Consejos/PostTips'
import GetTips from '../../Service/Consejos/GetTips'
import DeleteTips from '../../Service/Consejos/DeleteTips'
import UpdateTips from '../../Service/Consejos/UpdateTips'

import PostVideoBlog from '../../Service/VideoBlog/PostVideoBlog'
import GetVideoBlog from '../../Service/VideoBlog/GetVideoBlog'
import UpdateVideoBlog from '../../Service/VideoBlog/UpdateVideoBlog'  
import DeleteVideoBlog from '../../Service/VideoBlog/DeleteVideoBlog'

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'


function FormBlogEditor() {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  const [tips_title, setTitle] = useState('');
  const [tips_description, setTips] = useState('');
  const [recommendations_url , setImage] = useState();

  const [recommendations_url_edit , setImageEdit] = useState ('');
  const [tipsdescription_edit , setDescripEdit] = useState ('');
  const [tips_title_edit , setTitleEdit] = useState ('');

  const [consejos, setConsejos] = useState([])
//////////////////////////////////////////////////
  const [video_url, setVideo] = useState('');
  const [title, setTitulo] = useState('');
  const [content, setDescription] = useState('');

  const [video_url_edit, setVideoEdit] = useState('');
  const [title_edit, setTituloEdit] = useState('');
  const [content_edit, setDescriptionEdit] = useState('');

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


  const ImageNameRandom = (longitud = 20) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let nombre = '';
    for (let i = 0; i < longitud; i++) {
      nombre += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return nombre;
  };

  
  function cargaImagen(event) {
    const NameRandom = ImageNameRandom();
    const archivo = event.target.files[0];

    
    if (archivo) {
      const nuevoArchivo = new File([archivo], `${NameRandom}.${archivo.name.split('.').pop()}`, { type: archivo.type });
      setImage(nuevoArchivo);
    }
}

  function cargaTitulo(event) {
      setTitle(event.target.value);
  }

  function cargaContenido(event) {
      setTips(event.target.value);
  }

 // Función para agregar un nuevo consejo
 const cargaNewTip = async (event) => {
  event.preventDefault();

  // Verificar que todos los campos estén llenos
  if (recommendations_url === '' || tips_title === '' || tips_description === '') {
    Swal.fire('¡Error!', t('alertaB_R'), 'error');
    return;
  }

  const newTip = {
    image: recommendations_url,
    title: tips_title,
    content: tips_description
  };


  console.log(newTip);
  
  const savedTip = await PostTips.PostTips(newTip);

  setConsejos([...consejos, savedTip]);

  // Mostrar alerta de éxito
  Swal.fire( t('alertaB_R1'),  t('alertaB_R2'), 'success');
};


////////////////////CONSEJOS

function cargaTitleEditTips(event) {
  setTitleEdit(event.target.value); 
}


function cargaTipsDescripEdit(event) {
  setDescripEdit(event.target.value); 
}

function cargaImageEdit(event) {
  setImageEdit(event.target.files[0]); 
}

async function cargarDeleteTips(id) {
  const result = await Swal.fire({
    title:t('alertaB_R3'),
    text: t('alertaB_R4'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText:t('alertaB_R5'),
    cancelButtonText: t('alertaB_R6')
  });

  if (result.isConfirmed) {
    await DeleteTips(id);
    const valorEncontrarC = consejos.filter(consejos => consejos.id !== id);
    setConsejos([...valorEncontrarC]);

    // Mostrar alerta de éxito
    Swal.fire(t('alertaB_R7'), t('alertaB_R8'), 'success');
  }
}



const cargaEdicionTips = async (id) => {
  const ConsejosOriginal = consejos.find((consejos) => consejos.id === id);
  if (!ConsejosOriginal) return;


  //Obtener nombre original

  const OriginalImageName  = ConsejosOriginal.recommendations_url

  
const parts = OriginalImageName.split('/');

// El último elemento del array será el nombre del archivo
const fileName = parts[parts.length - 1];


console.log(fileName);
console.log(recommendations_url_edit);

  
  if (recommendations_url_edit) {
    try {
      const Archive = recommendations_url_edit;  // Este es el archivo que el usuario ha cargado
      const NewArchive = new File([Archive], fileName);
     // console.log(NewArchive);
      
      let NewImagenURL= " "

      const result = await uploadImageToS3(NewArchive);  // Subir la imagen con el nombre original
      NewImagenURL = result.Location;
      console.log('Nueva imagen subida a S3:', NewImagenURL);

    } catch (error) {
      console.error('Error al subir la nueva imagen:', error);
      
      Swal.fire('Error', 'No se pudo subir la nueva imagen.', 'error');
      return;
    }
  }

   

  // Nuevos datos para actualizar
  const nuevosDatos = {
    recommendations_url: recommendations_url_edit || ConsejosOriginal.recommendations_url,  // Usar la URL de la nueva imagen
    tips_title: tips_title_edit || ConsejosOriginal.tips_title,  
    tips_description: tipsdescription_edit || ConsejosOriginal.tips_description,
  };

  try {

    
    
    const result = await UpdateTips(id, nuevosDatos.recommendations_url, nuevosDatos.tips_title, nuevosDatos.tips_description);
    console.log('Resultado de la actualización:', result);

    if (result && result.success) {
      const ConsejosActualizados = consejos.map((consejos) =>
        consejos.id === id ? { ...consejos, ...nuevosDatos } : consejos
      );
      setConsejos(ConsejosActualizados);

      // Mostrar alerta de éxito
      Swal.fire(t('alertaB_R9'), t('alertaB_R0'), 'success');
    } else {
      Swal.fire('Error', t('alertaB_R11'), 'error');
    }
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
    Swal.fire('Error', t('alertaB_R12'), 'error');
  }

  // Limpiar los campos después de actualizar
  setTitleEdit('');
  setDescripEdit('');
  setImageEdit('');
};



//////////////VIDEO
function cargaVideo(event) {
  setVideo(event.target.files[0]);
}

function cargatituloV(event) {
  setTitulo(event.target.value);
}

function cargaContenidoV(event) {
  setDescription (event.target.value);
}

 // Función para agregar un nuevo consejo
 const cargarNewContent = async (event) => {
  event.preventDefault();

  // Verificar que todos los campos estén llenos
  if (video_url === '' || title === '' || content === '') {
    Swal.fire('¡Error!', t(alertaB_V), 'error');
    return;
  }

  const newContent = {
    video_url: video_url,
    title: title,
    content: content
  };

  const savedContent = await PostVideoBlog(newContent);
  setVideoBlog([...videoBlog, savedContent]);

  // Mostrar alerta de éxito
  Swal.fire(t(alertaB_V1), t(alertaB_V2), 'success');
};



function cargaVideoEdit(event) {
  setVideoEdit(event.target.value); 
}

function cargaTitleEdit(event) {

  console.log(event.target.value);
  
  setTituloEdit(event.target.value); 
}

function cargaContentEdit(event) {
  setDescriptionEdit(event.target.value); 
}

async function cargarDeleteV(id) {
  const result = await Swal.fire({
    title: t('alertaB_V3'),
    text: t('alertaB_V4'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: t('alertaB_V5'),
    cancelButtonText: t('alertaB_V6')
  });

  if (result.isConfirmed) {
    await DeleteVideoBlog(id);
    const valorEncontrar = videoBlog.filter(videoBlog => videoBlog.id !== id);
    setVideoBlog([...valorEncontrar]);

    // Mostrar alerta de éxito
    Swal.fire(t('alertaB_V7'), t('alertaB_V8'), 'success');
  }
}



const cargaEdicionV = async (id) => {
  const VideoBlogOriginal = videoBlog.find(videoBlog => videoBlog.id === id);
  if (!VideoBlogOriginal) return;

  const nuevosDatosVB = {
    video_url: video_url_edit || VideoBlogOriginal.video_url,
    title: title_edit || VideoBlogOriginal.title,
    content: content_edit || VideoBlogOriginal.content,
  };

 
  
  await UpdateVideoBlog(id, nuevosDatosVB.video_url, nuevosDatosVB.title, nuevosDatosVB.content);

  const VideoBlogActualizado = videoBlog.map(videoBlog =>
    videoBlog.id === id ? { ...videoBlog, ...nuevosDatosVB } : videoBlog
  );
  setVideoBlog(VideoBlogActualizado);

  // Mostrar alerta de éxito
  Swal.fire(t('alertaB_V9'), t('alertaB_V0'), 'success');

  setVideo('');
  setTitulo('');
  setDescription('');
};



  return (
    <div>
      <div className='contenedor_Tips'>
      <h1 className='titulocontenedor'>{t('tituloAdminB_R')}</h1>
      <form>
        <label className='subtitulo'>{t('inputImagenR')}</label>
        <input className='inputFile' type="file"  accept='image/*' onChange={cargaImagen}/>
        <br/>
        <label className='subtitulo'>{t('inputR1')}</label>
        <input className='input' placeholder = 'Añadir titulo ' type="text" value={tips_title}  onChange={cargaTitulo}/>
        <br/>
        <label className='subtitulo'>{t('inputR2')}</label>
        <textarea className='input' placeholder = 'Añadir consejo' value={tips_description} onChange={cargaContenido}/>
        <br/>
        <button className='btnAgregarT' onClick={cargaNewTip}>{t('btnRecomedar')}</button>
      </form>
      </div>

      <div className='contenedorVideoBlog'>
      <h1 className='titulocontenedor'>{t('tituloAdminB_V')}</h1>
      <form>
        <label className='subtitulo'>{t('inputMV')}</label>
        <input 
          className='inputFile' 
          type="file" 
          accept="video/*"  // Solo permite archivos de video
          onChange={cargaVideo}
        />
        <br/>
        <label className='subtitulo'>{t('inputTV')}</label>
        <input className='input2' placeholder = 'Añadir Titulo'  type="text" value={title} onChange={cargatituloV}/>
        <br/>
        <label className='subtitulo'>{t('inputV')}</label>
        <textarea className='input2' placeholder = 'Añadir contenido' value={content} onChange={cargaContenidoV}/>
        <button className='btnAgregarV' onClick={cargarNewContent}>{t('btnSubirV')}</button>
      </form>
      </div>


      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='sectionTitle'>{t('registroR')}</h1>
<div className='containerTips'>
  <ul className='tipList'>
    {consejos.map((consejitos) => (
      <li key={consejitos.id} className='tipItem'>
        
        {/* Columna de datos: Título, Imagen y Descripción */}
        <div className='tipDataColumn'>
          <h2>{consejitos.tips_title}</h2>
          <br />
          <img 
            src={consejitos.recommendations_url} 
            alt="Consejo" 
            className='imagenC'
          />
          <p>{consejitos.tips_description}</p>
        </div>

        {/* Columna de edición: Inputs para editar y botones */}
        <div className='tipEditColumn'>
          <input 
            onChange={cargaImageEdit} 
            type="file" 
            className='tipTitleInput' 
          />
          <input 
            className='tipTitleInput' 
            type="text" 
            onChange={cargaTitleEditTips} 
            placeholder="Editar título" 
          />
          <input 
            className='tipInput' 
            type="text" 
            onChange={cargaTipsDescripEdit} 
            placeholder="Editar descripción" 
          />
          <button 
            className='tipButton' 
            onClick={() => cargaEdicionTips(consejitos.id)}
          >
            Actualizar
          </button>
          <button 
            className='tipButton' 
            onClick={() => cargarDeleteTips(consejitos.id)}
          >
            Eliminar
          </button>
        </div>

      </li>
    ))}
  </ul>
</div>


        <h1 className='historial'>{t('registrosV')}</h1>
        <div >
        <ul className='ul'>
          {videoBlog.map((blogV) => (
            <li className='li' key={blogV.id}>
              <br />
              {blogV.video_url} <input onChange={cargaVideoEdit} type="file"  /> <br />
              {blogV.title} <input  className='editInp1' type="text" onChange={cargaTitleEdit} /> 
               <br /> {blogV.content} <input className='editInp' type="text" onChange={cargaContentEdit} />
              <br />
              <button className='botonHis' onClick={e=>cargaEdicionV(blogV.id)}>Actualizar</button>
              <button className='botonHis' onClick={e => cargarDeleteV(blogV.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormBlogEditor