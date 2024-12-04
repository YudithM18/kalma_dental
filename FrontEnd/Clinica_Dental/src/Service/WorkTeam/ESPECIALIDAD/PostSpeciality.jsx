async function PostSpeciality(speciality_name) {

    
    try {
     
        const token = JSON.parse(localStorage.getItem('userData'));

        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }
   
        const DataSpeciality = { 
            speciality_name 
        };
        

        const response = await fetch("http://127.0.0.1:8000/api/especialidad/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify(DataSpeciality)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting especialidad:', error);
        throw error;
    }
}

export default PostSpeciality