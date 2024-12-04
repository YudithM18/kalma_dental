//Actualizar completamente datos existentes en el servidor
async function UpdateQualification(id, qualification_name) {

    try {
        const token = JSON.parse(localStorage.getItem('userData'));

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
    
     
        const DataQualification = { 
            qualification_name
        };

            const response = await fetch(`http://127.0.0.1:8000/api/titulacion/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify(DataQualification)
        });
     
        return await response.json();
    } catch (error) {
        console.error('Error update qualification:', error);
        throw error;
    }
}

export default UpdateQualification