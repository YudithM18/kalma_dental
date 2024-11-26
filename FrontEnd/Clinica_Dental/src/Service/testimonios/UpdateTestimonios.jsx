//Actualizar completamente datos existentes en el servidor
async function UpdateTestimonios(id, fullname, date, testimony) {

    try {
        const token = JSON.parse(localStorage.getItem('userData'));

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
    
     
        const DataTestimonials = { 
            fullname,
            date,
            testimony
        };

        
        console.log("servicio",DataTestimonials);
        const response = await fetch(`http://127.0.0.1:8000/api/testimonios/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify(DataTestimonials)
        });
     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateTestimonios