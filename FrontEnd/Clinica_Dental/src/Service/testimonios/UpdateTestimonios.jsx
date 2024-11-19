//Actualizar completamente datos existentes en el servidor
async function UpdateTestimonios(Name, Date, Testimonials, id) {
    try {
     
        const DataTestimonials = { 
            Name,
            Date,
            Testimonials
        
        };
        const response = await fetch("http://127.0.0.1:8000/api/testimonios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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