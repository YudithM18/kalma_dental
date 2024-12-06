import React, { useState, useEffect } from 'react'
import '../../Styles/FormBlogEditor.css'
import Swal from 'sweetalert2';

import PostTips from '../../Service/Consejos/PostTips'
import GetTips from '../../Service/Consejos/GetTips'
import DeleteTips from '../../Service/Consejos/DeleteTips'
import UpdateTips from '../../Service/Consejos/UpdateTips'

import PostVideoBlog from '../../Service/VideoBlog/PostVideoBlog'
import GetVideoBlog from '../../Service/VideoBlog/GetVideoBlog'
import UpdateVideoBlog from '../../Service/VideoBlog/UpdateVideoBlog'  
import DeleteVideoBlog from '../../Service/VideoBlog/DeleteVideoBlog'


function FormBlogEditor() {

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

  
  function cargaImagen(event) {
      setImage(event.target.files[0]);
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
    Swal.fire('¡Error!', 'Por favor, ingrese todos los datos', 'error');
    return;
  }

  const newTip = {
    image: recommendations_url,
    title: tips_title,
    content: tips_description
  };

  const savedTip = await PostTips.PostTips(newTip);

  setConsejos([...consejos, savedTip]);

  // Mostrar alerta de éxito
  Swal.fire('¡Éxito!', 'El consejo ha sido agregado correctamente.', 'success');
};


////////////////////CONSEJOS

function cargaTitleEdit(event) {
  setTitleEdit(event.target.value); 
}

function cargaTipsDescripEdit(event) {
  setDescripEdit(event.target.value); 
}

function cargaImageEdit(event) {
  setImageEdit(event.target.value); 
}

async function cargarDeleteTips(id) {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'Este cambio no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    await DeleteTips(id);
    const valorEncontrarC = consejos.filter(consejos => consejos.id !== id);
    setConsejos([...valorEncontrarC]);

    // Mostrar alerta de éxito
    Swal.fire('¡Eliminado!', 'El consejo ha sido eliminado correctamente.', 'success');
  }
}



const cargaEdicionTips = async (id) => {
  // Encontrar el consejo original
  const ConsejosOriginal = consejos.find(consejos => consejos.id === id);
  if (!ConsejosOriginal) {
    console.log('Consejo no encontrado');
    return; // Si no se encuentra el consejo, salimos de la función
  }

  // Comprobamos si los valores para editar están definidos
  console.log('Datos a editar:', {
    recommendations_url_edit,
    tips_title_edit,
    tipsdescription_edit,
  });

  // Nuevos datos para actualizar
  const nuevosDatos = {
    recommendations_url: recommendations_url_edit || ConsejosOriginal.recommendations_url, 
    tips_title: tips_title_edit || ConsejosOriginal.tips_title,  
    tips_description: tipsdescription_edit || ConsejosOriginal.tips_description, 
  };

  // Mostrar los nuevos datos que se enviarán
  console.log('Nuevos datos:', nuevosDatos);

  // Llamada a la API o función para actualizar
  try {
    const result = await UpdateTips(id, nuevosDatos.recommendations_url, nuevosDatos.tips_title, nuevosDatos.tips_description);
    console.log('Resultado de la actualización:', result);
    
    // Comprobamos si la actualización fue exitosa
    if (result && result.success) {
      // Actualizar el estado con los nuevos datos
      const ConsejosActualizados = consejos.map(consejos =>
        consejos.id === id ? { ...consejos, ...nuevosDatos } : consejos
      );
      setConsejos(ConsejosActualizados);

      // Mostrar alerta de éxito
      Swal.fire('¡Éxito!', 'El consejo ha sido actualizado correctamente.', 'success');
    } else {
      // Si no es exitoso, mostrar un mensaje de error
      Swal.fire('Error', 'Hubo un problema al actualizar el consejo.', 'error');
    }
  } catch (error) {
    // En caso de error, mostrar el error
    console.error('Error al actualizar los datos:', error);
    Swal.fire('Error', 'Hubo un problema al actualizar el consejo.', 'error');
  }

  // Limpiar los campos después de actualizar
  setTitle('');
  setTips('');
  setImage('');
};




//////////////VIDEO

function cargaVideo(event) {
  setVideo(event.target.file[0]);
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
    Swal.fire('¡Error!', 'Por favor, ingrese todos los datos', 'error');
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
  Swal.fire('¡Éxito!', 'El contenido de video ha sido agregado correctamente.', 'success');
};



function cargaVideoEdit(event) {
  setVideoEdit(event.target.value); 
}

function cargaTitleEdit(event) {
  setTituloEdit(event.target.value); 
}

function cargaContentEdit(event) {
  setDescriptionEdit(event.target.value); 
}

async function cargarDeleteV(id) {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'Este cambio no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    await DeleteVideoBlog(id);
    const valorEncontrar = videoBlog.filter(videoBlog => videoBlog.id !== id);
    setVideoBlog([...valorEncontrar]);

    // Mostrar alerta de éxito
    Swal.fire('¡Eliminado!', 'El contenido de video ha sido eliminado correctamente.', 'success');
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
  Swal.fire('¡Éxito!', 'El contenido de video ha sido actualizado correctamente.', 'success');

  setVideo('');
  setTitulo('');
  setDescription('');
};



  return (
    <div>
      <div className='contenedor_Tips'>
      <h1 className='titulocontenedor'>Add a new tips</h1>
      <form>
        <label className='subtitulo'>Tips Image:</label>
        <input className='input' type="file"  accept='image/*' onChange={cargaImagen}/>
        <br/>
        <label className='subtitulo'>Tips Title:</label>
        <input className='input' placeholder = 'Añadir titulo ' type="text" value={tips_title}  onChange={cargaTitulo}/>
        <br/>
        <label className='subtitulo'>Tips Content:</label>
        <textarea className='input' placeholder = 'Añadir consejo' value={tips_description} onChange={cargaContenido}/>
        <br/>
        <button className='btnAgregarT' onClick={cargaNewTip}>Add</button>
      </form>
      </div>

      <div className='contenedorVideoBlog'>
      <h1 className='titulocontenedor'>Add New Content</h1>
      <form>
        <label className='subtitulo'> Video:</label>
        <input className='input2' type="file" value={video_url} onChange={cargaVideo}/>
        <br/>
        <label className='subtitulo'>Title:</label>
        <input className='input2' placeholder = 'Añadir Titulo'  type="text" value={title} onChange={cargatituloV}/>
        <br/>
        <label className='subtitulo'>Content:</label>
        <textarea className='input2' placeholder = 'Añadir contenido' value={content} onChange={cargaContenidoV}/>
        <button className='btnAgregarV' onClick={cargarNewContent}>Add</button>
      </form>
      </div>


      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>Registros de Tips</h1>
        <div className='conteiner-datos'>
        <ul className='ul'>
          {consejos.map((consejitos) => (
            <li className='li' key={consejitos.id}>
              <h2>{consejitos.tips_title}</h2>
              <br />
              <img src={consejitos.recommendations_url} alt="Consejo"className='imagenC'/>
              <input onChange={cargaImageEdit} type="file"  /> <br />
              {consejitos.tips_title} <input  className='editInp1' type="text" onChange={cargaTitleEdit} /> 
               <br /> {consejitos.tips_description} <input className='editInp' type="text" onChange={cargaTipsDescripEdit} />
              <br />
              <button className='botonHis' onClick={e=>cargaEdicionTips(consejitos.id)}>Actualizar</button>
              <button className='botonHis' onClick={e => cargarDeleteTips(consejitos.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>

        <h1 className='historial'>Registros de Videos</h1>
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