import AWS from 'aws-sdk';

// Variables de configuración para AWS
const S3_BUCKET = import.meta.env.VITE_S3_BUCKET;
const REGION = import.meta.env.VITE_AWS_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRET_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

// Configuración de S3
const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
});


// Función para subir la imagen a S3
export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, // Usar el nombre modificado con el número aleatorio
    Body: file,
    ContentType: file.type,
  };

  return s3.upload(params).promise();
};

// Función para guardar el "tip" (con la imagen subida a S3)
export const PostTips = async (newTip) => {
  try {
    let imagenUrl = null; // Inicializamos la variable imagenUrl

    // Subir la imagen si existe
    if (newTip.image) {
      try {
        const result = await uploadImageToS3(newTip.image);
        imagenUrl = result.Location;  // Asignar la URL de la imagen subida a S3
        console.log('Imagen subida a S3:', imagenUrl);
      } catch (error) {
        console.error('Error al subir la imagen a S3:', error);
        throw new Error('No se pudo subir la imagen a S3');
      }
    }

    // Obtener el token desde localStorage
    const token = JSON.parse(localStorage.getItem('userData'));
    if (!token || !token.access) {
      throw new Error('Token no encontrado en localStorage o token inválido');
    }

    // Crear el objeto para el "tip"
    const tipData = {
      tips_title: newTip.title,
      tips_description: newTip.content,
    };

    // Si la imagen fue subida, agregar la URL de la imagen
    if (imagenUrl) {
      tipData.recommendations_url = imagenUrl;
    }

    console.log('Datos del nuevo tip:', tipData);

    // Realizar la solicitud POST a la API
    const response = await fetch('http://127.0.0.1:8000/api/consejos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access}`,  // Asegúrate de enviar el token correctamente
      },
      body: JSON.stringify(tipData),  // Enviar los datos del tip
    });

    // Manejo de error en la respuesta
    if (!response.ok) {
      throw new Error('Error al guardar el tip. Token inválido o expirado.');
    }

    // Obtener la respuesta JSON y devolverla
    const savedTip = await response.json();
    console.log('Nuevo tip guardado:', savedTip);
    return savedTip;

  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;  // Lanzar el error para que pueda ser manejado en el lugar donde se llame a esta función
  }
};

export default { PostTips };
















