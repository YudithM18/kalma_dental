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

export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, // Puedes usar un identificador único para evitar sobrescribir archivos
    Body: file,
    ContentType: file.type,
  
  };

  return s3.upload(params).promise();
};


export const PostWorkTeam = async (newMember) => {


  
  
  if (newMember.image) {
    try {
      const result = await uploadImageToS3(newMember.image);
      let imagenUrl = result.Location; 
      console.log(imagenUrl); 
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }

  newMember.workTeamURL = imagenUrl;

  const token = localStorage.getItem('token');

if (!token) {
  throw new Error('Token no encontrado en localStorage');
}


   try {
     const response = await fetch('http://127.0.0.1:8000/api/workteam/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify(newMember), 
     });
 
     if (!response.ok) {
       throw new Error('Error al guardar el Nuevo Miembro. Token inválido o expirado.');
     }
 
     const newMember = await response.json();
     console.log('Nuevo Miembro guardado:', newMember);
     return newMember; 
   } catch (error) {
     console.error('Error en la solicitud:', error);
     throw error; 
   }
};

export default { PostWorkTeam };