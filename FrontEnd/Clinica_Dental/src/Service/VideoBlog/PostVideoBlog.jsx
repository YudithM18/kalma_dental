import AWS from 'aws-sdk';


const S3_BUCKET = import.meta.env.VITE_S3_BUCKET;
const REGION = import.meta.env.VITE_AWS_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRET_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
});

// Función para generar un número aleatorio de al menos 8 dígitos
const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 99999999 (hasta 8 dígitos)
  return randomNumber.toString().padStart(8, '0'); // Asegura que el número tenga al menos 8 dígitos, añadiendo ceros a la izquierda si es necesario
};

// Función para subir la imagen o video a S3
export const uploadFileToS3 = async (file) => {
  const randomNumber = generateRandomNumber();
  const fileName = `${randomNumber}_${file.name}`; // Agregar el número aleatorio al nombre del archivo

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName, // Usar el nombre modificado con el número aleatorio
    Body: file,
    ContentType: file.type,
  };

  return s3.upload(params).promise();
};

// Función para guardar el video blog
export const PostVideoBlog = async (newContent) => {
  let fileUrl = ''; // Inicializar la variable para la URL del archivo

  // Verificar si se sube una imagen o un video y subirlo
  if (newContent.image || newContent.video) {
    try {
      const file = newContent.image || newContent.video;  // Determinar si es una imagen o un video
      const result = await uploadFileToS3(file); // Subir el archivo (imagen o video)
      fileUrl = result.Location; // Obtener la URL del archivo subido
      console.log(fileUrl);
    } catch (error) {
      console.error('Error al subir el archivo a S3:', error);
      throw new Error('No se pudo subir el archivo a S3');
    }
  }

  // Asignar la URL del archivo al contenido
  if (newContent.image) {
    newContent.image_url = fileUrl; // Asignar si es imagen
  } else if (newContent.video) {
    newContent.video_url = fileUrl; // Asignar si es video
  }

  // Obtener el token del almacenamiento local
  const token = JSON.parse(localStorage.getItem('userData'));
  if (!token) {
    throw new Error('Token no encontrado en localStorage');
  }

  try {
    // Hacer el POST para guardar el video blog
    const response = await fetch('http://127.0.0.1:8000/api/video_blog/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access}`, // Usar el token de autenticación
      },
      body: JSON.stringify(newContent), // Enviar el contenido del video
    });

    if (!response.ok) {
      throw new Error('Error al guardar el video. Token inválido o expirado.');
    }

    // Obtener la respuesta del servidor
    const newVideo = await response.json();
    console.log('Nuevo contenido guardado:', newVideo);
    return newVideo;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

export default { PostVideoBlog };
