import React, { useState } from 'react'
import '../Styles/FormBlogEditor.css'
import PostTips from '../Service/Consejos/PostTips'


import PostVideoBlog from '../Service/VideoBlog/PostVideoBlog'



function FormBlogEditor() {

  const [tips_title, setTitle] = useState('');
  const [tips_description, setTips] = useState('');
  const [recommendations_url , setImage] = useState();

  const [consejos, setConsejos] = useState([])
//////////////////////////////////////////////////
  const [video_url, setVideo] = useState('');
  const [title, setTitulo] = useState('');
  const [content, setDescription] = useState('');

  const [videoBlog, setVideoBlog] = useState([]);

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
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Verificar que todos los campos estén llenos
  if (recommendations_url  === '' || tips_title === '' || tips_description  === '') {
    console.log('Por favor, ingrese todos los datos');
    return;
  }

  // Crear el objeto JSON con los datos
  const newTip = {
    image: recommendations_url ,  // URL de la imagen (puedes subirla si es necesario)
    title: tips_title,
    content: tips_description
  };


  

console.log('Nuevo consejo:', newTip);


const savedTip = await PostTips.PostTips(newTip);

  // Agregar el nuevo consejo al estado
  setConsejos([...consejos, savedTip]);
};

function cargaVideo(event) {
  setVideo(event.target.value);
}

function cargatituloV(event) {
  setTitulo(event.target.value);
}

function cargaContenidoV(event) {
  setDescription (event.target.value);
}

 // Función para agregar un nuevo consejo
 const cargarNewContent = async (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Verificar que todos los campos estén llenos
  if (video_url === '' || title === '' || content === '') {
    console.log('Por favor, ingrese todos los datos');
    return;
  }

  // Crear el objeto JSON con los datos
  const newContent = {
    video_url: video_url,  // URL de la imagen (puedes subirla si es necesario)
    title: title,
    content: content
  };

  console.log('Nuevo contenido:', newContent);

  // Enviar los datos a tu API o procesarlos
  const savedContent = await PostVideoBlog(newContent); // Asumiendo que PostVideoBlog maneja el objeto JSON

  // Agregar el nuevo consejo al estado
  setVideoBlog([...videoBlog, savedContent]);
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
        <label className='subtitulo'> Image:</label>
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
    </div>
  )
}

export default FormBlogEditor