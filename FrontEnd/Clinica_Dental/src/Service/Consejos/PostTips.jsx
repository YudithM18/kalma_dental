import AWS from 'aws-sdk';

export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, // Puedes usar un identificador único para evitar sobrescribir archivos
    Body: file,
    ContentType: file.type,
  
  };

  return s3.upload(params).promise();
};


export const PostTips = async (newtip) => {


  
  
  if (newtip.image) {
    try {
      const result = await uploadImageToS3(newtip.image);
      let imagenUrl = result.Location; 
      console.log(imagenUrl); 
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }

  newtip.recommendationURL = imagenUrl;

  const token = localStorage.getItem('token');

if (!token) {
  throw new Error('Token no encontrado en localStorage');
}


   try {
     const response = await fetch('http://127.0.0.1:8000/api/tips/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify(newtip), 
     });
 
     if (!response.ok) {
       throw new Error('Error al guardar el tip. Token inválido o expirado.');
     }
 
     const newtip = await response.json();
     console.log('Nuevo tip guardado:', newtip);
     return newtip; 
   } catch (error) {
     console.error('Error en la solicitud:', error);
     throw error; 
   }
};

export default { PostTips };















