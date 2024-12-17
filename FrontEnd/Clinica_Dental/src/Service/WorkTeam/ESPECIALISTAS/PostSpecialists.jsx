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

// Función para subir la imagen a S3 con nombre único
export const uploadImageToS3 = async (file) => {

  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, // Usar el nombre modificado con el número aleatorio
    Body: file,
    ContentType: file.type,
  };

  return s3.upload(params).promise();
};

// Función para guardar el especialista
const PostSpecialists = async (newSpecialists) => {
  let imagenUrl = null;

  console.log(newSpecialists.foto);

  if (newSpecialists.foto) {
    try {
      console.log('Archivo de imagen:', newSpecialists.foto);  // Verifica que el archivo se está pasando correctamente
      const result = await uploadImageToS3(newSpecialists.foto); // Subir la imagen con nombre único
      console.log("Resultado de S3:", result);  // Verifica la respuesta completa de S3
      imagenUrl = result.Location; // Obtener la URL de la imagen subida
      console.log("Soy la imagen del especialista", imagenUrl);  // Verifica que la URL se asignó correctamente
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }

  if (!imagenUrl) {
    throw new Error('La imagen no se subió correctamente.');
  }
  
  // Obtener el token desde localStorage
const token = JSON.parse(localStorage.getItem('userData'));
if (!token || !token.access) {
  throw new Error('Token no encontrado en localStorage o token inválido');
}

  newSpecialists.foto = imagenUrl;  // Asigna la URL de la imagen al objeto


  // Crear el objeto para el nuevo especialista
  const newSpecPost = {
    specialists_url: imagenUrl,
    full_name: newSpecialists.Fullname,
    id_qualification: newSpecialists.IdQualification,
    id_speciality: newSpecialists.IdSpeciality,
  };

  console.log(newSpecPost);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/especialistas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access}`,
      },
      body: JSON.stringify(newSpecPost), // Enviar el nuevo especialista
    });

    if (!response.ok) {
      throw new Error('Error al guardar el Nuevo Miembro. Token inválido o expirado.');
    }

    const newMember = await response.json(); // Obtener la respuesta del servidor
    console.log('Nuevo Miembro guardado:', newMember);
    return newMember;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

export default PostSpecialists;
