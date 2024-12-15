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

// Función para subir la imagen a S3
export const uploadImageToS3 = async (file) => {
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

// Función para guardar los servicios
export const PostServices = async (newServices) => {
  let imagenUrl = '';

  // Subir la imagen si existe
  if (newServices.image) {
    try {
      const result = await uploadImageToS3(newServices.image);
      imagenUrl = result.Location;
      console.log(imagenUrl);
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }

  newServices.services_url = imagenUrl;

  const token = JSON.parse(localStorage.getItem('userData'));
  if (!token) {
    throw new Error('Token no encontrado en localStorage');
  }

  // Crear el objeto para el servicio
  const newServPost = {
    services_url: imagenUrl,
    services_name: newServices.Name,
    description: newServices.Treatment,
    id_specialists: newServices.Specialist,
  };

  console.log(newServPost);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/servicios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access}`,
      },
      body: JSON.stringify(newServPost),
    });

    const newServ = await response.json();
    console.log('Nuevo Servicio guardado:', newServ);
    return newServ;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

export default { PostServices };
